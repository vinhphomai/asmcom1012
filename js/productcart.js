// quantity product cart
const plus = document.querySelector('.quantity .quantity-1 .plus');
minus = document.querySelector('.quantity .quantity-1 .minus');
num = document.querySelector('.quantity .quantity-1 .num')
let a = 01;
plus.addEventListener('click', function() {
    a++;
    if (a < 10) {
        num.innerText = a;
    } else {
        num.innerText = a;
    }

})
minus.addEventListener('click', function() {
    if (a > 1) {
        a--;
    }
    if (a < 10) {
        num.innerText = a;
    } else {
        num.innerText = a;
    }

})


// SLIDER IMAGE SẢN PHẨM
var x = document.querySelectorAll('.shop-cart .left-cart .sub-img-product .imgs');
x.forEach(function(element) {
    element.onclick = function() {
        var url = element.querySelector('img').src
        document.querySelector('.shop-cart .left-cart .img-product img').src = url
    }
})

const listinfo = JSON.parse(localStorage.getItem("listinfo"));
if (listinfo && Array.isArray(listinfo)) {
    const img = listinfo[0].img;
    const name = listinfo[0].name;
    const price = listinfo[0].price;
    const mota = listinfo[0].mota;
    document.querySelector('.shop-cart .left-cart .img-product img').src = img;
    document.querySelector('.shop-cart .right-cart .name-product h1').innerHTML = name;
    document.querySelector('.shop-cart .right-cart .price .title-price').innerHTML = '$ ' + price;
    document.querySelector('.shop-cart .right-cart .sub-product').innerHTML = mota;

}

var productclick = document.querySelector('.shop-cart .right-cart .buy-addcart .add-to-cart button');
productclick.addEventListener('click', function() {
    var imgprd = document.querySelector('.shop-cart .left-cart .img-product img').src;
    var nameprd = document.querySelector('.shop-cart .right-cart .name-product h1').innerHTML;
    var motaprd = document.querySelector('.shop-cart .right-cart .sub-product').innerHTML;
    var priceprd = listinfo[0].price;
    var quantityprd = document.querySelector('.quantity .quantity-1 .num').innerHTML;
    console.log(imgprd)
        // Kiểm tra xem localStorage có chứa các mặt hàng trong giỏ hàng không
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    var existingProduct = cartItems.find(function(item) {
        return item.name === nameprd;
    });
    if (existingProduct) {
        // update số lượng sp nếu đã có sp trong giỏ hàng
        existingProduct.quantity = parseInt(existingProduct.quantity) + parseInt(quantityprd);

    } else {
        // nếu chưa có thì thêm vào
        cartItems.push({
            img: imgprd,
            name: nameprd,
            price: priceprd,
            mota: motaprd,
            quantity: quantityprd
        });
    }
    // Save localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
});
// Lấy phần tử button "add to cart"
var addToCartButton = document.querySelector(".shop-cart .right-cart .buy-addcart .add-to-cart button");
// Lấy phần tử thông báo
var notification = document.querySelector("#notification");
// Thêm sự kiện click vào button "add to cart"
addToCartButton.addEventListener("click", function() {
    // Hiển thị thông báo
    notification.classList.add("show");

    // Sau 3 giây, ẩn thông báo
    setTimeout(function() {
        notification.classList.remove("show");
    }, 3000);
});