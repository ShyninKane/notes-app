# NotesApp

Простое SPA-приложение на Angular для знакомства с веб-разработкой.
Приложение отображает заметки, позволяет выбирать, добавлять и удалять заметки.

## Как знакомиться с кодом

Ключевой код приложения находится в src/app.
Рекомендуемый путь:

- Ветка good-implementation-with-comments - допустимая реализация с детальными комментариями:
  1.  models.ts
  2.  data.ts
  3.  app.component.ts
  4.  app.component.html
  5.  app.component.scss
- Ветка advanced-implementation - приближенная к реальности реализация с использованием сервисов и нескольких компонентов

## Запуск

1. Установить [Node.js](https://nodejs.org/en/);
2. Установить [VS Code](https://code.visualstudio.com/);
3. Установить [SourceTree](https://www.sourcetreeapp.com/)
4. Клонировать репозиторий из Github на локальный диск с помощью SourceTree;
5. Открыть репозиторий с помощью VS Code;
6. В терминале выполнить npm install;
7. В терминале выполнить npm start;
8. В браузере открыть http://localhost:4200/ (локально запущенное приложение в режиме debug)

## Советы по работе в VS Code;

- Используй ALT + arrow_right и ALT + arrow_left для навигации вперед и назад;
- Используй F12 для перехода к имплементации кода;
- Используй console.log() для вывода информации в консоль DevTools.

## Советы по работе с DevTools

- Из открытой в браузере вкладки приложения нажми F12 для открытия Инструментов Разработчика;
- Используй вкладку Console для просмотра выводимой информации в виде логов и ошибок;
- Используй вкладку Elements для просмотра и live-редактирования DOM (веб-страницы).
