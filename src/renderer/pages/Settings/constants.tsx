import { IconButton, Autocomplete, Box } from '@/UI';
import { mdiCogOutline } from '@mdi/js';
import Language from './Inputs/Language';
import Mode from './Inputs/Mode';

export const SETTINGS_KINDS = {
  GENERAL: 'GENERAL',
  RA: 'RA',
  HELP: 'HELP',
};

export const settingsByKind = {
  [SETTINGS_KINDS.GENERAL]: [
    {
      label: 'Display language',
      description: 'Set the language displayed ',
      action: Language,
    },
    {
      label: 'Mode',
      description: 'Select a mode',
      action: Mode,
    },
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
