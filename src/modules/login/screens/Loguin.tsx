import React from 'react';
import { View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import { Icon } from '../../../shared/components/icon/Icon';
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
        <Icon name="home3" size={30} />
        <Input placeholder="Email:" title="Email" customMargin="0px 0px 8px 0px" />
        <Input placeholder="Senha:" title="Senha" secureTextEntry />
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
