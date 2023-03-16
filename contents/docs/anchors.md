---
title: Regex - Âncoras
description:
---

<h1>Âncoras</h1>

<h2>Circunflexo - &#94;</h2>

O meta caractere `^` serve para indicar que o nosso padrão deve realizar a busca logo no início do texto, e ele deve ser utilizado no início da rexeg para ter efeito.

<CustomBlock>
A <a href="/docs/flags#m" target="_blank">flag m</a> altera um pouco o comportamento do `^`.
</CustomBlock>

<Code language="js">

```js

const regex = /^[0-9]/

const text = '1 dos recados'
const text2 = 'Em 1 time'

console.log(regex.test(text)) // true
console.log(regex.test(text2)) // false

```

</Code>

<h2>Cifrão - &#36;</h2>

O meta caractere `$` tem o mesmo propósito que o `^`, porém ele vai realizar as buscar a partir do final da linha, e ele deve ser utilizado no final da rexeg para ter efeito.

<CustomBlock>
A <a href="/docs/flags#m" target="_blank">flag m</a> altera um pouco o comportamento do `$`.
</CustomBlock>

<Code language="js">

```js

const regex = /s$/

const text = 'recados'
const text2 = 'sim'

console.log(regex.test(text)) // true
console.log(regex.test(text2)) // false

```

</Code>

<h2>Borda - &#92;b</h2>

O meta caractere `\b` serve para indicar os limites de uma palavra, podendo definir o seu começo e fim.

<Code language="js">

```js

const regex = /\bde\b/g
const regex2 = /de/g

const text = 'dezembro de 2020'

console.log(text.match(regex)) // ['de']
console.log(text.match(regex2)) // ['de', 'de']

```

</Code>

Na primeira regex, temos uma borda (`\b`), as letras `d` e `e` e novamente a borda, isso significa o seguinte, que estamos fazendo uma busca por palavras que comecem com `d` e terminem com `e`.

No nosso texto, temos apenas uma aparição desse padrão, (`dezembro *de* 2020`).

Já na segunda regex, estamos procurando apenas pela ocorrência da letra `d` seguida de `e`, que ocorre duas vezes no texto, (`*de*zembro *de* 2020`).

