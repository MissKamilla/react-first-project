import styled from "styled-components";

export const Title2 = styled.h2`
  color: red;
`;

export const Button = styled.button`
  border-radius: 10px;
  color: ${(props) => props.primary || "#BF4F74"};
  background-color: ${(props) => (props.state ? "#c8be7cff" : "#c887c2ff")};
`;
