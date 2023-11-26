

// y = mx + n

const dataX = [data['first_vel'], data['second_vel'], data['third_vel'], data['fourth_vel'], data['fifth_vel']];
const dataY = [data['first_weight'], data['second_weight'], data['third_weight'], data['fourth_weight'], data['fifth_weight']];

xy_sum = 0;
x_sum = 0;
y_sum = 0;
xx_sum = 0;
n = dataX.length();

for (itemX of dataX) {
    for (itemY of DataY) {
        xy_sum = xy_sum + (itemX * itemY);
    }
}

for (itemX of dataX) {
    x_sum = x_sum + itemX;
}

for (itemY of dataY) {
    y_sum = y_sum + itemY;
}

for (itemX of dataX) {
    xx_sum = xx_sum + (itemX * itemX);
}

a = ((n*xy_sum)-(x_sum*y_sum))/((n*xx_sum)-(x_sum*x_sum));
console.log(a);