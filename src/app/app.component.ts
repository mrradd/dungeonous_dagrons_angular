import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { InitiativeTrackerPage } from "./_rad/pages/InitiativeTracker/initiative_tracker_page.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, InitiativeTrackerPage],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})
export class AppComponent {
  title: string = "Dungeonous Dagrons";
}
