import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl:'./layout.component.html',
  styleUrls: ['./../../app.component.css']
})
export class LayoutComponent implements OnInit {
  userId!: string | null;

  constructor() { }

  ngOnInit() {
    this.userId = sessionStorage.getItem('userId');
  }
}

