$(document).ready(function(){

    //Progress bar
    let containerA = document.getElementById("circleA")
    let circleA = new ProgressBar.Circle(containerA,{
        color:'#038C8C',
        strokeWidth: 4,
        duration: 1400,
        easing: 'bounce',
        from: {color: '#013440'},
        to:{color: '#038C8C'},

        step: function(state, circle){

            circle.path.setAttribute('stroke', state.color)

            let value = Math.round(circle.value() * 780643)

            circle.setText(value)
        }
    })


    let containerB = document.getElementById("circleB")
    let circleB = new ProgressBar.Circle(containerB,{
        color:'#038C8C',
        strokeWidth: 4,
        duration: 1600,
        easing: 'bounce',
        from: {color: '#013440'},
        to:{color: '#038C8C'},

        step: function(state, circle){

            circle.path.setAttribute('stroke', state.color)

            let value = Math.round(circle.value() * 9284736)

            circle.setText(value)
        }
    })

    let containerC = document.getElementById("circleC")
    let circleC = new ProgressBar.Circle(containerC,{
        color:'#038C8C',
        strokeWidth: 4,
        duration: 2000,
        easing: 'bounce',
        from: {color: '#013440'},
        to:{color: '#038C8C'},

        step: function(state, circle){

            circle.path.setAttribute('stroke', state.color)

            let value = Math.round(circle.value() * 112)
            

            circle.setText(value)
        }
    })

    let containerD = document.getElementById("circleD")
    let circleD = new ProgressBar.Circle(containerD,{
        color:'#038C8C',
        strokeWidth: 4,
        duration: 2200,
        easing: 'bounce',
        from: {color: '#013440'},
        to:{color: '#038C8C'},

        step: function(state, circle){

            circle.path.setAttribute('stroke', state.color)

            let value = Math.round(circle.value() * 2673459)
            

            circle.setText(value)
        }
    })

    //Círculos animados ao chegar na dobra
    let dataAreaOffset = $('#dados-area').offset();
    let stop = 0

    $(window).scroll(function(e){
        let scroll = $(window).scrollTop();

        if (scroll > (dataAreaOffset.top -500) && stop == 0){
            circleA.animate(1.0)
            circleB.animate(1.0)
            circleC.animate(1.0)
            circleD.animate(1.0)

            stop = 1
        }
    })

    //Parallax
    setTimeout(function(){

        $('.parallax-window').parallax({imageSrc:'_img/bg5.jpg'})

    }, 250)


    //FIltro das viagens
    $('.filter-btn').on('click', function(){

        let type = $(this).attr('id')
        let boxes = $('.viagens-box')

        $('.main-btn').removeClass('active')
        $(this).addClass('active')

        if(type == 'canada-btn'){
            eachBoxes('canada', boxes)
        } else if(type == 'frank-btn'){
            eachBoxes('frankfurt', boxes)
        } else if (type == 'moscou-btn'){
            eachBoxes('moscou', boxes)
        } else if (type == 'noruega-btn'){
            eachBoxes('noruega', boxes)
        } else if (type == 'turquia-btn'){
            eachBoxes('turquia', boxes)
        } else {
            eachBoxes('all', boxes)
        }
    })

    function eachBoxes(type, boxes){
        if(type == 'all'){
            $(boxes).fadeIn();            
        } else {
            $(boxes).each(function(){
                if(!$(this).hasClass(type)){
                    $(this).fadeOut('slow')
                } else {
                    $(this).fadeIn()
                }
            })
        }
    }

    // scroll para as seções

  let navBtn = $('.nav-item');

  let bannerSection = $('#slide-area');
  let aboutSection = $('#about-area');
  let servicesSection = $('#service-area');
  let teamSection = $('#time-area');
  let viagensection = $('#viagens-area');
  let contactSection = $('#contato-area');

  let scrollTo = '';

  $(navBtn).click(function() {

    let btnId = $(this).attr('id');

    if(btnId == 'about-menu') {
      scrollTo = aboutSection;
    } else if(btnId == 'services-menu') {
      scrollTo = servicesSection;
    } else if(btnId == 'team-menu') {
      scrollTo = teamSection;
    } else if(btnId == 'viagens-menu') {
      scrollTo = viagensection;
    } else if(btnId == 'contact-menu') {
      scrollTo = contactSection;
    } else {
      scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 1500);
  });

})