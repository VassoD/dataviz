import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'custom-button',
  styleUrl: 'custom-button.css',
  shadow: true,
})
export class CustomButton {
  @State() buttonText = 'Click Me';
  @State() buttonColor = 'blue';

  handleClick() {
    this.buttonText = 'Clicked!';
    this.buttonColor = 'green';
  }

  render() {
    return (
      <button onClick={() => this.handleClick()} style={{ backgroundColor: this.buttonColor }}>
        {this.buttonText}
      </button>
    );
  }
}
