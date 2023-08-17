import MuiDialog, { DialogProps } from '@mui/material/Dialog';
import styled from 'styled-components';
import DialogTitle from '@mui/material/DialogTitle';

const BlurryDialog = styled(MuiDialog)<DialogProps>(() => ({
  backdropFilter: 'blur(3px)',
}));

function Dialog({
  open,
  onClose,
  children,
  maxWidth,
  header,
  footer,
  fullWidth,
}: DialogProps) {
  return (
    <BlurryDialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
    >
      {header && <DialogTitle>{header}</DialogTitle>}
      {children}
    </BlurryDialog>
  );
}

export default Dialog;
