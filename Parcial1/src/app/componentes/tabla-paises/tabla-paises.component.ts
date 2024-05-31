import { Component, EventEmitter, Output } from '@angular/core';
import { PaisesService } from '../../servicios/paises.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.css'
})
export class TablaPaisesComponent 
{
  @Output() paisSeleccionado = new EventEmitter<string>();
  paises: any[] = [];

  constructor(private paisService: PaisesService){}

  ngOnInit(): void {
    this.paisService.getPaises().subscribe(paises => {
      this.paises = paises;
    })
  }

  selectCountry(countryName: string) {
    this.paisSeleccionado.emit(countryName);
  }
}
