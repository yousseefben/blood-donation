import React, {useState, useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

type Params = {userId?: string};
// type ScreenProps = { language: string };
// NavigationStackScreenProps<Params, ScreenProps>
import Container from '_atoms/Container/Container';
import CreateRequestContainer from './CreateRequestContainer';
import {KeyboardAvoidingView, Platform} from 'react-native';

// openSettings().catch(() => console.warn('cannot open settings'));

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

const CreateRequest = ({navigation}: StackNavigationProp<Params>) => {
  return (
    <Container title="Find donor" subtitle="dfs">
      {/* <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}> */}
      <CreateRequestContainer />
      {/* </KeyboardAvoidingView> */}
    </Container>
  );
};

export default CreateRequest;
