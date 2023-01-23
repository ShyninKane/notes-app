import { Component } from "@angular/core";
import { Note } from "./models";
import { NoteService } from "src/app/note.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [NoteService],
})
export class AppComponent {
  get notes(): Note[] {
    return this.noteService.notes;
  }

  constructor(private noteService: NoteService) {}
}
