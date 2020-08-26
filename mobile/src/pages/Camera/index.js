import React from 'react';

import {StyledContainer, StyledText, TopMenuContainer} from './styles';
import Menu from '../../components/Menu';

export default function Camera() {
  return (
    <>
      <TopMenuContainer>
        <Menu />
      </TopMenuContainer>
      <StyledContainer>
        <StyledText>Camera</StyledText>
      </StyledContainer>
    </>
  );
}
