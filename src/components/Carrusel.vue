<template>
    <div class="slider">
        <div class="list">
            <!-- {{ games }} -->
            <!-- {{console.log("games: ", gamesOrdered) }} -->
            <div v-for="(item, index) in gameDatails" :key="index" class="item"
                :class="{ active: index === currentIndex }" v-show="index === currentIndex">
                <!-- {{ console.log(index) }} -->
                <img v-bind:src="item.screenshots[0].image" :alt="item.alt" />
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
                :class="{ active: index === 0 }" @click="goToSlide(index)">
                <img :src="item.thumbnail" :alt="item.alt" />
            </div>
        </div>
        <div class="nextPrevArrows">
            <button class="prev" @click="prevSlide()"></button>
            <button class="next" @click="nextSlide()"></button>
        </div>
    </div>
</template>

<script>
import { useApiStore } from "../stores/apiStore";
import axios from "axios";
export default {
    data() {
        return {
            limit: 12, // Limitar inicialmente a 12 resultados
            currentIndex: 0,
            gameDatails: [],
            gamesOrdered: [],
        };
    },
    mounted() {
        const gameStore = useApiStore();
        // Llamamos a la API y aplicamos orden y límite inicial
        if (!gameStore.orderby.length) {
            gameStore.fetchGames("games").then(() => {
                this.applyInitialSettings();
                this.gamesOrdered = gameStore.orderby;
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

            //sacar los ids de los juegos
            let IdsArray = gameStore.orderby.map((juego) => juego.id);

            //hacer un fetch para cada id a endpoint game?id=XX
            Promise.all(
                IdsArray.map((id) =>
                    axios.get(
                        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
                        {
                            headers: {
                                "X-RapidAPI-Key":
                                    "bdc2242cafmsh4c0302abdc3a647p1a6d33jsn5b561224ba73",
                                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
                            },
                        }
                    )
                )
            ).then((respuesta) => {
                //console.log(respuesta)
                this.gameDatails = respuesta.map((item) => item.data);
            });

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
            console.log(
                `Juegos ordenados por ${orderType} y limitados:`,
                gameStore.orderby
            );
        },

        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.gamesOrdered.length;
            this.gamesOrdered.push(this.gamesOrdered.shift());
            console.log(this.gamesOrdered);
        },

        prevSlide() {
            this.currentIndex =
                (this.currentIndex - 1 + this.gamesOrdered.length) %
                this.gamesOrdered.length;
            this.gamesOrdered.unshift(this.gamesOrdered.pop());
        },

        /*         goToSlide(index) {
                    this.currentIndex = index;
                }, */

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
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;

    & .list {
        position: relative;
        width: 100%;
        height: 100%;

        & .item {
            position: absolute;
            inset: 0;
            transition: 0.7s;

            & img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            & .content {
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

                & .title {
                    font-size: 4em;
                    letter-spacing: 4px;
                    font-weight: bold;
                    line-height: 1.3em;
                    padding-bottom: 10px;
                    text-shadow: 0 0 7px #ff6600, 0 0 10px #ff6600, 0 0 21px #ff6600,
                        0 0 42px #5271ff, 0 0 82px #5271ff, 0 0 92px #5271ff,
                        0 0 102px #5271ff, 0 0 151px #5271ff;
                }

                & .description {
                    font-size: 14px;
                    font-weight: bold;
                    letter-spacing: 1px;
                    background-color: rgba(63, 106, 138, 0.71);
                    padding: 10px;
                    border-radius: 15px;
                }

                & .button {
                    margin-top: 20px;

                    & button {
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
                        box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #0fa,
                            0 0 0.8rem #0fa, 0 0 2.8rem #0fa, inset 0 0 1.3rem #0fa;

                        &:hover {
                            background-color: #33a21d;
                            color: #fff;
                            font-weight: 800;
                        }
                    }
                }
            }
        }
    }
}

.thumbnail {
    display: flex;
    gap: 20px;
    position: absolute;
    bottom: 87px;
    left: 40%;
    width: max-content;
    z-index: 5;

    & .item {
        width: 290px;
        height: 170px;
        flex-shrink: 0;
        position: relative;
        border-radius: 10px;
        cursor: pointer;
        filter: brightness(0.5);
        transition: transform 0.3s, filter 0.3s;

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
            box-shadow: 0 0 4rem rgb(132, 113, 92), 0 0 3rem #ff6600,
                inset 0 0 2.3rem rgb(92, 101, 98);
        }

    }
    & .item.active {
        transform: scale(1.1);
        filter: brightness(1.5);
        box-shadow: 0 0 .3rem #fff,
            0 0 .1rem #fff,
            0 0 1rem #e51a4c,
            0 0 0.9rem #e51a4c,
            0 0 2rem #ff7214,
            inset 0 0 0.8rem #ff7214;
    }
}

.nextPrevArrows {
    position: absolute;
    top: 72%;
    right: 50%;
    z-index: 100;
    width: 300px;
    max-width: 30%;
    display: flex;
    gap: 10px;
    align-items: center;

    & button {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        box-shadow: 0 0 0.3rem #fff, 0 0 0.3rem #fff, 0 0 2.5rem #bc13fe,
            0 0 1rem #bc13fe, 0 0 3rem #bc13fe, inset 0 0 1.5rem #bc13fe;
        border: none;
        background-color: #bc13fe;
        color: #ff00ff;
        font-family: monospace;
        font-size: 22px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.4s ease;

        &:hover {
            background: var(--Gradiente-Radial, radial-gradient(270.17% 139.44% at 99.27% 1%, #483c9e 0%, #68088b 31.27%, #6c2c4a 65.27%, #000 99.77%));
            color: #fff;
        }
    }

    .prev::after {
        content: "<";
    }

    .next::after {
        content: ">";
    }
}

@keyframes showContent {
    to {
        transform: translateY(0px);
        filter: blur(0px);
        opacity: 1;
    }
}

.slider {
    & .list {
        & .item {
            & .content {

                & .title,
                & .description,
                & .button {
                    transform: translateY(50px);
                    filter: blur(20px);
                    opacity: 0;
                    animation: showContent 0.5s linear forwards;
                }

                & .title {
                    animation-delay: 0.4s;
                }

                & .description {
                    animation-delay: 0.6s;
                }

                & .button {
                    animation-delay: 0.8s;
                }
            }
        }
    }
}

@media screen and (max-width: 678px) {
    .slider {
        & .list {
            & .item {
                & .content {
                    padding-right: 0;

                    & .title {
                        font-size: 40px;
                    }
                }
            }
        }
    }
}
</style>
