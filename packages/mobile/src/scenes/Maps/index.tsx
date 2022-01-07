import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Button from '_atoms/Button/Button';
import Box from '_atoms/Box/Box';
import Text from '_atoms/Text/Text';
import BecomeDonorCard from '_molecules/BecomeDonorCard';
import {BloodDonorRequestCardProps} from '_molecules/BloodDonorRequestCard';
import CardSection from '_molecules/CardSection';
import DonationNeedSection from '_organisms/DonationNeedSection';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';

type Params = {userId?: string};
// type ScreenProps = { language: string };
// NavigationStackScreenProps<Params, ScreenProps>
import CardHomeSection from '_organisms/CardHomeSection';
import MapsComponent from '_organisms/MapsComponent';
import Container from '_atoms/Container/Container';

const MapsScreen = ({route, navigation}: StackNavigationProp<Params>) => {
  const {onSelect, location} = route.params;
  // const [location, setLocation] = useState({coord: {}, address: ''});
  console.log('location', location.coord);
  const onSelectLocation = (location) => {
    navigation.goBack();
    onSelect(location);
  };
  return (
    <Box>
      <Box
        position="absolute"
        top="40px"
        left="15px"
        bg="#FFF"
        borderRadius="40px"
        p="7px">
        <Button
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="chevron-thin-left" size={25} color="#000" />
        </Button>
      </Box>
      <MapsComponent
        location={location}
        hasConfirm
        onConfirm={onSelectLocation}
      />
    </Box>
  );
};

export default MapsScreen;
