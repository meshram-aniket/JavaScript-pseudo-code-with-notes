 /*
                                   document
                                     |
                                     |
                     |---------------html--------------|                
                    head                           |---body---|
                     |                             |          |
                   title                     ---h1 tag---   p tag
                     |                       |          |
                     |                      text     attributes
                  meta 
    */



                    // Finding HTML Elements 
    /*
    document.getElementById('')
    document.getElementsClassName('')
    document.getElementByTagName('')
    */

    const abc = document.getElementById('input');
    abc.style.background = "black";
    abc.style.color = "white";
    abc.setAttribute('src', 'xyz');
    function ans() {
    const ans = document.getElementById('input').value;
    document.getElementById('show').innerHTML = ans;
    document.getElementById('input').value = " ";

    }



    const mybody = document.body;
    console.log(mybody);


    const box2 = document.getElementById('box-2');
    console.log(box2);



    const divs = document.getElementsByTagName('p');
    console.log(divs);



    const boxes = document.getElementsByClassName('container');
    console.log(boxes);




    const random = document.querySelector('.container');
    console.log(random);




                      // Changing HTML Elements 
    /*
    element.innerHTML =
    element.attribute = 
    element.style.property = 
    element.setAttribute = ("attribute", "attributename")
    
    */
        
    document.getElementById('box-1').innerHTML = "<h1>hello world</h>"

    document.getElementById('box-1').style.background = "yellow";


    document.getElementById('box-1').classList.add('round-border');
    document.getElementById('box-1').classList.remove('round-border');



    const boxs = document.getElementsByClassName('box');

    for(let a of boxs) {
        a.classList.add('round-border');
    }


    document.getElementById('box-1').classList.remove('box');
    document.getElementById('box-1').classList.remove('round-border');


    const inputs = document.getElementById('input');
    inputs.style.background="black";
    inputs.style.borderRadius="50px"
    inputs.style.color="white";


    const sub = document.getElementById('show');
    sub.style.background="black";
    sub.style.color="white"


                    //    Adding and deleting elements 
    /*
    document.createElement(element);
    document.removeChild(element);
    document.appendChild(element);
    document.replaceChild(new, old);
    document.write(text);
    */

        const newpara = document.createElement("p");
        // newpara.innerHTML = "this is brand new";
        newpara.classList.add('box');
        newpara.write("lorwm")

        

        document.body.appendChild(newpara);

