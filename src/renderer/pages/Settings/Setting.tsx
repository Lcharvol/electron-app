import React from 'react';
import styled from 'styled-components';
import { Typography, Divider } from '@/UI';
import { SettingType } from './types';

const Container = styled.div`
  padding: 1.5rem 1.3rem;
`;
const LeftSide = styled.div`
  & > * {
    padding-top: 0.5rem;
  }
`;
const RightSide = styled.div``;

interface SettingProps extends SettingType {
  isLast?: boolean;
}
const Setting = ({ label, description, action, isLast }: SettingProps) => {
  return (
    <>
      <Container>
        <LeftSide>
          <Typography variant="subtitle2">{label}</Typography>
          {description && (
            <Typography variant="subtitle1" weight="light">
              {description}
            </Typography>
          )}
        </LeftSide>
        {action && <RightSide>{action}</RightSide>}
      </Container>
      {!isLast && <Divider />}
    </>
  );
};

export default Setting;
