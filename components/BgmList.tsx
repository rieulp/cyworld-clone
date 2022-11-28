import styled from "@emotion/styled";
import React, { useCallback, useMemo, useState } from "react";
import { Music, playlist } from "../mock/playlist";
import { ItemTitle } from "./styles";

function BgmList() {
  const [checkList, setCheckList] = useState(
    Array.from({ length: playlist.length }, () => false)
  );
  const allChecked = useMemo(
    () => checkList.every((check) => check),
    [checkList]
  );

  const onChangeCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target instanceof HTMLInputElement) {
        const value = e.target.value;
        if (value === "all") {
          setCheckList(checkList.map(() => e.target.checked));
        } else if (!isNaN(Number(value))) {
          const newList = [...checkList];
          newList[Number(value)] = !newList[Number(value)];
          setCheckList(newList);
        }
      }
    },
    [checkList]
  );

  return (
    <div>
      <ItemTitle>
        추억의 BGM <span>today choice</span>
      </ItemTitle>
      <TableContainer>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={onChangeCheck}
                checked={allChecked}
                value="all"
              />
            </th>
            <th>번호</th>
            <th className="left">곡명</th>
            <th className="left">아티스트</th>
          </tr>
        </thead>
        <tbody>
          {playlist.map((music, index) => (
            <PlaylistItem
              key={index}
              index={index}
              checked={checkList[index]}
              onChange={onChangeCheck}
              {...music}
            />
          ))}
        </tbody>
      </TableContainer>
    </div>
  );
}

interface PlaylistItemProps extends Music {
  index: number;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
export function PlaylistItem({
  index,
  title,
  artist,
  checked,
  onChange,
}: PlaylistItemProps) {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          value={index}
        />
      </td>
      <td>{index + 1}</td>
      <td className="left link">{title}</td>
      <td className="left link">{artist}</td>
    </tr>
  );
}

export default BgmList;

const TableContainer = styled.table`
  width: 100%;
  text-align: center;
  font-size: 13px;
  line-height: 23px;
  .left {
    text-align: left;
  }
  .link {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
  input {
    vertical-align: middle;
  }
  thead {
    background: #eee;
    border-top: 1px;
    border-bottom: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.grey_60};
  }
  th {
    color: ${({ theme }) => theme.colors.grey_60};
    font-weight: 700;
  }
  tbody {
    tr {
      border-bottom: 1px dotted ${({ theme }) => theme.colors.grey_60};
    }
  }
`;
