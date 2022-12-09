
import { LibraComponent } from './componentes/libra/libra.component';
import { CapricornioComponent } from './componentes/capricornio/capricornio.component';

import { AcuarioComponent } from './componentes/acuario/acuario.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { HoroscoposMensualComponent } from './componentes/horoscopos-mensual/horoscopos-mensual.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HoroscoposMensualComponent },
  { path: 'horoscopos', component: HoroscoposMensualComponent },
  { path: 'acuario', component:  AcuarioComponent},
  { path: 'capricornio', component:  CapricornioComponent},
  { path: 'libra', component:  LibraComponent},
  { path: 'prueba', component:  PruebaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
