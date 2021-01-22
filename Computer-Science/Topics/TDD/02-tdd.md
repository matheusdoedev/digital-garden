# TDD

- Ciclo:

  1. Escreve-se um teste de unidade para uma nova funcionalidade;
  1. Vê o teste falhar;
  1. Implementa-se o código mais simples para resolver o problema;
  1. Melhora-se (refatora-se) o código quando necessário.

- A ideia é a de que o desenvolvedor deve começar a implementação pelo teste e, deve o tempo todo, fazer de tudo para que o código fique simples e com qualidade

## Vantagens

### Foco no teste e não na implementação

- Ao começar pelo teste, o programador consegue pensar somente no que a classe **deve** fazer, e esquece por um momento a implementação.
- Isso o ajuda a pensar em melhores cenários de teste para a classe sob desenvolvimento.

### Código nasce testado

- Se o programador pratica o ciclo corretamente, isso então implica em que todo o código de produção escrito possui ao menos um teste de unidade verificando que ele funciona corretamente.

### Simplicidade

- Ao buscar pelo código mais simples constantemente, o desenvolvedor acaba por fugir de soluções complexas, comuns em todos os sistemas.
- O praticante de TDD escreve código que apenas resolve os problemas que estão representados por um teste de unidade.

### Melhor reflexão sobre o design da classe

- No cenário tradicional, muitas vezes a falta de coesão ou o excesso de acoplamento é causado muitas vezes pelo desenvolvedor que só pensa na implementação e acaba esquecendo como a classe vai funcionar perante o todo. Ao começar pelo teste, o desenvolvedor pensa sobre como sua classe deverá se comportar perante as outras classes do sistema.
- O teste atua como o primeiro cliente da classe que está sendo escrita.
- Nele o desenvolvedor toma decisões como o nome da classe, os seus métodos, parâmetros, tipos de retorno, e etc.
- No fim, todas elas são decisões de design e, quando o desenvolvedor consegue observar com atenção o código do teste, seu design de classes pode crescer muito em qualidade.

## Baby Steps

- A ideia de sempre tomar o passo mais simples que resolva o problema naquele momento (e faça o teste passar) é conhecido pelos praticantes de TDD como baby steps.
- A vantagem desses passos de bebê é tentar levar o desenvolvedor sempre ao código mais simples e, por consequência, mais fácil de ser compreendido e mantido posteriormente,

## Fontes

- Test-Driven Development: Teste e Design no Mundo dos Softwares, Mauricio Anichf
