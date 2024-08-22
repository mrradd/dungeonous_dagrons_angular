import { BehaviorSubject } from "rxjs";
import { Character } from "../data/Character";
import { Injectable } from "@angular/core";

@Injectable()
export class AppStateService {
  private _characters = new BehaviorSubject<Character[]>([]);
  currentCharacters = this._characters.asObservable();

  constructor() {
  }

  updateCharacters(updatedCharacters: Character[]) {
    this._characters.next(updatedCharacters);
  }
}