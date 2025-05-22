import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [IonicModule, CommonModule],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Detalle del Personaje</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" *ngIf="personaje">
      <ion-card>
        <img [src]="personaje.image" />
        <ion-card-header>
          <ion-card-title>{{ personaje.name }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p><strong>Estado:</strong> {{ personaje.status }}</p>
          <p><strong>Especie:</strong> {{ personaje.species }}</p>
          <p><strong>Género:</strong> {{ personaje.gender }}</p>
        </ion-card-content>
      </ion-card>
    </ion-content>
  `,
})
export class DetailsPage {
  personaje: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`https://rickandmortyapi.com/api/character/${id}`)
      .subscribe((res) => this.personaje = res);
  }
}
