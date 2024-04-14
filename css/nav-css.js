import { css } from "lit-element";

export const nav_css = css`
  .navbar {
    background-color: #ffffff;
    display: flex;
    border-radius: 10px;
    font-size: 20px;
    font-family: verdana;
    padding: 10px;
  }

  .navbar-left {
    display: flex;
    align-items: center;
  }

  .navbar-right {
    position: absolute;
    right: 10px;
  }
`;
