import { Component, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}


NgModule({
  imports: [NavbarComponent, FooterComponent],
  declarations: [],
  entryComponents: [],
  schemas: [NO_ERRORS_SCHEMA]
})