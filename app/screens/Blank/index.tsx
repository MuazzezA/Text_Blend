import React, {useContext, useEffect, useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import {Button, FillSentence, Header} from '../../components';
import {MainContext} from '../../context/MainContext';
import {wordRegex} from '../../utils/regex';
import style from './style';

export const BlankScreen: React.FC = () => {
  const {stateFiltered} = useContext(MainContext);
  const [check, setCheck] = useState(false);

  const filteredWords: string[][] = [];

  stateFiltered.filteredParagraph.forEach(sentence => {
    const wordArray: string[] = [];
    sentence.match(wordRegex)?.forEach(word => {
      wordArray.push(word);
    });
    filteredWords.push(wordArray);
  });

  const checkAnswer = () => {
    setCheck(!check);
  };

  return (
    <View style={style.root}>
      <Header title="Boşluk Doldur" />
      <FlatList
        data={stateFiltered.filteredParagraph}
        renderItem={({item, index}) => {
          return <FillSentence sentence={item} check={check} />;
        }}
      />
      <Button
        title={'Kontrol Et'}
        onPress={() => checkAnswer()}
        overStyle={style.button}
      />
    </View>
  );
};
