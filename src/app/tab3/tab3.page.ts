import { Component, ViewChild } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ProvidersService } from '../providers.service';
import { AlertController, NavController } from '@ionic/angular';
import { map, toArray } from 'rxjs/operators';
import { DatePipe } from '@angular/common';




@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild ("phoras") phoras;
  @ViewChild ("nome") nome;
  @ViewChild ("telef")telef;
  @ViewChild ("apelido") apelido;
  @ViewChild ("datacad") datacad;
  @ViewChild ("horacad") horacad;

  resposta: any=[];
 

  constructor(
    public navCtrl: NavController,
    public alertController: AlertController,
    public serviDor:ProvidersService,
    public http: Http
  ) {
    
  }
  async gethoras(){
    var headers = new Headers();
    headers.append("Accept", "Access-Control-Allow-Origin: *");
    headers.append('Content-type', 'application/json');
    headers.append('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept', 'application/json');
    let options = new RequestOptions({headers: headers});

      console.log(this.datacad)
  
      this.http.post(this.serviDor.urlGet()+'dados.php?'+options,this.datacad)
    .pipe(map( res => res.json()))
     .subscribe(data  => 
  this.phoras = (data)
   //console.log(data)
      );   
}
async Agendar(){
  var agendar={
    nome:this.nome,
    telef:this.telef,
    apelido:this.apelido,
    datacad: this.datacad,
    horacad: this.horacad
  };
  var headers = new Headers();
  headers.append("Accept", "Access-Control-Allow-Origin: *");
  headers.append('Content-type', 'application/json');
  headers.append('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept', 'application/json');
  let options = new RequestOptions({headers: headers});

  
  console.log(agendar);
  this.http.post(this.serviDor.urlGet()+'agendamento.php?'+options,agendar)
  .pipe(map( res => res.json()))
   .subscribe(data  => 
 console.log(data)
    );   
  
}
}