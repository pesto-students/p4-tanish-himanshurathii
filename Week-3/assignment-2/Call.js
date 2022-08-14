var obj = {model:"maruti"};

var vehicle = function(a,b,c){
    return "brand "+this.model+" is "+a+" "+b+" the "+c;
};

console.log(vehicle.call(obj,"amazing","for","customer"));
// returns brand maruti is amazing for the customer