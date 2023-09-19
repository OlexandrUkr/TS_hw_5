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

//Перше завдання

interface ICalculator3 {
  add3(firstNum: number, secondNum: number): number;
  minus3(firstNum: number, secondNum: number): number;
  multiply3(firstNum: number, secondNum: number): number;
  devide3(firstNum: number, secondNum: number): number;
}

enum Action3 {
  PL = '+',
  MI = '-',
  MU = '*',
  DI = '/',
}

class Calculator3 implements ICalculator3 {
  add3(firstNum: number, secondNum: number): number {
    return firstNum + secondNum;
  }
  minus3(firstNum: number, secondNum: number): number {
    return firstNum - secondNum;
  }
  multiply3(firstNum: number, secondNum: number): number {
    return firstNum * secondNum;
  }
  devide3(firstNum: number, secondNum: number): number {
    if (secondNum === 0) {throw  new Error('division by zero error');}
      return firstNum / secondNum;
  }
}

function calculate3(calc3: ICalculator3, act: Action3, fist: number, sec: number): number {
  switch (act) {
    case Action3.PL:
      return calc3.add3(fist, sec);
    case Action3.MI:
      return calc3.minus3(fist, sec);
    case Action3.MU:
      return calc3.multiply3(fist, sec);
    case Action3.DI:
      return calc3.devide3(fist, sec);  
  }
}
