import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'toolbar', loadChildren: './toolbar/toolbar.module#ToolbarPageModule' },
  { path: 'navegacion', loadChildren: './navegacion/navegacion.module#NavegacionPageModule' },
  { path: 'ruta-parametro/:id', loadChildren: './ruta-parametro/ruta-parametro.module#RutaParametroPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
