import React from 'react';

import {StyledContainer, StyledText} from './styles';
import CollectItem from '../../components/CollectItem';

export default function Collect() {
  return (
    <StyledContainer>
      <StyledText>Collect</StyledText>

      <CollectItem
        collectName="ONG Coleta"
        description="Somos uma ONG que recebe materiais e faz sua redistribuição e venda para outros lugares, usando todo o lucro para ajudar animais de rua"
        items="Baterias, pilhas, metais etc"
        place="Rua Paula Bueno 877 - Taquaral - Campinas"
      />
    </StyledContainer>
  );
}
