import { css } from "lit-element";

export const component = css`
  *{
    margin: 0;
    padding: 0;
  }  
  
  .form-box {
    display: flex;
    gap: 1px;
    align-items: center;
    width: 100%;
  }

  .form-label {
    flex-shrink: 0;
    white-space: nowrap;
    font-size: 15px;
  }

  .form-input {
    flex-grow: 1;
    min-width: 100px;
  }

  .form-input vaadin-combo-box {
    width: 100%;
    padding-right: 50px;
  }
  .width-label-130 > .form-label {
    width: 130px;
  }

  .width-label-140 > .form-label {
    width: 140px;
  }

  .width-label-150 > .form-label {
    width: 150px;
  }

  .width-label-160 > .form-label {
    width: 160px;
  }

  .width-label-180 > .form-label {
    width: 180px;
  }

  .width-label-190 > .form-label {
    width: 190px;
  }

  .width-label-200 > .form-label {
    width: 200px;
  }

  :host {
    display: block;
    width: 100%;
  }

  #controlTipos {
    width: 100%; /* Se asegura de que el combo box ocupe el espacio disponible */
    background-color: white;
    padding: 5px;
  }
}
`;
