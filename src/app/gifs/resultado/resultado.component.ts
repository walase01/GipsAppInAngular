import { Component } from '@angular/core';
import { GifsService } from '../service/gifs.service';
import { Data } from '../../interfaces/gifs.interface';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: [
  ]
})
export class ResultadoComponent {
  
  get resultados(){
    return this.gifsservice.resultados;
  }

  constructor(
      public gifsservice : GifsService
  ){ }
  

}
