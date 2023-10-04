const addProduct = (parent,data) => {

    var itemProducts = document.createElement('div');
    itemProducts.className = 'item-product';

    var card = document.createElement('div');
    card.className = 'card';

    var img = document.createElement('div');
    img.className = "img";
    var image = document.createElement('img');
    image.setAttribute('src',data.image)
    img.appendChild(image);
    card.appendChild(img);

    var name = document.createElement('div');
    name.className = 'name';
    name.innerText = data.name;
    card.appendChild(name);

    var price = document.createElement('div');
    price.className = 'price';
    price.innerText = data.price;
    var span = document.createElement('span');
    span.innerText = " VND";
    price.appendChild(span);
    card.appendChild(price);

    var buynow = document.createElement('div');
    var button = document.createElement('button')
    button.className = 'buynow';
    button.innerText = "Mua ngay";
    button.setAttribute('onclick',`OpenPopup(${data.id},'${data.name}',${data.price},${data.quantity})`);
    buynow.appendChild(button);
    card.appendChild(buynow);



    itemProducts.appendChild(card);
    parent.appendChild(itemProducts);
}

const loadCart = () => {
    var lstProducts = JSON.parse(localStorage.getItem(varListProducts)) || [];
    var row = document.getElementById('rowData');
    var count = 0;
    var totalPrice = 0;
    lstProducts.forEach(product => {
        var tr = document.createElement('tr');

        var stt = document.createElement('td');
        stt.innerText = count;

        var id = document.createElement('td');
        id.innerText = product.id;

        var name = document.createElement('td');
        name.innerText = product.name;

        var price = document.createElement('td');
        price.innerText = product.price + " VND";

        var quantity = document.createElement('td');
        quantity.innerText = product.quantity;

        var total_price = document.createElement('td');
        total_price.innerText = product.total_price + " VND";

        var action = document.createElement('td');
        var button = document.createElement("button");
        button.innerText = "XÓA"
        button.setAttribute('onclick',`DeleteOrder(${count})`);
        action.appendChild(button);

        tr.appendChild(stt);
        tr.appendChild(id);
        tr.appendChild(name);
        tr.appendChild(price);
        tr.appendChild(quantity);
        tr.appendChild(total_price);
        tr.appendChild(action);
        row.appendChild(tr);
        count ++;
        totalPrice += product.total_price
    });
    $("#total_price").text(totalPrice);
    $("#total_pay").text(totalPrice);
}

const loadOrder = (lstProducts) => {
    var count = 0;
    row = document.getElementById('rowData');
    lstProducts.forEach(product => {
        var tr = document.createElement('tr');

        var stt = document.createElement('td');
        stt.innerText = count;

        var id = document.createElement('td');
        id.innerText = product.id;

        var address = document.createElement('td');
        address.innerText = product.address;

        var phone = document.createElement('td');
        phone.innerText = product.phone;

        var status = document.createElement('td');
        status.innerText = product.status;

        var action = document.createElement('td');
        var button = document.createElement("button");
        button.innerText = "Chi tiết"
        button.setAttribute('onclick',`OrderDetails('${product.id}','${product.status}','${product.address}','${product.phone}')`);
        action.appendChild(button);

        tr.appendChild(stt);
        tr.appendChild(id);
        tr.appendChild(address);
        tr.appendChild(phone);
        tr.appendChild(status);
        tr.appendChild(action);
        row.appendChild(tr);
        count ++;
    })
}

const loadOrderDetails = (lstProducts) => {
    var row = document.getElementById('rowDataDetails');
    lstProducts.forEach(product => {
        var tr = document.createElement('tr');

        var product_name = document.createElement('td');
        product_name.innerText = product.product_name;

        var quantity = document.createElement('td');
        quantity.innerText = product.quantity;

        var total_price = document.createElement('td');
        total_price.innerText = product.total_price + " VND";

        tr.appendChild(product_name);
        tr.appendChild(quantity);
        tr.appendChild(total_price);
        row.appendChild(tr);
    })
}