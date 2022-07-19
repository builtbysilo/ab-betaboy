import Head from 'next/head';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { withProtected } from "../firebase/Route"



function Play({ auth }) {


  useEffect(() => {

    var gamewidth = document.getElementById("level").clientWidth;
    var game_size = gamewidth;
    var tile_size = gamewidth / 20;
    var helmet_offset = tile_size * 0.5;


    let root = document.documentElement;

    const herochar = document.getElementById("hero");
    const touchUp = document.getElementById("touchup");
    const touchDown = document.getElementById("touchdown");
    const touchLeft = document.getElementById("touchleft");
    const touchRight = document.getElementById("touchright");

    touchUp.addEventListener("touchstart", e => {
        root.style.setProperty('--updown', '-33%');
    })
    touchUp.addEventListener("touchend", e => {
        root.style.setProperty('--updown', '0%');
    })

    touchDown.addEventListener("touchstart", e => {
        root.style.setProperty('--updown', '-66%');
    })
    touchDown.addEventListener("touchend", e => {
        root.style.setProperty('--updown', '0%');
    })

    touchLeft.addEventListener("touchstart", e => {
        root.style.setProperty('--leftright', '-33%');
    })
    touchLeft.addEventListener("touchend", e => {
        root.style.setProperty('--leftright', '0%');
    })

    touchRight.addEventListener("touchstart", e => {
        root.style.setProperty('--leftright', '-66%');
    })
    touchRight.addEventListener("touchend", e => {
        root.style.setProperty('--leftright', '0%');
    })

    var minutes = "00";
    var seconds = "00";
    var tens = "00";
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var appendMinutes = document.getElementById("minutes")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;

    buttonStart.onclick = function() {

      clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

      buttonStop.onclick = function() {
        clearInterval(Interval);
    }


    buttonReset.onclick = function() {
      clearInterval(Interval);
      tens = "00";
      seconds = "00";
      minutes = "00";
      appendTens.innerHTML = tens;
      appendSeconds.innerHTML = seconds;
      appendMinutes.innerHTML = minutes;
    }



  function startTimer () {
    tens++;

    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9){
      appendTens.innerHTML = tens;

    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
      console.log("minutes");
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }

  }
    // root.style.setProperty('--level-size', game_size);


    // function reportWindowSize() {
    //     gamewidth = document.getElementById("level").clientWidth;
    //     tile_size = gamewidth / 20;
    //     game_size = tile_size * 24;

    //     root.style.setProperty('--level-size', game_size);


    // }
    // window.addEventListener('resize', reportWindowSize)




    function createBoard() {
        const boardElement = document.getElementById("level");
        const elements = [];

        function createElement(options) {
            // ? item.options | top. options | left.options
            let { item, top, left, width, height, transform } = options;


            const currentElement = { item, currentPosition: { top, left } };
            elements.push(currentElement);

            const htmlElement = document.createElement("div");
            htmlElement.className = item;
            htmlElement.style.top = top + "px";
            htmlElement.style.left = left + "px";
            htmlElement.style.width = tile_size + "px";
            htmlElement.style.height = (tile_size + helmet_offset) + "px";
            // htmlElement.style.transform = "translateY" + -1 * helmet_offset;
            // htmlElement.style.backgroundposition = 0 + (-1 * tile_size + helmet_offset);

            boardElement.appendChild(htmlElement);

            function getNewDirection(buttonPressed, position) {
                switch (buttonPressed) {
                    case "ArrowUp":
                        return { top: position.top - tile_size, left: position.left };
                    case "ArrowRight":
                        return { top: position.top, left: position.left + tile_size };
                    case "ArrowDown":
                        return { top: position.top + tile_size, left: position.left };
                    case "ArrowLeft":
                        return { top: position.top, left: position.left - tile_size };
                    default:
                        return { top: position.top, left: position.left };
                }
            }

            window.addEventListener("keydown", function (event) {
                if (event.defaultPrevented) {
                    return;
                }

                switch (event.key) {
                    case "ArrowDown":
                        root.style.setProperty('--updown', '-66%');
                    break;
                    case "ArrowUp":
                        root.style.setProperty('--updown', '-33%');
                    break;
                    case "ArrowLeft":
                        root.style.setProperty('--leftright', '-33%');
                    break;
                    case "ArrowRight":
                        root.style.setProperty('--leftright', '-66%');
                    default:
                        return;
                }
                event.preventDefault();
            }, true);

            window.addEventListener("keyup", function (event) {
                if (event.defaultPrevented) {
                    return;
                }

                switch (event.key) {
                    case "ArrowDown":
                        root.style.setProperty('--updown', '0%');
                    break;
                    case "ArrowUp":
                        root.style.setProperty('--updown', '0%');
                    break;
                    case "ArrowLeft":
                        root.style.setProperty('--leftright', '0%');
                    break;
                    case "ArrowRight":
                        root.style.setProperty('--leftright', '0%');
                    default:
                    return;
                }

                event.preventDefault();
            }, true);


            function validateMoviment(position, conflictItem) {
                return (
                    position.left >= 0 &&
                    position.left <= (tile_size * 19) &&
                    position.top >= tile_size &&
                    position.top <= (tile_size * 18) &&
                    conflictItem?.item !== "forniture"
                );
            }

            function getMovimentConflict(position, els) {
                const conflictItem = els.find((currentElement) => {
                    return (
                        currentElement.currentPosition.top === position.top &&
                        currentElement.currentPosition.left === position.left
                    );
                });

                return conflictItem;
            }

            function validateConflits(cEl, conflictItem) {
                function finishGame(message) {
                    setTimeout(() => {
                        alert(message);
                        history.go(0);
                    }, 20);
                }

                if (!conflictItem) {
                    return;
                }

                if (cEl.item === "hero") {
                    if (conflictItem.item === "mini-demon" || conflictItem.item === "trap") {
                        finishGame(" *** Game Over! *** ");
                    }

                    if (conflictItem.item === "chest") {
                        finishGame(" *** Win! *** ");
                    }
                }

                if (cEl.item === "mini-demon" && conflictItem.item === "hero") {
                    finishGame(" *** Game Over! *** ");
                }
            }

            function move(buttonPressed) {
                const newPosition = getNewDirection(
                    buttonPressed,
                    currentElement.currentPosition
                );
                const conflictItem = getMovimentConflict(newPosition, elements);
                const isValidMovement = validateMoviment(newPosition, conflictItem);

                if (isValidMovement) {
                    currentElement.currentPosition = newPosition;

                    htmlElement.style.top = newPosition.top + "px";
                    htmlElement.style.left = newPosition.left + "px";

                    validateConflits(currentElement, conflictItem);
                }
            }

            return {
                move: move
            };
        }

        function createItem(options) {
            createElement(options);
        }

        function createHero(options) {
            const hero = createElement({
                item: "hero",
                top: options.top,
                left: options.left,
                width: options.width,
                height: options.height,
                transform: options.transform,
            });

            document.addEventListener("keydown", (event) => {
                hero.move(event.key);
            });

            touchUp.addEventListener("touchstart", () => {
                hero.move("ArrowUp");
            })

            touchDown.addEventListener("touchstart", () => {
                hero.move("ArrowDown");
            })

            touchLeft.addEventListener("touchstart", () => {
                hero.move("ArrowLeft");
            })
            touchRight.addEventListener("touchstart", () => {
                hero.move("ArrowRight");
            })
        }

        function createEnemy(options) {
            const enemy = createElement({
                item: "mini-demon",
                top: options.top,
                left: options.left,
                width: options.width,
                height: options.height,
                // width: options.transform,
                // height: options.backgroundposition
            });

            setInterval(() => {
                const direction = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
                const randomIndex = Math.floor(Math.random() * direction.length);
                const randomDirection = direction[randomIndex];

                enemy.move(randomDirection);
            }, 1000);
        }

        return {
            createItem: createItem,
            createHero: createHero,
            createEnemy: createEnemy
        };
    }

    const board = createBoard();
        // Reminder: item -> mini-deamon | chest | hero | trap
        // Reminder: { item: 'item', top: Y(number), left: X(number) }
        board.createHero({ top: tile_size * 16, left: tile_size * 2 });
        board.createEnemy({ top: tile_size * 15, left: tile_size * 15 });
        board.createEnemy({ top: tile_size * 15, left: tile_size * 15 });
        board.createEnemy({ top: tile_size * 15, left: tile_size * 15 });
        // board.createEnemy({ top: tile_size * 15, left: tile_size * 15 });
        // board.createEnemy({ top: tile_size * 15, left: tile_size * 15 });
        // board.createEnemy({ top: tile_size * 10, left: tile_size * 10 });
        // board.createEnemy({ top: tile_size * 10, left: tile_size * 10 });
        // board.createEnemy({ top: tile_size * 10, left: tile_size * 10 });
        // board.createEnemy({ top: tile_size * 10, left: tile_size * 10 });
        // board.createEnemy({ top: tile_size * 5, left: tile_size * 10 });
        // board.createEnemy({ top: tile_size * 5, left: tile_size * 10 });
        // board.createEnemy({ top: tile_size * 5, left: tile_size * 10 });
        // board.createEnemy({ top: tile_size * 5, left: tile_size * 10 });
        // board.createEnemy({ top: tile_size * 5, left: tile_size * 10 });
        // board.createEnemy({ top: tile_size * 6, left: tile_size * 10 });
        // board.createEnemy({ top: tile_size * 4, left: tile_size * 4 });
        // board.createEnemy({ top: tile_size * 4, left: tile_size * 4 });
        // board.createEnemy({ top: tile_size * 4, left: tile_size * 4 });
        // board.createEnemy({ top: tile_size * 4, left: tile_size * 4 });
        // board.createEnemy({ top: tile_size * 3, left: tile_size * 15 });
        // board.createEnemy({ top: tile_size * 3, left: tile_size * 15 });
        // board.createEnemy({ top: tile_size * 2, left: tile_size * 15 });
        // board.createEnemy({ top: tile_size * 2, left: tile_size * 15 });

        board.createItem({ item: "chest", top: tile_size * 2, left: tile_size * 18 });
        // board.createItem({ item: "trap", top: tile_size * 15, left: tile_size * 16 });
        // board.createItem({ item: "trap", top: tile_size * 10, left: tile_size * 4 });
        // board.createItem({ item: "trap", top: tile_size * 6, left: tile_size * 8 });
        // board.createItem({ item: "trap", top: tile_size * 2, left: tile_size * 8 });
        // board.createItem({ item: "trap", top: tile_size * 5, left: tile_size * 11 });
        // board.createItem({ item: "trap", top: tile_size * 4, left: tile_size * 13 });

        board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 0 });
        board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 1 });
        board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 4 });
        board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 5 });
        board.createItem({ item: "forniture", top: tile_size * 15, left: tile_size * 5 });
        board.createItem({ item: "forniture", top: tile_size * 16, left: tile_size * 5 });

        board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 0 });
        board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 1 });
        board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 2 });
        board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 3 });
        board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 4 });
        board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 5 });
        board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 6 });
        board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 7 });
        board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 8 });
        board.createItem({ item: "forniture", top: tile_size * 11, left: tile_size * 9 });
        board.createItem({ item: "forniture", top: tile_size * 12, left: tile_size * 9 });
        board.createItem({ item: "forniture", top: tile_size * 13, left: tile_size * 9 });
        board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 9 });
        board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 10 });
        board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 11 });
        board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 12 });
        board.createItem({ item: "forniture", top: tile_size * 13, left: tile_size * 12 });
        board.createItem({ item: "forniture", top: tile_size * 12, left: tile_size * 12 });
        board.createItem({ item: "forniture", top: tile_size * 11, left: tile_size * 12 });
        board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 12 });
        board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 11 });


})

