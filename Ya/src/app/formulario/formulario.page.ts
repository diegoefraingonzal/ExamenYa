import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage {
  pelicula = {
    nombre: '',
    anio: '',
    productor: '',
    casa: '',
    protagonista: ''
  };

  peliculas: any[] = [];

  agregarPelicula() {
    if (this.pelicula.nombre && this.pelicula.anio && this.pelicula.productor && this.pelicula.casa && this.pelicula.protagonista) {
      this.peliculas.push({ ...this.pelicula });
      this.pelicula = { nombre: '', anio: '', productor: '', casa: '', protagonista: '' };
    }
  }
}
