import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../servicios/http-service.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.css'
})
export class BienvenidoComponent implements OnInit
{

  userData: any;

  constructor(private gitHubService: HttpServiceService, private router: Router){

  }

  ngOnInit(): void {
      this.gitHubService.getApi().subscribe(data => {
      this.userData = data;
    });
  }

  redirectToLogin(){
    this.router.navigate(["Login"]);
  }
}
