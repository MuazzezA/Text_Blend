import React from 'react';
import {
  View,
  Text,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputStyle,
} from 'react-native';
import style from './style';
interface TextInputProps {
  value?: string;
  overStyle?: RNTextInputStyle;
  setValue: (text: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  overStyle,
  setValue,
  ...rest
}) => {
  return (
    <View>
      <RNTextInput
        style={[style.input, overStyle]}
        placeholder="Metin Giriniz..."
        value={value}
        onChangeText={text => setValue(text)}
        multiline
        {...rest}
      />
    </View>
  );
};
