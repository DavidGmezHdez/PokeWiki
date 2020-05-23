import { Component, OnInit } from '@angular/core';
import { Usuario,AuthenticationService } from '../../services/authentication.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { PreloadAllModules, RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  usus: Usuario[] = [];
  usu: Usuario = <Usuario>{};
  private router: Router;
  constructor(private storage: AuthenticationService, private plt: Platform, private toastController: ToastController) {
    this.plt.ready().then(()=>{
      this.loadUsus();
    });
   }

  ngOnInit() {
  }

  loadUsus(){
    this.storage.getUsuarios();
  }

  register(){
    this.usu.id = this.usus.length + 1;;
    this.storage.addUsuario(this.usu)
    console.log("Usuario añadido ");
    console.log(this.usu);
    this.usu = <Usuario>{};
    this.showToast('Usuario Añadido');
    this.loadUsus();
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
