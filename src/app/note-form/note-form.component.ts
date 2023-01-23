import { Component } from "@angular/core";
import { NewNoteDTO } from "src/app/models";
import { NoteService } from "src/app/note.service";

@Component({
  selector: "app-note-form",
  templateUrl: "./note-form.component.html",
  styleUrls: ["./note-form.component.scss"],
})
export class NoteFormComponent {
  titleInput: string = "";
  titleMaxLength: number = 50;
  descriptionInput: string = "";
  descriptionMaxLength: number = 256;

  constructor(private noteService: NoteService) {}

  addNote(title: string, description: string): void {
    const dto: NewNoteDTO = {
      title: title,
      description: description,
    };
    this.noteService.addNote(dto);
    this.resetInput();
  }

  private resetInput(): void {
    this.titleInput = "";
    this.descriptionInput = "";
  }
}
