import MuiDialog, { DialogProps } from '@mui/material/Dialog';
import styled from 'styled-components';
import DialogTitle from '@mui/material/DialogTitle';

const BlurryDialog = styled(MuiDialog)<DialogProps>(() => ({
  backdropFilter: 'blur(3px)',
}));

const Dialog = ({
  open,
  onClose,
  children,
  header,
  content,
  footer,
}: DialogProps) => {
  return (
    <BlurryDialog open={open} onClose={onClose}>
      {header && <DialogTitle>{header}</DialogTitle>}
      {children}
    </BlurryDialog>
  );
};

export default Dialog;
