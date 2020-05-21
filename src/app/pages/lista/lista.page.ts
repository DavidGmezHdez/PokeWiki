import { Component, ViewChild } from '@angular/core';
import { Poke,StorageService } from '../../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

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

  constructor(private storageService: StorageService, private plt: Platform, private toastController: ToastController) {
    this.plt.ready().then(()=>{
      this.loadPokes();
    });
  }

  loadPokes(){
    this.storageService.getPokes().then(pokes => {
      this.pokes = pokes.sort((a,b)=>b.porcentaje - a.porcentaje);

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

}
