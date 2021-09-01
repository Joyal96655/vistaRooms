import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-destination',
  templateUrl: './explore-destination.component.html',
  styleUrls: ['./explore-destination.component.scss']
})
export class ExploreDestinationComponent implements OnInit {
  images:any =[];
  constructor() { }

  ngOnInit(): void {
    this.images = [
      {path: '../../assets/image/exploreDestination/Mumbai.jpg'},
       {path: '../../assets/image/exploreDestination/Goa.jpg'},
       {path: '../../assets/image/exploreDestination/Delhi.jpg'},
       {path: '../../assets/image/exploreDestination/Bangalore.jpg'},
       {path: '../../assets/image/exploreDestination/Udaipur.jpg'},
       {path: '../../assets/image/exploreDestination/Lonavala.jpg'},
       {path: '../../assets/image/exploreDestination/Alibaug.jpg'},
       {path: '../../assets/image/exploreDestination/Chail-Kasauli.jpg'},
       {path: '../../assets/image/exploreDestination/Kullu.jpg'},
       {path: '../../assets/image/exploreDestination/Nashik.jpg'},
       {path: '../../assets/image/exploreDestination/Coorg.jpg'},
       {path: '../../assets/image/exploreDestination/Dehradun.jpg'},

       {path: '../../assets/image/exploreDestination/Jaipur.jpg'},
       {path: '../../assets/image/exploreDestination/Shimla.jpg'},
       {path: '../../assets/image/exploreDestination/Ooty.jpg'},
       {path: '../../assets/image/exploreDestination/pune.jpg'},
       {path: '../../assets/image/exploreDestination/Nainital.jpg'},
       {path: '../../assets/image/exploreDestination/Mahabaleshwar.jpg'},
       {path: '../../assets/image/exploreDestination/Lavasa.jpg'},

    ]
  }

}
