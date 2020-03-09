let listaProduto = [];
let listaCarrinho = [];

function produto(id,nome,preco)
{
	this.id = id;
	this.nome = nome;
	this.preco = preco;
}
function carrinhoDeCompras(id,nome,quantidade,preco) 
{
	this.produto = new produto(id,nome,preco);
	this.quantidade = quantidade;
	this.preco = preco;
	this.preçoTotal = this.produto.preco * quantidade;
}

listaProduto.push(new produto("pro02","produto3",3.50));//id,nome,preço
listaProduto.push(new produto("pro01","produto2",5.90));
listaProduto.push(new produto("pro00","produto1",9.90));

	$(function(e)
	{
		for (var i = 0; i < listaProduto.length; i++) 
		{
			$('.products').prepend('<div> <span>'+ listaProduto[i].nome +'</span> <span>'+ listaProduto[i].preco +'</span> <a onclick="add('+i+')" href="#">add</a> </div>');
		}

	});
		

	function add(a)
	{
		let conf = 0, elemento;
		for (var i = 0; i < listaCarrinho.length; i++)
		{
			if(listaProduto[a].id == listaCarrinho[i].produto.id)
			{
				conf++;
				elemento = i;
			}
		}


		if(conf > 0 )
		{
			let atual = parseInt(listaCarrinho[elemento].quantidade);
			atual = atual + 1;
			listaCarrinho[elemento].quantidade = atual;
			listaCarrinho[elemento].precoTotal = atual*listaCarrinho[elemento].preco;  
			$('.a1').remove();


			
				$(function(e)
				{
					 for (var j = 0; j < listaCarrinho.length; j++)
					{
						$('.localCart').prepend('<div class="a1" > <span>'+ 
						listaCarrinho[j].produto.nome +' </span> <span>'+ 
						listaCarrinho[j].quantidade +' </span> $<span>'+ 
						listaCarrinho[j].preco +'</span> $<span>'+ 
						listaCarrinho[j].precoTotal +'</span> </div>');

					}
				});	


		}
		else
		{
			listaCarrinho.push( new carrinhoDeCompras(listaProduto[a].id , listaProduto[a].nome , 1 , listaProduto[a].preco));

				$(function(e)
				{
					$('.localCart').prepend('<div class="a1" > <span>'+ listaCarrinho[listaCarrinho.length - 1].produto.nome +' </span> <span>'+ 
						listaCarrinho[listaCarrinho.length - 1].quantidade +' </span> $<span>'+ 
						listaCarrinho[listaCarrinho.length - 1].preco +'</span> $<span>'+ 
						listaCarrinho[listaCarrinho.length - 1].precoTotal +'</span>');

				});	

		}
		
	}


