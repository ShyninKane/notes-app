import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material";
import { FormsModule } from "@angular/forms";
import { NoteFormComponent } from "src/app/note-form/note-form.component";
import { MaxCharInfoComponent } from "src/app/note-form/max-char-info/max-char-info.component";

@NgModule({
  declarations: [MaxCharInfoComponent, NoteFormComponent],
  imports: [FormsModule, MatButtonModule],
  exports: [NoteFormComponent],
})
export class NoteFormModule {}
