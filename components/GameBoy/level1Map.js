import Image from 'next/image';
import React, { useEffect, useState, useLayoutEffect  } from 'react';
import { useGame, useUpdateGame} from './gameContext'



export default function Level1Map() {

    const { toggleWin, toggleGameOver } = useUpdateGame()

    const context = useGame();
    const [popUp, setPopUp] = context['popups'];

    const [activeLvl, setActiveLvl] = useState(0);



    useLayoutEffect(() => {

            var gamewidth = document.getElementById("lvl1").clientWidth;
            var tile_size = gamewidth / 20;
            var helmet_offset = tile_size * 0.5;

            let root = document.documentElement;

            var touchUp = document.getElementById("touchup");
            var touchDown = document.getElementById("touchdown");
            var touchLeft = document.getElementById("touchleft");
            var touchRight = document.getElementById("touchright");

            let audio = new Audio("/BetaBoySong.mp3")
            audio.loop = true;
            audio.play()



            touchUp.addEventListener("touchstart", e => {
                root.style.setProperty('--updown', '-33.33%');
            })
            touchUp.addEventListener("touchend", e => {
                root.style.setProperty('--updown', '0%');
            })

            touchDown.addEventListener("touchstart", e => {
                root.style.setProperty('--updown', '-66.66%');
            })
            touchDown.addEventListener("touchend", e => {
                root.style.setProperty('--updown', '0%');
            })

            touchLeft.addEventListener("touchstart", e => {
                root.style.setProperty('--leftright', '-33.33%');
            })
            touchLeft.addEventListener("touchend", e => {
                root.style.setProperty('--leftright', '0%');
            })

            touchRight.addEventListener("touchstart", e => {
                root.style.setProperty('--leftright', '-66.66%');
            })
            touchRight.addEventListener("touchend", e => {
                root.style.setProperty('--leftright', '0%');
            })

            if(activeLvl === 0){
                var board = createBoard();
                board.createRade({ item: "rade", top: tile_size * 18, left: tile_size * 2 });
                board.createEnemy({ item: "merchant1", top: tile_size * 16, left: tile_size * 7 });
                board.createEnemy({ item: "merchant1", top: tile_size * 17, left: tile_size * 8 });
                board.createEnemy({ item: "merchant1", top: tile_size * 16, left: tile_size * 17 });
                board.createEnemy({ item: "merchant1", top: tile_size * 9, left: tile_size * 15 });
                board.createEnemy({ item: "merchant1", top: tile_size * 10, left: tile_size * 18 });
                board.createEnemy({ item: "merchant1", top: tile_size * 4, left: tile_size * 1 });
                board.createEnemy({ item: "merchant1", top: tile_size * 4, left: tile_size * 18 });
                board.createEnemy({ item: "merchant1", top: tile_size * 6, left: tile_size * 13 });
                board.createEnemy({ item: "merchant1", top: tile_size * 8, left: tile_size * 5 });
                board.createEnemy({ item: "merchant1", top: tile_size * 2, left: tile_size * 6 });
                board.createEnemy({ item: "merchant1", top: tile_size * 14, left: tile_size * 14 });

                board.createItem({ item: "chest1", top: tile_size * 1, left: tile_size * 14 });

                board.createItem({ item: "forniture", top: tile_size * 1, left: tile_size * 1 });
                board.createItem({ item: "forniture", top: tile_size * 1, left: tile_size * 2 });
                board.createItem({ item: "forniture", top: tile_size * 1, left: tile_size * 3 });
                board.createItem({ item: "forniture", top: tile_size * 1, left: tile_size * 4 });
                board.createItem({ item: "forniture", top: tile_size * 1, left: tile_size * 5 });
                board.createItem({ item: "forniture", top: tile_size * 1, left: tile_size * 6 });
                board.createItem({ item: "forniture", top: tile_size * 1, left: tile_size * 7 });
                board.createItem({ item: "forniture", top: tile_size * 1, left: tile_size * 8 });
                board.createItem({ item: "forniture", top: tile_size * 1, left: tile_size * 9 });
                board.createItem({ item: "forniture", top: tile_size * 1, left: tile_size * 10 });
                board.createItem({ item: "forniture", top: tile_size * 1, left: tile_size * 11 });
                board.createItem({ item: "forniture", top: tile_size * 1, left: tile_size * 12 });
                board.createItem({ item: "forniture", top: tile_size * 1, left: tile_size * 13 });
                board.createItem({ item: "forniture", top: tile_size * 1, left: tile_size * 15 });
                board.createItem({ item: "forniture", top: tile_size * 1, left: tile_size * 16 });
                board.createItem({ item: "forniture", top: tile_size * 1, left: tile_size * 17 });
                board.createItem({ item: "forniture", top: tile_size * 1, left: tile_size * 18 });
                board.createItem({ item: "forniture", top: tile_size * 1, left: tile_size * 19 });

                board.createItem({ item: "forniture", top: tile_size * 2, left: tile_size * 3 });
                board.createItem({ item: "forniture", top: tile_size * 2, left: tile_size * 8 });
                board.createItem({ item: "forniture", top: tile_size * 2, left: tile_size * 9 });
                board.createItem({ item: "forniture", top: tile_size * 2, left: tile_size * 13 });
                board.createItem({ item: "forniture", top: tile_size * 2, left: tile_size * 15 });

                board.createItem({ item: "forniture", top: tile_size * 5, left: tile_size * 3 });
                board.createItem({ item: "forniture", top: tile_size * 5, left: tile_size * 8 });

                board.createItem({ item: "forniture", top: tile_size * 6, left: tile_size * 3 });
                board.createItem({ item: "forniture", top: tile_size * 6, left: tile_size * 8 });

                board.createItem({ item: "forniture", top: tile_size * 7, left: tile_size * 3 });
                board.createItem({ item: "forniture", top: tile_size * 7, left: tile_size * 8 });
                board.createItem({ item: "forniture", top: tile_size * 7, left: tile_size * 9 });
                board.createItem({ item: "forniture", top: tile_size * 7, left: tile_size * 10 });
                board.createItem({ item: "forniture", top: tile_size * 7, left: tile_size * 11 });
                board.createItem({ item: "forniture", top: tile_size * 7, left: tile_size * 12 });
                board.createItem({ item: "forniture", top: tile_size * 7, left: tile_size * 13 });
                board.createItem({ item: "forniture", top: tile_size * 7, left: tile_size * 14 });
                board.createItem({ item: "forniture", top: tile_size * 7, left: tile_size * 15 });
                board.createItem({ item: "forniture", top: tile_size * 7, left: tile_size * 16 });
                board.createItem({ item: "forniture", top: tile_size * 7, left: tile_size * 17 });
                board.createItem({ item: "forniture", top: tile_size * 7, left: tile_size * 18 });
                board.createItem({ item: "forniture", top: tile_size * 7, left: tile_size * 19 });

                board.createItem({ item: "forniture", top: tile_size * 8, left: tile_size * 3 });
                board.createItem({ item: "forniture", top: tile_size * 8, left: tile_size * 9 });

                board.createItem({ item: "forniture", top: tile_size * 9, left: tile_size * 3 });

                board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 0 });
                board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 1 });
                board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 2 });
                board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 3 });
                board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 4 });
                board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 5 });
                board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 6 });
                board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 7 });
                board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 8 });
                board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 9 });
                board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 11 });
                board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 12 });

                board.createItem({ item: "forniture", top: tile_size * 11, left: tile_size * 0 });
                board.createItem({ item: "forniture", top: tile_size * 11, left: tile_size * 1 });
                board.createItem({ item: "forniture", top: tile_size * 11, left: tile_size * 3 });
                board.createItem({ item: "forniture", top: tile_size * 11, left: tile_size * 8 });
                board.createItem({ item: "forniture", top: tile_size * 11, left: tile_size * 12 });

                board.createItem({ item: "forniture", top: tile_size * 12, left: tile_size * 8 });
                board.createItem({ item: "forniture", top: tile_size * 12, left: tile_size * 12 });
                board.createItem({ item: "forniture", top: tile_size * 12, left: tile_size * 16 });
                board.createItem({ item: "forniture", top: tile_size * 12, left: tile_size * 17 });
                board.createItem({ item: "forniture", top: tile_size * 12, left: tile_size * 18 });
                board.createItem({ item: "forniture", top: tile_size * 12, left: tile_size * 19 });

                board.createItem({ item: "forniture", top: tile_size * 13, left: tile_size * 9 });
                board.createItem({ item: "forniture", top: tile_size * 13, left: tile_size * 10 });
                board.createItem({ item: "forniture", top: tile_size * 13, left: tile_size * 12 });
                board.createItem({ item: "forniture", top: tile_size * 13, left: tile_size * 16 });
                board.createItem({ item: "forniture", top: tile_size * 13, left: tile_size * 19 });

                board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 0 });
                board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 1 });
                board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 4 });
                board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 5 });
                board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 9 });
                board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 10 });
                board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 11 });
                board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 12 });
                board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 16 });
                board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 19 });

                board.createItem({ item: "forniture", top: tile_size * 15, left: tile_size * 5 });
                board.createItem({ item: "forniture", top: tile_size * 15, left: tile_size * 16 });
                board.createItem({ item: "forniture", top: tile_size * 15, left: tile_size * 19 });

                board.createItem({ item: "forniture", top: tile_size * 16, left: tile_size * 5 });
                board.createItem({ item: "forniture", top: tile_size * 16, left: tile_size * 16 });
                board.createItem({ item: "forniture", top: tile_size * 16, left: tile_size * 19 });

                board.createItem({ item: "forniture", top: tile_size * 17, left: tile_size * 1 });
                board.createItem({ item: "forniture", top: tile_size * 17, left: tile_size * 4 });
                board.createItem({ item: "forniture", top: tile_size * 17, left: tile_size * 5 });
                board.createItem({ item: "forniture", top: tile_size * 17, left: tile_size * 16 });
                board.createItem({ item: "forniture", top: tile_size * 17, left: tile_size * 18 });
                board.createItem({ item: "forniture", top: tile_size * 17, left: tile_size * 19 });

                board.createItem({ item: "forniture", top: tile_size * 18, left: tile_size * 1 });
                board.createItem({ item: "forniture", top: tile_size * 18, left: tile_size * 4 });
                board.createItem({ item: "forniture", top: tile_size * 18, left: tile_size * 5 });



                setActiveLvl(activeLvl + 1);

                function createBoard() {
                    const boardElement = document.getElementById("level1");
                    const elements = [];

                    function createElement(options) {
                        // ? item.options | top. options | left.options
                        let { item, top, left } = options;

                        var currentElement = { item, currentPosition: { top, left } };
                        elements.push(currentElement);


                        var htmlElement = document.createElement("div");
                        htmlElement.className = item;
                        htmlElement.id = item;
                        htmlElement.style.top = top + "px";
                        htmlElement.style.left = left + "px";
                        htmlElement.style.width = tile_size + "px";
                        htmlElement.style.height = (tile_size + helmet_offset) + "px";
                        // htmlElement.style.transform = "translateY" + -1 * helmet_offset;
                        // htmlElement.style.backgroundposition = 0 + (-1 * tile_size + helmet_offset);

                        boardElement.appendChild(htmlElement);

                        window.addEventListener("keydown", function (event) {
                            if (event.defaultPrevented) {
                                return;
                            }

                            switch (event.key) {
                                case "ArrowDown":
                                    root.style.setProperty('--updown', '-66.66%');
                                break;
                                case "ArrowUp":
                                    root.style.setProperty('--updown', '-33.33%');
                                break;
                                case "ArrowLeft":
                                    root.style.setProperty('--leftright', '-33.33%');
                                break;
                                case "ArrowRight":
                                    root.style.setProperty('--leftright', '-66.66%');
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

                            if (!conflictItem) {
                                return;
                            }

                            if (cEl.item === "rade") {
                                if (conflictItem.item === "merchant1" || conflictItem.item === "trap") {
                                    // console.log("----RADE BUMBED------")
                                    toggleGameOver();
                                    clearLvl1();
                                    setTimeout(() => {
                                        window.location.reload(false);
                                    }, 1500)
                                }

                                if (conflictItem.item === "chest1") {
                                    // console.log("----WIN------")
                                    clearLvl1();
                                    setTimeout(() => {
                                        toggleWin();
                                    }, 150)
                                }
                            }

                            if (cEl.item === "merchant1" && conflictItem.item === "rade") {
                                // console.log("----xMERCHANT BUMBEDx------")
                                toggleGameOver();
                                clearLvl1();
                                    setTimeout(() => {
                                        window.location.reload(false);
                                    }, 1500)
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

                    function createRade(options) {
                        const rade = createElement({
                            item: "rade",
                            top: options.top,
                            left: options.left,
                            width: options.width,
                            height: options.height,
                            transform: options.transform,
                        });

                        document.addEventListener("keydown", (event) => {
                            rade.move(event.key);
                        });

                        touchUp.addEventListener("touchstart", () => {
                            rade.move("ArrowUp");
                        })

                        touchDown.addEventListener("touchstart", () => {
                            rade.move("ArrowDown");
                        })

                        touchLeft.addEventListener("touchstart", () => {
                            rade.move("ArrowLeft");
                        })
                        touchRight.addEventListener("touchstart", () => {
                            rade.move("ArrowRight");
                        })
                    }

                    function createEnemy(options) {
                        const enemy = createElement({
                            item: "merchant1",
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
                        createRade: createRade,
                        createEnemy: createEnemy
                    };
                }
            }

                function clearLvl1(){
                    setActiveLvl(activeLvl + 1);
                    console.log(activeLvl);
                    // const level1 = document?.getElementById("level1");
                    // level1.innerHTML = '';
                    // const elemnts = level1.innerHTML.length;
                    // console.log(elemnts);
                    board.createItem({ item: "forniture", top: tile_size * 2, left: tile_size * 14 });
                }

    },[popUp])


    return (
        <div className="levelCon" id="levelCon">
            <div id="level1" className="level"></div>
            <Image className="board-img" id="lvl1" width="600px" height="600px" src="/LVL01_01.png" alt="AlphaBots Level 1" />
        </div>
    );
}