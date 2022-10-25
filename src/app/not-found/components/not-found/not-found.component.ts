import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AplicationRoutes } from '../../../shared/enums/aplication-routes';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public navigateToHome() {
    this.router.navigateByUrl(AplicationRoutes.MENU);
  }

}
