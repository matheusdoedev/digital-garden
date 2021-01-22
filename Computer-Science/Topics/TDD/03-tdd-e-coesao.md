# TDD e Coesão

- Classes que fazem muita coisa são difíceis de serem mantidas. Ao contrário, classes com poucas responsabilidades são mais simples e mais fáceis de serem evoluídas.
- Uma classe coesa é justamente aquela que possui apenas uma única responsabilidade. - - Em sistemas orientados a objetos, a ideia é sempre buscar por classes coesas.

## Complexidade ciclomática

- De maneira simplificada, é o número de diferentes caminhos que seu método pode executar.
- Quanto maior a complexidade ciclomática, maior a quantidade de testes necessários para garantir seu comportamento.
- Um código com alta complexidade ciclomática, além de ser confuso, ainda exige um alto esforço para ser testado.

## Responsabilidades e Coesão

- Se a classe de testes possui muitos testes, isso quer dizer que a classe de produção possui muitas responsabilidades.
- E, em sistemas orientados a objetos, as classes devem ser coesas, conter apenas uma única responsabilidade.
- Quando uma classe de testes tende a crescer indefinidamente, isso pode ser sinal de má coesão na classe de produção.

## Testes em métodos privados

- **Se o desenvolvedor sente a necessidade de testar um método privado de maneira isolada, direta, ou seja, sem passar por um método público que faz uso dele, muito provavelmente é porque esse método privado faz muita coisa.**

## Fontes

- Test-Driven Development: Teste e Design no Mundo dos Softwares, Mauricio Anichf
