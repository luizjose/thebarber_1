import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, LoadingController} from '@ionic/angular';
import { ProvidersService } from '../providers.service';
import { Router } from '@angular/router'; 
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';
import { Keyboard } from '@ionic-native/keyboard/ngx';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage  {
  @ViewChild ("nome") nome;
 @ViewChild ("celular") celular;
  @ViewChild ("email") email;
  @ViewChild ("senha") senha;
// nome:any[];
// celular:any[];
// email:any[];
//senha:any[];

  constructor(
    private router: Router,
    public serviDor:ProvidersService,
    public navCtrl: NavController,
    public alertController: AlertController,
    public http: Http,
    public loading: LoadingController,
    public Keyboard: Keyboard
  ) {
   
     
   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }
  
 async cadastrarUser() {
 var data = {
    nome: this.nome.value,
    celular: this.celular.value,
    email: this.email.value,
    senha: this.senha.value   

  };

  if(this.nome == undefined){
    this.serviDor.alertas('Atenção', 'Prencher todos os campos');
  
    
    }else{ 
      
var headers = new Headers();
headers.append("Accept", 'application/json');
headers.append('Content-type', 'application/json');
let options = new RequestOptions({headers: headers});


this.http.post(this.serviDor.urlGet()+'cadastro.php',data,options
    ).pipe(map( res => res.json()))
    .subscribe(
      dados => {
        if(dados == "sucesso"){
          if  (dados == "sucesso"){
     this.router.navigateByUrl('/login');
      }}
else{
  this.serviDor.alertas('Atenção', 'Usuario ja cadastrado');
    }
  })
}}
  pagelogin () {
    this.router.navigateByUrl('/login');
  }

}
