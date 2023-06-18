import React from 'react';
import { Text, View } from 'react-native';

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
        <Text>Loguin</Text>
        <Input />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          title="Entrar"
          onPress={handleOnPress}
          margin="8px"
          loading
        />
      </ContainerLoguin>
    </View>
  );
};

export default Loguin;
