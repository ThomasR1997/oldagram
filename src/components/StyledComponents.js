import styled from "styled-components";
import { BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { SlPaperPlane } from "react-icons/sl";

export const StyledDiv = styled.div`
  width: fit-content;
  margin: 5em auto;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  height: 2em;
  border-bottom: solid 3px grey;
  background-color: white;
`;

// round image
export const AvatarImg = styled.img`
  border-radius: 50%;
  padding: 1em;
`;

// oldagram div
export const CardDiv = styled.div`
  background-color: white;
  margin-bottom: 1.5em;
`;

// Utility div for text placement
export const FlexBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: start;
  width: 21em;
  padding: 0.5em 1em;
`;

export const StyledH3 = styled.h3`
  margin: 0;
  font-size: 13px;
`;

export const StyledP = styled.p`
  margin: 0;
  margin-bottom: 0.5em;
  font-size: 12px;
`;

// Icons with hover effect
export const LikeIcon = styled(BsHeart)`
  width: 24px;
  height: 24px;
  margin: 0.25em;
  cursor: pointer;

  &:hover {
    fill: red;
  }
`;

export const CommentIcon = styled(FaRegComment)`
  width: 24px;
  height: 24px;
  margin: 0.25em;
  cursor: pointer;

  &:hover {
    fill: lightblue;
  }
`;

export const ShareIcon = styled(SlPaperPlane)`
  width: 24px;
  height: 24px;
  margin: 0.25em;
  cursor: pointer;

  &:hover {
    fill: green;
  }
`;

// Span for bold username
export const StyledSpan = styled.span`
  font-weight: bold;
`;
