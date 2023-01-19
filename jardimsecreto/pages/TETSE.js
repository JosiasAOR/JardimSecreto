const products1 = []; // array para armazenar os produtos

function addProduct(name, description, price, quantity) {
  const newProduct = {
    name: name,
    description: description,
    price: price,
    quantity: quantity,
  };

  products1.push(newProduct); // adiciona o novo produto ao array de produtos
  console.log(`${name} foi adicionado ao estoque com sucesso!`);
}

// exemplo de como adicionar um produto
addProduct("Celular", "Um celular de última geração", 800, 10);

const products = [{ name: "Celular", description: "Um celular de última geração", price: 800, quantity: 10 }];

function editProduct(name, updatedProperties) {
    // procura o produto pelo nome
    const productIndex = products.findIndex(product => product.name === name);
    if (productIndex === -1) {
        console.log("Produto não encontrado!");
        return;
    }

    // atualiza as propriedades do produto
    for (const property in updatedProperties) {
        products[productIndex][property] = updatedProperties[property];
    }

    console.log(`${name} foi atualizado com sucesso!`);
}

// exemplo de como editar um produto
editProduct("Celular", { price: 1900, quantity: 150 });
console.log(products,'produtos')