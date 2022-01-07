import React from 'react';
import Card from '_atoms/Card/Card';
import Text from '_atoms/Text/Text';
import {ImageBackground, Image} from 'react-native';
import Box from '_atoms/Box/Box';
import Button from '_atoms/Button/Button';
import {SvgProps} from 'react-native-svg';

type Props = {
  title: string;
  Icon: React.FC<SvgProps>;
  onPress: any;
};
const CardsHome = ({title, Icon, onPress}: Props) => {
  return (
    <Card p="10px" height="120px" width="120px" onPress={onPress}>
      <Box alignSelf="center">
        <Icon width={80} height={80} />
      </Box>
      <Box>
        <Text textAlign="center">{title}</Text>
      </Box>
    </Card>
  );
};

export default CardsHome;
