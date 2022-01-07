import React, {useState, useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

type Params = {userId?: string};
// type ScreenProps = { language: string };
// NavigationStackScreenProps<Params, ScreenProps>
import Container from '_atoms/Container/Container';
import CreateDonorProfileContainer from './CreateDonorProfileContainer';
import AllRequestsComponent from '_organisms/AllRequestsComponent';
import Text from '_atoms/Text/Text';

// openSettings().catch(() => console.warn('cannot open settings'));

const SplashScreen = () => {
  // const intl = useIntl();
  return (
    <>
      {/* <Container> */}
      <Text>Splash screen</Text>
      {/* </Container> */}
    </>
  );
};

export default SplashScreen;
