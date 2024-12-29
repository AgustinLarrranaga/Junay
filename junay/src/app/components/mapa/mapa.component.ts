import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    standalone: true,
    selector: 'app-mapa',
    templateUrl: './mapa.component.html',
    styleUrls: ['./mapa.component.css']
})
export class MapaComponent {
    mapaUrl: SafeResourceUrl;

    constructor(private sanitizer: DomSanitizer) {
        const url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.6542456994753!2d-57.61102162743978!3d-38.00463655943924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d8d2036e97df%3A0xa914f117ca89d1e0!2sSan%20Salvador%209758%2C%20B7600GMJ%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1734401124137!5m2!1ses-419!2sar"
        this.mapaUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
