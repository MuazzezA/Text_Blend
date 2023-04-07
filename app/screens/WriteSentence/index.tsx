import React, {useState} from 'react';
import {View, Text, StyleSheet, Animated, PanResponder} from 'react-native';
import Tts from 'react-native-tts';
import {useContext} from 'react';
import {Button, Header, TextInput} from '../../components';
import style from './style';
import {MainContext} from '../../context/MainContext';
import color from '../../utils/color';
interface TextButtonProps {
  sentence?: string;
}
interface Props {}

export const WriteSentenceScreen: React.FC<Props> = () => {
  const {stateFiltered} = useContext(MainContext);
  const phagraph = stateFiltered.filteredParagraph;
  const [answers, setAnswers] = useState<string[]>([]);
  const [check, setCheck] = useState<boolean[]>([]);

  Tts.setDefaultLanguage('en-IE');
  Tts.setDefaultVoice('com.apple.ttsbundle.Daniel-compact');
  const readText = async (text: string) => {
    Tts.getInitStatus().then(() => {
      Tts.speak(text);
    });
  };

  const checkAnswer = () => {
    const result: boolean[] = [];
    phagraph.forEach((sentence, index) => {
      if (sentence === answers[index]) {
        result.push(true);
      } else {
        result.push(false);
      }
    });
    setCheck(result);
  };
  const TextButton = ({sentence}: TextButtonProps) => {
    return (
      <Text
        style={style.textButton}
        onPress={() => sentence && sentence.length > 0 && readText(sentence)}>
        {sentence && '▶'}
      </Text>
    );
  };
  console.log(phagraph);
  console.log(answers);
  console.log(check.length > 0 && check[0]);
  return (
    <View style={style.root}>
      <Header title="Cümle Yaz" />

      {phagraph.map((sentence, index) => {
        return (
          <View
            key={index}
            style={[
              style.inputContainer,
              {
                backgroundColor:
                  check.length > 0
                    ? check[index]
                      ? color.green
                      : color.red
                    : 'white',
              },
            ]}>
            <TextInput
              setValue={(text: string) => {
                setAnswers(prev => {
                  prev[index] = text;
                  return prev;
                });
              }}
              placeholder="..."
              overStyle={style.input}
            />
            <TextButton sentence={sentence} />
          </View>
        );
      })}

      <View style={style.buttonContainer}>
        <Button title="Kontrol Et" onPress={() => checkAnswer()} />
      </View>
    </View>
  );
};

/*
The quick brown fox jumps over the lazy dog.
I love listening to music while I work.
The beach is my happy place.
*/
