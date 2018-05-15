import { Component, OnInit } from '@angular/core';
import { CharacterModel } from '../../models/character.model';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {
  character: CharacterModel = new CharacterModel('Frank', 4325, 56, 100, 'First Town');
  constructor() { }

  ngOnInit() {
  }

}
