import { gql, useQuery } from "@apollo/client";
import { Board } from "./useBoard";

export type BoardSummary = Pick<Board, "number" | "title" | "createdAt">;
export type FetchBoardsData = {
  fetchBoardsCount: number;
  fetchBoards: BoardSummary[];
};
export const FETCH_BOARDS = gql`
  query boards($page: Int) {
    fetchBoardsCount
    fetchBoards(page: $page) {
      number
      title
      createdAt
    }
  }
`;

export const useBoards = (page: number) => {
  const { data, loading, error } = useQuery<FetchBoardsData>(FETCH_BOARDS, {
    variables: { page },
  });
  return { boards: data?.fetchBoards, loading, error };
};
