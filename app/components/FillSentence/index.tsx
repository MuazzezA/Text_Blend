import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {wordRegex} from '../../utils/regex';
import {TextInput} from '../../components';

import style from './style';
import color from '../../utils/color';

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

interface FillSentenceProps {
  sentence: string;
  isCorrect?: number;
  check?: boolean;
}

export const FillSentence: React.FC<FillSentenceProps> = ({
  sentence,
  check,
}) => {
  const [answer, setAnswer] = useState<string>();
  const [overStyle, setOverStyle] = useState({backgroundColor: color.primary});
  const words: string[] = [];
  sentence.match(wordRegex)?.forEach(word => {
    words.push(word);
  });

  const [blankIndex, setBlankIndex] = useState(0);
  const trueAnswer = sentence.split(' ')[blankIndex + 1].toLowerCase();

  useEffect(() => {
    if (!check) {
      setOverStyle({backgroundColor: color.primary});
    } else if (answer?.toLowerCase() || answer === trueAnswer) {
      setOverStyle({backgroundColor: color.green});
    } else if (answer?.toLowerCase() || answer !== trueAnswer) {
      setOverStyle({backgroundColor: color.red});
    } else {
      setOverStyle({backgroundColor: color.primary});
    }
  }, [check]);

  useEffect(() => {
    setBlankIndex(getRandomIntInclusive(0, words.length - 1));
  }, [sentence]);

  return (
    <View style={[style.root, overStyle !== null && {...overStyle}]}>
      {words.map((word, index) => {
        return (
          <View key={`key-${index}`}>
            {index !== blankIndex ? (
              <Text style={style.text}>{word}</Text>
            ) : (
              <TextInput
                setValue={(text: string) => {
                  setAnswer(text);
                }}
                multiline={false}
                placeholder="..."
                overStyle={style.blankInput}
              />
            )}
          </View>
        );
      })}
    </View>
  );
};
