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
  selectedTitle: string;
  selectedDescription: string;

  getValues(id: number) {
    this.selectedId = id;

    const note = this.notes.find((note) => note.id === this.selectedId);
    this.selectedTitle = note.title;
    this.selectedDescription = note.description;

    document.getElementById("selectedTitle").innerHTML = this.selectedTitle;
    document.getElementById("selectedDescription").innerHTML =
      this.selectedDescription;
  }

  deleteId: number;
  idx: number;

  deleteNote(id: number) {
    this.idx = 0;
    this.deleteId = id;
    for (var note of this.notes) {
      if (note.id == this.deleteId) {
        this.notes.splice(this.idx, 1);
        if (this.selectedId == note.id) {
          document.getElementById("selectedTitle").innerHTML = "";
          document.getElementById("selectedDescription").innerHTML =
            "No note selected.";
        }
        break;
      }
      this.idx++;
    }
  }
}
