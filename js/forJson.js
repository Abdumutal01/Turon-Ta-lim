window.addEventListener("DOMContentLoaded", function() {
    sliderFunc();
    aboutFunc()
    longSlider();
    bonus();
    studyFunc();
    think();
    think2();
    blogFunc();
    yolFunc()
    courseFunc();
    worserFunk1();
    worserFunk2();
    worserFunk3();
});

async function sliderFunc() {
    const sliderBox = document.querySelector(".slider__text__general")
    const res = await fetch("../json/headerSlider.json");
    const data = await res.json();
    data.forEach((item) => {
        let box = document.createElement("header__cart");
        box.className = "slider__box";

        box.innerHTML = `
                <h3 class="header__cartName">${item.name}</h3>
                <p class="header__cartText">${item.text}</p>
        `
        sliderBox.appendChild(box);
        console.log(box);
    });

    let slider__text__general = document.querySelector(".slider__text__general")
    let slider__button1 = document.getElementById("slider__button1")
    let slider__button2 = document.getElementById("slider__button2")
    let slider__button3 = document.getElementById("slider__button3")
    let slider__button4 = document.getElementById("slider__button4")
    slider__button1.addEventListener("click", function() {
        slider__text__general.style.transform = "translateX(0px)"
        slider__button1.style.backgroundColor = "#967851"
        slider__button2.style.backgroundColor = "#c8b39aad"
        slider__button3.style.backgroundColor = "#c8b39aad"
        slider__button4.style.backgroundColor = "#c8b39aad"
    })
    slider__button2.addEventListener("click", function() {
        slider__text__general.style.transform = "translateX(-870px)"
        slider__button1.style.backgroundColor = "#c8b39aad"
        slider__button2.style.backgroundColor = "#967851"
        slider__button3.style.backgroundColor = "#c8b39aad"
        slider__button4.style.backgroundColor = "#c8b39aad"
    })
    slider__button3.addEventListener("click", function() {
        slider__text__general.style.transform = "translateX(-1730px)"
        slider__button1.style.backgroundColor = "#c8b39aad"
        slider__button2.style.backgroundColor = "#c8b39aad"
        slider__button3.style.backgroundColor = "#967851"
        slider__button4.style.backgroundColor = "#c8b39aad"
    })
    slider__button4.addEventListener("click", function() {
        slider__text__general.style.transform = "translateX(-2600px)"
        slider__button1.style.backgroundColor = "#c8b39aad"
        slider__button2.style.backgroundColor = "#c8b39aad"
        slider__button3.style.backgroundColor = "#c8b39aad"
        slider__button4.style.backgroundColor = "#967851"
    })
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}
async function aboutFunc() {
    const res = await fetch("../json/about.json");
    const data = await res.json();
    data.forEach((item) => {
        const about = document.querySelector(".main__about");
        let box = document.createElement("div");
        box.className = "main__aboutBox";

        box.innerHTML = `
            ${item.img}
            <p class="main__text">${item.text}</p>
            `
        about.appendChild(box)
    });
}

async function studyFunc() {
    const res = await fetch("../json/study.json");
    const data = await res.json();
    const mainStudydiv = document.querySelector(".main__studyDiv")
    data.forEach((item) => {
        let box = document.createElement("div");
        box.className = "main__studyBox";
        box.innerHTML = `
            ${item.img}
            <p class="main__text" style="padding: 0;">
                <span style="color: #142033;font-size:25px; font-weight:700;">${item.name}</span> <br><br> ${item.text}
            </p>
        `
        mainStudydiv.appendChild(box);
        console.log("Study" + box);

    })
}

async function think() {
    const res = await fetch("../json/think.json");
    const data = await res.json();
    const mainThinkBox = document.querySelector("#main__thinkBox")

    data.forEach((item) => {
        const card = document.createElement("div")
        card.innerHTML = `
        <div class="slider-item">
            <video src="${item.video}" controls></video>
            <h2 style="text-align: center;">${item.name}</h2>
        </div>
    `;
        mainThinkBox.appendChild(card)
        initializeSlider1();
    });

    /*slider codes start */
    function initializeSlider1() {
        const sliderWrapper = document.querySelector('#main__thinkBox');
        const slides = Array.from(document.querySelectorAll('#main__thinkBox .slider-item'));
        let currentIndex = 0;
        const slideCount = slides.length;
        const slidesToShow = 3;
        const updateSlider = () => {
            const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight);
            const maxIndex = Math.max(slideCount - slidesToShow, 0);
            const offset = Math.min(currentIndex * slideWidth, maxIndex * slideWidth);
            sliderWrapper.style.transform = `translateX(-${offset}px)`;
        };

        document.getElementById('nextButton1').addEventListener('click', function() {
            if (currentIndex < slideCount - slidesToShow) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlider();
        });

        document.getElementById('prevButton1').addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = slideCount - slidesToShow;
            }
            updateSlider();
        });

        updateSlider();

        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(updateSlider, 200);
        });
    }
    /*slider codes end */


}
async function think2() {
    const res = await fetch("../json/think2.json");
    const data = await res.json();
    const mainThink2Div = document.querySelector(".main__think2Div")
    data.forEach((item) => {
        let box = document.createElement("div")

        box.innerHTML = `
        <div class="main__think2Box">
            <p class="main__text" style="font-size:18px">${item.text}</p>
                 <hr style="margin: 20px 0;">
                 <img src="${item.user}" alt="person" class="main__think2Img">
                 <h3 class="main__think2Name">${item.name}</h3>
             <p class="main__text" style="font-size: 15px;margin:0px">${item.job}</p>
        </div>`
        mainThink2Div.appendChild(box);
    })
}
async function longSlider() {
    const res = await fetch("../json/mainSlider.json");
    const data = await res.json();
    data.forEach((item) => {
        let slider = document.querySelector(".slider");
        let box = document.createElement("div");
        box.className = "card"
        box.innerHTML = `<img src="${item.img}" class="main__longSliderImg"> `
        slider.appendChild(box);
        console.log(box);
    });

}
async function bonus() {
    const res = await fetch("../json/bonus.json");
    const data = await res.json();
    data.forEach((item) => {
        const bonusBox = document.querySelector(".main__bonusBox");
        let box = document.createElement("div");
        box.innerHTML = `
            <div class="main__bonusCart">
                <div >
                    <img src="${item.img}" class="main__bonusImg">
                </div>
                <h3 class="main__inner">${item.name}</h3>
                <p class="main__text">${item.text}</p>
            </div>
            `

        bonusBox.appendChild(box)

    });

}

