import { inject } from '@angular/core';
import { CanActivateFn, CanDeactivateFn, CanActivateChildFn, CanMatchFn, Router } from '@angular/router';

//DEVUELVE UN TRUE SI SE PUEDE ENTRAR A UNA RUTA, SINO DEVUELVE FALSE O LO QUE QUEREMOS QUE HAGA
export const canActivateGuard: CanActivateFn = (route, state) => 
{
  // const servicio = inject(ServicioService);
  // const router = inject(Router);

  // if(servicio.usuarioLogeado()) 
  // {
       return true; 
  // }

  // return router.navigateByUrl('/Login');
};

//RECIBE UN GENERIC QUE ES EL COMPONENTE Y UN PARAMETRO 'component' PARA ACCEDER A LOS ATRIBUTOS DE ESE COMPONENTE.
//A PARTIR DE ESE PARAMETRO, PODEMOS MANIPULAR TODO LO QUE HAYA EN ESE COMPONENTE DENTRO DE ESTE METODO.
//ESTO SIRVE PARA CUANDO QUEREMOS SALIR DE UN FORMULARIO POR EJEMPLO...
export const canDeactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => 
{
  // const formManipulado = component.form.dirty; -> form es la variable formGroup declarada en el component.

  // if(formManipulado){
  //   console.log("Tiene cambios sin guardar!");
  //   return false;
  // }

  return true;
};

//ESO ME PERMITE INGRESAR A UNA RUTA HIJA O NO. Y, SE DECLARA EN EL ROUTE DEL COMPONENTE PADRE, ANTES DE DECLARAR EL HIJO
export const canActivateChildGuard: CanActivateChildFn = (childRoute, state) => 
{
  // const servicio = inject(ServicioService);
  // const router = inject(Router);

  // if(servicio.usuarioLogeado()) 
  // {
     return true; //RETORNA TRUE SI EL USUARIO ESTA LOGEADO
  // }

  // return false;
};

//DEVUELVE UN TRUE O FALSE DEPENDIENDO DE LA CONDICION QUE TENGAMOS (SI ES FALSE, EN EL ROUTES SE BUSCA UNA RUTA SIMILAR)
export const canMatchGuard: CanMatchFn = (route, segments) =>
{
  // const servicio = inject(ServicioService);
  // return servicio.usuarioLogeado();
  return true; 
};

