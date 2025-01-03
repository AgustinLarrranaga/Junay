import { Component, OnInit } from '@angular/core';
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
    constructor(private whatsappService: WhatsappService) { }

    ngOnInit(): void {
        this.checkIfMobile();
        window.addEventListener('resize', this.checkIfMobile.bind(this));
    }

    checkIfMobile(): void {
        this.isMobile = window.innerWidth <= 997;
    }

    openWhatsApp(): void {
        this.whatsappService.openWhatsApp();
    }

    onClickOferts(): void {
        const driveUrl = 'https://drive.google.com/file/d/1Z-3ae4Q2fAQoj1ictEahANJi3Rl7ckbf/view?usp=sharing';
        window.open(driveUrl);
    }
}
