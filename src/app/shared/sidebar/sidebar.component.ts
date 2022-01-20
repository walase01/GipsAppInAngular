import { Component } from '@angular/core';

import { GifsService } from '../../gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  constructor(
    public gifsService : GifsService
  ){ }

  get historial(){
    return this.gifsService.historial;
  }

  buscar( item : string){
    console.log(item);
    this.gifsService.buscarGifs(item);
  }

}
