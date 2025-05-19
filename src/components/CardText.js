import { LitElement, html } from "lit";

export class CardText extends LitElement {
	static properties = { text: { type: String } };

	render() {
		return html`<p>${this.text}</p>`;
	}
}
customElements.define("card-text", CardText);
