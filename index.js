// Створити клас SuperMath.
class SuperMath {
  // Додати до екземпляра метод - check(obj)
  check(obj) {
    // параметр obj якого має властивості X, Y, znak
    const { X, Y, znak } = obj;
    // створюємо масив операторів
    const mathOperators = ["+", "-", "*", "/", "%"];

    //  Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У.
    if (mathOperators.includes(znak)) {
      const confirm = prompt(
        `Бажаєте виконати математичну операцію зі знаком ${znak} з числом ${X} та числом ${Y}? (так/ні)`
      );

      if (confirm === "так") {
        const result = this.calc(X, Y, znak);
        console.log(
          `Результат виразу числа ${X} та числа ${Y} дорівнює ${result}.`
        );
      } else {
        // інакше - запитати введення нових даних через метод input() класу SuperMath.
        this.input();
      }
    } // При введенні znak потрібно перевірити коректність введення на можливі математичні дії.
    else {
      console.log(`Невірний оператор: ${znak}`);
      this.input();
    }
  }

  // Калькулятор

  calc(X, Y, znak) {
    switch (znak) {
      case "+":
        return X + Y;
      case "-":
        return X - Y;
      case "*":
        return X * Y;
      case "/":
        return X / Y;
      case "%":
        return X % Y;
      default:
        throw new Error("Невірний оператор");
    }
  }

  // Метод інпуту

  input() {
    const X = Number(prompt("Введіть нове значення X:"));
    const Y = Number(prompt("Введіть нове значення Y:"));
    const znak = prompt("Введіть оператор (+, -, *, /, %):");

    this.check({ X, Y, znak });
  }
}

// Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.
const obj = { X: 12, Y: 3, znak: "+" };
const p = new SuperMath();
p.check(obj);
