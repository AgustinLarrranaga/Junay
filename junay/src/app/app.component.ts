import { Component } from '@angular/core';
import { MapaComponent } from './components/mapa/mapa.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MapaComponent, WhatsappButtonComponent, WelcomeComponent, ServiciosComponent, MarcasComponent, AboutUsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'junay';

  handleHeaderClick(linkId: string): void {    
    setTimeout(() => {
      const element = document.getElementById(linkId);
      if (element) {
        const rect = element.getBoundingClientRect();
        window.scrollTo({
          top: window.scrollY + rect.top - (window.innerHeight / 2) + (rect.height / 2),
          behavior: 'smooth'
        });
      } 
    }, 0); 
  }
  
}
