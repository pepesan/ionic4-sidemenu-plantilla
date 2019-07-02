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
  { path: 'device', loadChildren: './device/device.module#DevicePageModule' },
  { path: 'form', loadChildren: './formulario/formulario.module#FormularioPageModule' },
  { path: 'grid', loadChildren: './grid/grid.module#GridPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  { path: 'listado', loadChildren: './listado/listado.module#ListadoPageModule' },
  { path: 'detail-item/:id', loadChildren: './item-detail/item-detail.module#ItemDetailPageModule' },
  { path: 'geo', loadChildren: './geolocation/geolocation.module#GeolocationPageModule' },
  { path: 'ruta-parametro/:id', loadChildren: './ruta-parametro/ruta-parametro.module#RutaParametroPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
