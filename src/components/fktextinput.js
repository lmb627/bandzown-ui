import React from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from '../styles/styles';

const FKTextInput = ({
  disabled,
  field: {
    name,
    onBlur,
    onChange,
    value,
  },
  form: {
    errors,
    touched,
  },
}) => (
  <View>
    <TextInput
      editable = {!disabled}
      selectTextOnFocus = {!disabled}
      onChangeText = {onChange(name)}
      onBlur = {onBlur(name)}
      style = {[
        styles.rootInput,
        {
          color: disabled ? 'gray' : 'black',
          borderColor: errors[name] && touched[name] ? 'red' : 'gray'
        },
      ]}
      value={value}
    />
   {errors[name] && touched[name] &&
     <Text style={styles.rootError}>
       {errors[name]}
     </Text>
   }
  </View>
);

export default FKTextInput;
