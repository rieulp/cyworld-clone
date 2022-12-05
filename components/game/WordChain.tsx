import { css, useTheme } from "@emotion/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { words } from "../../mock/words";
import { Button, ContentBox, GameBox } from "../styles";

function WordChain() {
  const { colors } = useTheme();
  const [word, setWord] = useState("");
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<string>("");

  const onChangeAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value.trim());
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (answer.length < 2) {
      setResult("2단어 이상 입력해주세요");
    } else if (word[word.length - 1] === answer?.[0]) {
      setResult("정답입니다!");
      setWord(answer);
      setAnswer("");
    } else {
      setResult("틀렸습니다!");
    }
  };

  useEffect(() => {
    const index = Math.floor(Math.random() * words.length);
    setWord(words[index]);
  }, []);

  return (
    <ContentBox
      color={colors.light_grey}
      css={css`
        max-width: 65%;
        margin: 8px auto;
      `}
    >
      <GameBox>
        <Image src="/images/game.svg" alt="train" width={40} height={20} />
        <h3 className="title">끝말잇기</h3>
        <p className="sub-title">제시어: {word}</p>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="단어를 입력하세요"
            value={answer}
            onChange={onChangeAnswer}
          />{" "}
          <Button type="submit">검색</Button>
        </form>
        <p className="sub-title">{result}</p>
      </GameBox>
    </ContentBox>
  );
}

export default WordChain;
