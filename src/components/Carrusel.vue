<template>
    <div class="slider">
        <div class="list">
            <div v-for="(item, index) in images" :key="index" class="item" :class="{ active: index === currentIndex }"
                v-show="index === currentIndex">
                <img v-bind:src="item.src" :alt="item.alt" />
                {{ console.warn("item: ", item) }}
                <div class="content">
                    <div class="title">{{ item.title }}</div>
                    <div class="description">{{ item.description }}</div>
                    <div class="button">
                        <button>More Info</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="thumbnail">
            <div v-for="(item, index) in images" :key="'thumb-' + index" class="item"
                :class="{ active: index === currentIndex }" @click="goToSlide(index)">
                <img :src="item.src" :alt="item.alt" />
            </div>
        </div>
        <div class="nextPrevArrows">
            <button class="prev" @click="prevSlide"></button>
            <button class="next" @click="nextSlide"></button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                {
                    src: "/images/paisaje1.jpg",
                    alt: "Paisaje 1",
                    title: "PROYECTO 1",
                    description: "Descripción del proyecto 1.",
                },
                {
                    src: "/images/paisaje2.jpg",
                    alt: "Paisaje 2",
                    title: "PROYECTO 2",
                    description: "Descripción del proyecto 2.",
                },
                // ... Añade los demás elementos
            ],
            currentIndex: 0,
        };
    },
    methods: {
        nextSlide() {
            this.currentIndex =
                (this.currentIndex + 1) % this.images.length;
        },
        prevSlide() {
            this.currentIndex =
                (this.currentIndex - 1 + this.images.length) %
                this.images.length;
        },
        goToSlide(index) {
            this.currentIndex = index;
        },
    },
};
</script>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

/* seccion imagenes grandes */

.slider {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    /*margin-top: -50px;*/
}

.slider .list .item {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0 0 0 0;
}

.slider .list .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slider .list .item .content {
    position: absolute;
    top: 20%;
    width: 1140px;
    height: 40%;
    max-width: 70%;
    left: 56%;
    transform: translateX(-75%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
}

.slider .list .item .content .title {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    padding-bottom: 15px;
    text-shadow:
        0 0 7px #0000ff,
        0 0 10px #0000ff,
        0 0 21px #0000ff,
        0 0 42px #5271ff,
        0 0 82px #5271ff,
        0 0 92px #5271ff,
        0 0 102px #5271ff,
        0 0 151px #5271ff;
}


.slider .list .item .content .description {
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 15px;
}

.slider .list .item .content .button {
    margin-top: 20px;
}

.slider .list .item .content .button button {
    border-radius: 5px;
    border: none;
    padding: 7px 7px;
    font-weight: 800;
    cursor: pointer;
    letter-spacing: 1px;
    transition: 0.4s;
    color: #2c771c;
    background-color: #fff;
    box-shadow: 0 0 .2rem #fff,
        0 0 .2rem #fff,
        0 0 2rem #0fa,
        0 0 0.8rem #0fa,
        0 0 2.8rem #0fa,
        inset 0 0 1.3rem #0fa
}

.slider .list .item .content .button button:hover {
    background-color: #33a21d;
    color: #fff;
    font-weight: 800;
}

/* seccion imagenes pequeñas */

.thumbnail {
    display: flex;
    gap: 10px;
    position: absolute;
    bottom: 50px;
    left: 50%;
    width: max-content;
    z-index: 100;
}

.thumbnail .item {
    width: 150px;
    height: 220px;
    flex-shrink: 0;
    position: relative;
    border-radius: 13px;
}

.thumbnail .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow:
        0 0 4rem rgb(92, 132, 119),
        0 0 3rem #7f7fa9,
        inset 0 0 2.3rem rgb(92, 101, 98)
}

/* botones de prev y next */

.nextPrevArrows {
    position: absolute;
    top: 75%;
    right: 40%;
    z-index: 100;
    width: 300px;
    max-width: 30%;
    display: flex;
    gap: 10px;
    align-items: center;
}

.nextPrevArrows button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 0 .2rem #fff,
        0 0 .2rem #fff,
        0 0 2rem #bc13fe,
        0 0 0.8rem #bc13fe,
        0 0 2.8rem #bc13fe,
        inset 0 0 1.3rem #bc13fe;
    border: none;
    color: #953fb4;
    font-family: monospace;
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s;
}

