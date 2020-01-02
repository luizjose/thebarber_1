import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuService } from '../adm/menu.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ProvidersService } from '../providers.service';
import { Http, RequestOptions, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admagenda',
  templateUrl: './admagenda.page.html',
  styleUrls: ['./admagenda.page.scss'],
})
export class AdmagendaPage  {
  @ViewChild ("horarios") horarios;
  @ViewChild ("datacad") datacad;
  

  constructor(
    private router: Router,
    public navCtrl: NavController,
    public menuService: MenuService,
    public serviDor:ProvidersService,
    public http: Http
  ) {}
    admagenda(){
    
      var consulta ={
        datacad: this.datacad        
      };
      var headers = new Headers();
      headers.append("Accept", "Access-Control-Allow-Origin: *");
      headers.append('Content-type', 'application/json');
      headers.append('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept', 'application/json');
      let options = new RequestOptions({headers: headers});
  
        console.log(this.datacad)
    
        this.http.post(this.serviDor.urlGet()+'agendaadm.php?'+options,consulta)
      .pipe(map( res => res.json()))
       .subscribe(data  => 
    this.horarios = (data)
  //  console.log(data)
        );  
  }
}
