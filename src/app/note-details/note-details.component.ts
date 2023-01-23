import { Component } from "@angular/core";
import { Note } from "src/app/models";
import { NoteService } from "src/app/note.service";

@Component({
  selector: "app-note-details",
  templateUrl: "./note-details.component.html",
  styleUrls: ["./note-details.component.scss"],
})
export class NoteDetailsComponent {
  constructor(private noteService: NoteService) {}

  get selectedNote(): Note {
    return this.noteService.selectedNote;
  }

  get title(): string {
    return !!this.selectedNote ? this.selectedNote.title : null;
  }

  get description(): string {
    return !!this.selectedNote
      ? this.selectedNote.description
      : "No note selected";
  }
}
