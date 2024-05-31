import { Component } from '@angular/core';
import { DetallePaisOrigenComponent } from '../detalle-pais-origen/detalle-pais-origen.component';
import { DetalleRepartidorComponent } from '../detalle-repartidor/detalle-repartidor.component';
import { ListadoRepartidoresComponent } from '../listado-repartidores/listado-repartidores.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repartidores',
  standalone: true,
  imports: [DetallePaisOrigenComponent, DetalleRepartidorComponent, ListadoRepartidoresComponent, FormsModule, CommonModule],
  templateUrl: './repartidores.component.html',
  styleUrls: ['./repartidores.component.css']
})
export class RepartidoresComponent {
  repartidorSeleccionado: any = null;

  onRepartidorSeleccionado(repartidor: any) {
    this.repartidorSeleccionado = repartidor;
  }
}
