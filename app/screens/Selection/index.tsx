import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import {Button} from '../../components';
import style from './style';

export const SelectionScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  const data = [
    {title: 'Sırala', onPress: () => navigation.navigate('quiz-screen')},
    {
      title: 'Boşluk Doldur',
      onPress: () => navigation.navigate('blank-screen'),
    },
    {title: 'Geri Dön', onPress: () => navigation.goBack()},
  ];

  return (
    <View style={style.root}>
      {data.map((item, index) => (
        <Button
          key={index}
          title={item.title}
          onPress={item.onPress}
          overStyle={style.button}
        />
      ))}
    </View>
  );
};
