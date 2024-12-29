import { Component } from '@angular/core';
import { WhatsappService } from '../../services/whatspp/whatsapp.service';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.css']
})
export class WhatsappButtonComponent {

  constructor(private whatsappService: WhatsappService) {}

    openWhatsApp(): void {
      this.whatsappService.openWhatsApp();
    }
}
