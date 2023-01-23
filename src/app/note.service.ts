import { Injectable } from "@angular/core";
import { NewNoteDTO, Note } from "src/app/models";
import * as _ from "lodash";
import { initialNotes } from "src/app/data";

@Injectable()
export class NoteService {
  notes: Note[] = _.cloneDeep(initialNotes);
  selectedNote: Note;

  selectNote(note: Note): void {
    this.selectedNote = note;
  }

  addNote(newNoteDTO: NewNoteDTO): void {
    const newNote = new Note(newNoteDTO.title, newNoteDTO.description);
    this.notes.push(newNote);
  }

  deleteNote(note: Note): void {
    const idx = this.notes.findIndex((x) => x.id === note.id);
    this.notes.splice(idx, 1);
    if (!!this.selectedNote && this.selectedNote.id === note.id) {
      this.selectedNote = null;
    }
  }
}