const { user, loginWithTwitter, logout, error } = auth;

  return (
    <div className="container">
      <Head>
        <title>BetaBoy Emulator</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/swz2ypo.css"></link>
      </Head>

      <div className="app">
        <div className="gb">
            <div className="gb-bar"></div>
            <h1>{user?.displayName}</h1>
            {error && <h1>{error}</h1>}
            <button onClick={loginWithTwitter}>Login</button>
            <button onClick={logout}>Logout</button>
            <div className="timer">
              <button id="button-start">Startt</button>
              <button id="button-stop">Stop</button>
              <button id="button-reset">Reset</button>
            </div>
            <div className="gb-screen started">
                <div className="screen-top">
                <p><span id="minutes">00</span>:<span id="seconds">00</span>:<span id="tens">00</span></p>
                </div>
                <div className="screen-inner">
                    <div id="level" className="level">
                        <div className="hero"></div>
                        <Image className="board-img" width="600px" height="600px" src="/Level1_GameMap.gif" alt="AlphaBots Level 1" />
                    </div>
                </div>
            </div>
            <div className="logo">
                <Image src="/BetaBoyLogo.svg" alt="Decentel BetaBoy" width="200px" height="25px"/>
            </div>
            <div className="controls">
            <section className="gb-dpad">
                <div className="touchcon">
                    <div className="touchup" id="touchup"></div>
                    <div className="touchdown" id="touchdown"></div>
                </div>
                <div className="dpad-inner" role="button">
                    <img src="/UpDownSprite.png" className="updownimg"/>
                </div>


            </section>
            <section className="gb-buttons">
            <div className="touchcon horizontal">
                    <div className="touchleft" id="touchleft"></div>
                    <div className="touchright" id="touchright"></div>
                </div>
                <div className="buttons-inner" role="button">
                    <img src="/LeftRight_Sprite.png" className="leftrightimg"/>
                </div>
            </section>
            </div>
        </div>
</div>
    </div>
  )
}

export default withProtected(Play);