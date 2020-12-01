function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })
});
// $(function() {
//     var inputs = $('.input');
//     var paras = $('.description-flex-container').find('p');
//     inputs.click(function() {
//         var t = $(this),
//             ind = t.index(),
//             matchedPara = paras.eq(ind);

//         t.add(matchedPara).addClass('active');
//         inputs.not(t).add(paras.not(matchedPara)).removeClass('active');
//     });
// });