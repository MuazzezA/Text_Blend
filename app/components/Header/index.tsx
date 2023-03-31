import React from 'react';
import {View, Text} from 'react-native';
import style from './style';
import {Button} from '../Button';
import {useNavigation} from '@react-navigation/native';
interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({title}) => {
  const navigation = useNavigation<any>();
  return (
    <View style={style.root}>
      <Button
        title="Geri"
        onPress={() => navigation.goBack()}
        overStyle={style.button}
      />
      <Text style={style.text}>{title}</Text>
    </View>
  );
};
