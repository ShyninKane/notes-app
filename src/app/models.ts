// !!! ОПИСАНИЕ ИДЕТ ПЕРЕД ПРЕДМЕТОМ ОПИСАНИЯ (ЛИБО СПРАВА), А НЕ ПОСЛЕ -->

// ключевое слово: export - значение будет доступно в других файлах. Данный класс необходим в главном файле приложения, поэтому экспортируем
// ключевое слово: class - объявление класса

// Описание класса Заметки (Note), с которой работает приложение
// Внутри мы описываем свойства (переменные класса), которыми будет обладать Заметка, и которые нам понадобятся в ходе работы приложения
// Также может содержать методы (функции класса).

export class Note {
  // ключевое слово: static - принадлежит всему классу (совокупности заметок), а не экземляру класса (конкретной заметке)
  static nextId: number = 0; // статичная переменная, необходимая для генерации id, т.к. у данного приложения нет сервера, который бы сохранял Заметку с определенным id.

  // свойства конкретной Заметки (см. экземпляр класса)
  // тип данных: number - число (целое число / дробь)
  // тип данных: string - текст (в т.ч. одиночный символ)
  id: number; // уникальный идентификатор, т.к. 2 разные заметки могут иметь одинаковые текстовые данные
  title: string; // название заметки
  description: string; // описание заметки

  // ключевое слово: constructor - объявление конструктора
  // Конструктор - метод, используемый при создании экземляра класса
  // В данном случае он принимает название и описание заметки и создает экземпляр класса Note
  // Вызывается как ` new Note("Мое название", "Мое описание") `

  // в скобках указываются параметры метода ( имя_параметра: тип_параметра )
  // параметр - входные данные, которые метод / функция будет использовать
  constructor(title: string, description: string) {
    this.title = title; // записываем предоставленный параметр в свойство заметки
    this.description = description; // записываем предоставленный параметр в свойство заметки
    this.id = Note.nextId; // записываем следующий доступный id в качестве id конкретной заметки
    Note.nextId++; // увеличиваем следующий доступный id на 1 для следующего экземпляра
  }
}
