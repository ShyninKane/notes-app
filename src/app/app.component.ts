import { Component } from "@angular/core";
import { initialNotes } from "src/app/data";
import { Note } from "./models";
import * as _ from "lodash";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  notes: Note[] = _.cloneDeep(initialNotes);

  titleInput: string = "";
  descriptionInput: string = "";
  selectedNote: Note;

  addNote(title: string, description: string): void {
    const newNote = new Note(title, description);
    this.notes.push(newNote);
    this.resetInput();
  }
  private resetInput(): void {
    this.titleInput = "";
    this.descriptionInput = "";
  }

  selectNote(note: Note): void {
    this.selectedNote = note;
  }

  deleteNote(note: Note): void {
    const idx = this.notes.findIndex((x) => x.id === note.id);
    this.notes.splice(idx, 1);
    if (!!this.selectedNote && this.selectedNote.id === note.id) {
      this.selectedNote = null;
    }
  }
}
