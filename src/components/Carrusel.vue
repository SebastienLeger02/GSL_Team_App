<template>
    <div class="slider">
        <div class="list">
            <!-- {{ games }} -->
            <!-- {{console.log("games: ", gamesOrdered) }} -->
            <div v-for="(item, index) in gamesOrdered" :key="index" class="item"
                :class="{ active: index === currentIndex }" v-show="index === currentIndex">
                <!-- {{ console.log(index) }} -->
                <img v-bind:src="item.thumbnail" :alt="item.alt" />
                <!-- {{ console.warn("item: ", item) }} -->
                <div class="content">
                    <div class="title">{{ item.title }}</div>
                    <div class="description">{{ item.short_description }}</div>
                    <div class="button">
                        <button>More Info</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="thumbnail">
            <div v-for="(item, index) in gamesOrdered" :key="'thumb-' + index" class="item"
                :class="{ active: index === currentIndex }" @click="goToSlide(index)">
                <img :src="item.thumbnail" :alt="item.alt" />
            </div>
        </div>
        <div class="nextPrevArrows">
            <button class="prev" @click="prevSlide('prev')"></button>
            <button class="next" @click="nextSlide('next')"></button>
        </div>
    </div>
</template>

<script>

import { useApiStore } from "../stores/apiStore";

export default {
    data() {
        return {
            limit: 12, // Limitar inicialmente a 12 resultados
            currentIndex: 0,
        };
    },
    computed: {
        // Juegos limitados y ordenados
        gamesOrdered() {
            const gameStore = useApiStore();
            console.log("Store: ", gameStore.orderby);
            return gameStore.orderby;
        },
        juegoId() {
            const juegoStore = useApiStore();
            return juegoStore.gameById
        }
    },
    mounted() {
        const gameStore = useApiStore();
        // Llamamos a la API y aplicamos orden y límite inicial
        if (!gameStore.orderby.length) {
            gameStore.fetchGames("games").then(() => {
                this.applyInitialSettings();
            });
        }
        this.startAutoSlide();
    },

    methods: {
        // Aplicar orden y límite inicial
        applyInitialSettings() {
            const gameStore = useApiStore();
            gameStore.sortGames("relevance");
            gameStore.limitResults(this.limit);

            // Mostrar en consola los juegos limitados
            console.log("Juegos iniciales limitados:", gameStore.orderby);
        },

        // Cambiar límite dinámicamente
        updateLimit(newLimit) {
            const gameStore = useApiStore();
            this.limit = newLimit;
            gameStore.limitResults(this.limit);

            // Mostrar en consola los juegos con el nuevo límite
            console.log(`Juegos limitados a ${this.limit}:`, gameStore.orderby);
        },

        // Cambiar el orden dinámicamente
        changeOrder(orderType) {
            const gameStore = useApiStore();
            gameStore.sortGames(orderType);

            // Aplicar el límite nuevamente después de ordenar
            gameStore.limitResults(this.limit);

            // Mostrar en consola los juegos ordenados y limitados
            console.log(`Juegos ordenados por ${orderType} y limitados:`, gameStore.orderby);
        },

        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.gamesOrdered.length;
        },

        prevSlide() {
            this.currentIndex =
                (this.currentIndex - 1 + this.gamesOrdered.length) %
                this.gamesOrdered.length;
        },

        goToSlide(index) {
            this.currentIndex = index;
        },

        //intervalo de las imagenes
        startAutoSlide() {
            this.autoSlideInterval = setInterval(() => {
                this.nextSlide();
            }, 10000); // Cambia la imagen cada 10 segundos
        },

        stopAutoSlide() {
            clearInterval(this.autoSlideInterval);
        },
    },
};
</script>

<style>
/* seccion imagenes grandes */
.slider {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
}

.slider .list {
    position: relative;
    width: 100%;
    height: 100%;
}

.slider .list .item {
    position: absolute;
    inset: 0;
    transition: 0.7s;
}

/* .slider .list .item::after {
    content: '';
    width: 100%;
    height: 60%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(to top, #000 30%, transparent);
}  */

.slider .list .item img {
    width: 100%;
    height: 100%;
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
    font-family: "Jaro", sans-serif;
    letter-spacing: 4px;
    font-weight: bold;
    line-height: 1.3em;
    padding-bottom: 10px;
    text-shadow:
        0 0 7px #ff6600,
        0 0 10px #ff6600,
        0 0 21px #ff6600,
        0 0 42px #5271ff,
        0 0 82px #5271ff,
        0 0 92px #5271ff,
        0 0 102px #5271ff,
        0 0 151px #5271ff;
}

