const err_status = 400;

if (err_status === 200){
    console.log('OK')
}else if (err_status === 200 ){
    console.log("Error")
}else{
    console.log("Unknown")
}


switch (err_status){
    case 200:
        break;
    case 400:
        console.log("Error")
        break;
    default:
        console.log("UNknown")    

}


const message = (err_status === 200)
? "OK" : "Error";
console.log(message)