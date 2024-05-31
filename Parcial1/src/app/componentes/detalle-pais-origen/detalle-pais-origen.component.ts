import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-pais-origen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-pais-origen.component.html',
  styleUrls: ['./detalle-pais-origen.component.css']
})
export class DetallePaisOrigenComponent {
  @Input() paisOrigen!: string;
}
