
import { LibraComponent } from './componentes/libra/libra.component';

import { PruebaComponent } from './componentes/prueba/prueba.component';
import { HoroscoposMensualComponent } from './componentes/horoscopos-mensual/horoscopos-mensual.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HoroscoposMensualComponent },
  { path: 'horoscopos', component: HoroscoposMensualComponent },

  { path: 'libra', component:  LibraComponent},
  { path: 'prueba', component:  PruebaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
