# Soplang Keywords Reference

This document provides a reference for all keywords in the Soplang programming language, along with their meanings and examples of usage.

## Variable Declaration Keywords

| Keyword  | Meaning                      | English Equivalent | Example                                  |
| -------- | ---------------------------- | ------------------ | ---------------------------------------- |
| `door`   | Dynamic variable declaration | `var`/`let`        | `door magac = "Sharafdin"`               |
| `tiro`   | Integer type                 | `int`              | `tiro da = 25`                           |
| `qoraal` | String type                  | `string`           | `qoraal magac = "Sharafdin"`             |
| `bool`   | Boolean type                 | `bool`             | `bool waaRun = true`                     |
| `walax`  | Object type                  | `object`           | `walax person = { "name": "Sharafdin" }` |
| `liis`   | List/array type              | `array`            | `liis numbers = [1, 2, 3]`               |
| `maran`  | Null value                   | `null`             | `door a = maran`                         |

## Control Flow Keywords

| Keyword         | Meaning           | English Equivalent | Example                                      |
| --------------- | ----------------- | ------------------ | -------------------------------------------- |
| `haddii`        | If statement      | `if`               | `haddii (x > 10) { bandhig("Weyn") }`        |
| `haddii_kale`   | Else if statement | `else if`          | `haddii_kale (x == 10) { bandhig("Dhexe") }` |
| `haddii_kalena` | Else statement    | `else`             | `haddii_kalena { bandhig("Yar") }`           |

## Loop Keywords

| Keyword  | Meaning            | English Equivalent | Example                                   |
| -------- | ------------------ | ------------------ | ----------------------------------------- |
| `kuceli` | For loop           | `for`              | `kuceli i 1 ilaa 5 { bandhig(i) }`        |
| `intay`  | While loop         | `while`            | `intay (x < 5) { bandhig(x); x = x + 1 }` |
| `jooji`  | Break statement    | `break`            | `haddii (x == 3) { jooji }`               |
| `soco`   | Continue statement | `continue`         | `haddii (x == 3) { soco }`                |
| `ilaa`   | To (in for loops)  | `to`               | `kuceli i 1 ilaa 5 { bandhig(i) }`        |

## Function Keywords

| Keyword | Meaning              | English Equivalent | Example                            |
| ------- | -------------------- | ------------------ | ---------------------------------- |
| `hawl`  | Function declaration | `function`         | `hawl isuGee(a, b) { celi a + b }` |
| `celi`  | Return statement     | `return`           | `celi x * 2`                       |

## Error Handling Keywords

| Keyword    | Meaning            | English Equivalent | Example                             |
| ---------- | ------------------ | ------------------ | ----------------------------------- |
| `isku_day` | Try block          | `try`              | `isku_day { /* code */ }`           |
| `qabo`     | Catch block        | `catch`            | `qabo (khalad) { bandhig(khalad) }` |
| `throw`    | Throw an exception | `throw`            | `throw "Error message"`             |

## Object-Oriented Programming Keywords

| Keyword     | Meaning                       | English Equivalent | Example                                              |
| ----------- | ----------------------------- | ------------------ | ---------------------------------------------------- |
| `fasalka`   | Class declaration             | `class`            | `fasalka Qof { /* properties and methods */ }`       |
| `nafta`     | Reference to current instance | `this`             | `nafta.magac = magac`                                |
| `ka_dhaxal` | Inheritance                   | `extends`          | `fasalka Ardayga ka_dhaxal Qof { /* class body */ }` |
| `cusub`     | New object instantiation      | `new`              | `door ardayga = cusub Ardayga()`                     |

## Module Keywords

| Keyword   | Meaning          | English Equivalent | Example                 |
| --------- | ---------------- | ------------------ | ----------------------- |
| `ka_keen` | Import statement | `import`           | `ka_keen "math_lib.so"` |

## Special Values

| Value   | Meaning       | English Equivalent | Example              |
| ------- | ------------- | ------------------ | -------------------- |
| `run`   | Boolean true  | `true`             | `bool check = run`   |
| `been`  | Boolean false | `false`            | `bool check = been`  |
| `maran` | Null value    | `null`             | `door empty = maran` |

## Operators

