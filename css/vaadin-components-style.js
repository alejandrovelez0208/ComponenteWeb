import { css } from "lit-element";

export const vaadin_components_style = css`
    vaadin-text-field::part(input-field) {
        font-weight: normal;
        font-size: 17px;
        background: none; 
        border: 1px solid Black;  
        padding: 3px;
        margin: 0;
        height: 40px;
    }

    vaadin-text-field::part(input-field):focus,
    vaadin-text-field::part(input-field):focus-within{
        border: 1px solid d7d8da;
        outline:none !important;
        box-shadow: none;
    }

    vaadin-text-field::part(label) {
        all: unset;
    }

    vaadin-text-field::part(helper-text) {
        all: unset;
    }

    vaadin-text-field::part(error-message) {
        all: unset;
    }

    vaadin-text-field {
        all: unset;
        background: none;
        border: none;
        box-shadow: none;
        margin: 0;
        padding: 5px;
    }

    vaadin-button {
        margin: 0;
        padding: 0;
        border: none;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);;


        font-weight: normal;
        color: inherit;
        width: auto;
        height: auto;
    }

    vaadin-button::part(label) {
        font-size: 17px;
        color: black;
        text-align: center;   
    } 
    
    vaadin-button.theme-1{
        background-color: #C1CFA1;
    }

`;
