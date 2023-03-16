---
title: Regex - Introdução
description:
---

<h1>Introdução</h1>

Seja muito bem vindo a essa documentação não oficial de **expressões regulares!** Aqui você vai aprender tudo o que precisa para dominar a **Regex** 🎉

Então, para dar inicio a nossa jornada, vamos começar respondendo o que são **expressões regulares!**

<h2>O que é uma expressão regular?</h2>

**Expressões regulares** são uma composição de símbolos e/ou caracteres especiais e/ou literais, que juntos formam uma sequência, um padrão de texto.

Elas compostas em duas partes, a primeira é onde escrevemos o nosso padrão, e a segunda parte é onde podemos colocar algumas flags.

<CustomBlock>
Para os exemplos, iremos utilizar a linguagem do Javascript. Vale lembrar também que os conceitos aprendidos aqui sobre regex independem do tipo de linguagem que você estiver trabalhando.
</CustomBlock>

Quando vamos criar uma **regex**, podemos fazer de duas formas, usando o construtor `RegExp` ou usando uma short syntax,.

<Code language="js">

```js

// Utilizando o construtor

const regex = new RegExp('padrão', 'flags');

// Utilizando a short syntax

const regexp = /padrão/; // sem flags
const regexp = /padrão/gmi; // com as flags g, m e i

```

</Code>

<h2>Para que serve?</h2>

Agora que já entendemos o que é uma expressão regular, vamos falar um pouco onde e como podemos utilizar.

**Expressões regulares** podem ser utilizadas em uma infinidade de tarefas onde se envolve a busca, manipulação, e/ou validação de textos, como:

- Validação de RG, CPF, número de cartão, email, etc;
- Pegar as iniciais do nome do usuário;
- Manipulação e formatação de datas;
- Fazer uma busca/contagem por certa palavra em um texto;

<h2>Exemplo prático</h2>

<h3 id="example-1">#1</h3>

Vamos supor que estamos trabalhando em uma distribuidora, e diariamente, o sistema cria um arquivo com todas as encomendas que saíram no dia, contento o horário e o nome do produto.

Algo como:

<Code language="js">

```txt

Saída 08:23 / Teclado Bacana;
Saída 09:17 / Bolsa Legal;
Saída 11:32 / Teclado com luizinha;
Saída 13:02 / Headphone maneiro;
Saída 14:11 / Monitor ultra dos uaide;
Saída 16:37 / Um outro teclado não tão legal;
Saída 18:57 / Cabos usb;
Saída 19:12 / Mouse;

```

</Code>

Com esse arquivo em mãos, é nos dada a missão de calcular quantas entregas foram feitas entre o meio dia e as sete horas da noite.

Como você faria esse calculo?

Temos varias opções, podemos fazer isso manualmente, podemos fazer um split e ir comparando os caracteres ou, podemos fazer essa contagem utilizando **regex**, utilizando a expressão ```1[2-8]:```

Veja como ficaria:

<Code language="js">

```js

// Após ter feito a leitura do conteúdo do arquivo

const regex = /1[2-8]:/gm
const matches = arquivo.match(regex).length

console.log(matches) // 4

```

</Code>

<h3>#2</h3>

Agora vamos supor que estamos fazendo um chat para um jogo online, e queremos ocultar certas palavras.

Como você faria?

Utilizando **regex**, fica super simples!

<Code language="js">

```js

const forbiddenWords = ['beleza', 'maneiro'].join('|')
const message = 'Isso esta uma beleza, jogo maneiro'

const regex = new RegExp(forbiddenWords, 'g')
const result = message.replace(regex, '****')

console.log(result) // Isso esta uma ****, jogo ****

```

</Code>

<h2>Ferramentas online</h2>

Algumas ferramentas online para você poder fazer os seus estudos, testes, etc, ou se preferir, pode usar também a sua <a href="https://www.redhat.com/pt-br/topics/middleware/what-is-ide#:~:text=Um%20ambiente%20de%20desenvolvimento%20integrado,gráfica%20do%20usuário%20(GUI)." target="_blank">IDE</a> de preferência!

- <a href="https://regex101.com" target="_blank">Regex 101</a>
- <a href="https://regexr.com" target="_blank">Regexr</a>
