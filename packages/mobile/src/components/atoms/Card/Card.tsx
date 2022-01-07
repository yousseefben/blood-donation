import React, {ReactNode} from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';
import {
  color,
  space,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  SpaceProps,
  ColorProps,
} from 'styled-system';

type CardProps = {
  children: ReactNode;
  borderRadius?: string;
} & TouchableOpacityProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  SpaceProps;
const Card = ({children, ...rest}: CardProps) => {
  return (
    <CardWrapper
      activeOpacity={0.8}
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
      {...rest}>
      {children}
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.TouchableOpacity<CardProps>`
  background-color: white;
  border-radius: ${(props) => props.borderRadius || '8px'};
  ${color}
  ${space}
  ${layout}
  ${flexbox}
`;
