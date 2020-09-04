
   

    //LE TABLEAU JS EST PASSé DANS UNE FONCTION
    function afficherSolde(tableauDeSolde) {
        tableauDeSolde.forEach(function (products) {
                    
                    var card_div = document.createElement('div');
                    card_div.setAttribute('class', 'col-md-4');
                    container.appendChild(card_div);

                    var figure_class_card_product = document.createElement('div');
                    figure_class_card_product.setAttribute('class', 'card-product-grid card-sm');
					card_div.appendChild(figure_class_card_product);
					
					var link_class_wrap = document.createElement('a');
					link_class_wrap.setAttribute('href', '#');
					link_class_wrap.setAttribute('class', 'img-wrap');
					figure_class_card_product.appendChild(link_class_wrap);

					var img_item = document.createElement('img');
					img_item.setAttribute('src', products.img_article);
					link_class_wrap.appendChild(img_item);

					var div_class_text_wrap = document.createElement('div');
					div_class_text_wrap.setAttribute('class', 'text-wrap p-3');
					figure_class_card_product.appendChild(div_class_text_wrap);

					var link_class_title = document.createElement('a');
					link_class_title.setAttribute('href', '#');
					link_class_title.setAttribute('class', 'title');
					var txt_link_title = document.createTextNode(products.titre_article);
					link_class_title.appendChild(txt_link_title);
					div_class_text_wrap.appendChild(txt_link_title);
					
					var span_class_badge = document.createElement('span');
					span_class_badge.setAttribute('class', 'badge badge-danger');
					div_class_text_wrap.appendChild(span_class_badge);

					var txt_badge = document.createTextNode(products.price_less);
					span_class_badge.appendChild(txt_badge);

                    
                    








        })};
    
        
        
        $.get("http://localhost:8080/bdd_soldes", function (response, error) {
           
            console.log(error);
            console.log(response);
		 afficherSolde(response);
		 
		 //VARIABLE STOCK LE NOMBRE DE PRODUIT
		 var nombre_produit = response.length;
		 console.log(nombre_produit);


				document.getElementById("id_container_nombre_produit").innerHTML = "";

	  
				var li_nombre_produit = document.createElement('li');

				li_nombre_produit.setAttribute('class', 'breadcrumb-item mr-md-auto');
				id_container_nombre_produit.appendChild(li_nombre_produit);
				
				var text_nombre_produit = document.createTextNode(nombre_produit + " items found");
				li_nombre_produit.appendChild(text_nombre_produit);


    });
    