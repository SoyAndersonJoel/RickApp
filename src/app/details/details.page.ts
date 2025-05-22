import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PersonajeService } from '../services/personaje.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class DetailsPage {
  personaje: any;
  comentario: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personajeService: PersonajeService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.personajeService.obtenerPorId(id).subscribe((res) => {
        this.personaje = res;
      });
    }
  }

  async guardar() {
    if (this.personaje && this.comentario.trim()) {
      await this.personajeService.guardarPersonaje(this.personaje, this.comentario);
      alert('¡Personaje y comentario guardados en Firebase!');
      this.comentario = '';
    } else {
      alert('Por favor, escribe un comentario antes de guardar.');
    }
  }

  regresar() {
    this.router.navigate(['/']);
  }
}
