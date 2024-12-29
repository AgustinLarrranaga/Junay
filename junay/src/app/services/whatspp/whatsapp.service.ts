import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', 
})
export class WhatsappService {
  openWhatsApp(): void {
    const phoneNumber = '+5492234475381';
    const message = 'Hola vengo de la pagina web';
    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  }
}
