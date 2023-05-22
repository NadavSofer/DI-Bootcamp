let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries['fruits'].forEach(element => {
        console.log(element);
    });
}
displayGroceries()

const cloneGroceries = () => {
    let user  = client;
    let shopping = groceries;
    console.log(user);
}

cloneGroceries()

// Q:
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// A:
// because it's a copy so every change we do to the original (client) will happen to the copy (user).


// Q:
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// A:
// because it's not a primitive type (object) the copy functions more like a link than an actual copy, thus any change will effect both. 


// Q:
// Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?
// A:
// same as the previous question.