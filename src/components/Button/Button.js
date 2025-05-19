import { LitElement, html } from 'lit';

export class Button extends LitElement {
    static properties = { label: { type: String }, href: { type: String } };

    render() {
        if (this.href) {
            return html`<a href="${this.href}"><slot /></a>`;
        }
        return html`<button><slot /></button>`;
    }
}
customElements.define('ds-button', Button);
