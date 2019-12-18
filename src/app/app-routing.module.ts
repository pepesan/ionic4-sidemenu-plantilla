import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {PartidosModuleModule} from './partidos-module/partidos-module.module';

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
  { path: 'listado', loadChildren: './listado/listado.module#ListadoPageModule' },
  { path: 'detail-item/:nombre', loadChildren: './item-detail/item-detail.module#ItemDetailPageModule' },
  { path: 'infinite', loadChildren: './infinite/infinite.module#InfinitePageModule' },
  { path: 'geo', loadChildren: './geolocation/geolocation.module#GeolocationPageModule' },
  { path: 'ruta-parametro/:id', loadChildren: './ruta-parametro/ruta-parametro.module#RutaParametroPageModule' },
  { path: 'form-validation', loadChildren: './form-validation/form-validation.module#FormValidationPageModule' },
  { path: 'partidos', loadChildren: './partidos/partidos.module#PartidosPageModule' },
  { path: 'partidos-show/:nombre', loadChildren: './partidos-show/partidos-show.module#PartidosShowPageModule' },
  { path: 'table', loadChildren: './table/table.module#TablePageModule' },
  { path: 'camara', loadChildren: './camara/camara.module#CamaraPageModule' },
  { path: 'lista', loadChildren: './lista/lista.module#ListaPageModule' },
  { path: 'detalle/:nombre', loadChildren: './detalle/detalle.module#DetallePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
