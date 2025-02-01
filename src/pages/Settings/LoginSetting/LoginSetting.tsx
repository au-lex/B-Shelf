// Login & Security Component
import { Shield,  Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
export const LoginSecurity: React.FC = () => {


// Types
interface SecuritySetting {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [securitySettings, setSecuritySettings] = useState<SecuritySetting[]>([
      {
        id: '2fa',
        title: 'Two-Factor Authentication',
        description: 'Add an extra layer of security to your account',
        enabled: false,
      },
      {
        id: 'login-alerts',
        title: 'Login Alerts',
        description: 'Get notified of unusual login attempts',
        enabled: true,
      },
    ]);
  
    const toggleSetting = (id: string) => {
      setSecuritySettings(settings =>
        settings.map(setting =>
          setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
        )
      );
    };
  
    const Toggle: React.FC<{ enabled: boolean; onChange: () => void }> = ({ enabled, onChange }) => (
        <button
          onClick={onChange}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            enabled ? 'bg-base' : 'bg-gray-200'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${
              enabled ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      );

    return (
      <div className="w-full  rounded-lg ">
        <div className="">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Login & Security</h2>
          </div>
  
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Change Password</h3>
              <div className="space-y-3">
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Current Password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-full px-4 py-2 text-white bg-base rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Update Password
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Security Settings</h3>
              {securitySettings.map((setting) => (
                <div key={setting.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{setting.title}</p>
                    <p className="text-sm text-gray-500">{setting.description}</p>
                  </div>
                  <Toggle
                    enabled={setting.enabled}
                    onChange={() => toggleSetting(setting.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };