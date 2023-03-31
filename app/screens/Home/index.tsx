import React, {useContext} from 'react';
import {ScrollView} from 'react-native';
import {MainContext} from '../../context/MainContext';
import {useNavigation} from '@react-navigation/native';
import style from './style';
import {Button, Card, TextInput} from '../../components';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const {state, dispatch} = useContext(MainContext);

  const handleChange = (text: string) => {
    dispatch({type: 'set', payload: text});
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={style.root}>
      <Card text="GİRİLEN METNİ SORULARA DÖNÜŞTÜRÜN" overStyle={style.card} />
      <TextInput value={state.paragraph} setValue={handleChange} />
      <Button
        title="OLUŞTUR"
        onPress={() => navigation.navigate('selection-screen')}
        overStyle={style.button}
      />
    </ScrollView>
  );
};
