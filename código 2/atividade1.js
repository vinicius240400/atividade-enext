function product(id,name,price)
{
    this.id = id;
    this.name = name;
    this.price = price;
}

function cartItem(id,name,quantity,price)
{
    this.product = new product(id,name,price);
    this.quantity = quantity;
    this.priceTotal = price * this.quantity;
}

function cart()
{
    this.cartItem = cartItem;
    this.cartItem = [];
   
}


    cartItem.prototype.addItem = function(id,name,Product,quantity,price)
    {

         this.cartItem.push(new cartItem(id,name,Product,quantity,price));
    }

    cartItem.prototype.removeItem = function removeItem(item)
    {
        this.cartItem.splice(item,1)
    }

    cartItem.prototype.calculaTotsl =  function calculaTotal()
    {
        var soma = 0
        cartItem.forEach(function(priceTotal){soma += priceTotal})
        return soma
    }

const carrinho = new cart();


