import { css, useTheme } from "@emotion/react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Button, ContentBox, GameBox } from "../styles";

function Lotto() {
  const { colors } = useTheme();
  const MAX_NUMBER = useMemo(() => 45, []);
  const SIZE = useMemo(() => 6, []);
  const [numbers, setNumbers] = useState<number[]>([]);

  const createNumbers = () => {
    const newNumbers: number[] = Array(SIZE);
    for (let i = 0; i < SIZE; ) {
      const rand = Math.ceil(Math.random() * MAX_NUMBER);
      if (!newNumbers.includes(rand)) newNumbers[i++] = rand;
    }
    return newNumbers;
  };

  useEffect(() => {
    setNumbers(createNumbers());
  }, []);

  return (
    <GameBox>
      <Image src="/images/lotto.svg" alt="lotto" width={30} height={30} />
      <h3 className="title">LOTTO</h3>
      <p className="sub-title">버튼을 누르세요.</p>
      <div className="number-box">
        {numbers.map((num, i) => (
          <span key={i}>{num}</span>
        ))}
      </div>
      <Button onClick={() => setNumbers(createNumbers())}>Button</Button>
    </GameBox>
  );
}

export default Lotto;
