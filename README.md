# HTML

É uma liguagem de marcação que tem as seguintes responsabilidades

- Conteúdo (texto, imagem, vídeo);
- Semântico (utilizar as `tags` de forma correta)
- Estrutura

* `h1` - heading 1 - 6
  Usamos ele quando queremos definir títulos

- `a` - Link (a - anchor)  
  Usamos para definir a navagação do usuário. Se tem um texto que você quer que o usuário clique e vá para outro lugar, você pode usar essa tag junto com o atributo `href`. Exemplo de um site que o úsuario é direcionado para o site da collabcode.training:

```
<a href="http://collabcode.training"></a>
```

- `nav` - Elemento usado para envolve uma seção de links que se vincula a outras páginas.

- `head` - Essa tag é destinada para colocar as configurações da página. São os chamados metadados que são os dados sobre os dados.
- `title` - Usada para colocar o título na aba da página
- `body` - Destinada para envolver o conteúdo do documento ou página
- `header` - Usada para colocar o cabeçalho da página
- `meta + charset` - Essa tag junto com o atributo são responsáveis por definir o padrão ASCII de caracteres que será utilizada pela nossa página, no caso a latina. Com isso o navegador poderá reconhecer os acentos e caracteres especiais padrão da lingua.
  Exemplo:

```
<meta charset="utf-8">
```

- `Doctype` - Usada para definir a versão do html mais atual

```
<!DOCTYPE html>
```

# CSS

É uma liguagem de estilo, tem as seguintes responsabilidades:

- Visual;
