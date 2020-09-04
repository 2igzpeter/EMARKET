



function filterSearchBarMenuApple(){



    document.getElementById("container").innerHTML = "";

//LE TABLEAU JS EST PASSé DANS UNE FONCTION
function afficherProducts(tableauDeProduits) {
    tableauDeProduits.forEach(function (products) {

          
var card_div = document.createElement('div');
card_div.setAttribute('class', 'col-md-6');
container.appendChild(card_div);

var figure_balise = document.createElement('figure');
figure_balise.setAttribute('class', 'card card-product-grid');
card_div.appendChild(figure_balise);

var div = document.createElement('div');
div.setAttribute('class', 'img-wrap');
figure_balise.appendChild(div);


var card_img = document.createElement('img');
card_img.setAttribute('src', products.img_article);
div.appendChild(card_img);


var span_badge = document.createElement('span');
span_badge.setAttribute('class', 'badge badge-info');
div.appendChild(span_badge);
var txt_span_badge = document.createTextNode(products.news_article);
span_badge.appendChild(txt_span_badge);


var span_badge_solde = document.createElement('span');
span_badge_solde.setAttribute('class', 'badge badge-danger');
div.appendChild(span_badge_solde);
var txt_span_badge_solde = document.createTextNode(products.solde_article);
span_badge_solde.appendChild(txt_span_badge_solde);

var card_link = document.createElement('a');
card_link.setAttribute('class', 'btn-overlay');
card_link.setAttribute('href', products.img_article);
div.appendChild(card_link);


var card_liste = document.createElement('i');
card_liste.setAttribute('class', 'fa fa-search-plus');
card_link.appendChild(card_liste);

var txt_link = document.createTextNode('Quick view');
card_link.appendChild(txt_link);



var card_figcaption = document.createElement('figcaption');
card_figcaption.setAttribute('class', 'info-wrap');
figure_balise.appendChild(card_figcaption);




var flix_height = document.createElement('div');
flix_height.setAttribute('class', 'flix-height');
card_figcaption.appendChild(flix_height);



var type_product = document.createElement('p');
type_product.setAttribute('id', 'id_type_product');
type_product.setAttribute('style', 'text-align:center');
flix_height.appendChild(type_product);
var txt_type_product = document.createTextNode(products.type_product);
type_product.appendChild(txt_type_product);





var link_title = document.createElement('a');
link_title.setAttribute('class', 'title');
link_title.setAttribute('style', 'text-align:center');

flix_height.appendChild(link_title);


var text_link_title = document.createTextNode(products.type_article);
link_title.appendChild(text_link_title);



var div_price_wrap_mt_2 = document.createElement('div');
div_price_wrap_mt_2.setAttribute('class','price-wrap mt-2');
div_price_wrap_mt_2.setAttribute('style','text-align:center');



var para_brand = document.createElement('p');
para_brand.setAttribute('id', 'id_brand');
para_brand.setAttribute('style', 'text-align:center');
var txt_brand = document.createTextNode(products.band_article);
para_brand.appendChild(txt_brand);
flix_height.appendChild(para_brand);

flix_height.appendChild(div_price_wrap_mt_2);




var span_price_5 = document.createElement('span');
span_price_5.setAttribute('class', 'price h5');
div_price_wrap_mt_2.appendChild(span_price_5);

var txt_span_h5 = document.createTextNode(products.price_article);
span_price_5.appendChild(txt_span_h5);


var del_price_old = document.createElement('del');
del_price_old.setAttribute('class', 'price-old');
div_price_wrap_mt_2.appendChild(del_price_old);

var txt_del_price_old = document.createTextNode(products.price_solde);
del_price_old.appendChild(txt_del_price_old);


var br = document.createElement('br');
div_price_wrap_mt_2.appendChild(br);


var p_text_success = document.createElement('p');
p_text_success.setAttribute('class', 'text-muted');
div_price_wrap_mt_2.appendChild(p_text_success);

var txt_text_success = document.createTextNode(products.description_article);
p_text_success.appendChild(txt_text_success);


var p_link = document.createElement('p');
card_figcaption.appendChild(p_link);


var link_btn = document.createElement('a'); 
link_btn.setAttribute('href', products.link_fiche_article);
link_btn.setAttribute('class', 'btn btn-outline-primary btn-block');
p_link.appendChild(link_btn);

var txt_link_btn = document.createTextNode('Details');
link_btn.appendChild(txt_link_btn);

        

    })};

    
    
    $.get("http://localhost:8080/bdd_news_apple", function (response, error) {
       
        console.log(error);
        console.log(response);
     afficherProducts(response);


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
  

}
   

