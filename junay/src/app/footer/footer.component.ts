import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    standalone: true,
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
})
export class FooterComponent {

    
    redirectToWhatsApp(): void {
        const phoneNumber = '+5492234475381'; 
        const message = 'Hola vengo de la pagina web'; 
        const encodedMessage = encodeURIComponent(message);
        
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
        window.open(whatsappUrl, '_blank');
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