.slider .list .item .content .description {
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    background-color: rgba(63, 106, 138, 0.71);
    padding: 10px;
    border-radius: 15px;
}

.slider .list .item .content .button {
    margin-top: 20px;
}

.slider .list .item .content .button button {
    border-radius: 5px;
    border: none;
    font-size: 12px;
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
    bottom: 87px;
    left: 50%;
    width: max-content;
    z-index: 5;
}

.thumbnail .item {
    width: 150px;
    height: 220px;
    flex-shrink: 0;
    position: relative;
    border-radius: 10px;
    cursor: pointer;
    filter: brightness(.5);
}

.thumbnail .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow:
        0 0 4rem rgb(132, 113, 92),
        0 0 3rem #ff6600,
        inset 0 0 2.3rem rgb(92, 101, 98)
}

.thumbnail .item.active {

    filter: brightness(1.5);
    box-shadow: 0 0 .3rem #fff,
        0 0 .1rem #fff,
        0 0 1rem #e51a4c,
        0 0 0.9rem #e51a4c,
        0 0 2rem #ff7214,
        inset 0 0 0.8rem #ff7214;
}

/* botones de prev y next */

.nextPrevArrows {
    position: absolute;
    top: 70%;
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
    box-shadow:
        0 0 .3rem #fff,
        0 0 .3rem #fff,
        0 0 2.5rem #bc13fe,
        0 0 1rem #bc13fe,
        0 0 3rem #bc13fe,
        inset 0 0 1.5rem #bc13fe;
    border: none;
    background-color: #bc13fe;
    color: #ff00ff;
    font-family: monospace;
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.4s ease;
}

.nextPrevArrows button:hover {
    background: var(--Gradiente-Radial, radial-gradient(270.17% 139.44% at 99.27% 1%, #483c9e 0%, #68088b 31.27%, #6c2c4a 65.27%, #000 99.77%));
    color: #fff;
}

.prev::after {
    content: "<";
}

.next::after {
    content: ">";
}

/* animaciones */

.slider .list .item .content .title,
.slider .list .item .content .description,
.slider .list .item .content .button {
    transform: translateY(50px);
    filter: blur(20px);
    opacity: 0;
    animation: showContent 0.5s linear forwards;
}

@keyframes showContent {
    to {
        transform: translateY(0px);
        filter: blur(00px);
        opacity: 1;
    }
}

.slider .list .item .content .title {
    animation-delay: 0.4s;
}

.slider .list .item .content .description {
    animation-delay: 0.6s;
}

.slider .list .item .content .button {
    animation-delay: 0.8s;
}

/* animacion next boton */
/* .slider.next .list .item img {
    width: 150px;
    height: 220px;
    position: absolute;
    bottom: 50px;
    left: 50%;
    border-radius: 30px;
    animation: showImage 0.5s linear 1 forwards;
} */

/* @keyframes showImage {
    to {
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
} */

/* .slider.next .thumbnail .item:nth-last-child(1) {
    overflow: hidden;
    animation: showThumbnail 0.5s linear 1 forwards;
} */

/* .slider.prev .list .item img {
    z-index: 100;
} */

/* @keyframes showThumbnail {
    from {
        width: 0;
        opacity: 0;
    }
} */

/* .slider.next .thumbnail {
    animation: effectNext .5s linear 1 forwards;
} */

/* @keyframes effectNext {
    from {
        transform: translateX(150px);
    }
} */

/* animacion boton prev */

/* .slider.prev .list .item:nth-child(2) {
    z-index: 2;
} */

/* .slider.prev .list .item:nth-child(2) img {
    position: absolute;
    bottom: 0;
    left: 0;
    animation: outFrame 0.5s linear 1 forwards;
} */

/* @keyframes outFrame {
    to {
        width: 150px;
        height: 220px;
        bottom: 50px;
        left: 50%;
        border-radius: 20px;
    }
}
 */
/* .slider.prev .thumbnail .item {
    overflow: hidden;
    opacity: 0;
    animation: showThumbnail .5s linear 1 forwards;
} */

/* .slider.prev .list .item:nth-child(1) .content .title,
.slider.prev .list .item:nth-child(1) .content .type,
.slider.prev .list .item:nth-child(1) .content .description,
.slider.prev .list .item:nth-child(1) .content .button {
    animation: contentOut 0.5s 1s linear 1 forwards;
} */

/* @keyframes contentOut {
    to {
        transform: translateY(-150px);
        filter: blur(20px);
        opacity: 0;
    }
} */

/* tamaños de la pantalla */
@media screen and (max-width: 678px) {
    .slider .list .item .content {
        padding-right: 0;
    }

    .slider .list .item .content .title {
        font-size: 40px;
    }
}
</style>
