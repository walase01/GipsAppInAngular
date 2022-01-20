import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse } from 'src/app/interfaces/gifs.interface';
import { Data } from '../../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private GifsAPIKey : string = '7sUQmKKmMQ2NFcY32fWOfC7l2E0X9ZdG';
  private ServicioUrl : string = 'https://api.giphy.com/v1/gifs';
  private _historial : string[] = [];
  public resultados : Data[] = [];

    get historial(){
      return [...this._historial];
    }

    constructor(
        private http : HttpClient
    ){
      this._historial = JSON.parse( localStorage.getItem('historial')! ) || [];
      this.resultados = JSON.parse( localStorage.getItem('resultados')! ) || [];
      // if(localStorage.getItem('historial')){
      //   this._historial = JSON.parse(localStorage.getItem('historial')!);
      // }
    }

    buscarGifs( query: string = ''){
  
      query = query.trim().toLowerCase();

      if(!this._historial.includes(query)){
        this._historial.unshift( query );
        this._historial = this._historial.splice(0,10);
        localStorage.setItem('historial',JSON.stringify(this._historial));
      }

      const params = new HttpParams()
          .set('api_key',this.GifsAPIKey)
          .set('limit','10')
          .set('q',query);

        console.log(params.toString());

      this.http.get<SearchGifsResponse>(`${this.ServicioUrl}/search`,{params:params})
            .subscribe( response  =>  {
              console.log(response.data);
              this.resultados = response.data;
              localStorage.setItem('resultados',JSON.stringify(this.resultados));
            }); 
    }


}
