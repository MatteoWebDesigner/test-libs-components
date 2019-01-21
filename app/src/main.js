import React from 'react';
import ReactDOM from 'react-dom';

import { Alert } from '@components';
import Button from '@components/Button.js';
import '@components/Button.css';
// import Alert from '@components/Alert';

let alert = new Alert();

let button = new Button();
 
class MyComponent extends React.Component {
  render() {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
  }
}
 
ReactDOM.render(<MyComponent />, document.getElementsByClassName('js-main')[0]);