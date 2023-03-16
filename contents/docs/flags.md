---
title: Regex - Flags
description:
---

<h1>Flags</h1>

As flags são opções que podemos passar para a nossa **regex**, alterando assim alguns comportamentos padrões na hora de realizar uma busca no texto.

<h2>G</h2>

Por padrão, a **regex** vai parar de realizar a busca pelo padrão assim que encontrar o primeiro match, ao passar a flag `g`, a busca se tornara global no texto.

<Code language="js">

```js

const regex = /a/
const regexGlobal = /a/g

const text = 'aqui tem uma mensagem'

console.log(text.match(regex).length) // 1
console.log(text.match(regexGlobal).length) // 3

```

</Code>

Na primeira **regex**, o nosso padrão especificado era a letra `a`, então na hora do match, ele apenas buscou pelo primeiro `a` que encontrasse.

Já no segundo exemplo, o padrão é o mesmo, porém com o adicional da flag `g`, agora a procura sera feita por todos os `a` que encontrar.

<h2>I</h2>

A flag `i` serve para que o nosso padrão se torne *case insensitive*. Por padrão, a **regex** diferencia letras maiúsculas de maiúsculas, com a flag `i`, essa diferenciação é removida.

<Code language="js">

```js

const regex = /t/
const regexCaseInsencitive = /t/i

const text = 'Tem uma mensagem aqui'

console.log(text.match(regex).length) // 0
console.log(text.match(regexCaseInsencitive).length) // 1

```

</Code>

Na primeira **regex**, o nosso padrão especificado era a letra `t`, então na hora do match, ele apenas buscou pelo primeiro `t` minúsculo que encontrasse.

Já no segundo exemplo, o padrão é o mesmo, porém com o adicional da flag `i`, agora a procura sera feita tanto pela letra t minúscula **t**, como maiúscula **T**.

<h2>M</h2>

A flag `m` habilita o modo multiline para os meta caracteres `^` e `$` (veremos mais para frente sobre eles).

<Code language="js">

```js

const regex = /^T/
const regexMultiline = /^T/gm

const text = `
  Tem uma mensagem aqui
  Tem outra mensagem aqui
`

console.log(text.match(regex).length) // 1
console.log(text.match(regexMultiline).length) // 2

```

</Code>

Na primeira **regex**, o nosso padrão especificado era de buscar a letra **T**, exatamente no começo do texto, então na hora do match, ele buscou no início do texto algo que começasse com a letra **T**.

Já no segundo exemplo, o padrão é o mesmo, porém com o adicional das flags `m` e `g`, com a flag `m`, agora ele vai tratar o meta caractere `^` para olhar não mais para o início do texto, e sim para o início da linha, e como colocamos a flag `g` junto, a **regex** vai procurar no início de todas as linhas.

<h2>S</h2>

A flag `s` assim como a `m`, altera o comportamento de um meta caractere, que no caso é o `.`. O ponto significa qualquer coisa, exceto quebras de linha, com a flag `s`, o ponto passa a significar também as quebras de linha.

<Code language="js">

```js

const regex = /.+/
const regexDotAll = /.+/s

const text = `
  Tem uma mensagem aqui
  Tem outra mensagem aqui
`.trim()

console.log(text.match(regex))
// [`Tem uma mensagem aqui`]

console.log(text.match(regexDotAll))
// ['Tem uma mensagem aqui\nTem outra mensagem aqui']

```

</Code>
