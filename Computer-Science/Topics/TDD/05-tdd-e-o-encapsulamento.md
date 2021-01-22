# TDD e o Encapsulamento

- Encapsular é esconder os detalhes de **como** a classe realiza sua tarefa. As outras classes devem conhecer apenas **o quê** ela faz.

- As classes devem ser responsáveis por manter o seu próprio estado. Elas é quem devem conhecer as suas próprias regras de negócio. Quando a regra não é seguida, pedaços da regra de negócio são espalhadas pelo código.

## Tell, Don't Ask e Lei de Demeter

- Em programas orientados a objetos, geralmente dizemos que as classes não devem fazer perguntas e tomar decisões baseados nas respostas, mas sim **mandar** o objeto executar uma ação, e ele por conta própria tomar a decisão certa. Essa ideia é conhecida por **Tell, Don't Ask**.

### Lei de Demeter

- Diminuir a quantidade de iterações com os objetos, ou seja, navegar menos dentro deles, é o que conhecemos por **Lei de Demeter**.

## O que olhar no teste em relação ao encapsulamento?

- Testes que lidam demais com outros objetos ao invés de lidar com o objeto sob teste podem estar avisando o desenvolvedor em relação a problemas de encapsulamento.

### Modelo anêmico

- É aquele onde classes contém apenas atributos ou apenas métodos.
- Classes que contém atributos apenas representam as entidades, enquanto outras classes, que contém apenas métodos, realizam ações sobre eles. Este tipo de projeto (que faz com que o código se pareça mais com um código procedural do que com um código orientado a objetos) deve ser evitado.

## Fontes

- Test-Driven Development: Teste e Design no Mundo dos Softwares, Mauricio Anichf
