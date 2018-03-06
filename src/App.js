import React, { Component } from 'react';
import {Form} from 'semantic-ui-react'

import logo from './logo.svg';
import './App.css';

const queryString = require('query-string');

class App extends Component {
  render() {
    const search = queryString.parse(window.location.search);
    const name = search["name"];
    const value = search["value"];
    const product = search["product"];
    const membernumber  = search["membernumber"];

    return (
      <div className="App">
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid id='form-subcomponent-shorthand-input-first-name' label='First name' placeholder='First name' />
            <Form.Input fluid id='form-subcomponent-shorthand-input-last-name' label='Last name' placeholder='Last name' />
          </Form.Group>
        </Form>
        <form>
          <label>Name</label>
          <br/>
          <input
            name="name"
            type="text"
            value={name}
          />
          <br/>
          <br />

          <label>Amount</label>
          <br />
          <input
            name="value"
            type="text"
            value={value}
          />
          <br/>
          <br />

          <label>Product</label>
          <br />
          <input
            name="product"
            type="text"
            value={product}
          />
          <br/>
          <br/>
          <label>Member Number</label>
          <br />
          <input
            name="membernumber"
            type="text"
            value={membernumber}
          />
          <br/>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
