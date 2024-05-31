import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

@Component({
  selector: 'app-listado-repartidores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-repartidores.component.html',
  styleUrls: ['./listado-repartidores.component.css']
})
export class ListadoRepartidoresComponent implements OnInit {
  @Output() repartidorSeleccionado = new EventEmitter<any>();
  listaRepartidores: any[] = [];

  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    this.obtenerRepartidores();
  }

  seleccionarRepartidor(repartidor: any) {
    this.repartidorSeleccionado.emit(repartidor);
  }

  obtenerRepartidores() {
    const col = collection(this.firestore, 'Repartidores');
    const observable = collectionData(col);

    observable.subscribe((respuesta) => {
      this.listaRepartidores = respuesta;
      console.log(respuesta);
    });
  }
}
