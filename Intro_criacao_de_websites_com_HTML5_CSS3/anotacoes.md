# Introdução a criação de websites com HTML5 e CSS3

## Estrutura básica

Criado por Tim Berners-Lee

<!DOCTYPE html>
<html>
    <head>
        <meta>
        <title></title>
    </head>
    <body>
    </body>
</html>

Exercício - Criação de um site pessoal

## Entendendo o que é semântica

Elementos do HTML5

<section>
<header>
<article>
<aside>
<footer>

<h1> a <h6> - Títulos, apenas um h1 por página.

## Como usar textos e links em HTML

<p> - paragrafo, suporta imgs, videos, códigos, varios tipos de conteúdos.

<a href="" target="_blank">Texto do link</a>
href: endereço do link;
target: se o link abre na mesma aba ou em outra(_blank). 

## Como inserir imagens no seu site

<img src="caminho da img" alt="Legenda caso a img nao seja carregada ou para leitores de tela">

link útil: 
[Reduzir img em png](https://tinypng.com/)

## Como organizar listas com HTML

ul, ol, li

ul - a ordem nao é importante
ol - a ordem importa
li - item da lista

<ul>
    <li>item</li>
    <li>item</li>
    <li>item</li>
</ul>

## Introdução e conceitos básicos do CSS3

a {
    color: blue;
    font-size: 14px;
}

class - agrupa elementos
id - só pode existir um id com mesmo nome na pág.

<link rel="stylesheet" href="style.css">
CSS num arquivo externo.

Box model

margin
    border
        padding
            content

    **sup/inf esq/dir**
padding: 10px 5px; 

    **sup dir inf esq**
padding: 15px 5px 8px 0;
0 nao precisa de unidade;

background-color
[link para estudo](https://developer.mozilla.org/en-US/docs/Web/CSS)

border: 3px solid blue;
border: 3px dotted blue;
border: 3px dashed blue;

border-top-width - muda o tam da borda superior
border-bottom-color - muda a cor da borda inferior
border-left-style - muda o estilo da borda esquerda

border-radius - arredondar as bordas

font-family: usada para adicionar uma fonte no site

font-style: estilo da fonte. Padrão é normal. Precisa ficar atento se a fonte suporta outro estilo.

font-weight: bold ou normal.

text-transform: uppercase; - todo o texto em caixa alta
text-transform: lowercase; - todo o texto em caixa baixa
text-transform: capitalize; - todas as primeiras letras do texto em caixa alta

text-decoration: uderline - sublinhado
text-decoration: overline - linha acima
text-decoration: line-through - riscado

list-style-type - alterar o marcador das listas.

width - largura
height - altura

max-width / max-height - largura/altura máxima

margin

text align - alinhar texto