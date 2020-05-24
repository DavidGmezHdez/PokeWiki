import { Component, OnInit } from '@angular/core';
import { Poke,StorageService } from '../../../services/storage.service';
import {ActivatedRoute} from '@angular/router';

declare var colorTipo1;

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  poke: Poke;

  constructor(private activatedRoute: ActivatedRoute, private storageService: StorageService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.storageService.getInfo(parseInt(id)).then(poke=>{
      this.poke=poke;
    });

  }

  llamarF1(){
    colorTipo1();
  }

}