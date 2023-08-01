var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(arr);


    // for loop
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log(" ")





    // for each loop
    var arr1 = [4, 5, 6, 8, 0, -2]
    arr1.forEach(function(element) {
        console.log(element)
    });
    console.log(" ")





    // while loop
    let j = 0;
    
    while(j < arr.length) {
        console.log(arr[j]);
        j++;
    }
    console.log(" ")




    
    // do while loop
    var arr2 = [6, 5, 4, 3, 2, 1]
    let a = 0;
    do {
       console.log(arr2[a])
       a++;
    }
    while(a == arr2.length);