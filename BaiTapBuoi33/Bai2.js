function getProduct(productId) {
    console.log("Kiểm tra tồn kho...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (productId === 1) {
                console.log("Tồn kho hợp lệ");
                resolve({
                    productId: 1,
                    name: "iPhone",
                    price: 20000000,
                    stock: 5
                });
            } else {
                reject("Sản phẩm không tồn tại");
            }
        }, 1000);
    });
}

function processPayment(product) {
    console.log("Đang thanh toán...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (product.stock > 0) {
                resolve("Thanh toán thành công");
            } else {
                reject("Hết hàng");
            }
        }, 1500);
    });
}

function createOrder(product) {
    console.log("Đang tạo đơn hàng...");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                orderId: 999,
                productName: product.name,
                status: "SUCCESS"
            });
        }, 1000);
    });
}


let currentProduct;

getProduct(1)
    .then((product) => {
        currentProduct = product;
        return processPayment(currentProduct);
    })
    .then((paymentMessage) => {
        console.log(paymentMessage);
        return createOrder(currentProduct);
    })
    .then((order) => {
        console.log("Đặt hàng thành công!");
        console.log("Order:", order);
    })
    .catch((error) => {
        console.log(`Lỗi: ${error}`);
    });