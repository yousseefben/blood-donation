import React from 'react';
import Box from '_atoms/Box/Box';
import Text from '_atoms/Text/Text';

const ActivityIndicator = () => {
  return (
    <Box
      height="100%"
      bg="#0009"
      position="absolute"
      top="0"
      bottom="0"
      left="0"
      right="0"
      zIndex={10000}
      opacity="0.9">
      <Box height="100%" justifyContent="center">
        <Text color="red" textAlign="center">
          indic
        </Text>
      </Box>
    </Box>
  );
};

export default ActivityIndicator;
