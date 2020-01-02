import { Component, ViewChild } from '@angular/core';
import { ProvidersService } from '../providers.service';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AlertController, NavController } from '@ionic/angular';
import { map, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.page.html',
  styleUrls: ['./horarios.page.scss'],
})
export class HorariosPage {
  @ViewChild ("consr") consr;
  @ViewChild ("nome") nome;
  @ViewChild ("telef")telef;
  @ViewChild ("datacad") datacad;

  constructor(
    public navCtrl: NavController,
    public alertController: AlertController,
    public serviDor:ProvidersService,
    public http: Http
  ) { }
    async consulta(){
      var consulta ={
        nome:this.nome,
        telef:this.telef,
        datacad: this.datacad        
      };
      var headers = new Headers();
      headers.append("Accept", "Access-Control-Allow-Origin: *");
      headers.append('Content-type', 'application/json');
      headers.append('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept', 'application/json');
      let options = new RequestOptions({headers: headers});
  
        console.log(this.datacad)
    
        this.http.post(this.serviDor.urlGet()+'consulta.php?'+options,consulta
        )
      .pipe(map( res => res.json()))
       .subscribe(data  => 
        this.consr = data
  //   console.log(data)
        );   
  }
  }

