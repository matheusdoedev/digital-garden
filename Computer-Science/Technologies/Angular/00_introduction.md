# Introduction

## Angular concepts

- The basic building blocks of the Angular framework are **Angular components** that are organized into **NgModules**
- **NgModules** collect related code into functional sets; an Angular app is defined by a set of NgModules.
- An app always has at least a _root module_ that enables bootstrapping, and typically has many more _feature module_.

  - Components define views, which are sets of screens elements that Angular can choose among and modify according to your program logic and data.
  - Components use services, which provide specific functionality not directly related to views. Service providers can be _injected_ into components as dependencies, making your code modular, reusable, and efficient.

- Modules, components and services are clases that use _decorators_. These decorators mark their type and provide metadata that tells Angular how to use them.
  - The metadata for a component class associates it with a _template_ that defines a view. A template combines ordinary HTML with Angular _directives_ and _binding markup_ that allow Angular to modify the HTML before rendering it for display.
  - The metadata for a service class provides the information Angular needs to make it available to components through _dependency injection (DI)_.

## Resources

- [Angular - Introduction to Angular concepts](https://angular.io/guide)
