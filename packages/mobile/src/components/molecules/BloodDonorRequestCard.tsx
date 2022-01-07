import React from 'react';
import Card from '_atoms/Card/Card';
import Text from '_atoms/Text/Text';
import Box from '_atoms/Box/Box';
import {SpaceProps} from 'styled-system';
import GroupComponent from './GroupComponent';

export type BloodDonorRequestCardProps = {
  name: string;
  distance: number;
  group: string;
  lat: number;
  lng: number;
  description: string;
  onPress: any;
} & SpaceProps;
const BloodDonorRequestCard = ({
  name,
  distance,
  group,
  onPress,
  ...rest
}: BloodDonorRequestCardProps) => {
  console.group('distance', distance);
  return (
    <Card
      p="10px"
      height="110px"
      bg="backgroundSecondary"
      flexDirection="row"
      alignItems="center"
      onPress={onPress}
      {...rest}
      // justifyContent="space-between"
    >
      <GroupComponent group={group} />
      <Box ml="20px" flexShrink={1}>
        <Text fontSize="16px" color="textSecondary">
          {name}
        </Text>
        <Text fontSize="16px" mt="15px">
          {distance} km away
        </Text>
      </Box>
      <Text
        fontSize="13px"
        color="textSecondary"
        position="absolute"
        right="12px"
        bottom="10px">
        24 hours ago
      </Text>
    </Card>
  );
};

export default BloodDonorRequestCard;
