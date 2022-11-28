import Lotto from "../components/game/Lotto";
import WordChain from "../components/game/WordChain";
import { ItemContainer, ItemTitle } from "../components/styles";

function GamePage() {
  return (
    <ItemContainer>
      <ItemTitle>
        Game<span>today game</span>
      </ItemTitle>
      <hr />
      <div>
        <WordChain />
        <Lotto />
      </div>
    </ItemContainer>
  );
}

export default GamePage;
