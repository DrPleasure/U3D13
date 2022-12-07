let question1 = " --- 1. General Overview --- \n- Javascript is a scripting language which helps you create interactive web pages whereas Typescript is a superset of Javascript. \nTypescript code needs to be compiled while JS code does not. \n- TS uses concepts like types and interfaces to describe data being used whereas JS does not have such a concept.\n - TS is a powerfully typed language, including generic & JS features for large size project whereas JS is an ideal option for smaller sized projects"

let question2 = "--- 2. The TS compiler --- \n -Typescript is a superset of JS but it is strongly typed, OOPL. TS files do not run directly on the browser as JS files do. \n - We have to compile the TS file to JS then it will work as usual."
let question3 = "--- 3. Type Inference --- \n - In Typescript, it is not necessary to annotate type always. \n The TypeScript compiler infers the type information when there is no explicit information available in the form of type annotations \n - The TS compiler infers the type information when: \n - Variables and members and initialized \n - Setting default values for parameters \n - Determined function return types"
let question4 = "--- 4. The `any` type --- \n Not all type information is available or its declaration would take an inappropriate amount of effort. These may occur for values from code that has been written without TypeScript or a 3rd party library. In these cases, we might want to opt-out of type checking. To do so, we label these values with the any type:"
let question5 = "--- 5. The Union Type --- \n TypeScript allows us to use more than one data type for a variable or a function parameter.\n  This is called union type.\n \n let code: (string | number);\n code = 123;   // OK \n code = `ABC`; // OK\n code = false; // Compiler Error\n \nlet empId: string | number; \nempId = 111; // OK\nempId = `E111`; // OK \nempId = true; // Compiler Error"
let question6 = "--- 6. The Tuple Type --- \nTypeScript introduced a new data type called Tuple. \n Tuple can contain two values of different data types.\n\n  Example: Tuple vs Other Data Types\n\nvar empId: number = 1; \nvar empName: string = `Steve`; \n\n   // Tuple type variable \nvar employee: [number, string] = [1, `Steve`];"
let question7 = "--- 7. Interfaces in TS --- \nInterface is a structure that defines the contract in your application. It defines the syntax for classes to follow. Classes that are derived from an interface must follow the structure provided by their interface. The TypeScript compiler does not convert interface to JavaScript. "
let question8 = "--- 8. Generics in TS --- \nGenerics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.\n\n Generics makes it easier to write reusable code."


console.log(question1)
console.log(question2)
console.log(question3)
console.log(question4)
console.log(question5)
console.log(question6)
console.log(question7)
console.log(question8)