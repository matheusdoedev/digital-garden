# TDD e o acoplamento

- Dizemos que uma classe está acoplada a outra quando existe alguma relação de dependência entre elas.
- A ideia de um teste de unidade é realmente testar a classe de maneira isolada, sem qualquer interferência das classes que a rodeiam.
- A vantagem desse isolamento é conseguir um maior feedback do teste em relação a classe sob teste.

## Mock Objects

- Classes que simulam o comportamento de outras são chamadas de **mock objects**.

## Alto acoplamento

- O real problema do alto acoplamento é que as dependências de uma classe podem sofrer mudanças, propagando-as para a classe principal.
- Logo, quanto maior a dependência, mais instável é a classe, ou seja, maior a chance dela sofrer uma mundança.
- É recomendável o acoplamento com classes estáveis, que não vão depender de outras classes e não vão mudar muito ao longo do tempo.

## OCP (Open-Closed Principle)

- Em orientação a objetos, a ideia de estendermos o comportamento de uma classe sem alterar seu código é conhecido como **Open-Closed Principle**.

## TDD e a Constante Criação de Interfaces

- Ao criar classes, percebemos que é necessário dividir o comportamento em classes diferentes. Nesse momento, é comum criarmos uma interface para representar o comportamento esperado e continuar a criação e testes daquela classe sem nos preocuparmos em como cada dependência fará seu trabalho

- Ao praticar TDD, o programador foca apenas no que ele precisa das outras classes. Isso faz com que ele crie contratos estáveis e simples de serem implementados.

## O que olhar no teste em relação ao acoplamento?

- O uso abusivo de objetos dublês para tester uma única classe indica que a classe sob teste possui problemas de acoplamento. É possível deduzir que uma classe que faz uso de muitos objetos dublês depende de muitas classes, e portanto, tende a ser uma classe instável.

- A criação de objetos dublês que não são utilizadoes em alguns métodos de testes é outro feedback importante. Isso geralmente acontece quando a classe é altamente acoplada, e o resultado da ação de uma dependência não interfere na outra. Quando isso acontece, o programador acaba por escrever conjuntos de testes, sendo que alguns deles lidam com um subconjunto dos objetos dublês, enquanto outros testes lidam com o outro subconjunto de objetos dublẽs. Isso indica um alto acoplamento da classe, que precisa ser refatorada.

- A falta de abstração geralmente também faz com que uma simples mudança precise ser feita em diferentes pontos do código. Quando uma mudança acontece e o programador é obrigado a fazer a mesma alteração em diferentess testes, isso indica a falta de uma abstração correta para evitar a repetição desnecessária de código. Analogamente, o programador pode perceber a mesma coisa quando ele começa a criar testes repetidos para entidades diferentes.

## Fontes

- Test-Driven Development: Teste e Design no Mundo dos Softwares, Mauricio Anichf
