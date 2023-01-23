import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { MatButtonModule } from "@angular/material";
import { NoteListComponent } from "src/app/note-list/note-list.component";
import { AppSectionComponent } from "src/app/app-section/app-section.component";
import { NoteDetailsComponent } from "src/app/note-details/note-details.component";
import { NoteFormModule } from "src/app/note-form/note-form.module";
import { AppHeaderComponent } from "src/app/app-header/app-header.component";

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppSectionComponent,
    NoteListComponent,
    NoteDetailsComponent,
  ],
  imports: [BrowserModule, MatButtonModule, NoteFormModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
