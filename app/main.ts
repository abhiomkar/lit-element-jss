import { customElement, html, LitElement} from 'lit-element';
import {createStyleSheet} from '../lib/jss';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  loginContainer: {
    "maxWidth": "350px",
    "textAlign": "center",
    "padding": "32px"
  },
  logo: {
    height: 48,
    width: 48,
    opacity: .5,
  },
  introText: {
    "lineHeight": "1.8",
    "marginLeft": "auto",
    "marginRight": "auto",
    "maxWidth": "300px",
    "color": "dimgray"
  },
  textField: {
    display: 'block',
    width: '100%',
    marginBottom: 16,
  },
  actionContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 32,
  },
  signUp: {
    color: "gray",
    marginRight: 12,
  },
};

const {classes} = createStyleSheet(styles);

@customElement('material-login')
export class Button extends LitElement {
  protected createRenderRoot() {
    return this;
  }

  get logoTemplate() {
    return html`
    <img class=${classes.logo}
      src="https://material-components.github.io/material-components-web-catalog/static/media/ic_material_design_24px.svg" alt="Material Logo">
    `;
  }

  render() {
    return html`
    <div class=${classes.root}>
      <div class="mdc-elevation--z5 ${classes.loginContainer}">
        ${this.logoTemplate}
        <h1 class="mdc-typography--headline6">Welcome, please login</h1>
        <p class="mdc-typography--body2 ${classes.introText}">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </p>
        <mdc-text-field classes=${classes.textField} outlined label="Username"></mdc-text-field>
        <mdc-text-field classes=${classes.textField} outlined label="Password"></mdc-text-field>
        <div class=${classes.actionContainer}>
          <mdc-button classes=${classes.signUp} label="Sign up"></mdc-button>
          <mdc-button label="Login" raised></mdc-button>
        </div>
      </div>
    </div>
    `;
  }
}
