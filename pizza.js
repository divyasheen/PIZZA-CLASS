// Create a Pizza class accepting 1 param (pizzaId)
// The class contains the following property:

// productObj = [
//             { id: 1, product: "margherita", ingredients: ["tomato", "mozzarella", "basilicum"], price: 7.50 },
//             { id: 2, product: "marinara", ingredients: ["tomato", "oregano", "garlic"], price: 5.75 },
//             { id: 3, product: "veggy", ingredients: ["eggplants", "peppers", "zucchini", "basilicum"], price: 9.99 }
//         ]; 

// getItem() Method - retrieves the filtered out object (based on product id), calls the method "print" while passing it the retrieved object 
// print() Method - logs following message "you have selected pizza <product>. it contains <ingredients> and costs <price> euros"
// balance() Method - logs following message "you paid <amount>. your change is <change>"       

// Example usage
// const pizza1 = new Pizza( 2 ); 2 represents product id
// As soon as you create your instance you should receive this example message in the terminal 
// "You have selected pizza marinara. 
//  It contains tomato,oregano,garlic and costs 5.75 euros"

// Once you execute the balance method you will receive the following message 
// You paid 43 euros. Your change is 37.25

// IMPORTANT!! the only method you should call on the instance is balance(). Nothing else.
// pizza1.balance( 43 ); // 43 represents amount paid in.


// HOW TO RUN (EXAMPLE)
// const pizza1 = new Pizza( 2 );
// pizza1.balance( 43 ); 

// RESULT
// You have selected pizza marinara. 
// It contains tomato,oregano,garlic and costs 5.75 euros
// You paid 43 euros. Your change is 37.25

class Pizza {




    constructor(pizzaId) {
        this.productObj = [
            { id: 1, product: "margherita", ingredients: ["tomato", "mozzarella", "basilicum"], price: 7.50 },
            { id: 2, product: "marinara", ingredients: ["tomato", "oregano", "garlic"], price: 5.75 },
            { id: 3, product: "veggy", ingredients: ["eggplants", "peppers", "zucchini", "basilicum"], price: 9.99 }
        ];
        this.getItem(pizzaId);
    }

    getItem(pizzaId) {
        const selectedPizza = this.productObj.filter(pizza => pizza.id === pizzaId);
        this.print(selectedPizza[0]);
    }

    print(pizza) {
        console.log(`You have selected pizza ${pizza.product}. It contains ${pizza.ingredients.join(",")} and costs ${pizza.price} euros`);
    }

    balance(amount) {
        console.log(`You paid ${amount} euros. Your change is ${amount - this.productObj[0].price} euros`);
    }
}


const pizza1 = new Pizza(2);
pizza1.balance(43);




