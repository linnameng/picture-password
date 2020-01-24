import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../models/app.models';

@Component({
  selector: 'app-secret-stories',
  templateUrl: './secret-stories.component.html',
  styleUrls: ['./secret-stories.component.css']
})

export class SecretStoriesComponent implements AfterViewInit {

  currentCharacter: string;
  currentCategory: Item[] = [];
  currentStage: number;
  currentTitle: string;
  showSuccess: boolean;

  categories: Item[] = [
    { id: 1, name: 'Superhero', img: 'assets/categories/super.png' },
    { id: 2, name: 'Pokemon', img: 'assets/categories/pokemon.png' },
    { id: 3, name: 'Princess', img: 'assets/categories/princess.png' },
    { id: 4, name: 'My Little Pony', img: 'assets/categories/pony.png' }
  ];

  heroes: Item[] = [
    { id: 10, name: 'Batman', img: 'assets/heroes/batman.jpg' },
    { id: 11, name: 'Captain Marvel', img: 'assets/heroes/captainmarvel.jpg' },
    { id: 12, name: 'Iron Man', img: 'assets/heroes/iron-man.jpg' },
    { id: 13, name: 'Storm', img: 'assets/heroes/storm.jpg' },
    { id: 14, name: 'Spiderman', img: 'assets/heroes/spiderman.jpg' },
    { id: 15, name: 'Wonder Woman', img: 'assets/heroes/wonderwoman.jpg' },
  ];

  activities: Item[] = [
    { id: 21, name: 'Skiing', img: 'assets/activities/skiing.jpg' },
    { id: 22, name: 'Dancing', img: 'assets/activities/dancing.jpg' },
    { id: 23, name: 'Surfing', img: 'assets/activities/surfing.jpg' },
    { id: 24, name: 'Singing', img: 'assets/activities/singing.jpg' },
    { id: 25, name: 'Climbing', img: 'assets/activities/climbing.jpg' },
    { id: 26, name: 'Swimming', img: 'assets/activities/swimming.jpg' }
  ]

  clothes: Item[] = [
    { id: 30, name: 'Pink hat', img: 'assets/clothes/pink-hat.jpg' },
    { id: 31, name: 'Blue coat', img: 'assets/clothes/blue-coat.jpeg' },
    { id: 32, name: 'Red sunglasses', img: 'assets/clothes/red-sunglasses.jpg' },
    { id: 33, name: 'Orange scarf', img: 'assets/clothes/orange-scarf.jpeg' },
    { id: 34, name: 'Green tutu', img: 'assets/clothes/green-tutu.jpg' },
    { id: 35, name: 'Yellow boots', img: 'assets/clothes/yellow-boots.jpeg' }
  ]

  constructor(private router: Router) {
    this.currentCategory = this.categories;
    this.currentStage = 0;
    this.showSuccess = false;
    this.currentTitle = undefined;
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
  }

  clickCharacterCategory() {
    this.currentStage = 1;
    this.currentCategory = this.heroes;
    this.currentTitle = "Who's your favourite character?";
  }

  clickItem() {
    this.currentStage++;
    if (this.currentStage == 2) {
      this.currentCategory = this.activities;
      this.currentTitle = "What's their favourite hobby?";
    } else if (this.currentStage == 3) {
      this.currentCategory = this.clothes;
      this.currentTitle = "What do they love to wear?";
    } else if (this.currentStage == 4) {
      this.currentCategory = undefined;
      this.currentTitle = '';
    }
  }

  restart() {
    this.currentCategory = this.categories;
    this.currentTitle = undefined;
    this.currentStage = 0;
  }

  login() {
    this.showSuccess = true;
    this.currentStage++;
  }

  generateRandomUserId() {
    return Math.floor((Math.random() * 6) + 1).toString();
  }

}
