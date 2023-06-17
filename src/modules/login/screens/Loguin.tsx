import React from 'react';
import { Text, View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
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
        <Button title="Entrar" onPress={handleOnPress} margin="8px" />
      </ContainerLoguin>
    </View>
  );
};

export default Loguin;
