
    // ticket example    
    let ticket = new Promise(function(resolve, reject) {
        const isBoarded = true;
        if(isBoarded) {
            const a = "done"
            resolve("ticket " + a);
        }
        else {

            const b = "not done"
            reject("ticket " + b);
        }
    })

    ticket.then((a) => {
        console.log("woho", a)
    }).catch((b) => {
        console.log("oh no", b)
    }).finally(() => {
        console.log("i will always be executed")
    })




    // pizza example
    function getCheese() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const cheese = "🧀";
                resolve(cheese);
            },  2000);
        });
    }

    function makeDough(cheese) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const dough = cheese + "🫓";
                resolve(dough);
                // reject("Bad cheese");
            }, 2000);
        });
    }

    function bakePizza(dough) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
               const pizza = dough + "🍕";
               resolve(pizza);
            }, 2000);
        });
    }


// orderPizza();

// getCheese()
//     .then((cheese) => {
//         console.log("here is the cheese", cheese);
//         return makeDough(cheese);
//     })
//     .then((dough) => {
//         console.log("here is the dough", dough);
//         return bakePizza(dough);
//     })
//     .then((pizza) => {
//         console.log("here is the pizza", pizza);
//     })
//     .catch((data) => {
//         console.log("error occured", data);
//     })
//     .finally(() => {
//         console.log("Process ended");
//     });


    

    // async and await 
    async function result () {
        try {
            const cheese = await getCheese();
            console.log("here is the cheese", cheese)

            const dough = await makeDough(cheese)
            console.log("here is the dough", dough)

            const pizza = await bakePizza(dough);
            console.log("here is the pizza", pizza)
        } catch(err) {
        console.log("error occured");
        } finally {
        console.log("process done")
        }
    }

result();


    // age example
    function p() { 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                var age = 2 + 3;
        
            if (age == 5) {
               const data = "age matched successfully";
               resolve(data);
            }

            else {
               const ans = "not matched successfully";
               reject(ans);
            }
            }, 8000)
        })
    }



    p().then((data) => {
        console.log(data)
    }).catch((ans) => {
        console.log(ans)
    }).finally(() => {
        console.log("process done")
    })

