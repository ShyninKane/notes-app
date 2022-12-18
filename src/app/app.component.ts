import { Component } from "@angular/core";
import { initialNotes } from "src/app/data";
import { Note } from "./note";
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

  addNote(title: string, description: string) {
    this.notes.push(new Note(title, description));
    this.resetInput();
  }

  private resetInput(): void {
    this.titleInput = "";
    this.descriptionInput = "";
  }

  selectedNote: Note;

  selectNote(note: Note) {
    this.selectedNote = note;
  }

  deleteNote(note: Note) {
    const idx = this.notes.findIndex((x) => x.id === note.id);
    this.notes.splice(idx, 1);
    if (!!this.selectedNote && this.selectedNote.id === note.id) {
      this.selectedNote = null;
    }
  }
}
