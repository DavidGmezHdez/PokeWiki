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

    cambiarColor(){
      
      let type = document.getElementsByClassName("tipo") as HTMLCollectionOf<HTMLElement>;

      if(type[0]!== undefined){
          if(type[0].innerHTML === "steel")type[0].style.background = "#9eb7b8"
          if(type[0].innerHTML == "water")type[0].style.background = "#4592c4"
          if(type[0].innerHTML == "bug")type[0].style.background = "#729f3f"
          if(type[0].innerHTML == "dragon")type[0].style.background = "rgb(88, 0, 202)"
          if(type[0].innerHTML == "electric")type[0].style.background = "#eed535"
          if(type[0].innerHTML == "ghost")type[0].style.background = "#7b62a3"
          if(type[0].innerHTML == "fire")type[0].style.background = "#fd7d24"
          if(type[0].innerHTML == "fairy")type[0].style.background = "#fdb9e9"
          if(type[0].innerHTML == "ice")type[0].style.background = "#51c4e7"
          if(type[0].innerHTML == "fighting")type[0].style.background = "#d56723"
          if(type[0].innerHTML == "normal")type[0].style.background = "#a4acaf"
          if(type[0].innerHTML == "grass")type[0].style.background = "#9bcc50"
          if(type[0].innerHTML == "psychic")type[0].style.background = "#f366b9"
          if(type[0].innerHTML == "rock")type[0].style.background = "#a38c21"
          if(type[0].innerHTML == "dark")type[0].style.background = "#707070"
          if(type[0].innerHTML == "ground")type[0].style.background = "#ab9842 "
          if(type[0].innerHTML == "poison")type[0].style.background = "#b97fc9"
          if(type[0].innerHTML == "flying")type[0].style.background = "#3dc7ef"
      }   
      
      if(type[1]!== undefined){
        if(type[1].innerHTML == "steel")type[1].style.background = "#9eb7b8"
        if(type[1].innerHTML == "water")type[1].style.background = "#4592c4"
        if(type[1].innerHTML == "bug")type[1].style.background = "#729f3f"
        if(type[1].innerHTML == "dragon")type[1].style.background = "rgb(88, 0, 202)"
        if(type[1].innerHTML == "electric")type[1].style.background = "#eed535"
        if(type[1].innerHTML == "ghost")type[1].style.background = "#7b62a3"
        if(type[1].innerHTML == "fire")type[1].style.background = "#fd7d24"
        if(type[1].innerHTML == "fairy")type[1].style.background = "#fdb9e9"
        if(type[1].innerHTML == "ice")type[1].style.background = "#51c4e7"
        if(type[1].innerHTML == "fighting")type[1].style.background = "#d56723"
        if(type[1].innerHTML == "normal")type[1].style.background = "#a4acaf"
        if(type[1].innerHTML == "grass")type[1].style.background = "#9bcc50"
        if(type[1].innerHTML == "psychic")type[1].style.background = "#f366b9"
        if(type[1].innerHTML == "rock")type[1].style.background = "#a38c21"
        if(type[1].innerHTML == "dark")type[1].style.background = "#707070"
        if(type[1].innerHTML == "ground")type[1].style.background = "#ab9842 "
        if(type[1].innerHTML == "poison")type[1].style.background = "#b97fc9"
        if(type[1].innerHTML == "flying")type[1].style.background = "#3dc7ef"
      }   
    }


    openWebsite(){
      window.open(this.poke.Website);
      
    }

}
