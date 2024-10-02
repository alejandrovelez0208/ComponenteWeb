import { LitElement, html, css } from "lit";
import '@vaadin/button/vaadin-button';
import '@vaadin/icons';
import { component } from "../css/component";
import { vaadin_components_style } from "../css/vaadin-components-style";

class ControlButton extends LitElement {
    render() {
        return html`
            <vaadin-button id="controlButton" class="theme-${this.theme}">
                <vaadin-icon icon="vaadin:plus-circle-o"></vaadin-icon>
                ${this.customLabel}
            </vaadin-button>
        `;
    }

    constructor() {
        super();
        this.customLabel = "";
        this.theme = "";
    }

    static get properties() {
        return {
            customLabel: { type: String },
            theme : {type: String}
        }
    }

    static get styles() {
        return [
            css`
                :host{
                    display: inline-block;
                    width: auto;
                }
                #controlButton{
                    width: 100%;
                }
            `,
            vaadin_components_style, component];
    }
}
customElements.define("control-button", ControlButton);