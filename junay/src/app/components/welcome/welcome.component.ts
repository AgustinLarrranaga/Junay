import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
    selector: 'app-welcome',
    standalone: true,
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'],
    imports: [CommonModule],
})
export class WelcomeComponent {

    activeLink: string = 'welcome';
    isMenuOpen: boolean = false; // Estado del menú hamburguesa
    isMobile: boolean = false; // Nueva variable para detectar versión móvil

    @Output() headerClicked = new EventEmitter<string>();

    links = [
        { label: 'Inicio', id: 'welcome' },
        { label: 'Servicios', id: 'servicios' },
        { label: 'Quiénes somos', id: 'about-us' },
        { label: 'Contacto', id: 'contact' },
    ];

    ngOnInit() {
        console.log(this.activeLink);

        this.checkScreenSize();
    }

    @HostListener('window:resize')
    checkScreenSize(): void {
        this.isMobile = window.innerWidth <= 795;
    }
    

    onClickHeader(link: string): void {        
        this.activeLink = link;
        this.headerClicked.emit(link);
        this.isMenuOpen = false; // Cierra el menú en móviles después de hacer clic
    }

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }

    onClickPrices(): void {
        const driveUrl = 'https://docs.google.com/spreadsheets/d/1mWkQSYucKVXFyFcI89obPaqq0II5KOcv/edit?usp=sharing&ouid=108523827306433214171&rtpof=true&sd=true';
        window.open(driveUrl);
    }

    onClickOferts(): void {
        const driveUrl = 'https://drive.google.com/file/d/1Z-3ae4Q2fAQoj1ictEahANJi3Rl7ckbf/view?usp=sharing';
        window.open(driveUrl);
    }
}
