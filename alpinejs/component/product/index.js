fetch('component/product/price.json').then(res => res.json()).then(res => {
    $('price').textContent = res.price;
})