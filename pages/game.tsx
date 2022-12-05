import Lotto from "../components/game/Lotto";
import WordChain from "../components/game/WordChain";
import {
  ContentContainer,
  ItemContainer,
  ItemTitle,
} from "../components/styles";

function GamePage() {
  return (
    <ItemContainer>
      <ItemTitle>
        Game<span>today game</span>
      </ItemTitle>
      <hr />
      <ContentContainer>
        <WordChain />
        <Lotto />
      </ContentContainer>
    </ItemContainer>
  );
}

export default GamePage;
