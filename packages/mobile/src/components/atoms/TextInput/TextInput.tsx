import React, {useState, ReactNode} from 'react';
import {
  TextInputProps,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import styled, {css} from 'styled-components/native';
import Box from '_atoms/Box/Box';
import Text from '_atoms/Text/Text';
import {Icon} from 'react-native-vector-icons/Icon';

type Props = {
  // children: ReactNode;
  iconLeft?: ReactNode;
  error?: string;
} & TextInputProps;
const TextInput = ({
  onFocus,
  onBlur,
  iconLeft: IconLeft,
  error,
  ...rest
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };
  const handleBlur = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };
  return (
    <Box>
      <InputWrapper
        {...rest}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isFocused={isFocused}
      />
      {IconLeft && (
        <Box position="absolute" right="15px" top="14px">
          {IconLeft}
        </Box>
      )}
      {error && (
        <Text color="error" mt="3px" ml="3px">
          {error}
        </Text>
      )}
    </Box>
  );
};

export default TextInput;

const InputWrapper = styled.TextInput<{isFocused: boolean}>(
  ({theme, isFocused}) => css`
    height: 48px;
    background-color: ${theme.colors.backgroundSecondary};
    border-radius: 8px;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px;
    border-color: ${isFocused ? theme.colors.primary : 'transparent'};
  `,
);
