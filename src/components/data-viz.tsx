import { Component, State, Watch, h } from '@stencil/core';
import { arc, pie, PieArcDatum } from 'd3-shape';
import { DefaultArcObject } from 'd3-shape';

declare const d3: any;

interface DataItem {
  label: string;
  value: number;
}

@Component({
  tag: 'data-viz',
  styleUrl: 'data-viz.css',
  shadow: true,
})
export class DataViz {
  @State() data: DataItem[] = [];
  @State() dataType: 'string' | 'number' | 'boolean' = 'string';
  @State() inputValue: string | number | boolean = '';

  componentDidLoad() {
    console.log('componentDidLoad');
    this.renderBarChart();
    this.renderPieChart();
  }

  @Watch('data')
  dataChangedHandler() {
    this.renderBarChart();
    this.renderPieChart();
  }

  chartContainerBar?: HTMLDivElement;
  chartContainerPie?: HTMLDivElement;
  handleInputChange(event: Event, index: number, key: keyof DataItem) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    if (this.data[index]) {
      this.data[index] = { ...this.data[index], [key]: value };
    }
  }

  addData() {
    if (this.inputValue !== '') {
      let value: any = this.inputValue;

      if (this.dataType === 'number') {
        value = parseFloat(value);
      } else if (this.dataType === 'boolean') {
        value = value === 'true';
      }

      this.data = [...this.data, { label: `Category ${this.data.length + 1}`, value }];

      this.inputValue = '';
    }
  }

  handleAddData() {
    this.data = [...this.data, { label: '', value: 0 }];
  }

  handleRemoveData(index: number) {
    this.data = this.data.filter((_, i) => i !== index);
  }
  renderDataForm() {
    return (
      <div class="data-form">
        {this.data.map((item, index) => (
          <div class="data-item">
            <input type="text" placeholder="Label" value={item.label} onInput={event => this.handleInputChange(event, index, 'label')} />
            <input type="number" placeholder="Value" value={item.value} onInput={event => this.handleInputChange(event, index, 'value')} />
            <button onClick={() => this.handleRemoveData(index)}>Remove</button>
          </div>
        ))}
        <button onClick={() => this.handleAddData()}>Add Data</button>
      </div>
    );
  }

  clearBarChart() {
    const barChartContainer = d3.select('#bar-chart');
    barChartContainer.selectAll('*').remove();
  }

  clearPieChart() {
    const pieChartContainer = d3.select('#pie-chart');
    pieChartContainer.selectAll('*').remove();
  }

  renderBarChart() {
    this.clearBarChart(); // Clear the previous bar chart

    const chartContainer = document.getElementById('bar-chart') as HTMLElement;
    if (!chartContainer) return;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    const width = 300 - margin.left - margin.right;
    const height = 200 - margin.top - margin.bottom;

    const svg = d3
      .select(chartContainer) // Use D3.js to select the chart container
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const xScale = d3
      .scaleBand()
      .domain(this.data.map(d => d.label))
      .range([0, width])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(this.data, d => d.value)])
      .range([height, 0]);

    svg
      .selectAll('.bar')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(d.label))
      .attr('y', d => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - yScale(d.value))
      .attr('fill', 'steelblue');

    // Add x-axis
    svg.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(xScale));

    // Add y-axis
    svg.append('g').call(d3.axisLeft(yScale));
  }

  renderPieChart() {
    this.clearPieChart();

    const chartContainer = document.getElementById('pie-chart') as HTMLElement;
    if (!chartContainer) return;

    const width = 200;
    const height = 200;
    const radius = Math.min(width, height) / 2;

    const svg = d3
      .select(chartContainer) // Use D3.js to select the chart container
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const color = d3.scaleOrdinal(d3.schemeCategory10);
    const arcChart = arc<PieArcDatum<DataItem>, DefaultArcObject>().innerRadius(0).outerRadius(radius);

    const pieChart = pie<DataItem>().value(d => d.value);

    const dataReady = pieChart(this.data);

    svg
      .selectAll('path')
      .data(dataReady)
      .enter()
      .append('path')
      .attr('class', 'slice')
      .attr('d', function (d) {
        return arcChart.call(this, d) as string;
      })
      .attr('fill', (_, i) => color(i));
  }

  render() {
    return (
      <div class="container">
        <div class="data-input">
          {this.renderDataForm()} <p>This dashboard allows you to input data and visualize it using various chart types like bar chart and pie chart.</p>
        </div>
        {/* <div class="chart" id="bar-chart"></div>
        <div class="chart" id="pie-chart">
          {' '}
          {this.renderPieChart()}
        </div> */}
        {/* <my-3d-chart data={this.data}></my-3d-chart> */}
      </div>
    );
  }
}
