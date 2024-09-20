import { css } from "lit-element";

export const vaadin_components_style = css`
    vaadin-text-field::part(input-field) {
        font-weight: normal;
        font-size: 18px;
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
`;
