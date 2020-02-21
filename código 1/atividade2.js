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

    this.addItem = function(id,name,Product,quantity,price)
    {

         this.cartItem.push(new cartItem(id,name,Product,quantity,price));
    }

    this.removeItem = function removeItem(item)
    {
        this.cartItem.splice(item,1)
    }

    this.calculaTotsl = function()
	{    var soma = 0
		for(var i = 0; i < this.cartItem.length ; i++ )
		{
			soma +=  this.cartItem[i].priceTotal;
		}

		return soma;
	}
}

const carrinho = new cart();











   





