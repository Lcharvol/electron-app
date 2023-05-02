import { IconButton } from '@/UI';
import { mdiCogOutline } from '@mdi/js';

export const SETTINGS_KINDS = {
  GENERAL: 'GENERAL',
  RA: 'RA',
  HELP: 'HELP',
};

export const settingsByKind = {
  [SETTINGS_KINDS.GENERAL]: [
    { label: 'Display language', description: 'Set the language displayed ' },
    { label: 'Mode', description: 'Select a mode' },
  ],
  [SETTINGS_KINDS.RA]: [
    { label: 'Display language', description: 'Set the language displayed ' },
    { label: 'Mode', description: 'Select a mode' },
  ],
  [SETTINGS_KINDS.HELP]: [
    {
      label: 'Support',
      description: 'If you have a problem, get help',
      action: () => <IconButton iconPath={mdiCogOutline} />,
    },
  ],
};
