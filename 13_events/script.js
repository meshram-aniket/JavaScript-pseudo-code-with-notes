 /*
    Events allow you to write javascript code that reacts to certain situations.
    Examples of events include:
    -> The user clicks the mouse 
    -> The web page loading 
    -> A form field being changed 

    As a today, there are 2 ways to handle events in javascript.
    1. By using an event handler
    2. By adding an event listner


    Types -
    1 onclick
    2 onload
    3 onmouseover
    4 onmouseout
    5 onkeydown
    6 onkeypress
    7 onkeyup
    */


    // function myfunc() {
    //     console.log('i was click')
    // }

    // function myfunc1() {
    //     console.log('i was click1')
    // }

    // function myfunc2() {
    //     console.log('i was click2')
    // }

    // function myfunc3() {
    //     console.log('i was click3')
    // }
    



    // event listner 
    // const a = document.querySelectorAll(".container2")
    // a[1].innerHTML = "aniket";

    // const div = document.getElementById('box-1');
    // div.addEventListener('click', function() {
    //     console.log('clicked hua');
    // })
    
    // hello.addEventListener('click', function() {
    //     console.log("hello aniket");
    // })


    // document.querySelector("#hello").innerHTML="bonjour";

    const a = document.getElementById('box-1');
    a.addEventListener('click', function(){
        document.getElementById('box-2').innerHTML = "aniket";
        console.log("click hua");
        
    })
    document.getElementById('box-2').innerHTML = "box-2";


    const b = document.querySelector('#box-2');
    b.addEventListener('mouseover', function(){
        console.log("mouseover hua");
    })


    const c = document.querySelector('#box-3');
    c.addEventListener('mouseout', function(){
        console.log("mouseout hua");
    })


    const d = document.querySelector('#box-4');
    d.addEventListener('mousedown', function(){
        console.log("mousedown hua");
    })
    
    