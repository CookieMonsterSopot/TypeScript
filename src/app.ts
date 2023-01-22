// 1. PODSTAWOWE TYPY DANYCH

// a) number

const birthDate = 1990;
// // let age: number;
// let age = 30;

// b) string
let firstName: string = "John";
const lastName: string = "Smith";

// c) boolean (true/false)
const bool: boolean = true;
let x: boolean;

// 2. TYPOWANIE FUNKCJI
const multiply = (a: number, b: number): number => {
  return a * b;
};

const addAndLog = (a: number, b: number): void => {
  console.log(a + b);
};

// Zad 1.
// Napisz funkcje która będzie obliczała cenę w zależności od tego czy zniżka jest przyznana czy nie
// calculatePrice
// Parametry: originalPrice (liczba), hasDiscount (true/false), hasDiscount stwórz jako osobną zmienną ustaw ją dowolnie na true lub false
// Funkcjonalność: Jeżeli parametr hasDiscount jest równy true, zwróć liczbę originalPrice pomnijeszoną o 23%, jeżeli hasDiscount jest równe false, zwróć liczbę originalPrice bez żadnych modyfikacji.

const hasDiscount = true;

const calculatePrice = (originalPrice: number, hasDiscount: boolean) => {
  if (hasDiscount) return originalPrice / 1.23;
  return originalPrice;
};

const result = calculatePrice(1000, hasDiscount);
//console.log(result);

// 3. TYPOWANIE ELEMENTÓW DOM

const button = document.querySelector("button");
const categoriesUL: HTMLUListElement = document.querySelector(".categories");

button.addEventListener("click", () => {
  // 1. W jakiś sposób wylosuj czy użytkownik ma zniżke czy nie i zapisz do zmiennej true albo false
  const hasDiscount = Math.random() > 0.5 ? true : false;
  // 2. Ściągnij wartośc z inputu textowego (id name).
  const amount = +document.querySelector("input").value;
  // 3. Wykonaj console loga "You have to pay *tu cena ktora jest wynikiem wywołania calculatePrice*". Na 1 parametr calculatePrice podaj wartość z inputu, na 2 wartość z pkt 1.
  console.log(`You have to pay ${calculatePrice(amount, hasDiscount)}`);
});

// 1. Napisz funkcję renderForm, w funkcji twórz i wyświetlaj (createElement, appendChild) form, w nim 4 inputy: imie, nazwisko, kod pocztowy i miejscowość, ulica i numer domu. Dodaj też button type submit.
// 2. Do formularza podepnij event listener, przy submitcie formularza, wyświetl na ekranie h2 z tekstem 'Paczka wysłana, zamawiający: *imie, nazwisko, kod pocztowy, miejscowość, ulica, nr domu*'

const renderForm = () => {
  const form = document.createElement("form");
  const firstNameInput = document.createElement("input");
  const secondNameInput = document.createElement("input");
  const codeInput = document.createElement("input");
  const addressInput = document.createElement("input");
  const submitButton = document.createElement("button");
  submitButton.type = "Submit";
  submitButton.textContent = "Submit";

  //   firstNameInput.classList.add("form-input");
  //   secondNameInput.classList.add("form-input");
  //   codeInput.classList.add("form-input");
  //   addressInput.classList.add("form-input");

  firstNameInput.id = "form-input-1";
  secondNameInput.id = "form-input-2";
  codeInput.id = "form-input-3";
  addressInput.id = "form-input-4";

  form.appendChild(firstNameInput);
  form.appendChild(secondNameInput);
  form.appendChild(codeInput);
  form.appendChild(addressInput);
  form.appendChild(submitButton);

  form.addEventListener("submit", (e: Event) => {
    console.log(123);
    e.preventDefault();
    const input1 = (document.getElementById("form-input-1") as HTMLInputElement)
      .value;
    const input2 = (document.getElementById("form-input-2") as HTMLInputElement)
      .value;
    const input3 = (document.getElementById("form-input-3") as HTMLInputElement)
      .value;
    const input4 = (document.getElementById("form-input-4") as HTMLInputElement)
      .value;
    // const inputs = [...document.getElementsByClassName("form-input")];
    // const values = inputs.map((input: HTMLInputElement) => input.value);
    console.log(
      `Paczka wysłana, zamawiający: ${input1} ${input2} ${input3} ${input4}`
    );
  });

  document.body.appendChild(form);
};
//renderForm();

// 4. UNION TYPE
let y: YVariable = 50;
y = 5;
y = "alalalala";
y = true;
y = [1, 2, 2, 4, 4, 5, 6];
//y = {}
// y = true

// 5. TYPE ALIAS
type AnotherAlias = string;
type YVariable = number | string | boolean | number[] | AnotherAlias;

// 6. TYPE ALIAS + UNION TYPES: twarde ustawienie zestawu wartości
type TwentyTwenties =
  | 2020
  | 2021
  | 2022
  | 2023
  | 2024
  | 2025
  | 2026
  | 2027
  | 2028
  | 2029;

//let year: TwentyTwenties = 2035

// 7. TYPOWANIE OBIEKTÓW

const john: Person = {
  firstName: "John",
  lastName: "Smith",
  age: 30,
  married: true,
  pet: "Dog",
};
// a) type alias
// type Person = { firstName: string; lastName: string; age: number, married: boolean };

// b) interface
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  married: boolean;
}

interface Person {
  pet: string;
}

interface Programmer extends Person {
  language: string;
  company: string;
}

// const peter: Programmer = {
//   firstName: "Peter",
//   lastName: "Jackson",
//   age: 25,
//   married: false,
//   pet: "Cat",
//   language: "Python",
//   company: "Microsoft",
// }

// 8. Typowanie list
const people: (Person | Programmer | number[])[] = [
  {
    firstName: "John",
    lastName: "Smith",
    age: 30,
    married: true,
    pet: "Dog",
  },
  {
    firstName: "Peter",
    lastName: "Jackson",
    age: 25,
    married: false,
    pet: "Cat",
    language: "Python",
    company: "Microsoft",
  },
  [1, 2, 3, 45, 56, 7],
];

// 1. Stwórz funkcję renderTodoList (async/await)
// 2. W funkcji renderTodoList strzel do https://jsonplaceholder.typicode.com/todos/ fetchem, pamiętaj o await.
// 3. Rozpakuj odpowiedź metodą JSON. Również pamiętaj o await.
// 4. Stwórz element ul (createElement()).
// 5. Z każdego todosa pochodzącego z API wyciągnij własność title. Możesz skorzystać z metody .map(). Wszystkie tytuły składuj w liście w zmiennej titles.
// 6. Dla każdego tytułu stwórz element li (createElement()), wykorzystując forEach. Ustaw textContent li na aktualny tytuł (1 paramter forEach). Zaraz po tym przyczep (appendChild) li do ul'a (pkt 4).
// 7. Przyczep (appendChild) ul'a do body strony.

const renderTodoList = () => {
  const titles = fetch(`https://jsonplaceholder.typicode.com/todos/`);

  const data = titles.json();
  console.log(data);

  const ul = document.createElement("ul");

  for (const todo of data) {
    const li = document.createElement("li");
    li.textContent = todo.title;
    ul.appendChild(li);
  }

  document.body.appendChild(ul);
};

renderTodoList();