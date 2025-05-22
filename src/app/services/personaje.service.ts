import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class PersonajeService {
  private baseUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient, private firestore: Firestore) {}

  // Buscar personaje por nombre
  buscarPorNombre(nombre: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/?name=${nombre}`);
  }

  // Obtener personaje por ID
  obtenerPorId(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  // Guardar personaje en Firestore
  async guardarPersonaje(personaje: any, comentario: string): Promise<void> {
    const personajesRef = collection(this.firestore, 'personajes');
    await addDoc(personajesRef, {
      id: personaje.id,
      nombre: personaje.name,
      estado: personaje.status,
      especie: personaje.species,
      genero: personaje.gender,
      imagen: personaje.image,
      comentario: comentario,
      fecha: new Date(),
    });
  }
}
