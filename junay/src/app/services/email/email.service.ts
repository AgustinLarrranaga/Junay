import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  sendEmail(formData: { nombre: string; email: string; telefono: string; mensaje: string }): Promise<any> {
    const serviceID = 'service_4s094a4'; 
    const templateID = 'template_vaa42oc'; 
    const publicKey = 'PEsLTDpoy2wcD05kL'; 

    const templateParams = {
      from_name: formData.nombre,
      from_email: formData.email,
      phone: formData.telefono,
      mensaje: formData.mensaje,
    };

    return emailjs.send(serviceID, templateID, templateParams, publicKey);
  }
}
