# Glosser

A jQuery plugin for [linguistic glossing](https://en.wikipedia.org/wiki/Gloss_(annotation)).

## Installation

#### Bower

```sh
bower install glosser
```

## Basic usage

### Preparing HTML

```html
<div class="to-gloss">
	Dit is een testzin. Het werkt!
	This is a {test sentence} It work.3sg
</div>
```

### Calling JavaScript

```js
$('to-gloss').glosser();
```