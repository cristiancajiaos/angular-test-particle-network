import { Component, OnInit } from '@angular/core';
declare var ParticleNetwork: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-particle-network';

  options: any;
  particleCanvas: any;

  ngOnInit() {
    this.options = {
      particleColor: '#fff',
      background: './../assets/imagenes-01.png',
      interactive: true,
      speed: 'fast'
    };
    this.particleCanvas = new ParticleNetwork(document.getElementById('particle-canvas'), this.options);
  }
}
