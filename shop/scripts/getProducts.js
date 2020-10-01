const getProduct = () => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../php/getAllProducts.php', true);
    // console.log(xhr.readyState);
    xhr.onreadystatechange = () => {
        console.log(xhr.readyState);
        console.log(this);
        console.log(xhr.status);
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
            showProduct(JSON.parse(xhr.responseText));
        }
    };

    xhr.send();
}

// const showData = ()=>{

// }



function showProduct(products) {
    x = products;
    products.forEach(element => {
        var divProduct = document.createElement("div");
        var productName = document.createElement("H4");
        var productNameText = document.createTextNode(element.name);
        var productDesc = document.createElement("p");
        var productDescText = document.createTextNode(element.description);
        var productPrice = document.createElement("strong");
        var productPriceText = document.createTextNode(element.price);
        divProduct.appendChild(productName);
        productName.appendChild(productNameText);
        divProduct.appendChild(productDesc);
        productDesc.appendChild(productDescText);
        divProduct.appendChild(productPrice);
        productPrice.appendChild(productPriceText);
        divProduct.className = "product";
        document.getElementById("productCont").appendChild(divProduct);
    });

}