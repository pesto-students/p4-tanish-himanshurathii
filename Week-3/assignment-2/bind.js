var obj = {model:"maruti"};

var vehicle = function(a,b,c){
    return "brand "+this.model+" is "+a+" "+b+" the "+c;
};

var bound = vehicle.bind(obj); 

console.dir(bound);

console.log(bound("amazing","for","customer"));

// returns brand maruti is amazing for the customer