import { customElement, html, LitElement, property } from 'lit-element';
import {getId} from './util';
import {createStyleSheet} from './jss';
import {MDCCheckbox} from '@material/mdc-checkbox';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    paddingLeft: '4px',
  }
}

const {classes} = createStyleSheet(styles);

@customElement('mdc-checkbox')
export class Radio extends LitElement {
  private id = getId();

  @property({type: String})
  label = '';

  @property({type: String})
  name = '';

  @property({type: Boolean})
  checked = false;

  protected createRenderRoot() {
    return this;
  }

  get labelTemplate() {
    if (!this.label) {
      return null;
    }

    return html`<label class="${classes.label} mdc-typography mdc-typography--body2" for=${this.id}>${this.label}</label>`;
  }

  render() {
    return html`
    <div class=${classes.root}>
      <div class="mdc-checkbox indeterminate-checkbox">
        <input type="checkbox"
              class="mdc-checkbox__native-control" ?checked=${this.checked} />
        <div class="mdc-checkbox__background">
          <svg class="mdc-checkbox__checkmark"
              viewbox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
      </div>
      ${this.labelTemplate}
    </div>
      `;
  }
}
