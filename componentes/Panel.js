import { LitElement, html, css } from "lit";
import "./Control-Tipos";

class Panel extends LitElement {
    render() {
        return html`
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <div class="panel">
                <slot></slot>
            </div>
        `;
    }

    static get styles() {
        return [
            css`
            :host{
                overflow: hidden;
                width: 100%;
                height: 90%;
            }
            .panel{
                margin: 10px;
                padding: 10px;
                border: 2px solid #C1CFA1;
                border-radius: 5px;
                align-items: center;
                flex-direction: column;
                align-items: center;
            }
            `];
    }
}
customElements.define("panel-central", Panel);