window.onload = () => {
    let ele = document.querySelector(".intro")
    ele.style.height = "100%";
}

function expandNav(){
    let ele = document.querySelector('.navbar')
    ele.style.height = "100%";
    ele.style.width = "100%";
}

function closeNav(){
    let ele = document.querySelector('.navbar')
    ele.style.height = "0%";
    ele.style.width = "0%";
}

window.addEventListener('DOMContentLoaded', () => {

    let helloEffect = new TimelineMax({
        paused: true
    })

    helloEffect
    .fromTo('.hello', 1, {
        width: '0'
    }, {
        width: '100%',
        ease: SteppedEase.config(5)
    }, 0)
    .fromTo('.writer-1', 0.5, {
        color: 'transparent'
    }, {
        color: '#000', 
        repeat: -1,
        ease: SteppedEase.config(5)
    }, 0)

    helloEffect.play()


    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
    .to('.hello', 1, {
        width: '0',
        ease: SteppedEase.config(5)
    })
    .to('.writer-1', 0.5, {
        display: 'none'
    })
    .to('.half-page', 2, {
        width: '100%',
        ease: Power3.easeInOut
    })
    .to('.name', 1, {
        width:'100%',
        ease: SteppedEase.config(21)
    })
    .to('.whatido', 1,{
        width: '100%',
        ease: SteppedEase.config(30)
    })

    

    

    let scene = new ScrollMagic.Scene({
        triggerElement: '.intro', 
        duration: '50%',
        triggerHook: 0,
        offset: '0'
    })
    .setTween(timeline)
    .setPin('.intro')
    .addTo(controller)
    // scene.on("end", function (event) {
    //     window.location.href = "http://127.0.0.1:5500/home/index.html#more-dtls"
    // });
})