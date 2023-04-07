import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import {Button, Header} from '../../components';
import style from './style';

export const SelectionScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <>
      <Header title="Seçim Yapın" />
      <View style={style.root}>
        <Button
          title={'Sırala'}
          onPress={() => navigation.navigate('quiz-screen')}
          overStyle={style.button}
        />
        <Button
          title={'Dinle ve Yaz'}
          onPress={() => navigation.navigate('write-sentence-screen')}
          overStyle={style.button}
        />
        <Button
          title={'Boşluk Doldur'}
          onPress={() => navigation.navigate('blank-screen')}
          overStyle={style.button}
        />
      </View>
    </>
  );
};
