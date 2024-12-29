import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WhatsappService } from '../../services/whatspp/whatsapp.service';

@Component({
    standalone: true,
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
})
export class FooterComponent {


    constructor(private whatsappService: WhatsappService) { }

    openWhatsApp(): void {
        this.whatsappService.openWhatsApp();
    }

    openInstagram(): void {
        const instagramUrl = 'https://www.instagram.com/distribuidorajunay/';
        window.open(instagramUrl, '_blank'); // Abrir en una nueva pestaña
    }

    openFacebook(): void {
        const FacebookUrl = 'https://www.facebook.com/profile.php?id=61570521983692';
        window.open(FacebookUrl, '_blank'); // Abrir en una nueva pestaña
    }


}
