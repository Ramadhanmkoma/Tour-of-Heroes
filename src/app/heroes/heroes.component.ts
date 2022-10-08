import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  onSelectHero(hero: Hero) {  
    this.selectedHero = hero;
    console.log(this.selectedHero.id); 
  }

  heroes = HEROES;

  constructor() {}

  ngOnInit(): void {}
}
