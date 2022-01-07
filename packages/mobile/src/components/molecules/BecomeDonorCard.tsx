import React from 'react';
import Card from '_atoms/Card/Card';
import Text from '_atoms/Text/Text';
import {Image} from 'react-native';
import Box from '_atoms/Box/Box';
import {SpaceProps} from 'styled-system';

const BecomeDonorCard = ({...rest}: SpaceProps) => {
  return (
    <Card p="20px" height="180px" borderRadius="20px" {...rest}>
      <Image
        source={require('_assets/donate.png')}
        style={{
          height: 150,
          resizeMode: 'contain',
          position: 'absolute',
          right: -90,
          top: 15,
        }}
      />
      <Text color="primaryLight" fontWeight="bold">
        Become a blood Donor
      </Text>

      <Text fontSize="12px" color="textSecondary">
        Donate directly to peaople in need
      </Text>
      <Box width="100px" my="15px">
        <Text fontSize="56px" color="primaryLight" fontWeight="bold">
          3
        </Text>
        <Text fontSize="26px" position="absolute" top="6px" right="0">
          Easy
        </Text>
        <Text
          fontSize="22px"
          color="textSecondary"
          style={{position: 'absolute', right: 0, bottom: 4}}>
          Steps
        </Text>
      </Box>
      <Box flexDirection="row" alignItems="center">
        <Box>
          <Text color="black" fontSize="13px">
            Become a Blood Donor
          </Text>
        </Box>
        <Box>{/* <Ico width={40} height={40} /> */}</Box>
      </Box>
    </Card>
  );
};

export default BecomeDonorCard;
