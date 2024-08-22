import { Component, Input } from "@angular/core";

@Component({
  selector: "rad-button",
  standalone: true,
  templateUrl: "./rad_button.component.html",
})
export class RadButton {
  // The label for the button.
  @Input() buttonLabel: string = "Button";

  //The function called when the button is clicked.
  @Input() onClickCallback!: () => void;

  onClick(): void {
    if (this.onClickCallback) {
      this.onClickCallback();
    }
  }
}