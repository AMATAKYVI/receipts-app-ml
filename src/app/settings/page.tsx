import SettingsBoard from '@/components/settingsboard/SettingsBoard';
import Sidebar from '@/components/sidebar/Sidebar';
import React, { FC } from 'react';

interface SettingsProps {}

const Settings: FC<SettingsProps> = ({}) => {
  return (
    <div className="block sm:flex">
      <Sidebar />
      <SettingsBoard />
    </div>
  );
};

export default Settings;
