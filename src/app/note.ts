export class Note {
  static nextId: number = 0;
  id: number;
  title: string;
  description: string;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.id = Note.nextId;
    Note.nextId++;
  }
}
