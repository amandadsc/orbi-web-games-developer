## DOM

O DOM (Document Object Model) HTML é um padrão de como acessar e modificar os elementos HTML de uma página.

### DOM vs BOM

BOM: Browser Object Model

É tudo que está dentro do objeect window (history, location, screen, navigator e inclusive o DOM).

## Métodos

Selecionando os elementos de uma página

```
document.getElementById('');
document.getElementsByTagName('');
document.getElementByClassName('');
document.querySelectorAll('li .opcao')
document.createElement(element)
document.removeChild(element)
document.appendChild(element)
document.replaceChil(new, old)
```

## Trabalhando com estilos

Element.classList

```
const meuElement = document.getElementById("meu-elemento")
meuElemento.classList.add("novo-estilo");
meuElemento.classList.remove("classe")
meuElemento.classList.toggle("dark-mode") // adiciona a classe caso ela não faça parte da lista e move ela caso faça
```

#### Acessando diretamente o CSS

```
document.getElementsByTagName("p").style.color = "blue";
```

## Eventos

- de clique: click, dbclick
- de atualização: change, load

```
const botao = document.getElementById("meuBotao")
botao.addEventListener("click", outraFuncao);
```

