# Quando não praticar TDD?

- Em momentos onde o desenvolvedor não sabe bem como resolver o problema, dado sua complexidade, ou não sabe bem como projetar uma classe, dado sua necessidade de ser flexível, TDD pode ser de grande valia devido ao seu constante feedback sobre a qualidade do código.

## Erros comuns durante a prática de TDD

- Escrever o teste e não vê-lo falhar pode não ser uma boa ideia. Se o desenvolvedor escreve um teste achando que ele falharia, mas ele passa, algo está errado. Ou ele não entede muito bem o código de produção que existe, ou o teste não está bem implementado.
- A ideia de também ver o teste passar rapidamente é justamente para que você "teste o teste". Teste automatizado é código, e esse código pode conter bugs. Ao ver o teste passar, você garantiu que o teste fica vermelho ou verde na hora certa.
