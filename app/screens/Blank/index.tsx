import React, {useContext, useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {Button, FillSentence, Header} from '../../components';
import {MainContext} from '../../context/MainContext';
import {sentenceRegex, wordRegex} from '../../utils/regex';
import style from './style';

export const BlankScreen: React.FC = () => {
  const {state} = useContext(MainContext);
  const [check, setCheck] = useState(false);

  const filteredWords: string[][] = [];
  const sentences: string[] = state.paragraph.split(sentenceRegex);
  const filteredSentences: string[] = sentences.filter(sentence => {
    return sentence.split(' ').length > 5;
  });

  filteredSentences.forEach(sentence => {
    const wordArray: string[] = [];
    sentence.match(wordRegex)?.forEach(word => {
      wordArray.push(word);
    });
    filteredWords.push(wordArray);
  });

  const checkAnswer = () => {
    setCheck(true);
  };

  return (
    <View style={style.root}>
      <Header title="Boşluk Doldur" />
      <FlatList
        data={filteredSentences}
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
