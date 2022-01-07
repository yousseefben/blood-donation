import React, {useState, useEffect} from 'react';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

// type ScreenProps = { language: string };
// NavigationStackScreenProps<Params, ScreenProps>
import Container from '_atoms/Container/Container';
import CreateDonorProfileContainer from './CreateDonorProfileContainer';
import AllRequestsComponent from '_organisms/AllRequestsComponent';
import {useRequestsQuery} from '../../generated/graphql';
import {useUser} from '_context/userContext';
import {RootStackParamList} from 'src/navigation/navigationUtils';
import {RouteProp} from '@react-navigation/native';

// openSettings().catch(() => console.warn('cannot open settings'));

// export type Props = StackScreenProps<{isRe}, 'Requests'>;

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Requests'>;

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Requests'
>;
type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

const AllRequestsScence = ({route}: Props) => {
  console.log(route.params?.isRequests);
  return (
    <>
      <Container>
        <AllRequestsComponent isRequests />
      </Container>
    </>
  );
};

export default AllRequestsScence;
