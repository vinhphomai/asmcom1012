// SLIDER PHONE
document.getElementById('next').onclick = function() {
    let list = document.querySelectorAll('.product');
    document.querySelector('.list-product').appendChild(list[0]);

}
document.getElementById('prev').onclick = function() {
    let list = document.querySelectorAll('.product');
    document.querySelector('.list-product').prepend(list[list.length - 1]);
}

// SLIDER SHOES
document.getElementById('next-s').onclick = function() {
    let list = document.querySelectorAll('.product-s');
    document.querySelector('.list-product-shoe').appendChild(list[0]);

}
document.getElementById('prev-s').onclick = function() {
    let list = document.querySelectorAll('.product-s');
    document.querySelector('.list-product-shoe').prepend(list[list.length - 1]);
}

var sp = document.querySelectorAll('.add-to-card button');
sp.forEach(function(button, index) {
    button.addEventListener('click', function(event) {
        const productDiv = event.target.closest('.product');
        var imgproduct = productDiv.querySelector('.img-product img').src
        var nameproduct = productDiv.querySelector('.info-product .name-product').innerHTML
        var priceproduct = productDiv.querySelector('.info-product .price .pricevalue').innerHTML
        var motaproduct = productDiv.querySelector('.info-product .describe-product').innerHTML
        let listgetinfo = []
            // add item to array
        listgetinfo.push({
            img: imgproduct,
            name: nameproduct,
            price: priceproduct,
            mota: motaproduct
        })
        localStorage.setItem("listinfo", JSON.stringify(listgetinfo))

    })
})

var sp1 = document.querySelectorAll('.add-to-card button');
sp1.forEach(function(button, index) {
    button.addEventListener('click', function(event) {
        const productDiv = event.target.closest('.product-s');
        var imgproduct = productDiv.querySelector('.img-product img').src
        var nameproduct = productDiv.querySelector('.info-product .name-product').innerHTML
        var priceproduct = productDiv.querySelector('.info-product .price .pricevalue').innerHTML
        var motaproduct = productDiv.querySelector('.info-product .describe-product').innerHTML
        let listgetinfo = []
        listgetinfo.push({
                img: imgproduct,
                name: nameproduct,
                price: priceproduct,
                mota: motaproduct
            })
            // setlocalstorage đem qua trang mới
        localStorage.setItem("listinfo", JSON.stringify(listgetinfo))

    })
})