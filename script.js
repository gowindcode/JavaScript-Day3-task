console.log("how to compare two JSON have the same properties without order?");

//how to compare two JSON have the same properties without order?

const Obj1 = {
    name: "Person 1",
    age: 5,
}
const Obj2 = {
    age: 5,
    name: "Person 1",
    
};

console.log(JSON.stringify(Obj1) === JSON.stringify(Obj2));
console.log(Obj1 === Obj2);

console.log("________________In JSON without Order, but properties is same and the comparision result is false ____________________");


let ips = new XMLHttpRequest();
// console.log(ips);
ips.open("GET", "https://restcountries.com/v3.1/all");
ips.send();
ips.onload = function () {
    const data = JSON.parse(ips.response);
    // console.log(data);
    // console.log(ips.status);
    


console.log("__________________________from Rest countries, All countries Flag URL_________________________________");

for (let i=0; i<data.length; i++){

// We can see the Rest Countries flags URL in console    
     console.log("Country Name:", data[i].name.common, "<===>", "Flag URL:", data[i].flags.png);
}   

console.log("_____________________________Rest Countries names, regions, sub-region and total populations____________________");

// We can see the Rest Countries names, regions, sub-region and total populations in console
    for (let i=0; i < data.length; i++) {
    console.log(`
    
    Country Name : ${data[i].name.common}
    Region :${data[i].region}
    Sub Region :${data[i].subregion}
    Total Population : ${data[i].population}
    Country Capital :${data[i].capital}
    
    `);
}

};