import {View, Text, ViewStyle, StyleProp} from 'react-native';
import styles from './style';

interface Cardprops {
  text: string;
  overStyle?: StyleProp<ViewStyle>;
}

export const Card: React.FC<Cardprops> = ({text, overStyle}) => {
  return (
    <View style={[styles.card, overStyle]}>
      <Text>{text}</Text>
    </View>
  );
};
