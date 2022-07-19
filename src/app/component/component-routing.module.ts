import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'about', component : AboutComponent},
  {path : 'work', component : WorkComponent},
  {path : 'blog', component : BlogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule,]
})
export class ComponentRoutingModule { }
