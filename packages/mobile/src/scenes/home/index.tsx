import React, {useEffect, useRef, useState} from 'react';
import {View, Image, Dimensions, StyleSheet} from 'react-native';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import Button from '_atoms/Button/Button';
import Box from '_atoms/Box/Box';
import Text from '_atoms/Text/Text';
import BecomeDonorCard from '_molecules/BecomeDonorCard';
import {ScrollView} from 'react-native-gesture-handler';
// type ScreenProps = { language: string };
// NavigationStackScreenProps<Params, ScreenProps>
import CardHomeSection from '_organisms/CardHomeSection';
import {useUser} from '_context/userContext';
import {useMeQuery, useRequestsQuery} from '../../generated/graphql';
import {Modalize} from 'react-native-modalize';
import DonationNeedContainer from '../../containers/DonationNeedContainer';
import {useNavigation} from '@react-navigation/native';

type Params = {userId?: string};

const HomeScreen = ({navigation: {navigate}}: StackScreenProps<Params>) => {
  const {logout, state} = useUser();
  const {user} = state || {};
  console.log('current', user);
  const {latitude, longitude} = state.currentLocation || {};
  const {data, error} = useRequestsQuery({
    // variables: {sort: 'created_at:DESC'},
  });
  console.log('data profile', data);
  console.log('error', error);
  const modalizeRef = useRef<Modalize>(null);
  modalizeRef.current?.open();

  return (
    <Box>
      <ScrollView style={styles.scrollview}>
        <Box bg="#FFF" pb="20px">
          <Image source={require('_assets/bg_home.png')} style={styles.image} />
          <Text
            ml="20px"
            mt="60px"
            mb="20px"
            fontSize="30px"
            fontWeight="bold"
            color="#FFF">
            Home
          </Text>
          {!user?.profile && (
            <Box mx="30px">
              <BecomeDonorCard onPress={() => navigate('CreateDonor')} />
            </Box>
          )}
        </Box>
        <Button text="sugnout" onPress={logout} />
        <CardHomeSection />
        <DonationNeedContainer
          onAction={() => navigate('Requests', {isRequests: true})}
          hasAction
          isRequests
        />

        {/* <Button text="Go details" onPress={() => setState(!test)} /> */}
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    // height: 150,
    // resizeMode: 'contain',
    position: 'absolute',
    left: -390,
    top: -290,
  },
  scrollview: {
    backgroundColor: 'transparent',
  },
});

export default HomeScreen;
