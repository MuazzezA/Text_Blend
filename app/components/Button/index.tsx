import React from 'react';
import {
  Text,
  Pressable,
  PressableProps,
  TouchableOpacityProps,
} from 'react-native';
import styles from './style';
interface ButtonProps {
  title: string;
  overStyle?: TouchableOpacityProps['style'];
  onPress: PressableProps['onPress'];
  small?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  overStyle,
  onPress,
  small = false,
}) => {
  return (
    <Pressable
      style={[styles.button, small && styles.smallButton, overStyle]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};
