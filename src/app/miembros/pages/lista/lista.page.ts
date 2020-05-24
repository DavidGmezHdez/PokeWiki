import { Component, ViewChild } from '@angular/core';
import { Poke,StorageService } from '../../../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { Usuario,AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})

export class ListaPage{

  pokes: Poke[] = [];
  poke: Poke= <Poke>{};
  descending: boolean = false;
  order: number;

  @ViewChild('mylist')mylist: IonList;

  constructor(private storageService: StorageService, private usuarios: AuthenticationService,private plt: Platform, private toastController: ToastController) {
    this.plt.ready().then(()=>{
      this.loadPokes();
    });
  }

  loadPokes(){
    this.storageService.getPokes().then(pokes => {
      this.pokes = pokes.sort((a,b)=>b.porcentaje - a.porcentaje);
    });
    
  }

  deletePoke(poke: Poke){
    this.storageService.deletePokemon(poke.id).then(poke => {
      this.showToast('Poke eliminado');
      this.loadPokes();
    });
  }

  sortPokes(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  aniadirEquipo(poke: Poke){
    this.usuarios.aniadirPokeUsuario(poke);
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
