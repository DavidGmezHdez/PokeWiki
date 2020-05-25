import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, AfterViewInit } from '@angular/core';
import { Poke,StorageService } from '../../../services/storage.service';
import {ActivatedRoute} from '@angular/router';
import { Observable,interval } from 'rxjs';
import { Platform, ToastController, IonList, IonItemSliding } from '@ionic/angular';
import { timeout, timeInterval } from 'rxjs/operators';
import { assertNotNull } from '@angular/compiler/src/output/output_ast';


declare var colorTipo1;

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})

//@ViewChild('tipos') tipos: IonItemSliding;
export class InfoPage implements OnInit {

  poke = null;
  intervalo: any;
  tipo1: any = null;

  constructor(private activatedRoute: ActivatedRoute, private storageService: StorageService, private plt: Platform) {  }

  ngOnInit() {

    this.plt.ready().then(() => {
      this.getData();
    })
  }

    getData(){
      let nombre = this.activatedRoute.snapshot.paramMap.get('nombre');
      nombre = nombre.toLowerCase();
      
      this.storageService.getInfo(nombre).subscribe(result=>{
        console.log("detalles",result);
        this.poke = result;
      });
    }

    consultarPoke(){
      alert("Poke");
    }

    cambiarColor(tipo: string){
      if(this.tipo1 === null || this.tipo1 === tipo){
        this.tipo1 = tipo;
      }
      
/*
      if(document.getElementsByClassName("tipo").item(0) !== null){
          if(this.tipo1 == "water")document.getElementsByClassName("tipo").item(0).style.background = "#4592c4"
          if(this.tipo1 == "bug")document.getElementsByClassName("tipo").item(0).style.background = "#729f3f"
          if(this.tipo1 == "dragon")document.getElementsByClassName("tipo").item(0).style.background = "rgb(88, 0, 202)"
          if(this.tipo1 == "electric")document.getElementsByClassName("tipo").item(0).style.background = "#eed535"
          if(this.tipo1 == "ghost")document.getElementsByClassName("tipo").item(0).style.background = "#7b62a3"
          if(this.tipo1 == "fire")document.getElementsByClassName("tipo").item(0).style.background = "#fd7d24"
          if(this.tipo1 == "fairy")document.getElementsByClassName("tipo").item(0).style.background = "#fdb9e9"
          if(this.tipo1 == "ice")document.getElementsByClassName("tipo").item(0).style.background = "#51c4e7"
          if(this.tipo1 == "fight")document.getElementsByClassName("tipo").item(0).style.background = "#d56723"
          if(this.tipo1 == "normal")document.getElementsByClassName("tipo").item(0).style.background = "#a4acaf"
          if(this.tipo1 == "grass")document.getElementsByClassName("tipo").item(0).style.background = "#9bcc50"
          if(this.tipo1 == "psychic")document.getElementsByClassName("tipo").item(0).style.background = "#f366b9"
          if(this.tipo1 == "rock")document.getElementsByClassName("tipo").item(0).style.background = "#a38c21"
          if(this.tipo1 == "dark")document.getElementsByClassName("tipo").item(0).style.background = "#707070"
          if(this.tipo1 == "ground")document.getElementsByClassName("tipo").item(0).style.background = "#ab9842 "
          if(this.tipo1 == "poison")document.getElementsByClassName("tipo").item(0).style.background = "#b97fc9"
          if(this.tipo1 == "flying")document.getElementsByClassName("tipo").item(0).style.background = "#3dc7ef"
      }

      if(document.getElementsByClassName("tipo").item(1) !== null){
        if(tipo === "steel")document.getElementsByClassName("tipo").item(1).style.background = "#9eb7b8"
        if(tipo === "water")document.getElementsByClassName("tipo").item(1).style.background = "#4592c4"
        if(tipo === "bug")document.getElementsByClassName("tipo").item(1).style.background = "#729f3f"
        if(tipo == "dragon")document.getElementsByClassName("tipo").item(1).style.background = "rgb(88, 0, 202)"
        if(tipo == "electric")document.getElementsByClassName("tipo").item(1).style.background = "#eed535"
        if(tipo == "ghost")document.getElementsByClassName("tipo").item(1).style.background = "#7b62a3"
        if(tipo == "fire")document.getElementsByClassName("tipo").item(1).style.background = "#fd7d24"
        if(tipo == "fairy")document.getElementsByClassName("tipo").item(1).style.background = "#fdb9e9"
        if(tipo == "ice")document.getElementsByClassName("tipo").item(1).style.background = "#51c4e7"
        if(tipo == "fight")document.getElementsByClassName("tipo").item(1).style.background = "#d56723"
        if(tipo == "normal")document.getElementsByClassName("tipo").item(1).style.background = "#a4acaf"
        if(tipo == "grass")document.getElementsByClassName("tipo").item(1).style.background = "#9bcc50";
        if(tipo == "psychic")document.getElementsByClassName("tipo").item(1).style.background = "#f366b9"
        if(tipo == "rcok")document.getElementsByClassName("tipo").item(1).style.background = "#a38c21"
        if(tipo == "dark")document.getElementsByClassName("tipo").item(1).style.background = "#707070"
        if(tipo == "ground")document.getElementsByClassName("tipo").item(1).style.background = "#ab9842 "
        if(tipo == "poison")document.getElementsByClassName("tipo").item(1).style.background = "#b97fc9"
        if(tipo == "flying")document.getElementsByClassName("tipo").item(1).style.background = "#3dc7ef"
      }
     */
    }


    openWebsite(){
      window.open(this.poke.Website);
      
    }

}
