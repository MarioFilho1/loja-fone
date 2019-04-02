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

- `Float` - Usado para posicionar elementos na tela. Possui dois valores left e right. No exemplo abaixo queremos manter o posicionamento do elemento do `h1` a esqueda e posicionar o elemendo `a` para a direita, deixando os dois alinhados

```
header{
   background-color:#e24647;
}
h1 {
    background-color: red;
    float: left
}
a {
  color: inherit;
  text-decoration: none;
  background-color: yellow;
}

```

Obs.

- O float cria um novo contexto -
- Nunca esconde um conteúdo -
- Ao aplicar o float em um elemento filho, caso o seu tamanho (width e height) não sejam especificados, será definido pelo tamanho do elemento. No exemplo acima se colocarmos o float no h1 o tamanho do elemento será dimensionado para o tamanho do `nav` pois como o `h1` está em um novo contexto, ele toma como base o `nav`. O elemento pai cresce de acordo com o tamanho do/dos elementos filho que estão dentro dele, caso aplique o float nos dois elementos filho, como não foi definido seu tamanho e devido aos elementos filho estarem em um novo contexto o elemento pai não aparecerá, pois não tem ninguém para tomar como base.

```
overflor: hidden
```

Essa propriedade também pode ser utilizada prara resolver esse problema da visualizaçao do elemento pai que foi perdida devido os elementos filhos estarem em outro contexto e o pai estar sem seu tamanho definido. O atributo tem a função de principal de não deixar vazar para fora do elemento o conteúdo dele.

_ex. Texto contido no elemento tem um tamanho que o supera._
Nesse caso o texto sera suprimido ficando no tamanho do elemento.

obs. _É comportamento padrão do brosewr exibir texto que vaza o tamanho de uma caixa(elemento)_

No exemplo principal como não tem uma altura e largura definida no elemento pai. Ao inserir a propriedade no pai, ela fará o recalculo do contexto. Ele levará em consideração o contexto dos elementos filhos fazendo com que o elemento pai mostre o contexto dos elementos filhos.

- `Inheret` - Ao utilizar essa propriedade o elemento filho herda as caracteristicas do elemento pai.
  Exemplo

```
header{
   background-color:#e24647;
   color: white
}
h1 {
    background-color: red;
    float: left
}
a {
  color: inherit;
}

```

No exemplo acima o seletor `h1` por ser filho da do `header` herda naturalmente as cor da fonte, já para a tag `a` browser por padrão define que a cor não é herdada por essa tag, sendo necessário a inserção da cor no próprio seletor `a` ou utilizando a propriedade `inherit`.

Forma reduzida de colocar o padding

```
_ top | left-right | bottom _

padding: 55px 60px 95px;
```

- `Clear` - A propriedade limpa o contexto do elemento afetado pelo uso do float. Exemplo. Ao aplicarmos um float no _elem1_, como há uma mudança no contexto caso tenhamos um _elem2_ que esteja abaixo, ele poderá subir e ficar ao seu lado. Usando o clear no _elem2_, ele retornará para posição de origem. Teremos que seta o clear no _elem2_ com o valor referente a posição do _elem1_. Ex. Se o _elem2_ que subiu, está a direita do elemento _elem1_, teremos que seta-lo com o `clear:left;`. Assim dizemos ao _elem2_ que caso tenha algum elemento flutuando ao seu lado, fique abaixo dele. Os valores do clear podem ser left, right e both.

- `Display` - Algumas tags tem o comportamentos que diferem umas das outras e o browser é quem define o padrão delas. Ex. A tag `a` tem o comportamento inline, isso quer dizer que elas serão exibidas no seu navegador uma ao lado da outra. A tag `a` por ter o esse comportamento, não podem ter o seu widht e heigth especificados. Caso tenhamos a nessecidade de especificar o tamanho e comprimento teremos que mudar o comportamento da tag com o valor na propriedade display para `block ou inline-block`. Se quizermos setar o comprimento e largura dos elementos envoltos nas tags `a`, mas que permaneçam umas ao lado das outras, teremos que usar o valor `inline-block`, caso precisemos que elas fiquem uma abaixo das outras podemos utilizar o valor `block`.

- `line-heigth` -

- `Position: absolut;`

Caracteristicas:

- Cria um novo contexto
- O que define o sua largura e altura, é o conteúdo
- O elemento pode ser movido pelos valores `top, bottom, left, rignt`.

Ao utilizar a medida `%` no posicionamento do elemento note que o que vai ser o que vai ser tomado como base para o posicionamento será a extremidade do elemento e não o seu centro, com isso se quisermos alinhar o centro do elemento teremos que utilizar a propriedade `transform: translate` com o eixo X(horizontal) e Y(vertical).
Ex.

```
transfom: translateX(-50%) translateY(-50%);
```

Se o valor do eixo `X` for negativo o elemento se deslocará para esquerda e positivo para direita, já no eixo `y` o valor sendo negativo, o deslocamento será para cima e positivo para baixo.
