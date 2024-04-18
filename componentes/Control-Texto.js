import { LitElement, html, css } from "lit-element";
import "@vaadin/vaadin-text-field";

class ControlTexto extends LitElement {
  render() {
    return html`
      <vaadin-text-field
        class="btn-input"
        label="${this.customLabel}"
      ></vaadin-text-field>
    `;
  }

  constructor() {
    super();
    this.customLabel = "";
  }

  static get properties() {
    return {
      customLabel: { type: String },
    };
  }

  static styles = css`
    .btn-input {
      width: 10px;
      padding: 10px;
    }
  `;
}
customElements.define("control-texto", ControlTexto);
