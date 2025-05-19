import { LitElement, html } from "lit";

export class CardTitle extends LitElement {
	static properties = { text: { type: String } };

	render() {
		return html`<h2>${this.text}</h2>`;
	}
}
customElements.define("card-title", CardTitle);
