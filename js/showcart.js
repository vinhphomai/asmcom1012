const listinfo = JSON.parse(localStorage.getItem("cartItems"));
if (listinfo && Array.isArray(listinfo)) {
    var cartTable = document.querySelector('.right-cart .product-cart');
    for (var i = 0; i < listinfo.length; i++) {
        const img = listinfo[i].img;
        const name = listinfo[i].name;
        const price = listinfo[i].price;
        const sub = listinfo[i].mota;
        const quantitys = listinfo[i].quantity;
        var newelement = document.createElement('div');
        newelement.classList.add('product-list');
        trcontent = '<div class="img-pr"><img style="width: 70px; border-radius: 20px; " src="' + img + '" alt="img product"></div><div class="item-product"><span class="nameproduct">' + name + ' </span><br><span class="sub-product">' + sub + '</span><br><span class="priceproduct">$ <span class="valueproduct">' + price + '</span></div><div style="display: flex; flex-direction: column;" class="item"><div class="quantity-1"><div class="minus quan">-</div><div class="num quan">' + quantitys + '</div><div class="plus">+</div></div><div class="remove-product"><button><i class="fa-sharp fa-solid fa-trash"></i></button></div></div>';
        newelement.innerHTML = trcontent;
        cartTable.appendChild(newelement);

    }
}

// Lấy danh sách tất cả các phần tử con của cartTable
var products = cartTable.querySelectorAll('*');
// Duyệt qua từng phần tử và tìm các nút xóa sản phẩm
for (var i = 0; i < products.length; i++) {
    var product = products[i];
    var removeButton = product.querySelector('.remove-product button');
    if (removeButton) {
        removeButton.addEventListener('click', function(event) {
            // Tìm phần tử cha chứa nút xóa sản phẩm và xóa đi phần tử đó
            var productRow = event.target.parentElement.parentElement.parentElement.parentElement;
            productRow.remove();
            updateprice();

        });
    }

}

const quantities = document.querySelectorAll('.quantity-1');
quantities.forEach(function(quantity) {
    const plus = quantity.querySelector('.plus');
    const minus = quantity.querySelector('.minus');
    const num = quantity.querySelector('.num');
    let a = num.innerText; // lấy giá trị hiện tại của số lượng sản phẩm
    plus.addEventListener('click', function() {
        a++;
        if (a < 10) {
            num.innerText = a.toString();
        }
        updateprice();
    });
    minus.addEventListener('click', function() {
        if (a > 1) {
            a--;
        }
        if (a < 10) {
            num.innerText = a.toString();
        }
        updateprice();
    });
});

// get total price
var priceproducttotal = document.querySelectorAll('.product-list');
var totalship = [];
for (var i = 0; i < priceproducttotal.length; i++) {
    var gia = (parseFloat(priceproducttotal[i].querySelector('.priceproduct .valueproduct').innerHTML));
    var sl = (parseFloat(priceproducttotal[i].querySelector('.quantity-1 .num').innerHTML));
    var result = gia * sl
    totalship.push(result)

}
var total = 0;
for (var i = 0; i < totalship.length; i++) {
    total += totalship[i];
}
document.querySelector('.sub-right .sub-total span').innerHTML = total.toFixed(2);
var totalrs = total += parseFloat(document.querySelector('.sub-right .ship .valueship').innerHTML);
document.querySelector('.sub-right .total span').innerHTML = totalrs.toFixed(2);

// function update price 
function updateprice() {
    var priceproducttotal = document.querySelectorAll('.product-list');

    var totalship = [];
    for (var i = 0; i < priceproducttotal.length; i++) {
        var giaEl = priceproducttotal[i].querySelector('.priceproduct .valueproduct');
        if (giaEl && document.body.contains(giaEl)) {
            var gia = parseFloat(giaEl.innerHTML);
            var sl = (parseFloat(priceproducttotal[i].querySelector('.quantity-1 .num').innerHTML));
            var result = gia * sl
            totalship.push(result);
        }

    }

    var total = 0;
    totalship.forEach((number) => {
        total += number;
    });
    document.querySelector('.sub-right .sub-total span').innerHTML = total.toFixed(2);
    var totalrs = total += parseFloat(document.querySelector('.sub-right .ship .valueship').innerHTML);
    document.querySelector('.sub-right .total span').innerHTML = totalrs.toFixed(2);
}
// set srcoll nếu quá 5 sp 
if (totalship.length > 5) {
    const x = document.querySelector('.product-cart')
    x.setAttribute('style', 'overflow-y: auto');
}
// check form 
document.querySelector('.order button').addEventListener('click', checkform)
document.querySelector('.order button').addEventListener('click', checkproductquantity)

function checkform() {
    var allform = document.querySelectorAll('.top-left-cart input')
    var x = [];
    for (var i = 0; i < allform.length; i++) {
        x[i] = allform[i].value
    }
    if (x[0] == '' || x[1] == '' || x[3] == '' || x[4] == '' || x[5] == '' || x[6] == '' || x[7] == '' || checkdate == '') {
        alert('Please fill all fields!')
    } else {
        if (isNaN(x[1])) {
            alert('Phone Number wrong format!')
        }
        if (isNaN(x[5])) {
            alert('ZIP wrong format!')
        }
    }
    var checkdate = document.querySelector('.input-form input').value
}

function checkproductquantity() {
    var productcheck = document.querySelectorAll('.right-cart .product-cart')
    if (productcheck.length < 1) {
        alert('There are no products in the cart!')
    }
}


function clearCart() {
    localStorage.clear();
    alert("Đã xóa toàn bộ dữ liệu trong giỏ hàng!");
}
// lấy thông tin vị trí của người dùng

if (navigator.geolocation) {
    // Nếu trình duyệt hỗ trợ Geolocation, yêu cầu thông tin vị trí của người dùng
    navigator.geolocation.getCurrentPosition(function(position) {
        // Lấy thông tin vị trí của người dùng
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        // Hiển thị thông tin vị trí trên trang web
        alert("Vĩ độ: " + latitude + ", Kinh độ: " + longitude)
    });
} else {
    // Nếu trình duyệt không hỗ trợ Geolocation, hiển thị thông báo lỗi
   alert("Trình duyệt của bạn không hỗ trợ Geolocation");
}
