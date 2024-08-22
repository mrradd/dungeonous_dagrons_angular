import { Component, OnDestroy, OnInit } from "@angular/core";
import { RadButton } from "../../components/rad_button/rad_button.component";
import { Character } from "../../data/Character";
import { RadCharacterProfile } from "../../components/rad_character_profile/rad_character_profile.component";
import { AppStateService } from "../../services/AppStateService";
import { Subscription } from "rxjs";

/**
 * A row of a single Character's information.
 **/
@Component({
  imports: [RadButton, RadCharacterProfile],
  selector: "rad-initiative-tracker",
  standalone: true,
  templateUrl: "./initiative_tracker_page.component.html",
  styleUrl: "./initiative_tracker_page.component.css",
  providers: [AppStateService]
})
export class InitiativeTrackerPage implements OnInit, OnDestroy {
  title: string = "Initiative Tracker";
  IdCounter: number = 0;
  characters: Character[] = [];
  subscription: Subscription;

  constructor(private _appStateService: AppStateService) {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    this.subscription = this._appStateService.currentCharacters.subscribe(characters => this.characters = characters)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /** 
   * Add a character to the initiative tracker as the last row. 
   **/
  addCharacter() {
    console.log("Adding character");

    this.IdCounter++;

    if (this.characters) {
      this.characters = [...this.characters, { id: this.IdCounter, name: `derp - ${this.IdCounter}` } as Character];
    }
    else {
      console.log("this.characters is undefined");
      this.characters = [{ id: this.IdCounter, name: `derp - ${this.IdCounter}` } as Character];
    }
  }
}