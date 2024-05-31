import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorServiceService {

  private usuarioActualHandler: BehaviorSubject<any>;

    constructor()
    {
      this.usuarioActualHandler = new BehaviorSubject(null);
    }

    guardarUsuarioActual(objetoAGuardar: any)
    {
        this.usuarioActualHandler.next(objetoAGuardar);
    }


    get ObtenerObjetoActual ()
    {
        return this.usuarioActualHandler.asObservable();
    }

    eliminarUsuarioActual()
    {
        this.usuarioActualHandler.next(null);
    }
}
