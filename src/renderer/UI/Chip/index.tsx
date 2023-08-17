import MuiChip, { ChipProps as MuiChipProps } from '@mui/material/Chip';

import React, { ReactNode } from 'react';

function Chip({ icon, label, variant, kind }: MuiChipProps) {
  return <MuiChip icon={icon} label={label} variant={variant} kind={kind} />;
}

export default Chip;
