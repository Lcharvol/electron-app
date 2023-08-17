import React from 'react';
import { Card, PageHeader, Tabs } from '@/UI';
import { getSettingsByKind } from './utils';
import { SETTINGS_KINDS } from './constants';
import Setting from './Setting';
import { SettingType } from './types';

const renderSettings = (settings: SettingType[]) => (
  <>
    {settings.map(({ label, description, action }: SettingType, index) => (
      <Setting
        key={index}
        label={label}
        description={description}
        action={action}
        isLast={index === settings?.length - 1}
      />
    ))}
  </>
);

const items = [
  {
    label: 'General',
    component: () => renderSettings(getSettingsByKind(SETTINGS_KINDS.GENERAL)),
  },
  {
    label: 'Help',
    component: () => renderSettings(getSettingsByKind(SETTINGS_KINDS.HELP)),
  },
];

const Settings = () => {
  return (
    <>
      <PageHeader title="Settings" subTitle="Update all your settings" />
      <Card variant="noPadding">
        <Tabs items={items} />
      </Card>
    </>
  );
};

export default Settings;
