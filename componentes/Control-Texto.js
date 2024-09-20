import { LitElement, html, css } from "lit-element";
import "@vaadin/vaadin-text-field";
import { component } from "../css/component";

class ControlTexto extends LitElement {
    render() {
        return html`
<div class="form-box  width-label-${this.wlabel}">
    <div class="form-label">
        <vaadin-text-field></vaadin-text-field>
    </div>
</div>
`;
    }

    constructor() {
        super();
        this.wlabel = "";
    }

    static get properties() {
        return {
            wlabel: { type: String },
        };
    }

    static get styles() {
        return [component];
    }
}
customElements.define("control-texto", ControlTexto);