import { Component, OnInit, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

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


