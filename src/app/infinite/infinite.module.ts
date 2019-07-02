import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfinitePage } from './infinite';

@NgModule({
  declarations: [
    InfinitePage,
  ],
  imports: [
    IonicPageModule.forChild(InfinitePage),
  ],
})
export class InfinitePageModule {}
