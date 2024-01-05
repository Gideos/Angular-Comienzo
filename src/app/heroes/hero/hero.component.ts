import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  // Priorizar One-Way data Binding
  public name: string = 'ironman';
  public age:number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${ this.age }`;
  }

  changeHero():void{
    //Cambiar el nombre del heroe
    this.name = 'Spiderman'
    //Puden ponerse un Throw "Metodo no implementado" o un TODO; comentado para recordar los las tareas por hacer
  }
  changeAge():void{
    // Cambiar el nombre del heroe
    this.age = 25;
  }

  resetForm(): void{
    this.name = 'ironman';
    this.age = 45;
  }

}
