import { LitElement, html } from "lit";

export class CardButton extends LitElement {
	static properties = { label: { type: String } };

	render() {
		return html`<button>${this.label}</button>`;
	}
}
customElements.define("card-button", CardButton);
