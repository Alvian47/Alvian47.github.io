window.onload = function () {
    const cobaButton = document.getElementById('inputButton');
    cobaButton.addEventListener("click", showPicture)
}

function showPicture() {
    const text = document.getElementById('inputText');
    const slider = document.getElementById('slider')

    slider.innerHTML = ""

    let card = `<div class="card-translate swiper-slide">
                <div class="container">
                    <img src="/img/hand/pic.png" class="w-100 image">
                </div>
            </div>`

    let textTrim = text.value.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()\'\"0-9]/g, "")
    .replaceAll(/\s{1,}/g, "")

    for (const char of textTrim) {
        let resultCard = card.replace("pic", char.toUpperCase())
        slider.innerHTML += resultCard
    }
}

// swiper
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});