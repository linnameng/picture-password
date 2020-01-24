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
  currentTitle: string;

  heroes: Item[] = [
    { id: 1, name: 'Batman', img: 'assets/heroes/batman.jpg' },
    { id: 2, name: 'Captain Marvel', img: 'assets/heroes/captainmarvel.jpg' },
    { id: 3, name: 'Iron Man', img: 'assets/heroes/iron-man.jpg' },
    { id: 4, name: 'Storm', img: 'assets/heroes/storm.jpg' },
    { id: 5, name: 'Spiderman', img: 'assets/heroes/spiderman.jpg' },
    { id: 6, name: 'Wonder Woman', img: 'assets/heroes/wonderwoman.jpg' },
  ];

  activities: Item[] = [
    { id: 21, name: 'Skiing', img: 't' },
    { id: 22, name: 'Dancing', img: 't' },
    { id: 22, name: 'Surfing', img: 'assets/activities/surfboard.jpg' },
    { id: 22, name: 'Singing', img: 't' },
    { id: 22, name: 'Climbing', img: 't' },
    { id: 22, name: 'Swimming', img: 't' }
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
    this.currentTitle = "Who's your favourite character?";
  }

  ngAfterViewInit() {
  }

  clickItem() {
    this.currentStage++;
    if (this.currentStage == 1) {
      this.currentCategory = this.activities;
      this.currentTitle = "What's their favourite hobby?";
    } else if (this.currentStage == 2) {
      this.currentCategory = this.clothes;
      this.currentTitle = "What do they love to wear?";
    } else if (this.currentStage == 3) {
      this.currentCategory = undefined;
    }
  }

  generateRandomUserId() {
    return Math.floor((Math.random() * 6) + 1).toString();
  }

}