async function blogFunc() {
    const res = await fetch("../json/blog.json");
    const data = await res.json();
    const blogDiv = document.querySelector(".main__blogDiv");

    data.forEach((item) => {
        let box = document.createElement("div");
        box.innerHTML = `
        <div class="main__blogBox">
            <img src="${item.img}" class="main__blogImg">
            <li class="main__blogItem">
                <span class="main__newSpan">${item.new}</span>
                <p class="main__text row middle-xs between-xs" style="font-size: 15px; padding:0px 14px; min-width: 100%;">${item.day}<span><i class="fa-solid fa-eye"></i>${item.see}</span></p>
                <h3 class="main__title" style="font-size: 20px;">${item.name}</h3>
                <p class="main__text" style="font-size: 17px;">${item.text}</p>
                <p style="color: #11B181; margin-top:30px">Batafsil</p>
            </li>
        </div>
        `
        blogDiv.appendChild(box)
        console.log(blogDiv);


    })
}

async function yolFunc() {
    const res = await fetch("../json/yol.json");
    const data = await res.json();
    const mainYolDiv = document.querySelector(".main__yolDiv")
    const colorArr = ["#F3F8FF", "#FAF4FF", "#FFF4D6"]

    data.forEach((item, color) => {
        let box = document.createElement("div")
        box.innerHTML = `
         <div class="main__yolBox" style="background-color: ${colorArr[color]};">
            <h3 class="main__title" style="font-size: 24px; font-weight:600;  text-align: left; margin:0px">${item.name}</h3>
            <img src="${item.img}" class="main__yolImg">
            <button class="main__yolIcon" style="text-align: right;"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
        `
        mainYolDiv.appendChild(box)
    })
}

async function courseFunc() {
    const res = await fetch("../json/course.json");
    const data = await res.json();
    const courseDiv = document.querySelector(".main__courseDiv");

    data.forEach((item) => {
        let box = document.createElement("div")
        box.innerHTML = `
        <div class="main__courseBox">
            <ul class="row middle-xs" style="gap: 10px;">
                <img src="${item.img}" class="main__courseImg">
                <li>
                    <h3 class="main__title" style="font-size: 20px; margin:0px;">${item.name}</h3>
                    <p class="main__text" style="font-size: 18px;">${item.moon} oy</p>
                </li>
            </ul>
            <ul class="row middle-xs center-xs" style="gap: 20px; margin-top:30px">
                <p class="main__text">${item.theSame}</p>
                <p class="main__text" style="color: #C1ADB3;">${item.link1}</p>
            </ul>
        </div>
        `
        courseDiv.appendChild(box)
    })
}
async function worserFunk1() {
    const res = await fetch("../json/workerFactory2.json");
    const data = await res.json();
    const worker1 = document.querySelector(".main__worker1");

    data.forEach((item) => {
        let box = document.createElement("div")
        box.innerHTML = `
          <img src="${item.img}" class="main__workerImg">
        `
        worker1.appendChild(box)
    })

}
async function worserFunk2() {
    const res = await fetch("../json/workerFactory3.json");
    const data = await res.json();
    const worker2 = document.querySelector(".main__worker2");

    data.forEach((item) => {
        let box = document.createElement("div")
        box.innerHTML = `
          <img src="${item.img}" class="main__workerImg">
        `
        worker2.appendChild(box)
    })

}
async function worserFunk3() {
    const res = await fetch("../json/workerFactory2.json");
    const data = await res.json();
    const worker3 = document.querySelector(".main__worker3");

    data.forEach((item) => {
        let box = document.createElement("div")
        box.innerHTML = `
          <img src="${item.img}" class="main__workerImg">
        `
        worker3.appendChild(box)
    })

}