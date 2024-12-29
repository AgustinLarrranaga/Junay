import { Component } from '@angular/core';
import { WhatsappService } from '../../services/whatspp/whatsapp.service';

@Component({
    standalone: true,
    selector: 'app-servicios',
    templateUrl: './servicios.component.html',
    styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {

    constructor(private whatsappService: WhatsappService) { }

    openWhatsApp(): void {
        this.whatsappService.openWhatsApp();
    }
}
