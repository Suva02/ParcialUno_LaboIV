import { Component } from '@angular/core';
import { TablaPaisesComponent } from '../tabla-paises/tabla-paises.component';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { CommonModule } from '@angular/common';


interface Repartidor {
  dni: string;
  nombre: string;
  apellido: string;
  edad: number;
  capacidadTransporte: number;
  unidadPropia: boolean;
  pais: string;
}

@Component({
  selector: 'app-alta-repartidor',
  standalone: true,
  imports: [TablaPaisesComponent, RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './alta-repartidor.component.html',
  styleUrl: './alta-repartidor.component.css'
})
export class AltaRepartidorComponent 
{
  form!: FormGroup;
  repartidor =
  {
    pais: ''
  };

  constructor(private firestore: Firestore){

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      dni: new FormControl("", [Validators.required, Validators.pattern('^[0-9]+$')]),
      nombre: new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      apellido: new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      edad: new FormControl("", [Validators.required, Validators.min(18), Validators.max(65)]),
      capacidadTransporte: new FormControl("", [Validators.required, Validators.min(1)]),
      unidadPropia: new FormControl("", Validators.required),
    });
  }

  get dni() {
    return this.form.get("dni");
  }

  get nombre() {
    return this.form.get("nombre");
  }

  get apellido() {
    return this.form.get("apellido");
  }

  get edad() {
    return this.form.get("edad");
  }

  get capacidadTransporte() {
    return this.form.get("capacidadTransporte");
  }

  get unidadPropia() {
    return this.form.get("unidadPropia");
  }

  get mail() {
    return this.form.get("mail");
  }

  get direccionUno() {
    return this.form.get("direccionUno");
  }

  get direccionDos() {
    return this.form.get("direccionDos");
  }

  enviarForm() {
    if (this.form.valid)
    {
      let newRepartidor: Repartidor = {
        dni: this.dni?.value,
        nombre: this.nombre?.value,
        apellido: this.apellido?.value,
        edad: this.edad?.value,
        capacidadTransporte: this.capacidadTransporte?.value,
        unidadPropia: this.unidadPropia?.value,
        pais: this.repartidor.pais
      };

      let col = collection(this.firestore, 'Repartidores');
      addDoc(col, newRepartidor)
        .then(resultado => this.form.reset())
        .catch(error => console.log("Se produjo el siguiente error: " + error));
    } else {
      console.log("El formulario no es válido");
    }
  }
}
