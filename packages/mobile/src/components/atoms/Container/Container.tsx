import React, {ReactNode} from 'react';
import styled from 'styled-components/native';
import Box from '_atoms/Box/Box';
import Icon from 'react-native-vector-icons/Entypo';
import Text from '_atoms/Text/Text';
import Button from '_atoms/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {Dimensions} from 'react-native';

type ContainerProps = {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  notScroll?: boolean;
};
const {height} = Dimensions.get('window');
const Container = ({children, title, subtitle, notScroll}: ContainerProps) => {
  const Component = notScroll ? Box : ScrollViewWrapper;
  const navigation = useNavigation();
  return (
    <>
      <Box pl="5px" pt="50px" bg="#FFF" zIndex="100">
        <Button onPress={() => navigation.goBack()}>
          <Icon name="chevron-thin-left" size={25} color="#000" />
        </Button>
      </Box>
      <Component>
        <Box
          px="10px"
          //  minHeight={height}
          bg="#FFF">
          <Box bg="#FFF" zIndex={100}>
            {title && (
              <Text fontSize="36px" fontWeight="bold" my="8px">
                {title}
              </Text>
            )}
            {subtitle && <Text color="textSecondary">{subtitle}</Text>}
          </Box>
          {children}
        </Box>
      </Component>
    </>
  );
};

export default Container;

const ScrollViewWrapper = styled.ScrollView`
  background-color: #fff;
`;
