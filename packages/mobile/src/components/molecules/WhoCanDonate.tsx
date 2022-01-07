import React from 'react';
import Card from '_atoms/Card/Card';
import Text from '_atoms/Text/Text';
import {Image} from 'react-native';
import Box from '_atoms/Box/Box';
import {SpaceProps} from 'styled-system';
import Button from '_atoms/Button/Button';
import {useNavigation} from '@react-navigation/native';

const WhoCanDonate = ({...rest}: SpaceProps) => {
  const {navigate} = useNavigation();
  return (
    <Card
      p="20px"
      // height="180px"
      borderRadius="20px"
      {...rest}
      justifyContent="space-between">
      <Image
        source={require('_assets/questions.png')}
        style={{
          height: 120,
          resizeMode: 'contain',
          position: 'absolute',
          right: -60,
          top: 35,
        }}
      />
      <Box>
        <Text fontSize="18px" fontWeight="bold">
          Who can donate blood?
        </Text>

        <Text
          fontSize="12px"
          mt="20px"
          width="60%"
          minHeight="
        100px">
          Donate directly to peaople in need dejdje jdn ezdfejz fen jsdbh hds
          fhsd fhdsbf dshf dshfjn dsjhfn dshfjn
        </Text>
      </Box>
      <Box mx="15px">
        <Button
          text="See more"
          variant="outlined"
          color="#62CBCF"
          fullwidth
          onPress={() => navigate('Questionnaire')}
        />
      </Box>
    </Card>
  );
};

export default WhoCanDonate;
