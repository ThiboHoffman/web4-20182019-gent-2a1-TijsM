import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  logout() {
    localStorage.clear();
    this._router.navigate(['']);
  }

  ranking() {
    this._router.navigate(['ranking']);
  }

  history() {
    this._router.navigate(['history']);
  }
}