.nextPrevArrows button:hover {

    background: var(--Gradiente-Radial, radial-gradient(270.17% 139.44% at 99.27% 1%, #483c9e 0%, #68088b 31.27%, #6c2c4a 65.27%, #000 99.77%));
    color: #fff;
}

/* animaciones */
.slider .list .item:nth-child(1) {
    z-index: 1;
}

.slider .list .item:nth-child(1) .content .title,
.slider .list .item:nth-child(1) .content .description,
.slider .list .item:nth-child(1) .content .button {
    transform: translateY(50px);
    filter: blur(20px);
    opacity: 0;
    animation: showContent 0.5s 1s linear 1 forwards;
}

@keyframes showContent {
    to {
        transform: translateY(0px);
        filter: blur(00px);
        opacity: 1;
    }
}

.slider .list .item:nth-child(1) .content .title {
    animation-delay: 0.6s;
}

.slider .list .item:nth-child(1) .content .description {
    animation-delay: 0.8s;
}

.slider .list .item:nth-child(1) .content .button {
    animation-delay: 1s;
}

/* animacion next boton */
.slider.next .list .item:nth-child(1) img {
    width: 150px;
    height: 220px;
    position: absolute;
    bottom: 50px;
    left: 50%;
    border-radius: 30px;
    animation: showImage 0.5s linear 1 forwards;
}

@keyframes showImage {
    to {
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
}

.slider.next .thumbnail .item:nth-last-child(1) {
    overflow: hidden;
    animation: showThumbnail 0.5s linear 1 forwards;
}

.slider.prev .list .item img {
    z-index: 100;
}

@keyframes showThumbnail {
    from {
        width: 0;
        opacity: 0;
    }
}

.slider.next .thumbnail {
    animation: effectNext .5s linear 1 forwards;
}

@keyframes effectNext {
    from {
        transform: translateX(150px);
    }
}

/* animacion boton prev */

.slider.prev .list .item:nth-child(2) {
    z-index: 2;
}

.slider.prev .list .item:nth-child(2) img {
    position: absolute;
    bottom: 0;
    left: 0;
    animation: outFrame 0.5s linear 1 forwards;
}

@keyframes outFrame {
    to {
        width: 150px;
        height: 220px;
        bottom: 50px;
        left: 50%;
        border-radius: 20px;
    }
}

.slider.prev .thumbnail .item:nth-child(1) {
    overflow: hidden;
    opacity: 0;
    animation: showThumbnail .5s linear 1 forwards;
}

.slider.prev .list .item:nth-child(1) .content .title,
.slider.prev .list .item:nth-child(1) .content .type,
.slider.prev .list .item:nth-child(1) .content .description,
.slider.prev .list .item:nth-child(1) .content .button {
    animation: contentOut 0.5s 1s linear 1 forwards;
}

@keyframes contentOut {
    to {
        transform: translateY(-150px);
        filter: blur(20px);
        opacity: 0;
    }
}

/* tamaños de la pantalla */
@media screen and (max-width: 678px) {
    .slider .list .item .content {
        padding-right: 0;
    }

    .slider .list .item .content .title {
        font-size: 40px;
    }
}

.prev::after {
    content: "<";
}

.next::after {
    content: ">";
}
</style>



<!-- <script options>
let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let slider = document.querySelector('.slider');
let sliderList = slider.querySelector('.slider .list');
let thumbnail = document.querySelector('.thumbnail');
let thumbnailItems = thumbnail.querySelectorAll('.item');

thumbnail.appendChild(thumbnailItems[0])

//funciones para el boton next
nextBtn.onclick = function() {
    moveSlider('next')
}

//funciones para el boton prev
prevBtn.onclick = function() {
    moveSlider('prev')
}

function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')

    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0]) // Mueve el primer elemento al final
        thumbnail.appendChild(thumbnailItems[0]) // Mueve el primer elemento de la miniatura al final
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]) // Mueve el último elemento al inicio
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]) // Mueve el último elemento de la miniatura al inicio
        slider.classList.add('prev');
    }

    slider.addEventListener('animationend', function(){
        if(direction === 'next'){
            slider.classList.remove('next')
        }else {
            slider.classList.remove('prev')
        }
    }, {once: true})
}
</script> -->


