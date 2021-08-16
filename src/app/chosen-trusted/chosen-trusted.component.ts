import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chosen-trusted',
  templateUrl: './chosen-trusted.component.html',
  styleUrls: ['./chosen-trusted.component.scss']
})
export class ChosenTrustedComponent implements OnInit {
  images:any=[]
  constructor() { }

  ngOnInit(): void {
     this.images = [
      {path: '../../assets/image/chosenTrusted/1.png'},
       {path: '../../assets/image/chosenTrusted/2.png'},
       {path: '../../assets/image/chosenTrusted/3.png'},
       {path: '../../assets/image/chosenTrusted/4.png'},

       {path: '../../assets/image/chosenTrusted/5.png'},
       {path: '../../assets/image/chosenTrusted/6.png'},
       {path: '../../assets/image/chosenTrusted/7.png'},
       {path: '../../assets/image/chosenTrusted/8.png'},
     ]
  }

}
