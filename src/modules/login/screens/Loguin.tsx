import React from 'react';
import { View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import { theme } from '../../../shared/themes/theme';
import { useLoguin } from '../hooks/useLoguin';
import { ContainerLoguin, Imagelogo } from '../styles/login.style';

const Loguin = () => {
  const {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
  } = useLoguin();
  return (
    <View>
      <ContainerLoguin>
        <Imagelogo source={require('../../../assets/images/logo.png')} resizeMode="center" />
        <Input
          value={email}
          errorMessage={errorMessage}
          placeholder="Email:"
          title="Email"
          customMargin="0px 0px 8px 0px"
          onChange={handleOnChangeEmail}
        />
        <Input
          errorMessage={errorMessage}
          value={password}
          placeholder="Senha:"
          title="Senha"
          secureTextEntry
          onChange={handleOnChangePassword}
        />
        <Button
          loading={loading}
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
