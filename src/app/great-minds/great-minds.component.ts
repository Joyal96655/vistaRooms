import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-great-minds',
  templateUrl: './great-minds.component.html',
  styleUrls: ['./great-minds.component.scss']
})
export class GreatMindsComponent implements OnInit {
  images:any =[];
  constructor() { }

  ngOnInit(): void {
     this.images = [
      {path: '../../assets/image/greatMinds/Tara.png'},
       {path: '../../assets/image/greatMinds/Poppy.png'},
       {path: '../../assets/image/greatMinds/Dheeraj.png'},
       {path: '../../assets/image/greatMinds/MJ5.png'},

       {path: '../../assets/image/greatMinds/Malvika.png'},
       {path: '../../assets/image/greatMinds/Nupur.png'},
       {path: '../../assets/image/greatMinds/Anita.png'},
       {path: '../../assets/image/greatMinds/Gurmeet.png'},

       {path: '../../assets/image/greatMinds/Ahana.png'},
       {path: '../../assets/image/greatMinds/Kannan.png'},
       {path: '../../assets/image/greatMinds/Santhoshi.png'},
       {path: '../../assets/image/greatMinds/Parineeti.png'},

       {path: '../../assets/image/greatMinds/Sanaya.png'},
       {path: '../../assets/image/greatMinds/Bhumi.png'},
       {path: '../../assets/image/greatMinds/Aakriti.png'},
       {path: '../../assets/image/greatMinds/Shreya.png'}
    ]
  }

}
