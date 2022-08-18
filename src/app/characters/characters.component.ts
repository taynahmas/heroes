import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters!: Observable<any>;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.characters = this.charactersService.getAll();
  }

}
