//var cart = [items]

// class items {
//     cost;
//     itemName; 
// }


class item{
    constructor(cost, itemName){
        this.cost = cost
        this.itemName = itemName
    }
}

var items = {
    itemA:{
        cost: 15,
        itemName:'t-shirt'
    },
    itemB:{
        cost: 50,
        itemName:'jeans'
    },
    itemC:{
        cost: 40,
        itemName:'shoes'
    }
}

// var list = function (items){
//     for (var prop in items){
//         document.getElementById('itemA-items').innerHTML+= '<li>' + prop + '</li>'
//     }
// }

function addToCart(cost, itemName) {
    console.log (cost, itemName)
    //cart.add

}

function sumCartCosts(cost){

}