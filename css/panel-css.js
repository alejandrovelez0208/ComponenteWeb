import { css } from "lit-element";

export const panel_css = css`
  .side-nav,
  ul,
  a {
    list-style: none;
    text-decoration: none;
    color: black;
    padding-left: 8px;
    white-space: nowrap;
  }

  .section {
    overflow: hidden;
    width: 0;
    transition: width 0.3s ease;
    background-color: #f0f0f0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .drawer {
    overflow: hidden; /* Evita que el contenido desborde del panel */
    width: 200px;
  }

  .drawer ul {
    padding-right: 10px;
  }

  .drawer ul li {
    list-style: none;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    white-space: nowrap;
  }

  .targetClose {
    display: none;
  }

  .targetOpen{
    display: block;
  }
`;
