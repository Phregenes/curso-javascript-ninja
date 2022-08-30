(function () {
  /*
  Envolva todo o conteúdo desse arquivo em uma IIFE.
  */

  /*
  Crie um objeto chamado `person`, com as propriedades:
  `name`: String
  `lastname`: String
  `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */

  var person = {
    name: "Pedro Henrique",
    lastname: "Regenes",
    age: "24",
  };

  console.log('Propriedades de "person":', person);

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */

  console.log("Propriedades do objeto em array", Object.keys(person));

  /*
  Crie um array vazio chamado `books`.
  */
  var books = [];

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */

  books.push(
    {
      name: "biblia",
      pages: 456,
    },
    {
      name: "Culinária",
      pages: 345,
    },
    {
      name: "Investigação criminal",
      pages: 124,
    }
  );

  /*
  Mostre no console todos os livros.
  */ 
  console.log("Lista de livros:", books);

  /*
  Remova o último livro, e mostre-o no console.
  */

  var removeBooks = books.pop();

  console.log("\nLivro que está sendo removido:", removeBooks);

  /*
  Mostre no console os livros restantes.
  */
  // ?
  console.log("\nAgora sobraram somente os livros:", books);

  /*
  Converta os objetos que ficaram em `books` para strings.
  */

  var covertToString = JSON.stringify(books)
 
  /*
  Mostre os livros nesse formato no console:
  */
 
 console.log("Livros em formato string:", covertToString);

  /*
  Converta os livros novamente para objeto.
  */
  
  var convertToObj = JSON.parse(covertToString);

  console.log("\nAgora os livros são objetos novamente:", convertToObj);

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
  "[PROPRIEDADE]: [VALOR]"
  */

  for(var i = 0; i < books.length; i++) {
    for( var prop in books[i] ) {
      console.log("teste 1", prop + ': ' + books[i][prop])
    }
  }

  // for(var prop in books[0]) {
  //   console.log("Propriedades mais valores", prop + ":" + books[prop])
  // }

  books.forEach(function(number) {
    console.log("teste 2", number);
});
  

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  
  var myName = ["P", "E", "D", "R", "O" ]
  var interName = myName.join('')

  console.log("\nMeu nome é:", interName);

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  
  console.log(myName.join( '' ))

  
  console.log("Meu nome invertido é:");
  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
 
  console.log(myName.reverse().join(''))
  
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
 console.log("\nAgora em ordem alfabética:", myName.sort());
})();
