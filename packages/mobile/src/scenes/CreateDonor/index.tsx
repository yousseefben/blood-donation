import React, {useState, useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

type Params = {userId?: string};
// type ScreenProps = { language: string };
// NavigationStackScreenProps<Params, ScreenProps>
import Container from '_atoms/Container/Container';
import CreateDonorProfileContainer from './CreateDonorProfileContainer';

// openSettings().catch(() => console.warn('cannot open settings'));

const CreateDonorProfile = ({navigation}: StackNavigationProp<Params>) => {
  return (
    <>
      <Container title="Create donor profile" subtitle="dfs">
        <CreateDonorProfileContainer />
      </Container>
    </>
  );
};

export default CreateDonorProfile;
