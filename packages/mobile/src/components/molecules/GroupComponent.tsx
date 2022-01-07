import React from 'react';
import Card from '_atoms/Card/Card';
import Text from '_atoms/Text/Text';
import {Image} from 'react-native';
import Box from '_atoms/Box/Box';
import {SpaceProps} from 'styled-system';

const GroupComponent = ({group}: {group: string}) => {
  return (
    <Box
      bg="primary"
      // p="20px"
      // py="24px"
      // width="50px"
      height="60px"
      borderRadius="60px"
      border="5px"
      borderColor="#FFF"
      flexDirection="row"
      alignItems="center"
      flexBasis="60px">
      <Text
        fontWeight="bold"
        fontSize="22px"
        color="#FFF"
        textAlign="center"
        ml="13px">
        {group}
      </Text>
    </Box>
  );
};

export default GroupComponent;
