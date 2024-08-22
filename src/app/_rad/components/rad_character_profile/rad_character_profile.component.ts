import { Component, Input } from "@angular/core";
import { Character } from "../../data/Character";

@Component({
  selector: "rad-character-profile",
  standalone: true,
  templateUrl: "./rad_character_profile.component.html",
  styleUrl: "./rad_character_profile.component.css",
})
export class RadCharacterProfile {
  constructor() {
    this.character = {
      id: 0,
      name: "Character Name",
    };
  }

  @Input() character: Character;
}