import { GetStaticProps, InferGetStaticPropsType } from "next";
import { initializeClient } from "../api";
import { BoardSummary, FetchBoardsData, FETCH_BOARDS } from "../api/useBoards";
import BgmList from "../components/BgmList";
import { ItemContainer } from "../components/styles";
import UpdateNews from "../components/UpdateNews";
import { isNewDate } from "../utils/day";

export default function Home({
  boards,
  boardsCount,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <ItemContainer>
        <UpdateNews data={boards} counts={{ boardsCount }} />
      </ItemContainer>
      <ItemContainer>
        <BgmList />
      </ItemContainer>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{
  boards?: BoardSummary[];
  boardsCount: [number, number];
}> = async () => {
  const { data } = await initializeClient().query<FetchBoardsData>({
    query: FETCH_BOARDS,
    variables: { page: 1 },
  });
  const boardsNewCount =
    data.fetchBoards.filter(({ createdAt }) => isNewDate(createdAt))?.length ||
    0;

  return {
    props: {
      boards: data.fetchBoards?.slice(0, 4),
      boardsCount: [boardsNewCount, data.fetchBoardsCount],
    },
  };
};
