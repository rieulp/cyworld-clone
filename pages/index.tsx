export default function Home() {
  return (
    <div>
      <div>
        <h2>Updated news</h2>
        <div>
          <ul>
            <li>
              <span>다이어리</span> 다이어리 제목1
            </li>
            <li>
              <span>다이어리</span> 다이어리 제목2
            </li>
            <li>
              <span>다이어리</span> 다이어리 제목3
            </li>
            <li>
              <span>다이어리</span> 다이어리 제목4
            </li>
          </ul>
        </div>
      </div>
      <div>
        <table>
          <tr>
            <th>다이어리</th>
            <td>0/65</td>
            <th>다이어리</th>
            <td>0/65</td>
          </tr>
          <tr>
            <th>다이어리</th>
            <td>0/65</td>
            <th>다이어리</th>
            <td>0/65</td>
          </tr>
        </table>
      </div>
      <div>
        <h2>
          추억의 BGM <span>TODAY CHOICE</span>
        </h2>
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>번호</th>
              <th>곡명</th>
              <th>아티스트</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
