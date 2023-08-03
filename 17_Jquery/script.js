$(document).ready(function () {    // dont load script before loading the websites

    // console.log($);
    // console.log("we are using jQuerry")


    // syntax look like this
    // $('selector').action()

    $('#second').click(function () {
        console.log("you clicked on p");   // do this when we click on p 
        $(this).toggle();
    })




    // $('#second').dbclick(function() {
    //   console.log("you double clicked on p");   // do this when we click on p 
    //   $(this).hide();
    // })




    // $('#second').mouseenter(function() {
    //   console.log("you mouse enter on p");   // do this when we click on p 
    //   $(this).hide();
    // })


    // there are three main types of selectors in jQuerry
    // 1. element selectors
    // 2. id selectors
    // 3. class selector



    // 1. element selector - this is an example of element selector 
    // $('p').click();


    // 2. id selector - this is an example of id selector
    // $("#second").click();


    // 3. class selector - this is an example of class selector
    // $(".odd").click();



    // other selectors
    // $('*').click();   // clicks on all the element
    // $('p.odd').click();   // clicks on all the element
    // $('p:first').click();   // clicks on all the element

    // console.log('i am in new tag')




    // events in JQuerry
    // Mouse events = click, dbclick, mouseenter, mouseover
    // KeyboardEvent = keypress, keydown, MediaKeyStatusMap
    // form events = submit, change, focus, blur
    // document/window events = load, resize, scroll, unload




    // $('div').click(function() {
    //   $(this).hide(1000, function() {
    //     console.log("hidden")
    //   });
    // })

    // $('div').click(function() {
    //   $(this).show(1000, function() {
    //     console.log("show")
    //   });
    // })



    // demoing the on method
    $('p').on(
        {
            click: function () {
                console.log('Thanks for clicking', this);
            },
            mouseleave: function () {
                console.log("mouseleave");
            },
            mouseover: function() {
                console.log("mouseover")
            }
        })





















    // $('#wiki').hide(1000, function () {
    //     console.log("hidden");
    // })   
    // $('#wiki').show(1000, function () {
    //     console.log("show");
    // })  
    // $('#but').click(function () {
    //     $('#wiki').fadeOut(5000);
    // })

    //     fadeIn()
    // fadeOut()
    // fadeToggle()
    // fadeTo()

    // Slide methods - speed and callback parameters are optional
    // $('#wiki').slideUp(1000, function(){
    //     console.log('done');
    // })
    // $('#wiki').slideDown(1000)
    // $('#wiki').slideToggle(1000)

    // Animate function in jQuery
    $('#wiki').animate({
        opacity: 0.3,
        height: '150px',
        width: '350px',

    }, "fast")
    // $('#wiki').animate({ opacity: 0.3 }, 4000);
    // $('#wiki').animate({ opacity: 0.9 }, 1000);
    // $('#wiki').animate({ width: '350px' }, 12000);

    // $('#ta').val('setting it to aniket');
    // $('#ta').html('setting it to aniket');
    // $('#ta').html('setting it to aniket3');
    // $('#inp').html('setting it to aniket3');
    // $('#inp').val('setting it to aniket3');
    // $('#inp').empty()
    // $('#wiki').empty()
    // $('#wiki').text('you are good')
    // $('#wiki').remove()

    //     $('#wiki').addClass('myclass')
    // $('#wiki').addClass('myclass2')
    // $('#wiki').removeClass('myclass2')
    // $('#wiki').css('background-color', 'red')
    // $('#wiki').css('background-color')

    // AJAX Using jQuery
    // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(data); })

    // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(status); })

    // $.post('https://code.jquery.com/jquery-3.3.1.js',
    //     { name: 'harry', channel: 'code with harry' },
    //     function (data, status) { alert(status) });


    $("#div2").css('background-color', 'orange')
    let animate = true;
    $("#div2").mouseleave(function () {
        if (animate) {
            $('#div2').animate({
            
                "background-color": "green",
                "right": "200px",
                width: "300px"
            }, "fast")
        }

        else {
            $('#div2').animate({
                "background-color": "red",
                width: "450px"
            }, "fast")
        }
        animate = !animate;
    })

// $('#div2').slideup(2000);
// $('#div2').slidedown(2000);
// $('#div2').slideup(2000);



$('h2').click(function() {

    $(this).html('fine')
})



})



