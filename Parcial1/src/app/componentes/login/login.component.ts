import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BehaviorServiceService } from '../../servicios/behavior-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent 
{
  email: string = '';
  password: string = '';

  constructor(public auth: Auth, private firestore: Firestore, private usuarioService: BehaviorServiceService, private route: Router) {}

  onLogin() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then(userCredential => {
        var usuarioAutenticado = {
          email: this.auth.currentUser?.email,
          verificado: this.auth.currentUser?.emailVerified ? "Verificado" : "No verificado"
        };
        this.usuarioService.guardarUsuarioActual(usuarioAutenticado);
        this.route.navigate(["Home"]);
        console.log('Logged in:', usuarioAutenticado);
      })
      .catch(error => {
        console.error('Error logging in:', error);
      });
  }

  quickLogin(profile: string) {
    if (profile === 'empleado') {
      this.email = 'profe1@example.com';
      this.password = 'profe123';
    } else if (profile === 'admin') {
      this.email = 'admin@example.com';
      this.password = 'admin123';
    }
  }
}
