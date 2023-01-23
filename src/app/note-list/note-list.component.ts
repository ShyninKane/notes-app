import { Component, Input } from "@angular/core";
import { Note } from "src/app/models";
import { NoteService } from "src/app/note.service";

@Component({
  selector: "app-note-list",
  templateUrl: "./note-list.component.html",
  styleUrls: ["./note-list.component.scss"],
})
export class NoteListComponent {
  @Input() notes: Note[];

  constructor(private noteService: NoteService) {}

  deleteNote(note: Note): void {
    this.noteService.deleteNote(note);
  }

  selectNote(note: Note): void {
    this.noteService.selectNote(note);
  }
}
