### babel-plugin-remove-method-react
[![Build
Status](https://api.travis-ci.org/sanketmaru/babel-plugin-remove-method-react.svg?branch=master)](https://travis-ci.org/sanketmaru/babel-plugin-remove-method-react)

&nbsp;

Babel plugin that removes class methods and JSX elements based on conditions.

Conditions are passed based on env variables which are 
&nbsp;
*JSX_ENV* :- Remove JSX Elements matching with element name.
*CLASS_METHOD_ENV* :- Remove class methods ending with this string

&nbsp;

#### Example

Condition is that we want to remove desktop related code when viewing the web app in a mobile device.
This plugin helps to remove the code during the build time itself when a chunk is created.

Your `App.js` that contains this code:

```js
export default class App extends Component {

  handleClick_mobile() {
    console.log("Mobile Handle Click");
  }

  handleClick_desktop() {
    console.log("Desktop handle Click");
  }

  render() {
    return (
      <div>
        <table>
          <tr data-mobile onClick={this.handleClick_mobile.bind(this)}>
            <td>Mobile</td>
          </tr>
          <tr data-desktop onClick={this.handleClick_desktop.bind(this)}>
            <td>Web</td>
          </tr>
        </table>
      </div>
    );
  }
}
```

will be transpiled to:

```js
export default class App extends Component {

  handleClick_mobile() {
    console.log("Mobile Handle Click");
  }

  render() {
    return (
      <div>
        <table>
          <tr data-mobile onClick={this.handleClick_mobile.bind(this)}>
            <td>Mobile</td>
          </tr>
        </table>
      </div>
    );
  }
}
```

&nbsp;

#### You like?

:star: this repo

&nbsp;

#### License

MIT © [SanketMaru](https://github.com/sanketmaru)
