import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { WhatsappService } from '../../services/whatspp/whatsapp.service';
import { EmailService } from '../../services/email/email.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [FormsModule, NgIf, ReactiveFormsModule, CommonModule]
})
export class ContactComponent {

  mail = "ventasjunay@gmail.com"


  isMobile: boolean = false;
  contactForm: FormGroup;
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private emailService: EmailService, private whatsappService: WhatsappService) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      mensaje: ['', Validators.required],
    });
  }


  ngOnInit(): void {
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfMobile.bind(this));
  }

  checkIfMobile(): void {
    this.isMobile = window.innerWidth <= 997;
  }


  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      const formData = this.contactForm.value;

      this.emailService
        .sendEmail(formData)
        .then(() => {
          this.successMessage = 'El correo se envió correctamente.';
          this.contactForm.reset();
        })
        .catch((error) => {
          console.error('Error al enviar el correo:', error);
          this.errorMessage = 'Ocurrió un error al enviar el correo.';
        })
        .finally(() => {
          this.isSubmitting = false;
        });
    }
  }



  openWhatsApp(): void {
    this.whatsappService.openWhatsApp();
  }

  redirectToGoogleMaps(): void {
    const destination = 'San Salvador 9758, B7600GMJ Mar del Plata, Provincia de Buenos Aires';
  
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination)}`;
  
    window.open(mapsUrl, '_blank'); // Para abrir en una nueva pestaña
  }
  

  sendEmail(): void {
    const subject = encodeURIComponent('Consulta desde la pagina web');
    const body = encodeURIComponent('');
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${this.mail}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
}
}
