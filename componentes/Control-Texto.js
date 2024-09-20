import { LitElement, html, css } from "lit-element";
import "@vaadin/vaadin-text-field";
import { component } from "../css/component";
import { vaadin_components_style } from "../css/vaadin-components-style";

class ControlTexto extends LitElement {
    render() {
        return html`
<div class="form-box from-label-${this.plabel} width-label-${this.wlabel}">
    <div class="form-label">
        <label id="controlLabel">${this.customLabel}</label>
    </div>
    <div class="from-input">
        <vaadin-text-field id="controlTexto"></vaadin-text-field>
    </div>
</div>
`;
    }

    constructor() {
        super();
        this.customLabel = "";
        this.wlabel = "";
        this.plabel = "";
    }

    static get properties() {
        return {
            customLabel: {type: String},
            wlabel: { type: String },
            plabel: { type: String },
        };
    }

    static get styles() {
        return [component, vaadin_components_style];
    }
}
customElements.define("control-texto", ControlTexto);