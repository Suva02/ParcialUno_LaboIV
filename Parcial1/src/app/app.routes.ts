import { Routes } from '@angular/router';

export const routes: Routes = 
[
    {
        path: '', redirectTo:'Bienvenido', pathMatch:'full'
    },
    {
        path:'Bienvenido', 
        loadComponent: () => import('./componentes/bienvenido/bienvenido.component').then((c) => c.BienvenidoComponent), 
    },
    {
        path:'Login', 
        loadComponent: () => import('./componentes/login/login.component').then((c) => c.LoginComponent), 
    },
    {
        path:'Home', 
        loadComponent: () => import('./componentes/home/home.component').then((c) => c.HomeComponent), 
    },
    {
        path:'AltaRepartidor', 
        loadComponent: () => import('./componentes/alta-repartidor/alta-repartidor.component').then((c) => c.AltaRepartidorComponent), 
    },
    {
        path:'DetalleRepartidor', 
        loadComponent: () => import('./componentes/repartidores/repartidores.component').then((c) => c.RepartidoresComponent), 
    },
];
