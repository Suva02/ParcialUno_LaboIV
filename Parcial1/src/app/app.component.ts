import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { addDoc, collection } from 'firebase/firestore';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FormsModule, CommonModule, BienvenidoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent
{
  
  constructor(private firestore: Firestore){}

}
