import { Injectable } from '@angular/core';
import { Http, Headers,Response, HttpModule } from '@angular/http';
import { AlertController} from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
 // httpOptions = {
   // headers: new Headers({ 'Content-Type': 'application/json' })
 // };
 
  url: string = "http://ljcdev.com.br/site/php/"; 
  

  constructor(  
    public http: Http,
    public httpmodule: HttpModule,
    public alerta: AlertController) {
    console.log('Hello ServidorProvider Provider')
   }
   urlGet(){
    return this.url;
  }
  getHora(){
    }
    async alertas(titulo, msg){
      const alert = await this.alerta.create({
        header: titulo,
        message: msg,
        buttons:['OK']
      });
      await alert.present();
    }
  }
