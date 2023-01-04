import React from 'react';
import styled from 'styled-components';
import Typography from '../Typography';

interface PageHeaderProps {
  title?: string;
  subTitle?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;
const PageHeader = ({ title, subTitle }: PageHeaderProps) => {
  return (
    <Container>
      {title && <Typography variant="h6">{title}</Typography>}
      {subTitle && (
        <Typography variant="subtitle1" weight="light">
          {subTitle}
        </Typography>
      )}
    </Container>
  );
};

export default PageHeader;
