import { Component } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  notes: Note[] = [new Note(0, "What I am going to do.", "My agenda for the week."),
                    new Note(1, "Don't forget to call them.", "Call Mikey"),
                    new Note(2, "I have to get some sleep.", "So tired... Longing for the weekend to have a healthy sleep!"),
                    new Note(3, "Now this is an extremely long note showing deficiencies of the design", "Duh")];

  id:number = 4;
  title:string = '';
  description:string = '';

  addNote(title: string, description: string) {
    this.notes.push(new Note(this.id, this.title, this.description));
    this.id++;
    this.title = '';
    this.description = '';
  }

  selectedId:number;
  selectedTitle:string;
  selectedDescription:string;

  getValues(id: number) {
    this.selectedId = id;
    for (var note of this.notes) {
      if (note.id == this.selectedId) {
        this.selectedTitle = note.title;
        this.selectedDescription = note.description;
        break
      }
    }
    document.getElementById("selectedTitle").innerHTML = this.selectedTitle;
    document.getElementById("selectedDescription").innerHTML = this.selectedDescription;
  }

  deleteId:number;
  idx:number;

  deleteNote(id: number) {
    this.idx = 0;
    this.deleteId = id;
    for (var note of this.notes) {
      if (note.id == this.deleteId) {
        this.notes.splice(this.idx, 1);
        if (this.selectedId == note.id) {
          document.getElementById("selectedTitle").innerHTML = '';
          document.getElementById("selectedDescription").innerHTML = 'No note selected.';
        }
        break
      }
    this.idx++;
    }
  }
}
