import { Component, OnInit } from '@angular/core';
import { Poke,StorageService } from '../../services/storage.service';
import { Usuario,AuthenticationService } from '../../services/authentication.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { PreloadAllModules, RouterModule, Routes, Router } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usus: Usuario[] = [];
  usu: Usuario = <Usuario>{};
  constructor(private storage: AuthenticationService, private plt: Platform, private toastController: ToastController) { 
    
    this.plt.ready().then(()=>{
      this.loadUsuarios();
    });

  }

  ngOnInit() {
  }

  loadUsuarios(){
    this.storage.getUsuarios().then(usus=>{
      console.log(this.usus);
      this.usus = usus;
    });
    
  }

  login(){
    console.log(this.usu);
    console.log(this.usus);
    if(!this.usus || this.usus.length == 0){
      return false;
    }

    for(let i of this.usus){
      if(i.email === this.usu.email){
        if(i.pass === this.usu.pass){
          this.storage.getPokesEquipo(this.usu).then (pokes=>{
            console.log(pokes);
            this.usu.pokes = pokes;
          });
          this.storage.setUsuarioActivo(this.usu);
          this.showToast("Logueado con exito")
          this.storage.setEstado(true);
          return true;
        }
      }
    }
    this.showToast("Datos no correctos, inténtelo de nuevo")
    return false;
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
