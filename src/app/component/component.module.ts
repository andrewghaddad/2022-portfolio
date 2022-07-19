import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { BlogComponent } from './blog/blog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    WorkComponent,
    BlogComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent 
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CardComponent
  ]
})
export class ComponentModule { }
