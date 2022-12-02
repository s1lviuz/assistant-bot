# Funções que usam RegExp

### verificaMensagem

![code](https://user-images.githubusercontent.com/54729104/205208762-1da263f6-cdb6-4a88-a368-26465a546a10.png)

Recebe a mensagem que foi passada atraves do canal de texto e testa a expressão regular /noticia/i onde se tiver na frase a palavra noticia no caso insensitivo, ou seja, maiusculo ou minusculo ela retorna true.

### buscaNoticiasGlobo

![code](https://user-images.githubusercontent.com/54729104/205208999-577ef7c5-bcae-4cf3-b58f-fb680dff378a.png)

Dispara uma requisição get prara o site da globo atraves da biblioteca 'axios' e quando retorna utiliza o metodo match() que é uma função do JavaScript onde é retornada uma lista com todos os caracteres encontrados filtrados pela expressão regular usada no parametro

Esse parametro especificamente retorna todo o conteudo que iniciar com `<h2 class="post__title">` e terminar com `</h2>` 

Depois limpa com replace() as tags html e caracteres que ainda estão no texto, tendo como retorno uma lista apenas com os titulos das noticias.

## Links úteis

- [Aprenda mais sobre RegExp em JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)
