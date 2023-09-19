// Створіть інтерфейс, який описує структуру об'єкта, що представляє калькулятор.
// Калькулятор повинен мати методи для виконання арифметичних операцій: додавання, віднімання, множення та ділення.
// Потім створіть функцію calculate, яка приймає об'єкт цього типу та виконує операцію і повертає результат.

interface ICalculator {
  firstNum: number;
  readonly action: Action;
  secondNum: number;
}

enum Action {
  PLUS = '+',
  MINUS = '-',
  MULTIPLY = '*',
  DIVIDE = '/',
}

function calculate(data: ICalculator): number {
  switch(data.action) {
    case Action.PLUS:
      return data.firstNum + data.secondNum;
    case Action.MINUS:
      return data.firstNum - data.secondNum;
    case Action.MULTIPLY:
      return data.firstNum * data.secondNum;
    case Action.DIVIDE:
      if (data.secondNum === 0) {throw  new Error('division by zero error');}
      return data.firstNum / data.secondNum;
    default:
      throw  new Error('unknown operation');
  }
}

//Друга реалізація за допомогою класу:

interface ICalculator2 {
  firstNum: number;
  readonly action: Action;
  secondNum: number;
  calculate2(firstNum: number, action:Action2, secondNum: number): number;
}

enum Action2 {
  PLU = '+',
  MIN = '-',
  MUL = '*',
  DIV = '/',
}

class Calculator implements ICalculator2 {
  public firstNum: number;
  public action: Action; 
  public secondNum: number;
  
  constructor(firstNum: number, action: Action, secondNum: number) {
    this.firstNum = firstNum;
    this.action = action;
    this.secondNum = secondNum;
  }

  calculate2(firstNum: number, action: Action2, secondNum: number): number {
    switch (action) {
      case Action2.PLU:
        return firstNum + secondNum;
      case Action2.MIN:
        return firstNum - secondNum;
      case Action2.MUL:
        return firstNum * secondNum;
      case Action2.DIV:
        if (secondNum === 0) {throw  new Error('division by zero error');}
        return firstNum / secondNum;
      default:
        throw  new Error('unknown operation');
      }
  }
}


// Уявіть, що ви створюєте інтерфейси для веб-сервісу, який надає інформацію про книги.
// Створіть інтерфейси Book, Author, і BookService, які описують структуру даних книжок,
// авторів і методи веб-сервісу для отримання інформації про книжки та авторів.
// Потім створіть об'єкт bookService, який імітує роботу веб-сервісу,
// і використовуйте інтерфейси для отримання інформації про книги та авторів.

interface IBook {
  readonly id: number;
  bookTitle: string;
  bookYear: number;
  authorId: number;
}

interface IAuthor {
  readonly id: number;
  authorName: string;
  authorBirthDate: string;
}

interface IBookService {
  books: IBook[];
  authors: IAuthor[];
  getBookById(bookId: number): IBook | null;
  getBookByAuthor(authorId: number): IBook[];
  getAuthorById(authorId: number): IAuthor | null;
  getAuthorByBook(bookId: number): IAuthor | null;
}

class BookService implements IBookService {
  public books: IBook[] = [];
  public authors: IAuthor[] = [];

  constructor(
    books: IBook[],
    authors: IAuthor[]
  ) {
    this.books = books;
    this.authors = authors;  
  }

  getBookById(bookId: number): IBook | null {
    return this.books.find(book => book.id === bookId) ?? null;
  }

  getBookByAuthor(authorId: number): IBook[] {
    return this.books.filter(book => book.authorId === authorId);
  }

  getAuthorById(authorId: number): IAuthor | null {
    return this.authors.find(author => author.id === authorId) ?? null;
  }

  getAuthorByBook(bookId: number): IAuthor | null {
    const book = this.getBookById(bookId);
    return (book) ? this.getAuthorById(book.authorId) : null;
  }
}
