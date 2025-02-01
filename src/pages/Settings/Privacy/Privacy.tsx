import React, { useState } from 'react';
import { Lock } from 'lucide-react';

// Define Toggle component as a proper React functional component
interface ToggleProps {
  enabled: boolean;
  onChange: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ enabled, onChange }) => {
  return (
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
};

// Main PrivacySettings component
const PrivacySettings = () => {
  const [privacySettings, setPrivacySettings] = useState([
    {
      id: 'profile-visibility',
      title: 'Profile Visibility',
      description: 'Make your profile visible to other users',
      enabled: true,
    },
    {
      id: 'activity-tracking',
      title: 'Activity Tracking',
      description: 'Allow us to track your activity for better recommendations',
      enabled: true,
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing',
      description: 'Share your data with our trusted partners',
      enabled: false,
    },
  ]);

const togglePrivacySetting = (id: string) => {
    setPrivacySettings((settings) =>
        settings.map((setting) =>
            setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
        )
    );
};

  return (
    <div className="w-full">
      <div className="">
        <div className="flex items-center gap-2 mb-6">
          <Lock className="w-5 h-5" />
          <h2 className="text-xl font-semibold">Privacy Settings</h2>
        </div>

        <div className="space-y-6">
          {privacySettings.map((setting) => (
            <div key={setting.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{setting.title}</p>
                <p className="text-sm text-gray-500">{setting.description}</p>
              </div>
              <Toggle
                enabled={setting.enabled}
                onChange={() => togglePrivacySetting(setting.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacySettings;