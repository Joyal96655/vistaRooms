import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  images:any =[];
  constructor() { }

  ngOnInit(): void {
    this.images = [
      {path: '../../assets/image/Banner/1.jpg'},
       {path: '../../assets/image/Banner/2.jpg'},
       {path: '../../assets/image/Banner/3.jpg'},
    ]
  }

}
