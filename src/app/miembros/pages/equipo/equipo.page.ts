import { Component, OnInit } from '@angular/core';
import { Poke,StorageService } from '../../../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { Usuario,AuthenticationService } from '../../../services/authentication.service';


@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.page.html',
  styleUrls: ['./equipo.page.scss'],
})

export class EquipoPage {


  pokes: Poke[] = [];
  poke: Poke= <Poke>{};
  descending: boolean = false;
  order: number;


  constructor(private storageService: StorageService, private usuarios: AuthenticationService,private plt: Platform, private toastController: ToastController) {
    this.plt.ready().then(()=>{
      this.loadPokes();
    });
  }

  loadPokes(){
    this.usuarios.getPokesEquipo(this.usuarios.getUsuarioActivo()).then (pokes=>{
      console.log(pokes);
      this.pokes = pokes;
    });
  }

  deletePokeEquipo(poke: Poke){
    this.usuarios.deletePokeEquipo(poke).then(poke => {
      this.showToast('Poke eliminado del equipo');
      this.loadPokes();
    });
  }

  sortPokes(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  aniadirEquipo(poke: Poke){
    this.usuarios.aniadirPokeUsuario(poke);
  }
}
