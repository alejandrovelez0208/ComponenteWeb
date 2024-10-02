import { LitElement, html, css } from "lit-element";
import "@vaadin/vaadin-grid/vaadin-grid";
import { vaadin_components_style } from "../css/vaadin-components-style";

class ControlGrid extends LitElement {
    render() {
        return html`
<div class="content-control">
    <div class="from-input">
        <vaadin-grid id="controlGrid" style="padding-top: 50px;"></vaadin-grid>
    </div>
</div>
`;
    }

    constructor() {
        super();
    }

    static get properties() {
        return {
        };
    }

    static get styles() {
        return css`
            :host{
                display:block;
                width: 100%;
            }
            .content-control{
                height: 100%;
            }
        `, [vaadin_components_style];
    }
}
customElements.define("control-grid", ControlGrid);