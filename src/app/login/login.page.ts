import { Component, OnInit } from '@angular/core';
import { Usuario,StorageUsuariosService } from '../services/storage-usuarios.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuarios: Usuario[] = [];
  usuario: Usuario=<Usuario>{};

  constructor(private storageService: StorageUsuariosService, private plt: Platform, private toastController: ToastController) { }

  ngOnInit() {
  }

}
