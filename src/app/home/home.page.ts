import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, RouterModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  searchTerm = '';
  personajeEncontrado: any = null;
  noEncontrado = false;

  constructor(private http: HttpClient) {}

  buscarPersonaje() {
    if (!this.searchTerm.trim()) return;

    this.http.get<any>(`https://rickandmortyapi.com/api/character/?name=${this.searchTerm.trim()}`)
      .subscribe({
        next: (res) => {
          this.personajeEncontrado = res.results[0];
          this.noEncontrado = false;
        },
        error: () => {
          this.personajeEncontrado = null;
          this.noEncontrado = true;
        }
      });
  }
}
