import React, {useState, useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

type Params = {userId?: string};
// type ScreenProps = { language: string };
// NavigationStackScreenProps<Params, ScreenProps>
import Container from '_atoms/Container/Container';
import {KeyboardAvoidingView, Platform} from 'react-native';
import Text from '_atoms/Text/Text';
import Box from '_atoms/Box/Box';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Button from '_atoms/Button/Button';
import {useUser} from '_context/userContext';
import LoginComponent from '_organisms/LoginComponent';
// openSettings().catch(() => console.warn('cannot open settings'));

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

const Login = ({navigation}: StackNavigationProp<Params>) => {
  const {state, login} = useUser();

  console.log(state);

  return (
    // <SafeAreaView>
    <LoginComponent login={login} />
    // </SafeAreaView>
  );
};

export default Login;
