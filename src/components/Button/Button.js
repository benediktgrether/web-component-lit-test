import { LitElement, html } from 'lit';
import tailwindCss from '../../index.css' assert { type: 'css' };

export class Button extends LitElement {
    static properties = { label: { type: String }, href: { type: String } };

    static styles = [tailwindCss];

    render() {
        if (this.href) {
            return html`<a
                class="bg-blue-300 hover:blue-500 text-white font-bold py-2 px-4 rounded"
                href="${this.href}"
                ><slot
            /></a>`;
        }
        return html`<button
            class="bg-blue-300 hover:blue-500 text-white font-bold py-2 px-4 rounded"
        >
            <slot />
        </button>`;
    }
}
customElements.define('ds-button', Button);
