import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AplicationRoutes } from '../../../shared/enums/aplication-routes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public navigateToRoom() {
    this.router.navigateByUrl(AplicationRoutes.PLANING_ROOM);
  }
}
