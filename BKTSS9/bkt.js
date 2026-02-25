const orders = ["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hàng D", "Đơn hàng E"];
const revenues = [1500, 2800, 1200, -500, 3200];
const negative = revenues.some(function(revenue) {
    return revenue < 0;
});

console.log("Có đơn hàng âm:", negative);
const allAbove500 = revenues.every(function(revenue) {
    return revenue > 500;
});
console.log("Tất cả trên 500:", allAbove500);
const netProfits = revenues.map(function(revenue) {
    return revenue * 0.9;
});
console.log("Lợi nhuận ròng:", netProfits);
const totalNetProfit = netProfits.reduce(function(sum, currentValue) {
    return sum + currentValue;
}, 0);
// // báo cáo lại
// console.log("Tổng lợi nhuận ròng:", totalNetProfit);
// console.log"Báo các");
// orders.forEach(function(orders, index) {
//     console.log(
//         "Đơn hàng:", orders,
//         "| Doanh thu:", revenues[index],
//         "| Lợi nhuận ròng:", netProfits[index]
//     );

// });

