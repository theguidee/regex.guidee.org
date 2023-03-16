---
title: Regex - Quantificadores
description:
---

<h1>Quantificadores</h1>

<h2>Opcional - &#63;</h2>

O meta caracteres `?` tornar o caractere ou expressão anterior a ele opcional, ou seja, pode ou não aparecer.

<Code language="js">

```js

const regex = /ondas?/

const text = 'onda'
const text2 = 'ondas'

console.log(regex.test(text)) // true
console.log(regex.test(text2)) // true

```

</Code>

No nosso padrão especificado, estamos procurando uma palavra que de match tanto com `onda` ou `ondas`, isso por que deixamos a letra `s` como opcional.

<Code language="js">

```js

const regex = /fala[r!]?/

const text = 'falar'
const text2 = 'fala!'
const text3 = 'fala'

console.log(regex.test(text)) // true
console.log(regex.test(text2)) // true
console.log(regex.test(text3)) // true

```

</Code>

Agora, estamos procurando pelo seguinte padrão, primeiro temos a sequência `fala`, depois temos uma lista, falando que pode ter o `r` ou o `!`, e ela também é opcional.

<h2>Asterisco - &#42;</h2>

O asteriscos `*` significa que o caractere ou a expressão anterior a ele pode aparecer repetidas vezes ou não.

<Code language="js">

```js

const regex = /fala!*/

const text = 'fala'
const text2 = 'fala!'
const text3 = 'fala!!!!!!!'

console.log(regex.test(text)) // true
console.log(regex.test(text2)) // true
console.log(regex.test(text3)) // true

```

</Code>

<h2>Mais - +</h2>

O mais `+` é bem parecido com o asterisco, porém sem a parte opcional, ou seja, o caractere ou expressão em que o mais for aplicado precisa aparecer pelo menos uma vez para que o match aconteça.

<Code language="js">

```js

const regex = /fala!+/

const text = 'fala'
const text2 = 'fala!'
const text3 = 'fala!!!!!!!'

console.log(regex.test(text)) // false
console.log(regex.test(text2)) // true
console.log(regex.test(text3)) // true

```

</Code>

<h2>Chaves - &#x7B;n, m&#x7D;</h2>

As chaves `{}` servem para podermos especificar quantas vezes queremos que o caractere ou expressão se repita. Podemos trabalhar com as chaves de diversas formas:

- `{1,3}` - De uma a três repetições;
- `{0,3}` - Até três repetições;
- `{3}` - Exatamente três repetições;
- `{3,}` - Mínimo de três repetições.

<Code language="js">

```js

const regex = /[0-9]{2,3}/

const text = '1'
const text2 = '12'
const text3 = '123'

console.log(regex.test(text)) // false
console.log(regex.test(text2)) // true
console.log(regex.test(text3)) // true

```

</Code>
