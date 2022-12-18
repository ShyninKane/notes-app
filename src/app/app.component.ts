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

  id: number = 4;
  title: string = "";
  description: string = "";

  addNote(title: string, description: string) {
    this.notes.push(new Note(this.id, this.title, this.description));
    this.id++;
    this.title = "";
    this.description = "";
  }

  selectedId: number;
  selectedNote: Note;

  select(note: Note) {
    this.selectedNote = note;
  }

  delete(note: Note) {
    const id = note.id;
    if (this.selectedNote.id === id) {
      this.selectedNote = null;
    }
    this.notes.splice(id, 1);
  }
}
