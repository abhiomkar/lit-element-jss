import { customElement, html, LitElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

@customElement('mdc-button')
export class Button extends LitElement {
  @property()
  icon = '';

  @property()
  label = '';

  @property({type: String})
  classes  = '';

  @property({type: Boolean})
  unelevated = false

  @property({type: Boolean})
  outlined = false

  @property({type: Boolean})
  raised = false

  protected createRenderRoot() {
    return this;
  }

  get rootClasses() {
    return classMap({
      'mdc-button': true,
      'mdc-button--raised': this.raised,
      'mdc-button--unelevated': this.unelevated,
      'mdc-button--outlined': this.outlined,
      ...this.classes && {[this.classes]: true},
    });
  }

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    let icon = null;
    if (this.icon) {
      icon = html`<span class="mdc-button__icon">${this.icon}</span>`;
    }

    return html`
      <button class=${this.rootClasses} @click=${(e) => this.handleClick(e)}>
        ${icon}
        <span class="mdc-button__label">${this.label}</span>
      </button>`;
  }
}
