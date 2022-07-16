import { Component, NgModule, NgModuleRef, OnInit, NO_ERRORS_SCHEMA} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

}

NgModule({
  imports: [],
  declarations: [],
  entryComponents: [],
  schemas: [NO_ERRORS_SCHEMA]
})
