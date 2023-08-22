import MuiCard, { CardProps as MuiCardProps } from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { ReactNode } from 'react';
import CardMedia from '@mui/material/CardMedia';
import Divider from '../Divider';

export interface CardProps {
  children?: ReactNode;
  header?: ReactNode;
  actions?: ReactNode;
  hasHeaderDivider?: boolean;
  variant: MuiCardProps['variant'];
  imgUrl?: string;
  imgHeight?: number;
}

const Card = ({
  children,
  header,
  hasHeaderDivider,
  actions,
  variant,
  imgUrl,
  imgHeight,
}: CardProps) => {
  return (
    <MuiCard variant={variant}>
      {header}
      {imgUrl && (
        <CardMedia
          image={imgUrl}
          sx={{ height: imgHeight || 140 }}
          component="img"
        />
      )}
      {hasHeaderDivider && <Divider />}
      <CardContent>{children}</CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </MuiCard>
  );
};

export default Card;
