import { Component, OnInit } from '@angular/core';
import { Poke,StorageService } from '../../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.page.html',
  styleUrls: ['./generate.page.scss'],
})
export class GeneratePage implements OnInit {
  pokes: Poke[] = [];
  poke: Poke= <Poke>{};
  descending: boolean = false;
  order: number;
  
  constructor(private storageService: StorageService, private plt: Platform, private toastController: ToastController) {
    this.plt.ready().then(()=>{
      //this.loadPokesAniadidos();
      this.loadPokes();
    });
   }

  ngOnInit() {
  }


  loadPokes(){
    this.storageService.getPokes().then(pokes => {
      this.pokes = pokes.sort((a,b)=>b.porcentaje - a.porcentaje);

    });
  }

  addPoke(){
    this.poke.id = this.pokes.length + 1;
    this.storageService.addPokemon(this.poke).then(poke => {
      console.log("Pokemon aniadido ");
      console.log(poke);
      this.poke = <Poke>{};
      this.showToast('Poke añadido');
      this.loadPokes();
    });
  }


  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
