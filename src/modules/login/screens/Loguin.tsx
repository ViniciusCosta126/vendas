import React from 'react';
import { View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import { theme } from '../../../shared/themes/theme';
import { ContainerLoguin } from '../styles/login.style';

const Loguin = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };
  return (
    <View>
      <ContainerLoguin>
        <Input placeholder="Email:" title="Email" />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          title="Entrar"
          onPress={handleOnPress}
          margin="8px"
        />
      </ContainerLoguin>
    </View>
  );
};

export default Loguin;
