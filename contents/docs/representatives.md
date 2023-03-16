---
title: Regex - Representantes
description:
---

<h1>Representantes</h1>

<h2>Ponto - &#46;</h2>

O meta caractere ponto `.` é utilizado para representar qualquer coisa, qualquer caractere, exceto quebra de linha (porém esse comportamento pode ser alterado com a <Link href="/docs/flags#s">flag <code>s</code></Link>).

<Code language="js">

```js

const regex = /./
const regex2 = /./g

const text = 'Texto a'

console.log(text.match(regex)) // ['T']
console.log(text.match(regex2)) // ['T', 'e', 'x', 't', 'o', ' ', 'a']

```

</Code>

Na primeira **regex**, o nosso padrão especificado era o `.`, então na hora do match, ele apenas buscou pelo primeiro caractere que encontra-se.

Já no segundo exemplo, o padrão é o mesmo, porém com o adicional da flag `g`, agora a procura sera por qualquer caractere que não seja a quebra de linha.

<h2>Listas - &#91;&#46;&#46;&#46;&#93;</h2>

Ao contrário do ponto, as listas `[...]` servem para especificar quais caracteres queremos permitir em um match.

<Code language="js">

```js

const regex = /n[aã]o/;

const text = 'não';
const text2 = 'nao';
const text3 = 'nAo';

console.log(regex.test(text)); // true
console.log(regex.test(text2)); // true
console.log(regex.test(text3)); // false

```

</Code>

O nosso padrão especificado é a letra `n`, que pode ser seguido tanto pelo `a` ou `ã` e depois seguido pelo `o`. Nesse caso, a nossa **regex** só dará match com `nao` ou `não`.

Um outro exemplo da utilização da lista pode ser observado no <Link href="/docs/introduction#example-1">primeiro exemplo prático</Link> apresentado na introdução.

<h2>Lista negada - &#91;&#94;&#46;&#46;&#46;&#93;</h2>

A lista negada, como o nome já sugere, ela ira negar os caracteres que estiverem nela, e para negar uma lista, basta adicionar o `^` no inicio dela.

<Code language="js">

```js

const regex = /n[^aã]o/;

const text = 'não';
const text2 = 'nao';
const text3 = 'nAo';

console.log(regex.test(text)); // false
console.log(regex.test(text2)); // false
console.log(regex.test(text3)); // true

```

</Code>


<h2>Intervalos nas listas</h2>

Os intervalos nas listas servem para nos facilitar a especificações de um grupo de caracteres. Os intervalos são baseados na <a href="https://unicode-table.com/pt/" target="_blank">tabela unicode</a>.

Para criar um intervalo, basta adicionar o caractere inicial, um traço `-` e depois o caractere final.

**Exemplo**

Baseado na tableta unicode:

- `[a-z]` - Vai selecionar os todos os caracteres que estiverem entre `a` e `z`;
- `[1-9]` - Aqui vai selecionar os todos os caracteres que estiverem entre `1` e `9`;
- `[á-í]` - E aqui vai  selecionar os todos os caracteres que estiverem entre `á` e `í`

Um exemplo da utilização da lista com intervalos pode ser observado no <Link href="/docs/introduction#example-1">primeiro exemplo prático</Link> apresentado na introdução.
