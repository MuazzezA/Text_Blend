import React, {useContext, useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {MainContext} from '../../context/MainContext';
import {useNavigation} from '@react-navigation/native';
import style from './style';
import {sentenceRegex} from '../../utils/regex';
import {Button, Card, TextInput} from '../../components';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const {state, dispatch, dispatchFiltered} = useContext(MainContext);

  const sentences: string[] = state.paragraph.split(sentenceRegex);
  const filteredSentences: string[] = sentences.filter(sentence => {
    return sentence.split(' ').length > 5;
  });

  const setFilteredSentences = async () => {
    dispatchFiltered({type: 'set', payload: filteredSentences});
  };

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
        onPress={() => {
          setFilteredSentences();
          navigation.navigate('selection-screen');
        }}
        overStyle={style.button}
      />
    </ScrollView>
  );
};
