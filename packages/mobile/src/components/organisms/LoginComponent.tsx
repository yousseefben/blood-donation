import React from 'react';
import {Dimensions, Image} from 'react-native';
import Box from '_atoms/Box/Box';
import Button from '_atoms/Button/Button';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

type Props = {
  login: () => void;
};
const {width, height} = Dimensions.get('window');

const LoginComponent = ({login}: Props) => {
  return (
    <Box height="100%" bg="primary">
      <Box
        bg="#FFF9"
        flexGrow={1}
        borderBottomLeftRadius={50}
        borderBottomRightRadius={50}>
        <Image
          source={require('_assets/splash.png')}
          style={{
            height: '100%',
            resizeMode: 'contain',
            position: 'absolute',
            left: width / 2 - 85.5,
            top: 15,
          }}
        />
      </Box>
      <Box height="100px">
        <GoogleSigninButton onPress={login} />
      </Box>
    </Box>
  );
};

export default LoginComponent;
