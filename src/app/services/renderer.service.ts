import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

@Injectable({
  providedIn: 'root'
})
export class RendererService {

  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  controls: OrbitControls;

  public initRenderer(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.update();
    this.camera.position.z = 5;
  }

  // public addControls() {
  //   var geometry = new THREE.BoxGeometry(1, 1, 1);
  //   var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  //   var cube = new THREE.Mesh(geometry, material);
  //   this.scene.add(cube);
  // }

  public addSeat() {
    var material = new THREE.MeshBasicMaterial({
      color: 0x0000ff
    });
    var radius = 1;
    var segments = 20;
    var circleGeometry = new THREE.CircleGeometry(radius, segments);
    var xDistance = 5;
    var yDistance = 5;
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 3; j++) {
        var mesh = new THREE.Mesh(circleGeometry, material);
        mesh.position.x = (xDistance * i);
        mesh.position.y = (yDistance * j);
        mesh.on('mouseover', (ev) => this.mouseOver(ev));
        mesh.on('mouseout', (ev) => this.mouseOut(ev));
        this.scene.add(mesh);
      }
    };
  }

  mouseOut(ev: any) {
    console.log("mouseOut");
  }

  mouseOver(ev: any) {    
    console.log("mouseOver");
  }

  public render = () => {
    requestAnimationFrame(this.render);
    this.renderer.render(this.scene, this.camera);
  }
}
