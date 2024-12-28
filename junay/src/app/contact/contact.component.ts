import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    standalone: true,
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    imports: [FormsModule]
})
export class ContactComponent {

    mail = "ventasjunay@gmail.com"
    
    onSubmit() {
        alert('Formulario enviado correctamente');
      }


      redirectToGoogleMaps(): void {
        navigator.geolocation.getCurrentPosition((position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
    
          // Coordenadas o dirección del destino
          const destination = 'San Salvador 9758, B7600GMJ Mar del Plata, Provincia de Buenos Aires'; // Ejemplo con dirección
          // const destination = '-34.603684, -58.381559'; // Ejemplo con coordenadas
    
          const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${encodeURIComponent(destination)}`;
    
          // Abrir en una nueva pestaña
          window.open(mapsUrl, '_blank');
        },
        (error) => {
          console.error('Error al obtener la ubicación:', error);
          alert('No se pudo obtener tu ubicación. Verifica los permisos.');
        });
      }


      redirectToWhatsApp(): void {
        const phoneNumber = '+5492234475381'; 
        const message = 'Hola vengo de la pagina web'; 
        const encodedMessage = encodeURIComponent(message);
        
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
        window.open(whatsappUrl, '_blank');
      }

      sendEmail(): void {
        const email = 'destinatario@example.com'; // Dirección del destinatario
        const subject = 'Consulta desde mi aplicación'; // Asunto del correo
        const body = 'Hola,\n\nQuería consultarte sobre lo siguiente:\n\nSaludos.'; // Cuerpo del correo
    
        // Construcción del enlace mailto
        const mailtoLink = `mailto:${this.mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        console.log(mailtoLink)
        // Redirigir al enlace mailto
        window.location.href = mailtoLink;
      }
}
