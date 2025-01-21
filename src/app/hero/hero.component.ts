import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  images = [
    { src: './images/image1.gif', alt: 'Imagen de Apple Watch', title: 'Imagen de Apple Watch', ariaLabel: 'Apple Watch' },
    { src: './images/image2.jpg', alt: 'Imagen de deportista', title: 'Imagen de deportista', ariaLabel: 'Deportista' },
    { src: './images/image3.jpg', alt: 'Imagen de modelo', title: 'Imagen de modelo', ariaLabel: 'Modelo' },
    { src: './images/image4.gif', alt: 'Imagen de Smart Watch', title: 'Imagen de Smart Watch', ariaLabel: 'Smart Watch' },
    { src: './images/image5.gif', alt: 'Imagen de oro falso', title: 'Imagen de oro falso', ariaLabel: 'Oro falso' },
    { src: './images/image6.jpg', alt: 'Imagen de pintura', title: 'Imagen de pintura', ariaLabel: 'Pintura' },
    { src: './images/image7.gif', alt: 'Imagen de celular', title: 'Imagen de celular', ariaLabel: 'Celular' },
    { src: './images/image8.png', alt: 'Imagen de auto', title: 'Imagen de auto', ariaLabel: 'Auto' }
  ];
}
