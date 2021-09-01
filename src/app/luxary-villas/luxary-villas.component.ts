import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luxary-villas',
  templateUrl: './luxary-villas.component.html',
  styleUrls: ['./luxary-villas.component.scss']
})
export class LuxaryVillasComponent implements OnInit {
  images:any =[];
  constructor() { }

  ngOnInit(): void {
    this.images = [
      {path: '../../assets/image/luxaryVillas/Pranaam.jpg'},
       {path: '../../assets/image/luxaryVillas/Paashan.jpg'},
       {path: '../../assets/image/luxaryVillas/Rain.jpg'},
       {path: '../../assets/image/luxaryVillas/Chalet_Windflower.jpg'},
       {path: '../../assets/image/luxaryVillas/Jungalow.jpg'},
       {path: '../../assets/image/luxaryVillas/Mansion.jpg'},
       {path: '../../assets/image/luxaryVillas/Umber.jpg'},
       {path: '../../assets/image/luxaryVillas/Hamptons.jpg'},
       {path: '../../assets/image/luxaryVillas/Villa.jpg'},
       {path: '../../assets/image/luxaryVillas/Ashore.jpg'},
       {path: '../../assets/image/luxaryVillas/Baagfursat.jpg'},
       {path: '../../assets/image/luxaryVillas/NayoNash.jpg'},
       {path: '../../assets/image/luxaryVillas/Nihira.jpg'},
       {path: '../../assets/image/luxaryVillas/amaraVilla.jpg'}
    ]
  }

}
