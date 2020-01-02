import { Component } from '@angular/core';
import { NavController, AlertController} from '@ionic/angular';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { ProvidersService } from '../providers.service';
import { Router } from '@angular/router'; 
import { Keyboard } from '@ionic-native/keyboard/ngx';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string;
  senha: string;
  dados: any;

  constructor(
    private router: Router,
    public navCtrl: NavController,
    public alertController: AlertController,
    public serviDor:ProvidersService,
    public http: Http,
    public Keyboard: Keyboard) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  }
  
  async presentAlertlogar() {
    if(this.email == undefined || this.senha == undefined){
    this.serviDor.alertas('atenção', 'prencher todos os campos');

    
    }else{
      this.http.get(this.serviDor.urlGet()+'login.php?email='+this.email+'&senha='+this.senha
      ).pipe(map( res => res.json()))
       .subscribe(
         dados => {
         if(dados.msg.logado == "sim"){
          if  (dados.dados.status == "ativo"){
            if  (dados.dados.nivel == "2"){
              this.router.navigateByUrl('/admagenda');
            }else{
              this.router.navigateByUrl('/tabs');
            }
 }else{
   this.serviDor.alertas('atenção', 'usuario não cadastrado');
 }
}else{
  this.serviDor.alertas('atenção', 'usuario ou senha não cadastrado');
}
        }
       )
      }
    }
    pagecadastro(){
      this.router.navigateByUrl('/cadastro');
    }
   
  }