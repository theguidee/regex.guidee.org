---
title: Regex - Outros
description:
---

<h1>Outros</h1>

<h2>Escape - &#92;</h2>

O caractere de **escape** serve para que possamos **retornar o sentido literal** do caractere que vem após ele, em outras palavras, serve para remover a função de caracteres especiais e torna-los caracteres normais. Exemplo:

<Code language="js">

```js

const regex1 = /./
const regex2 = /\./

const text = 'Um texto qualquer.'

console.log(text.match(regex1)) // ['U']
console.log(text.match(regex2)) // ['.']

```

</Code>

No nosso primeiro padrão especificado, passamos apenas o caractere `.`, mas como já vimos, o caractere <a href="/docs/representantes#ponto---." target="_blank">ponto é um caractere especial</a>, e no regex ele significa qualquer coisa, por isso no match com o texto ele vai retornar a letra `U`.

Já no nosso segundo padrão, passamos também o ponto, porém com um **escape** antes, e agora sim, o ponto é tratado como um ponto mesmo.

<h2>Ou - &#x7C;</h2>

O caractere **ou** serve para que possamos passar **duas ou mais possibilidades** de match, ele é bem parecido com a <a href="/docs/representantes#listas---[...]" target="_blank">lista</a>, com a diferença que a **lista é apenas para uma letra**:

<Code language="js">

```js

const regexComLista = /[gpr]ato/
const regexComOu    = /gato|pato|rato/

```

</Code>

Como podemos ver, são bem similares e em questão de semântica, fazem exatamente a mesma coisa, porém, nos casos em que apenas uma letra muda entra as alternativas, a <a href="/docs/representantes#listas---[...]" target="_blank">lista</a> é a **melhor escolha**, caso contrario, utilize o **ou**.
