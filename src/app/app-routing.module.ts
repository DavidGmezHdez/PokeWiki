import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    canActivate:[AuthGuardService],
    loadChildren: () => import('./miembros/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'lista',
    canActivate:[AuthGuardService],
    loadChildren: () => import('./miembros/pages/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'lista/:nombre',
    canActivate:[AuthGuardService],
    loadChildren: () => import('./miembros/pages/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'about',
    canActivate:[AuthGuardService],
    loadChildren: () => import('./miembros/pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'generate',
    canActivate:[AuthGuardService],
    loadChildren: () => import('./miembros/pages/generate/generate.module').then( m => m.GeneratePageModule)
  },
  
  {
    path: 'login',
    loadChildren: () => import('./publico/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./publico/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'equipo',
    canActivate:[AuthGuardService],
    loadChildren: () => import('./miembros/pages/equipo/equipo.module').then( m => m.EquipoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
