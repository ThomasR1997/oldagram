import {
  AvatarImg,
  CardDiv,
  CommentIcon,
  FlexBox,
  LikeIcon,
  NavBar,
  ShareIcon,
  StyledDiv,
  StyledH3,
  StyledP,
  StyledSpan,
} from "../../components/StyledComponents";

import avatar from "../../images/yourAvatar.png";
import { posts } from "../../Posts";

export const LandingPage = () => {
  return (
    <StyledDiv>
      <NavBar>
        <h1>Oldagram</h1>
        <img src={avatar} alt="Per Harald Borgen" />
      </NavBar>

      {posts.map((item, index) => {
        return (
          <CardDiv key={index}>
            <FlexBox>
              <AvatarImg src={item.avatar} />
              <div>
                <StyledH3>{item.name}</StyledH3>
                <StyledP>{item.location}</StyledP>
              </div>
            </FlexBox>
            <img src={item.post} alt="" />

            <FlexBox>
              <LikeIcon />
              <CommentIcon />
              <ShareIcon />
            </FlexBox>
            <FlexBox>
              <StyledH3>{item.likes} likes</StyledH3>
            </FlexBox>
            <FlexBox>
              <StyledP>
                <StyledSpan>{item.username}</StyledSpan>
                {item.comment}
              </StyledP>
            </FlexBox>
          </CardDiv>
        );
      })}
    </StyledDiv>
  );
};
