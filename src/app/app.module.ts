import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatButtonModule } from "@angular/material";
import { FormsModule } from "@angular/forms";

// главный модуль приложения, где объявляются используемые им компоненты, другие модули и т.д.
// крупные приложения следует дробить на множество модулей для улучшения времени загрузки
// (например, выделить интерфейс администраторов приложения в отдельный модуль, чтобы не отправлять его код обычным пользователям, т.к. он им не доступен)

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
