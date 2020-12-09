import React from 'react';

import {StyledContainer, StyledText} from './styles';
import CollectItem from '../../components/CollectItem';

export default function Collect() {
  return (
    <StyledContainer>
      <StyledText>Collect</StyledText>
      <CollectItem />
    </StyledContainer>
  );
}
