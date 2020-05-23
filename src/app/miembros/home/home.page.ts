import { Component, ViewChild } from '@angular/core';
import { Poke,StorageService } from '../../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  pokes: Poke[] = [];
  poke: Poke= <Poke>{};
  descending: boolean = false;
  order: number;

  @ViewChild('mylist')mylist: IonList;

  constructor(private storageService: StorageService, private plt: Platform, private toastController: ToastController){
    this.plt.ready().then(()=>{
      //this.loadPokesAniadidos();
      this.loadPokes();
    });
  }

  loadPokesAniadidos(){
    let pokesaniadir: Poke[]=[{id:1, nombre:'Dragapult', tipo1:'Dragon', tipo2:'Fantasma', porcentaje:38.39, img:'assets/img/dragapult.png'},
    {id:2, nombre:'Arcanine', tipo1:'Fuego', tipo2:'', porcentaje:24.54, img:'assets/Img/arcanine.png'},
    {id:3, nombre:'Milotic', tipo1:'Agua', tipo2:'', porcentaje:16.50, img:'assets/Img/milotic.png'},
    {id:4, nombre:'Primarina', tipo1:'Agua', tipo2:'Hada', porcentaje:13.18, img:'assets/img/primarina.png'},
    {id:5, nombre:'Corviknight', tipo1:'Volador', tipo2:'Acero', porcentaje:12.51, img:'assets/img/corviknight.png'},
    {id:6, nombre:'Indeedee-F', tipo1:'Psiquico', tipo2:'Normal', porcentaje:10.19, img:'assets/img/indeedee.png'},
    {id:7, nombre:'Braviary', tipo1:'Volador', tipo2:'Normal', porcentaje:6.90, img:'assets/img/braviary.png'},
    {id:8, nombre:'Bisharp', tipo1:'Acero', tipo2:'Siniestro', porcentaje:3.29, img:'assets/img/bisharp.png'},
    {id:9, nombre:'Passimian', tipo1:'Lucha', tipo2:'', porcentaje:1.46, img:'assets/img/passimian.png'}];

    for(let i of pokesaniadir){
      this.storageService.addPokemon(i);
    }
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

  deletePoke(poke: Poke){
    this.storageService.deletePokemon(poke.id).then(poke => {
      this.showToast('Poke eliminado');
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
