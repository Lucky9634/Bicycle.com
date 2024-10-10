const tlOne = gsap.timeline()
const tlSecond = gsap.timeline()

tlOne.from("#loader h3", {
    opacity: 0,
    x: 50,
    duration: 2,
    delay: 0.5,
    stagger: 0.1,
})
tlOne.to("#loader h3", {
    x: -10,
    duration: 0.5,
    opacity: 0,
    delay: 1,
    stagger: 0.1,
})

tlOne.to("#loader", {
    opacity: 0,
})

tlOne.to("#loader", {
    display: "none",
})

tlOne.from(".logo img", {
    opacity: 0,
    y: -40,
    duration: 0.5,
})
tlOne.from("ul li", {
    opacity: 0,
    y: -40,
    duration: 0.5,
    stagger: 0.1
})

gsap.from(".logo span", {
    opacity: 0,
    y: -40,
    duration: 0.5,
    delay: 5.5,
})

gsap.from("#page1  h2", {
    opacity: 0,
    y: 500,
    delay: 6,
    duration: 0.8,
    stagger: 0.1,
})

gsap.from("#page1 h2 span", {
    opacity: 0,
    y: 400,
    duration: 1,
    stagger: 0.1,
    delay: 6,
})


tlSecond.from(".setting", {
    opacity: 0,
    Y: 300,
    duration: 0.3,
    delay: 1,
    scale: 1,
    scrollTrigger: {
        trigger: ".setting",
        start: "top 90%",
        end: "bottom 15%",
        scrub: 2
    }
})

tlSecond.from(".secondVedio", {
    opacity: 0,
    Y: 280,
    duration: 0.3,
    scale: 1,
})
tlSecond.from(".thirdVedio", {
    opacity: 0,
    Y: 260,
    duration: 0.3,
    scale: 1,
})

gsap.from(".firstVedio h2", {
    opacity: 0,
    y: 200,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".firstVedio h2",
        start: "top 100%",
        end: "top 90%",
        scrub: 2,
    }
})

gsap.from(".secondVedio h2", {
    opacity: 0,
    y: 200,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".secondVedio h2",
        start: "top 100%",
        end: "top 90%",
        scrub: 2,
    }
})

gsap.from(".thirdVedio h2", {
    opacity: 0,
    y: 200,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".thirdVedio h2",
        start: "top 100%",
        end: "top 90%",
        scrub: 2,
    }
})

gsap.from("#page3Content .buttoms a:nth-child(1)", {
    opacity: 0,
    x: -70,
    duration: 1,
    scrollTrigger: {
        trigger: "#page3Content .buttoms a:nth-child(1)",
        scroll: "body",
        start: "top 90%",
        end: "top 60%",
        scrub: 2,
    }
})
gsap.from("#page3Content .buttoms a:nth-child(2)", {
    opacity: 0,
    x: 70,
    duration: 1,
    scrollTrigger: {
        trigger: "#page3Content .buttoms a:nth-child(2)",
        scroll: "body",
        start: "top 90%",
        end: "top 60%",
        scrub: 2,
    }
})
gsap.from(".page3Heading h1 span", {
    opacity: 0,
    y: 200,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".page3Heading h1 span",
        start: "top 80%",
        end: "top 40%",
        scrub: 2
    }
})
gsap.from(".Btn-Buy a", {
    opacity: 0,
    y: 200,
    duration: 1,
    scrollTrigger: {
        trigger: ".Btn-Buy a",
        scroll: ".Btn-Buy",
        start: "top 110%",
        end: "botton 95%",
        scrub: 2,
    }
})

gsap.from(".page4Container h2 span", {
    opacity: 0,
    x: -300,
    duration: 2,
    delay: 0.3,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".page4Container h2 span",
        start: "top 90%",
        end: "top 80%",
        scrub: 2,
    }
})


document.querySelectorAll(".card").forEach((card)=>{
    gsap.to(card, {
        opacity: 0,
        scale: 0.7,
        // x: -300,
        duration: 1,
        delay: 0.3,
        stagger: 0.1,
        scrollTrigger: {
            trigger: card,
            start: "top 15%",
            end: "bottom 10%",
            markers: true,
            scrub: 2,
        }
    })
    gsap.to(card, {
        opacity: 0,
        scale: 0.7,
        // x: 300,
        duration: 1,
        delay: 0.3,
        stagger: 0.1,
        scrollTrigger: {
            trigger: card,
            start: "top 15%",
            end: "top 5%",
            scrub: true,
        }
    })
})





