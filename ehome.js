const product=["Mobilephones","TV","Washing Machine","Laptops","Air Condintioners"];
let text=" ";
for(let i =0; i< product.length; i++){
    text += product[i] +"<br>";
}
document.getElementById("pd").innerHTML=text;