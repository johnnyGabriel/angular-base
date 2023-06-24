import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PageaComponent } from './pagea/pagea.component';
import { PagebComponent } from './pageb/pageb.component';
import { PagecComponent } from './pagec/pagec.component';


@NgModule({
  declarations: [
    PageaComponent,
    PagebComponent,
    PagecComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
