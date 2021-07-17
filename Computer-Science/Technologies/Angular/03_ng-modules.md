# NgModules

- **NgModules** configure the injector and the compiler and help organize related things together.

- An NgModule is a class marked by the `@NgModule` decorator. `@NgModule` takes a metadata object that describes how to compile a component's template and how to create an injector at runtime. It identifies the module's own compnents, directives, and pipes, making some of them public, through the `exports` property, so that external components can use them. `@NgModule` can also add service providers to the application dependency injectors.

## Angular modularity

- Modules are a great way to organize an application and extend it with capabilities from external libraries.

- Angular libraries are NgModules, such as `Forms Module`, `HttpClientModule`, and `RouterModule`. Many third-party libraries are available as NgModules.

- NgModules consolidate components, directives, and pipes into cohesive blocks of functionality, each focused on a feature area, application business domain, workflow, or commom collection of utilities.

- Modules can also add services to the application. Such services might be internally developed, like something you'd develop yourself or come from outside sources, such as the Angular router and HTTP client.

- Modules can be loaded eagerly when the application starts or lazy loaded asynchronously by the router.

- NgModule metadata does the following:

  - Declares which components, directives, and pipes belong to the module.
  - Makes some of those components, directives, and pipes public so that other module's component templates can use them.
  - Imports other modules with the components, directives, and pipes that components in the current module need.
  - Provides services that other application components can use.

- Every Angular application has at least one module, the root module. You `bootstrap` that module to launch the application.

- The root module is all you need in an application with few components. As the application grows, you refactor the root module into `feature modules` that represent collections of related functionality. You then import these modules into the root module.

## The basic NgModule

```ts
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

// @NgModule decorator with its metadata
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## References

- [Angular IO](https://angular.io)
- [Loiane Training](https://loiane.training)
