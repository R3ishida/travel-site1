const day1_space = $('.space').offset().top;
// $(window).on('load',function(){
//     $('.day1-space').css({
//         'position': 'relative',
//     })
// });
$(window).scroll(function() {
    let scroll = $(this).scrollTop();    
    
    if( scroll >= day1_space ) {
        $('.space').css({
            'position': 'fixed',
            'top': '0',
            'left': '0'
        })
    } else {
        $('.space').css({
            'position': 'relative',
        })
    }
})

width = window.innerWidth
height = window.innerHeight


$(window).on('load', function(){
    gsap.from('.left-title .title1', {
        x: -width,
        duration: 0.8,
    })
    
    gsap.from('.left-title .title2', {
        x: -width,
        duration: 0.6,
        delay: 0.2
    })

    gsap.from('.airplane', {
        x: width,
        duration: 2,
        delay: 1.5,
    })

    gsap.from('.right-title .title3', {
        x: width,
        duration: 2,
        delay: 1.5,
    })

    gsap.from('.right-title .title4', {
        x: width,
        duration: 1,
        delay: 3,
    })
});

gsap.to('.plan-title', {
    opacity: 1,
    delay: 0.5,
    duration:1,
    scrollTrigger: {
        trigger: '.point1',
        start: 'top center'
    }
})

gsap.to('.point1', {
    opacity: 1,
    delay: 1,
    duration: 1,
    scrollTrigger: {
        trigger: '.point1',
        start: 'top center'
    }
})

gsap.to('.image1', {
    opacity: 1,
    duration: 2,
    delay: 1,
    scrollTrigger: {
        trigger: '.point1',
        start: 'top center'
    }
})

gsap.to('.point2', {
    opacity: 1,
    duration: 1,
    delay: 1.5,
    scrollTrigger: {
        trigger: '.point1',
        start: 'top center'
    }
})

gsap.to('.image2', {
    opacity: 1,
    delay: 1.5,
    duration: 2,
    scrollTrigger: {
        trigger: '.point1',
        start: 'top center'
    }
})

gsap.to('.point3', {
    opacity: 1,
    delay: 2,
    duration: 1,
    scrollTrigger: {
        trigger: '.point1',
        start: 'top center'
    }
})

gsap.to('.image3', {
    opacity: 1,
    delay: 2,
    duration: 2,
    scrollTrigger: {
        trigger: '.point1',
        start: 'top center'
    }
})

gsap.to('.arrow svg', {
    opacity: 1,
    delay: 2,
    duration: 1,
    scrollTrigger: {
        trigger: '.arrow svg',
        start: 'top center'
    }
})

gsap.to('.kyushu_map', {
    opacity: 1,
    duration: 2,
    scrollTrigger: {
        trigger: '.space',
        start: 'top top', 
    },
})



locations = [
    "dummy",
    "fukuoka",
    "kitakyushu",
    "beppu",
    "yufuin",
    "aso",
    "fukuoka2"
]

location_point = [
    [40,31],
    [40, 31],
    [45, 22],
    [77, 38],
    [68, 41],
    [55, 55],
    [40,31]
]

contents = [
    "day",
    "date",
    "location-mark",
    "location",
    "caption",
]

captions = [
    [],
    ["first", "second"],
    ["first"],
    ["first", "second", "third"],
    ["first"],
    ["first", "second", "third"],
    []
]

gsap.to(`.space .fukuoka .location-mark`, {
    opacity: 1,
    scrollTrigger: {
        trigger: `.trigger .fukuoka .location-mark`,
        start: 'top top', 
    },
});

