import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-welcome',
    standalone: true,
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'],
    imports: [CommonModule],
})
export class WelcomeComponent {

    activeLink: string = 'inicio';

    @Output() headerClicked = new EventEmitter<string>();

    links = [
        { label: 'Inicio', id: 'welcome' },
        { label: 'Servicios', id: 'servicios' },
        { label: 'Quiénes somos', id: 'about-us' },
        { label: 'Contacto', id: 'contact' },
      ];

    onClickHeader(link: string): void {
        this.activeLink = link;
        this.headerClicked.emit(link)
    }

    onClickPrices(): void {
        const driveUrl = '';
        window.open(driveUrl);
    }

    onClickOferts(): void {
        const driveUrl = 'https://drive.google.com/file/d/1Z-3ae4Q2fAQoj1ictEahANJi3Rl7ckbf/view?usp=sharing';
        window.open(driveUrl);
    }



}

