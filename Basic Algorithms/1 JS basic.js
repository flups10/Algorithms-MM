// 1 Num 1-135
for (i = 0;  i <= 135;){

    console.log(i++)
};

// 2 Odd Numbers 1-135
for (i = 2; i <= 135;){
    console.log(i)
    i = i + 2
};

// 3 Sum Printed numbers
x = 0;

for (i = 0;  i <= 135; i++){
    x = i + x;
    console.log(`Number is: ${i} Sum: ${x}`)
};

// 4 Print all values of array regardless of length

x = [1,4,2,12]

for(i = 0; i < x.length; i++){
    console.log(x[i])
}; 

// 5 Get max

x = [2,-3,-1]

console.log(Math.max(...x))

// 6 Get avarage
x = [2,3,1]
function getAverage(z){
    y = 0
    c = 0
    for (i = 0; i < z.length; i++){
        y = y + z[i]
        c = i
    }
    return console.log(y / c)
}

getAverage(x)

// 7 No negative values
x = [2, -1, 4, -3];

for (i = 0; i < x.length; i++){
    x[i] < 0 ? x[i] = 0 : null
};
console.log(x)

// 8

x = [1, -4, 0, -1];

for (i = 0; i < x.length; i++){
    x[i] < 0 ? x[i] = 'Turing' : null
};
console.log(x)