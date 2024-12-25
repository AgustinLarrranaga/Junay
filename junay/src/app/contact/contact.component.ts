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
}
