Olá.  

Esta é minha proposta para o teste técnico para a vaga de desenvolvedor **front end**. O projeto tem uma versão em produção no Vercel, visite: [https://hamburger-liard.vercel.app/](https://hamburger-liard.vercel.app/).  

Caso queira executar localmente, após clonar o projeto, basta instalar as dependências com:
```bash
yarn

# ou

npm install
```

Uma vez instalado, para rodar o projeto localmente, execute o comando:
```bash
yarn start

# ou

npm start
```
O projeto foi desenvolvido em **React**; não houve necessidade de bibliotecas de componentes ou formulários, nem gestão de estado via `Redux` ou `Context`. Os estados manipulados no projetos estão todos restritos aos componentes em que ocorrem, então o `useState` foi suficiente para dar conta de todos os casos, que eram basicamente alteração de estilos. Também não houve necessidade de consumo de *API* de terceiros. A única biblioteca utilizada foi o *React Hook Forms*, para roteamento das opções do menu.  
O quê, então, foi exigido nesse teste??  

CSS. *Bastante* CSS.  

Os estilos foram feitos em Sass (SCSS) e algumas soluções gráficas empregaram os pseudo-elementos *:after* e *:before*, que têm um peso meramente ilustrativo no projeto.  

Fiz uma lógica nos **@media queries** para tornar a apresentação dos conteúdos responsiva, utilizando apenas dois breaking points: 1080px e 700px.  

Considero que o teste foi bem exigente em termos visuais e de domínio dos estilos, e foi divertido resolver os desafios que se apresentaram nesse layout. Espero que o resultado esteja à altura do esperado.

Atenciosamente,

## [Atauã P Doederlein](mailto:contato@ataua.com)