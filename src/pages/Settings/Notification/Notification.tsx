import React, { useState } from 'react';
import {  Bell } from 'lucide-react';

export const NotificationSettings: React.FC = () => {

    interface NotificationPreference {
        id: string;
        title: string;
        description: string;
        enabled: boolean;
      }

    const [preferences, setPreferences] = useState<NotificationPreference[]>([
      {
        id: 'email',
        title: 'Email Notifications',
        description: 'Receive updates via email',
        enabled: true,
      },
      {
        id: 'push',
        title: 'Push Notifications',
        description: 'Receive updates on your device',
        enabled: true,
      },
      {
        id: 'marketing',
        title: 'Marketing Communications',
        description: 'Receive marketing and promotional materials',
        enabled: false,
      },
    ]);
  

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

    const togglePreference = (id: string) => {
      setPreferences(prefs =>
        prefs.map(pref =>
          pref.id === id ? { ...pref, enabled: !pref.enabled } : pref
        )
      );
    };
  
    return (
      <div className="w-full  mx-auto ">
        <div className="">
          <div className="flex items-center gap-2 mb-6">
            <Bell className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Notification Settings</h2>
          </div>
  
          <div className="space-y-6">
            {preferences.map((preference) => (
              <div key={preference.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{preference.title}</p>
                  <p className="text-sm text-gray-500">{preference.description}</p>
                </div>
                <Toggle
                  enabled={preference.enabled}
                  onChange={() => togglePreference(preference.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
