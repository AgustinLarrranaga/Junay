import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { WhatsappService } from '../../services/whatspp/whatsapp.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-servicios',
    templateUrl: './servicios.component.html',
    styleUrls: ['./servicios.component.css'],
    imports: [CommonModule]
})
export class ServiciosComponent implements OnInit {
    isMobile: boolean = false;
    servicios = [
        { img: 'assets/preventistas.webp', alt: 'Preventistas' },
        { img: 'assets/revendedores.webp', alt: 'Revendedores' },
        { img: 'assets/shopInLocal.webp', alt: 'Compras en el local' },
        { img: 'assets/paymentMethod.webp', alt: 'Metodos de pago' }
    ];
    constructor(
        private whatsappService: WhatsappService,
        private el: ElementRef, // Para obtener referencia al DOM del componente
        private renderer: Renderer2 // Para manipular clases y eventos
    ) { }

    ngOnInit(): void {
        this.checkIfMobile();
        window.addEventListener('resize', this.checkIfMobile.bind(this));
        this.addTouchListeners();
    }

    checkIfMobile(): void {
        this.isMobile = window.innerWidth <= 997;
    }

    openWhatsApp(): void {
        this.whatsappService.openWhatsApp();
    }

    onClickOferts(): void {
        const driveUrl = 'https://drive.google.com/drive/folders/1ZBF8So3tIdaiCbypJMR8ccxhKS1nNk6B';
        window.open(driveUrl);
    }

    addTouchListeners(): void {
        const carouselTrack = this.el.nativeElement.querySelector('.carousel-track');

        // Pausar animación en touch
        this.renderer.listen(carouselTrack, 'touchstart', () => {
            this.renderer.addClass(carouselTrack, 'paused');
        });

        // Reanudar animación al terminar touch
        this.renderer.listen(carouselTrack, 'touchend', () => {
            this.renderer.removeClass(carouselTrack, 'paused');
        });
    }

}
