import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapaComponent } from './mapa/mapa.component';
import { WhatsappButtonComponent } from './whatsapp-button/whatsapp-button.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { MarcasComponent } from './marcas/marcas.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MapaComponent, WhatsappButtonComponent,WelcomeComponent,ServiciosComponent,MarcasComponent,AboutUsComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'junay';
}
