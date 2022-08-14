var obj = {model:"maruti"};

var vehicle = function(a,b,c){
    return "brand "+this.model+" is "+a+" "+b+" the "+c;
};

var args = ["amazing","for","customer"];  
console.log(vehicle.apply(obj,args));

// returns brand maruti is amazing for the customer