import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AplicationRoutes } from './shared/enums/aplication-routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'planning-teimosinhos';

  constructor(
    private router: Router
  ) {
    // this.initialNavigate()
  }

  ngOnInit(): void {
    // this.initialNavigate()
  }

  public initialNavigate() {
    this.router.navigate([AplicationRoutes.MENU])
  }

}
