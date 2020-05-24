import { Component, OnInit } from '@angular/core';
import { Poke,StorageService } from '../../../services/storage.service';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';


declare var colorTipo1;

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  poke = null;

  constructor(private activatedRoute: ActivatedRoute, private storageService: StorageService) { }

  ngOnInit() {
    let nombre = this.activatedRoute.snapshot.paramMap.get('nombre');
    nombre = nombre.toLowerCase();
    this.storageService.getInfo(nombre).subscribe(result=>{
      console.log('detalles ', result);
      this.poke = result;
    });

  }

  openWebsite(){
    window.open(this.poke.Website);
  }

}
