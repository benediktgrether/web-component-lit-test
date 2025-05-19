import { LitElement, html, css } from "lit";

export class CardImage extends LitElement {
	static properties = { src: { type: String } };

	render() {
		return html`<img
			class="h-100 object-cover"
			src=${this.src}
			alt="Card Image"
		/>`;
	}
}
customElements.define("card-image", CardImage);
