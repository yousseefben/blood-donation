import React, {ReactNode} from 'react';
import {TextProps as TextPropsIn} from 'react-native';
import styled from 'styled-components/native';
import {
  color,
  space,
  layout,
  flexbox,
  typography,
  border,
  position,
  PositionProps,
  BorderProps,
  TypographyProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  ColorProps,
} from 'styled-system';

export type TextProps = {
  children: ReactNode;
} & ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  PositionProps &
  BorderProps &
  TypographyProps &
  TextPropsIn;

const Text = ({children, ...rest}: TextProps) => {
  return <TextWrapper {...rest}>{children}</TextWrapper>;
};

export default Text;

const TextWrapper = styled.Text<TextProps>`
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${typography}
  ${position}
  ${border}
`;
