// ключевые слова: import, from - импорт какого-либо значения из файла, который содержит это значение,
// чтобы мы могли использовать это значение в текущем файле
import { Note } from "src/app/models";

// тип данных: массив - [] - набор (список / лист) данных
// Ниже мы создаем список из 4-х заметок, которые уже будут существовать при старте приложения

// создание уже существующих заметок. Имитация уже сохраненных на сервере данных
// создание экземпляров класса, объявленного в файле models.ts
export const initialNotes: Note[] = [
  new Note("What I am going to do.", "My agenda for the week."),
  new Note("Don't forget to call them.", "Call Mikey"),
  new Note(
    "I have to get some sleep.",
    "So tired... Longing for the weekend to have a healthy sleep!"
  ),
  new Note(
    "Now this is an extremely long note showing deficiencies of the design",
    "Duh"
  ),
];
