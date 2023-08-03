import { Component, h } from '@stencil/core';

@Component({
  tag: 'dash-board',
  styleUrl: 'dash-board.css',
  shadow: true,
})
export class Dashboard {
  render() {
    return (
      <div class="container">
        <h1>Welcome to my Data Visualization Dashboard</h1>
        <data-viz></data-viz>
      </div>
    );
  }
}
