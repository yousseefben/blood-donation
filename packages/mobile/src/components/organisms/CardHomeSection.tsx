import React from 'react';
import Card from '_atoms/Card/Card';
import Text from '_atoms/Text/Text';
import {ImageBackground, Image} from 'react-native';
import Box from '_atoms/Box/Box';
import Button from '_atoms/Button/Button';
import {SvgProps} from 'react-native-svg';
import {ScrollView} from 'react-native-gesture-handler';
import CardSection from '_molecules/CardSection';
import {FindDonorsIcon} from '../../components/icons/Icon';
import CardsHome from '_molecules/CardsHome';
import {useNavigation} from '@react-navigation/native';

const cards = [
  {
    title: 'Find Donors',
    icon: FindDonorsIcon,
    screen: 'CreateRequest',
  },
  {
    title: 'Donate',
    icon: FindDonorsIcon,
  },
  {
    title: 'Order Blood',
    icon: FindDonorsIcon,
  },
];
const CardHomeSection = () => {
  const {navigate} = useNavigation();
  return (
    <Box flexDirection="row" my="20px" mx="10px" justifyContent="space-around">
      {cards.map((c) => (
        <CardsHome
          title={c.title}
          Icon={c.icon}
          onPress={() => c.screen && navigate(c.screen)}
        />
      ))}
    </Box>
  );
};

export default CardHomeSection;