for (let i = 0; i < locations.length; i++) {
    for (let j = 0; j < contents.length; j++) {
        if (contents[j] === "day") {
            if (locations[i] === "kitakyushu") { 
                //表示
                gsap.to(`.space .kitakyushu .day`, {
                    x: -width*0.95,
                    opacity: 1,
                    duration: 1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: `.trigger .kitakyushu .day`,
                        start: 'top top',
                        scrub: true
                    },
                });

                //退場
                gsap.to(`#kitakyushu_day`, {
                    y: -height,
                    duration: 1,
                    scrollTrigger: {
                        trigger: `.trigger .yufuin`,
                        start: 'top top', 
                        scrub: true
                    }
                })
                gsap.to(`#kitakyushu_day`, {
                    opacity: 0,
                    delay: 0.5,
                    duration: 1,
                    scrollTrigger: {
                        trigger: `.trigger .yufuin`,
                        start: 'top top', 
                        scrub: true
                    }
                })


            } else if (locations[i] === "yufuin"){
                //表示のみ
                gsap.to(`.space .yufuin .day`, {
                    x: -width*0.95,
                    opacity: 1,
                    duration: 1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: `.trigger .yufuin .day`,
                        start: 'top top',
                        scrub: true
                    },
                });

                //退場
                gsap.to(`#yufuin_day`, {
                    y: -height,
                    duration: 1,
                    scrollTrigger: {
                        trigger: `.trigger .fukuoka2`,
                        start: 'top top', 
                        scrub: true
                    }
                })
                gsap.to(`#yufuin_day`, {
                    opacity: 0,
                    delay: 0.5,
                    duration: 1,
                    scrollTrigger: {
                        trigger: `.trigger .fukuoka2`,
                        start: 'top top', 
                        scrub: true
                    }
                })
            } else {

                gsap.to(`.space .${locations[i]} .day`, {
                    x: -width*0.95,
                    opacity: 1,
                    duration: 1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: `.trigger .${locations[i]} .day`,
                        start: 'top top',
                        scrub: true
                    },
                });
                if (i < locations.length-1) {
                    gsap.to(`.space .${locations[i]} .${contents[j]}`, {
                        y: -height,
                        duration: 1,
                        scrollTrigger: {
                            trigger: `.trigger .${locations[i+1]}`,
                            start: 'top top', 
                            scrub: true
                        },
                    })
                    gsap.to(`.space .${locations[i]} .${contents[j]}`, {
                        opacity: 0,
                        delay: 0.5,
                        duration: 1,
                        scrollTrigger: {
                            trigger: `.trigger .${locations[i+1]}`,
                            start: 'top top', 
                            scrub: true
                        },
                    })
                } 
            }
        } else if (contents[j] === "date") {
            if (locations[i] === "kitakyushu") { 
                //表示
                gsap.to(`#kitakyushu_date`, {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: `.trigger .${locations[i]} .${contents[j]}`,
                        start: 'top top', 
                        scrub: true
                    },
                })

                //退場
                gsap.to(`#kitakyushu_date`, {
                    y: -height,
                    duration: 1,
                    scrollTrigger: {
                        trigger: `.trigger .yufuin`,
                        start: 'top top', 
                        scrub: true
                    },
                })
                gsap.to(`#kitakyushu_date`, {
                    opacity: 0,
                    delay: 0.5,
                    duration: 1,
                    scrollTrigger: {
                        trigger: `.trigger .yufuin`,
                        start: 'top top', 
                        scrub: true
                    },
                })


            } else if (locations[i] === "yufuin"){
                //表示のみ
                gsap.to(`#yufuin_date`, {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: `.trigger .${locations[i]} .${contents[j]}`,
                        start: 'top top',
                        scrub: true 
                    },
                })

                gsap.to(`#yufuin_date`, {
                    y: -height,
                    duration: 1,
                    scrollTrigger: {
                        trigger: `.trigger .fukuoka2`,
                        start: 'top top', 
                        scrub: true
                    },
                })
                gsap.to(`#yufuin_date`, {
                    opacity: 0,
                    delay: 0.5,
                    duration: 1,
                    scrollTrigger: {
                        trigger: `.trigger .fukuoka2`,
                        start: 'top top', 
                        scrub: true
                    },
                })
            } else {
                gsap.to(`.space .${locations[i]} .date`, {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: `.trigger .${locations[i]} .${contents[j]}`,
                        start: 'top top',
                        scrub: true 
                    },
                });
                if (i < locations.length-1) {
                    gsap.to(`.space .${locations[i]} .${contents[j]}`, {
                        y: -height,
                        duration: 1,
                        scrollTrigger: {
                            trigger: `.trigger .${locations[i+1]}`,
                            start: 'top top',
                            scrub: true 
                        },
                    })
                    gsap.to(`.space .${locations[i]} .${contents[j]}`, {
                        opacity: 0,
                        delay: 0.5,
                        duration: 1,
                        scrollTrigger: {
                            trigger: `.trigger .${locations[i+1]}`,
                            start: 'top top',
                            scrub: true 
                        },
                    })
                } 
            }
        }else if (contents[j] === "location-mark") {
            if (i < locations.length-1) {
            gsap.fromTo(`#location-mark`, {
                left: width*(location_point[i][0])/100,
                top: width*(location_point[i][1])/100,
            },
            {
                left: width*(location_point[i+1][0])/100,
                top: width*(location_point[i+1][1])/100,
                duration: 1,
                scrollTrigger: {
                    trigger: `.trigger .${locations[i+1]}`,
                    start: 'top top',
                },
            })
        }
        } else {
            gsap.to(`.space .${locations[i]} .${contents[j]}`, {
                opacity: 1,
                scrollTrigger: {
                    trigger: `.trigger .${locations[i]} .${contents[j]}`,
                    start: 'top top',
                    scrub: true 
                },
            })
            if (i < locations.length-1) {
                gsap.to(`.space .${locations[i]} .${contents[j]}`, {
                    y: -height,
                    duration: 1,
                    scrollTrigger: {
                        trigger: `.trigger .${locations[i+1]}`,
                        start: 'top top',
                        scrub: true 
                    },
                })
                gsap.to(`.space .${locations[i]} .${contents[j]}`, {
                    opacity: 0,
                    delay: 0.5,
                    duration: 1,
                    scrollTrigger: {
                        trigger: `.trigger .${locations[i+1]}`,
                        start: 'top top',
                        scrub: true 
                    },
                })

            }
        }
    }
    gsap.to(`.space .${locations[i]} .caption .first`, {
        opacity: 1,
        scrollTrigger: {
            trigger: `.trigger .${locations[i]} .first`,
            start: 'top top'
        }
    })
    if (captions[i].length >= 2) {
        gsap.to(`.space .${locations[i]} .caption .first`, {
            x: -width,
            scrollTrigger: {
                trigger: `.trigger .${locations[i]} .second`, 
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })
        gsap.fromTo(`.space .${locations[i]} .caption .second`, 
            {
                left: width,
                opacity: 0,
            },
            {
                opacity: 1,
                left: 0,
                scrollTrigger: {
                    trigger: `.trigger .${locations[i]} .second`, 
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                }
            }
        )
    }
    if (captions[i].length == 3) {
        gsap.fromTo(`.space .${locations[i]} .caption .second`, 
            {
                left: 0,
            },
            {
                left: -width,
                scrollTrigger: {
                    trigger: `.trigger .${locations[i]} .third`, 
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                }
            }
        )
        gsap.to(`.space .${locations[i]} .caption .third`, {
            x: -width,
            opacity: 1,
            scrollTrigger: {
                trigger: `.trigger .${locations[i]} .third`, 
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        })
    }
//     gsap.to(`.plan`, {
//         x: -width,
//         scrollTrigger: {
//             trigger: `.margin-page`, 
//             start: 'top top',
//             scrub: true
//         }
//     })
}

