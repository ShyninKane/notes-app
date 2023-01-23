import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Модуль с описанием путей (ссылок) и соответствующих им компонентам.
// В данном случае не используется, т.к. проект - SPA (Single Page Application) без навигации на другие страницы

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
