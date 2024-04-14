import { css } from "lit-element";

export const panel_css = css`
  .side-nav,
  ul,
  a {
    list-style: none;
    text-decoration: none;
    color: black;
    padding-left: 5px;
    white-space: nowrap;
    margin: 0;
  }

  .section {
    display: flex; 
    overflow: hidden;
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 1;
    transition: width 0.5s ease;
  }

  .drawer {
    font-family: verdana;
    font-size: 18px;
    overflow: hidden;
    width: 15%;
    float: left;
    height: 91vh;
    border-right: 1px solid rgba(204, 204, 204, 0.5);
  }

  .drawer ul {
    padding-right: 10px;
    margin: 0;
  }

  .drawer ul li {
    list-style: none;
    padding: 10px;
    white-space: nowrap;
  }

  .targetClose {
    width: 0;
    transition: width 0.5s ease;
    border-right: none;
  }

  .targetOpen {
    width: 200px;
    transition: width 0.5s ease;
  }

  .info {
    border-top: 1px solid rgba(204, 204, 204, 0.5);
  }
`;
