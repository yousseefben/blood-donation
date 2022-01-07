import React, {useState, ReactNode} from 'react';
import {
  TextInputProps,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import {useField} from 'formik';
import TextInput from '_atoms/TextInput/TextInput';

type Props = {
  // children: ReactNode;
  name: string;
  iconLeft?: ReactNode;
} & TextInputProps;
const TextField = ({onChange, onBlur, isDisabled, name, ...props}: Props) => {
  const [field, meta, helper] = useField(name);

  console.log(field);
  const error = meta.touched && meta.error;
  const {onBlur: blurField, onChange: onChangeField, value} = field;

  const {setValue, setTouched} = helper;
  console.log('shit error', error);
  return (
    <TextInput
      onBlur={(e) => {
        setTouched(true);
        if (onBlur) {
          onBlur(e);
        }
      }}
      onChangeText={(e) => {
        setValue(e);
        if (onChange) {
          onChange(e);
        }
      }}
      value={value}
      error={error}
      {...props}
    />
  );
};

export default TextField;
