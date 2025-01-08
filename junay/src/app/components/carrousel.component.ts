import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel"  data-bs-interval="2500">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="d-flex flex-wrap justify-content-center gap-3">
            <div class="carousel-card">
              <img src="/assets/w7.webp" alt="Imagen 7">
            </div>
            <div class="carousel-card">
              <img src="/assets/w2.webp" alt="Imagen 2">
            </div>
            <div class="carousel-card">
              <img src="/assets/w3.webp" alt="Imagen 3">
            </div>
            <div class="carousel-card">
              <img src="/assets/w1.webp" alt="Imagen 1">

            </div>
          </div>
        </div>
  
         <div class="carousel-item">
          <div class="d-flex flex-wrap justify-content-center gap-3">
            <div class="carousel-card">
              <img src="/assets/w5.webp" alt="Imagen 5">
            </div>
            <div class="carousel-card">
              <img src="/assets/w6.webp" alt="Imagen 6">
            </div>
            <div class="carousel-card">
            <img src="/assets/w4.webp" alt="Imagen 4">
            </div>
            <div class="carousel-card">
              <img src="/assets/w8.webp" alt="Imagen 8">
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-flex flex-wrap justify-content-center gap-3">
        
            <div class="carousel-card">
              <img src="/assets/w9.webp" alt="Imagen 9">
            </div>
            <div class="carousel-card">
              <img src="/assets/w10.webp" alt="Imagen 10">
            </div>
            <div class="carousel-card">
              <img src="/assets/w11.webp" alt="Imagen 11">
            </div>
            <div class="carousel-card">
              <img src="/assets/w12.webp" alt="Imagen 12">
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
  `,
  styles: [`
    .carousel-inner {
      display: flex;
      align-items: center;
    }

    .carousel-item {
      transition: transform 0.5s ease-in-out;
    }

    .carousel-card {
      flex: 0 0 calc(25% - 15px);
      max-width: calc(25% - 15px);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .carousel-card img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 10px;
    }

    .carousel-control-prev,
    .carousel-control-next {
      width: 5%;
    }

    @media (max-width: 768px) {
      .carousel-card {
        flex: 0 0 calc(50% - 10px);
        max-width: calc(50% - 10px);
      }
    }

    @media (max-width: 480px) {
      .carousel-card {
        flex: 0 0 100%;
        max-width: 100%;
      }
    }
  `]
})
export class CarouselComponent { }
