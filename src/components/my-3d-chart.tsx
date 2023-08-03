import { Component, h, Prop } from '@stencil/core';
import * as THREE from 'three';
import { DataItem } from '../utils/data-item';

@Component({
  tag: 'my-3d-chart',
  styleUrl: 'my-3d-chart.css',
  shadow: true,
})
export class My3DChart {
  @Prop() data: DataItem[] = [];

  componentDidLoad() {
    console.log('My3DChart componentDidLoad');
    this.render3DChart();
  }

  render3DChart() {
    const chartContainer = document.getElementById('3d-chart');
    chartContainer.innerHTML = '';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, chartContainer.clientWidth / chartContainer.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(chartContainer.clientWidth, chartContainer.clientHeight);
    chartContainer.appendChild(renderer.domElement);

    // Create 3D bars based on user data
    const barWidth = 1;
    const barDepth = 1;
    const barMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    this.data.forEach((item, index) => {
      const barHeight = item.value;
      const geometry = new THREE.BoxGeometry(barWidth, barHeight, barDepth);
      const bar = new THREE.Mesh(geometry, barMaterial);

      bar.position.x = index * 3;
      bar.position.y = barHeight / 2;
      bar.position.z = 0;

      scene.add(bar);
    });

    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    // Start the animation loop
    animate();
    console.log('render3DChart() called');
    console.log('Data:', this.data);
    console.log('3D chart created');
  }

  render() {
    return (
      <div class="chart-container">
        <h2>3D Visualization</h2>
        <div class="chart" id="3d-chart"></div>
      </div>
    );
  }
}
