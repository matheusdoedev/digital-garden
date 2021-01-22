# Testes de Integração e TDD

- Uma vantagem dos testes de unidade é que eles são fáceis de serem escritos e rodam muito rápido. A desvantagem deles é que eles não simulam bem a aplicação no mundo real.

## Testes de sistema

- Um teste de sistema é aquele que é idêntico ao executado pelo usuário da aplicação. Se sua aplicação é uma aplicação web, esse teste deve então subir o browser, clicar em links, submeter formulários, e etc.
- A vantagem desse tipo de teste é que ele consegue encontrar problemas que só ocorrem no mundo real, como problemas de integração entre a aplicação e bando de dados, e etc.
- O problema é que eles geralmente são mais difíceis de serem escritos e levam muito mais tempo para serem executados.

## Testes de integação

- É o tipo de teste que tem a finalidade de testar e garantir a integração entre dois pontos da aplicação, por exemplo, a integração entre uma classe e um serviço/sistema externo.

### Classes DAO

- São classes responsáveis por fazer toda a comunicação com o banco de dados.

## Quando não usar mocks ?

- O primeiro passo para que um teste deixe de ser exclusivamente de unidade e passe a ser de integração é não usar mocks e passar dependências concretas para a classe sob teste.

- Geralmente classes que representam entidades, serviços, utilitários, ou qualquer outra coisa que enconsta em infraestrutura, não são mockadas.

- Use mocks quando sua classe lida com interfaces.

- Um ponto negativo do uso de mock objects é o alto acoplamento criado entre o código de teste e o código de produção.

- Se sua bateria de testes só faz asserções em objetos dublês, talvez essa bateria, não esteja lhe dando o feedback necessário. Portanto, faça uso de mock objects quando utilizar a instância concreta da classe for complexo ou trabalhoso.

## Testes em DAOs

- Testar classes que fazem uso de DAOs é simples, basta fazermos uso de mocks. Mas o DAO é uma classe, e que também merece ser testada. Testar um DAO é fundamental.
- É muito comum errarmos em consultas SQL, esquecermos de algum campo no momento da inserção ou atualizar campos que não deveriam ser atualizados.

## Devo usar TDD em testes de integração ?

- TDD faz muito sentido quando queremos testar algoritmos ou projetos de classe complexos. Classes como DAOs geralmente não apresentam uma lógica complicada, mas sim apenas código que integra com outros sistema.

## Testes em aplicações Web

- Em sistemas web, geralmente a grande dificuldade de se escrever um teste é justamente separar as "camadas de integração" da camada de domínio.
- Independente do framework escolhido para ajudar no desenvolvimento, em ambos o desenvolvedor é obrigado a escrever uma camada que "conecta" o mundo web, cheio de requisições respostas, HTTP e HTML, com o mundo de domínio, cheio de classes de negócio ricas. Chamamos essa camada geralmente de "controlador" (ou Controller).
- Controllers devem ser adaptadores. Não devem possuir regras de negócio, apenas regras de fluxo e exibição.
- Controlladores são um bom exemplo de classes cujo acoplamento alto é aceitável.
- Bugs em controladores geralmente acontecem não pelo seu código em si, mas por problemas de integração com a camada web. Nomes de elementos no HTML que são submetidos pelo formulário e capturados pelo controlador são causadores de muitos bugs.
- Essa camada de integração deve ser testada e a melhor solução pode ser escrever um teste de sistema, ou seja, deve-se subir o browser, navegar na aplicação web , submeter formulários e validar a saída.
- A ideia é escrever um teste de sistema que falha, em seguida fazer o ciclo de TDD para criar todas as classes necessárias para implementar a funcionalidade, e por consequência, fazer o teste de sistema passar.
