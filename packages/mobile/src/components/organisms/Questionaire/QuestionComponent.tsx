import React from 'react';
import Box from '_atoms/Box/Box';
import Text from '_atoms/Text/Text';
import {Image, Dimensions, ImageRequireSource} from 'react-native';
import Button from '_atoms/Button/Button';

const {height, width} = Dimensions.get('window');

type Props = {
  description: string;
  image: any;
  isRejected: boolean;
  isSuccess: boolean;
  rejectedDescription: string;
  onSuccess: () => void;
  onFailure: () => void;
};
const QuestionComponent = ({
  description,
  image,
  isRejected,
  isSuccess,
  rejectedDescription,
  onSuccess,
  onFailure,
}: Props) => {
  return (
    <Box height={height} pb={!isRejected && !isSuccess ? '170px' : '130px'}>
      <Box
        justifyContent="flex-start"
        flexGrow={1}
        alignItems="center"
        mt={!isRejected && !isSuccess ? '100px' : '20px'}>
        {(isSuccess || isRejected) && (
          <Text fontWeight="bold" fontSize="28px" mb="20px">
            {isSuccess ? 'Great!' : 'Sorry!'}
          </Text>
        )}
        {image && (
          <Image
            source={
              !isSuccess ? image : require('_assets/questionnaire/great.png')
            }
            style={{
              // height: 150,
              resizeMode: 'contain',
              // position: 'absolute',
              width: isSuccess ? width : 120,
              height: isSuccess ? 320 : 120,
              // left: -390,
              // top: -290  ,
            }}
          />
        )}
        <Text fontWeight="bold" fontSize="15px" mt="15px">
          {!isSuccess ? (isRejected ? rejectedDescription : description) : 'rr'}
        </Text>
        {(isSuccess || isRejected) && (
          <Text color="textSecondary" fontSize="15px" fontSize="13px" mt="20px">
            {isSuccess ? 'success text!' : 'reject text!'}
          </Text>
        )}
      </Box>
      {isRejected && <Text>ff</Text>}
      {!isRejected && !isSuccess && (
        <Box
          flexDirection="row"
          // position="absolute" bottom="120px"
        >
          <Box flexBasis="48%" mr="15px">
            <Button
              text="Yes"
              variant="contained"
              fullwidth
              onPress={onSuccess}
            />
          </Box>
          <Box flexBasis="48%">
            <Button
              text="No"
              variant="contained"
              fullwidth
              onPress={onFailure}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default QuestionComponent;
