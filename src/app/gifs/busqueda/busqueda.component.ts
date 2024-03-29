import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent{
    
  @ViewChild('txtBuscar') txtBuscar : ElementRef<HTMLInputElement>;

  constructor(
    public gifsService : GifsService
  ){}

  buscar(){

    let value = this.txtBuscar.nativeElement.value;
    if(value.trim().length === 0){
      return;
    }
    this.gifsService.buscarGifs(value);
    this.txtBuscar.nativeElement.value = '';
  }

}
