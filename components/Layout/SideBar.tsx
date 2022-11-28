import styled from "@emotion/styled";
import Image from "next/image";
import { ContentBox } from "../styles";

function SideBar() {
  return (
    <Container>
      <ContentBox>
        <div className="profile-container">
          <div className="image-wrapper">
            <Image src="/images/profile.jpg" fill alt="profile" />
          </div>
          <hr />
          <ul className="info-list">
            <li>
              <Image src="/images/face.svg" alt="name" width={15} height={15} />
              이름
            </li>
            <li>
              <Image
                src="/images/call.svg"
                alt="phone"
                width={15}
                height={15}
              />
              Phone
            </li>
            <li>
              <Image
                src="/images/email.svg"
                alt="email"
                width={15}
                height={15}
              />
              E-mail
            </li>
            <li>
              <Image
                src="/images/start.svg"
                alt="instagram"
                width={15}
                height={15}
              />
              인스타그램
            </li>
          </ul>
          <div className="emotion-container">
            <h3>오늘의 기분</h3>
            <select>
              <option>기쁨 😁</option>
              <option>심심 😑</option>
              <option>슬픔 😥</option>
            </select>
          </div>
        </div>
      </ContentBox>
    </Container>
  );
}

export default SideBar;

const Container = styled.aside`
  .profile-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
  }
  .image-wrapper {
    position: relative;
    width: calc(100% - 4px);
    height: 28%;
    border-radius: 3px;
    overflow: hidden;
    align-self: center;
  }
  hr {
    width: 100%;
  }
  .info-list {
    flex: 1;
    li {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 13px;
      padding: 3px 0;
    }
  }
  .emotion-container {
    font-size: 13px;

    h3 {
      margin-bottom: 5px;
    }
    select {
      font-size: 13px;
      width: 100%;
      padding: 3px 0;
    }
  }
`;
