import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    WorkComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class ComponentModule { }
