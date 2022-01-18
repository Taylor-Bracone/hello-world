/**
 * This is the file that actually defines the element. it includes the methods and attributes that the element needs to function.
 */

import { html, css, LitElement } from 'lit';

export class HelloWorld extends LitElement {

// returns basic styling for the element
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }
    `;
  }

  // returns the title and object properties that are contained in the object
  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  // instantiates the HelloWorld object when the "define() function is called in hello-world.js"
  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  // function that increases the counter property by 1 when the button in the web component is pressed
  __increment() {
    this.counter += 1;
    
  }

  // function that decreases the counter property by 1 when the button in the web component is pressed
  __decrement(){
    if(this.counter > 0){
      this.counter -= 1;
    }else if (this.counter < 0){
      this.counter = 0;
    }
  }

  // function that actually returns HTML that will be inserted into the page when the hello-world element is referenced
  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__decrement}>decrement</button>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}