| Operator | Meaning                  | English Equivalent | Example                                    |
| -------- | ------------------------ | ------------------ | ------------------------------------------ |
| `+`      | Addition                 | `+`                | `x = a + b`                                |
| `-`      | Subtraction              | `-`                | `x = a - b`                                |
| `*`      | Multiplication           | `*`                | `x = a * b`                                |
| `/`      | Division                 | `/`                | `x = a / b`                                |
| `%`      | Modulus                  | `%`                | `x = a % b`                                |
| `==`     | Equal to                 | `==`               | `haddii (a == b) { /* code */ }`           |
| `!=`     | Not equal to             | `!=`               | `haddii (a != b) { /* code */ }`           |
| `>`      | Greater than             | `>`                | `haddii (a > b) { /* code */ }`            |
| `<`      | Less than                | `<`                | `haddii (a < b) { /* code */ }`            |
| `>=`     | Greater than or equal to | `>=`               | `haddii (a >= b) { /* code */ }`           |
| `<=`     | Less than or equal to    | `<=`               | `haddii (a <= b) { /* code */ }`           |
| `&&`     | Logical AND              | `&&`               | `haddii (a > 0 && b > 0) { /* code */ }`   |
| `\|\|`   | Logical OR               | `\|\|`             | `haddii (a > 0 \|\| b > 0) { /* code */ }` |
| `!`      | Logical NOT              | `!`                | `haddii (!waaRun) { /* code */ }`          |

## Built-in Functions

| Function  | Meaning              | English Equivalent | Example                                  |
| --------- | -------------------- | ------------------ | ---------------------------------------- |
| `bandhig` | Print to console     | `print`            | `bandhig("Salaan, Adduunka!")`           |
| `gelin`   | Read input from user | `input`            | `door magac = gelin("Magacaaga geli: ")` |
| `nooc`    | Get type of variable | `typeof`           | `bandhig(nooc(magac))`                   |
| `tiro`    | Convert to number    | `int`/`float`      | `door n = tiro("5")`                     |
| `qoraal`  | Convert to string    | `str`              | `door s = qoraal(25)`                    |
| `bool`    | Convert to boolean   | `bool`             | `door b = bool(1)`                       |
| `liis`    | Create a list        | `list/array`       | `door list = liis(1, 2, 3)`              |
| `walax`   | Create an object     | `object/dict`      | `door obj = walax(name: "Ali", age: 25)` |

## List Methods

| Method     | Meaning              | English Equivalent | Example                               |
| ---------- | -------------------- | ------------------ | ------------------------------------- |
| `kudar`    | Add item to list     | `append`           | `myList.kudar(newItem)`               |
| `kasaar`   | Remove last item     | `pop`              | `door lastItem = myList.kasaar()`     |
| `dherer`   | Get list length      | `length/size`      | `door size = myList.dherer()`         |
| `kudar`    | Concatenate lists    | `concat`           | `door combined = list1.kudar(list2)`  |
| `leeyahay` | Check if item exists | `contains`         | `door exists = myList.leeyahay(item)` |

## Object Methods

| Method     | Meaning             | English Equivalent   | Example                                |
| ---------- | ------------------- | -------------------- | -------------------------------------- |
| `fure`     | Get object keys     | `keys`               | `door keys = myObj.fure()`             |
| `leeyahay` | Check if key exists | `has/hasOwnProperty` | `door exists = myObj.leeyahay("name")` |
| `tirtir`   | Remove property     | `delete`             | `myObj.tirtir("oldProp")`              |
| `kudar`    | Merge objects       | `merge/assign`       | `door merged = obj1.kudar(obj2)`       |

## Error Message Terminology

| Somali Term | Meaning            | English Equivalent | Example Usage                                                     |
| ----------- | ------------------ | ------------------ | ----------------------------------------------------------------- |
| `Khalad`    | Error              | `Error`            | `Khalad lexer: Xaraf aan la filayn: @`                            |
| `sadar`     | Line (in code)     | `line`             | `ee sadar 12, goobta 18`                                          |
| `goobta`    | Position (in code) | `position`         | `ee sadar 12, goobta 18`                                          |
| `lexer`     | Lexical analyzer   | `lexer`            | `Khalad lexer: Xaraf aan la filayn: @`                            |
| `parser`    | Syntax analyzer    | `parser`           | `Khalad parser: Waxaa la filayay ')', laakiin waxaa la helay '+'` |
| `runtime`   | Execution time     | `runtime`          | `Khalad runtime: Ma suurtogali karto qeybinta eber`               |
| `nooc`      | Type               | `type`             | `Khalad nooc: Qiimaheeda '10' ma ahan qoraal`                     |

## Special Syntax

| Syntax  | Meaning             | English Equivalent | Example                               |
| ------- | ------------------- | ------------------ | ------------------------------------- |
| `//`    | Single-line comment | `//`               | `// Tani waa comment`                 |
| `/* */` | Multi-line comment  | `/* */`            | `/* Tani waa comment dheer */`        |
| `{ }`   | Code block          | `{ }`              | `haddii (x > 10) { bandhig("Weyn") }` |
| `( )`   | Expression grouping | `( )`              | `(a + b) * c`                         |
| `[ ]`   | List/array access   | `[ ]`              | `numbers[0]`                          |
| `.`     | Property access     | `.`                | `person.name`                         |
