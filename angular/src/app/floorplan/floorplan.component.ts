import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../models/app.models';

@Component({
  selector: 'app-video',
  templateUrl: './floorplan.component.html',
  styleUrls: ['./floorplan.component.css']
})

export class FloorplanComponent implements AfterViewInit {

  currentCharacter: string;
  currentCategory: Item[] = [];
  currentStage: number;

  heroes: Item[] = [
    { id: 1, name: 'Batman', img: 'assets/images/batman.jpg' },
    { id: 2, name: 'Captain Marvel', img: 'assets/images/captainmarvel.jpg' },
    { id: 3, name: 'Iron Man', img: 'assets/images/iron-man.jpg' },
    { id: 4, name: 'Storm', img: 'assets/images/storm.jpg' },
    { id: 5, name: 'Spiderman', img: 'assets/images/spiderman.jpg' },
    { id: 6, name: 'Wonder Woman', img: 'assets/images/wonderwoman.jpg' },
  ];

  activities: Item[] = [
    { id: 21, name: 'Skiing', img: 't' },
    { id: 22, name: 'Dancing', img: 't' }
  ]

  clothes: Item[] = [
    { id: 23, name: 'Orange scarf', img: 't' },
    { id: 24, name: 'Blue coat', img: 't' }
  ]

  constructor(private router: Router) {
    this.currentCategory = this.heroes;
    this.currentStage = 0;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  clickItem() {
    this.currentStage++;
    if (this.currentStage == 1) {
      this.currentCategory = this.activities;
    } else if (this.currentStage == 2) {
      this.currentCategory = this.clothes;
    }
  }

  generateRandomUserId() {
    return Math.floor((Math.random() * 6) + 1).toString();
  }

}
