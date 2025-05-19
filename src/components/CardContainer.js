import { LitElement, html, css } from "lit";
import tailwindCss from "../index.css" assert { type: "css" };
import "./CardImage.js";
import "./CardTitle.js";
import "./CardText.js";
import "./CardButton.js";

export class CardContainer extends LitElement {
	static properties = {
		img: { type: String },
		title: { type: String },
		text: { type: String },
		button: { type: String },
	};

	// static styles = css`
	// 	div {
	// 		border: 1px solid #ccc;
	// 		padding: 16px;
	// 		border-radius: 8px;
	// 	}
	// `;

	static styles = [tailwindCss];

	render() {
		return html`
			<div class="border border-amber-500 rounded-lg shadow-lg p-4">
				<card-image .src=${this.img}></card-image>
				<card-title .text=${this.title}></card-title>
				<card-text .text=${this.text}></card-text>
				<card-button .label=${this.button}></card-button>
			</div>
		`;
	}
}
customElements.define("card-container", CardContainer);
