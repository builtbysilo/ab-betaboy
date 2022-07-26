import Image from 'next/image';
import React, { useEffect } from 'react';
import { useGame, useUpdateGame} from './gameContext'
import { useTime, useUpdateTime} from './timerContext'



export default function Level1Map() {

    const { toggleWin, toggleGameOver } = useUpdateGame()
    const {handleStart, handlePauseResume, handleReset}  = useUpdateTime()



    useEffect(() => {

            const gamewidth = document.getElementById("lvl").clientWidth;
            const game_size = gamewidth;
            const tile_size = gamewidth / 20;
            const helmet_offset = tile_size * 0.5;

            let root = document.documentElement;

            const touchUp = document.getElementById("touchup");
            const touchDown = document.getElementById("touchdown");
            const touchLeft = document.getElementById("touchleft");
            const touchRight = document.getElementById("touchright");



            function createBoard() {

                const boardElement = document.getElementById("level");
                const elements = [];

                function createElement(options) {
                    // ? item.options | top. options | left.options
                    let { item, top, left, width, height, transform } = options;

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
                                handlePauseResume();
                                toggleGameOver();
                                setTimeout(() => {
                                    window.location.reload(false);
                                }, 1500)
                            }

                            if (conflictItem.item === "chest") {
                                // console.log("----WIN------")
                                handlePauseResume();
                                toggleWin();
                            }
                        }

                        if (cEl.item === "merchant1" && conflictItem.item === "rade") {
                            // console.log("----xMERCHANT BUMBEDx------")
                            handlePauseResume();
                            toggleGameOver();
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


                const board = createBoard();
                board.createRade({ item: "rade", top: tile_size * 18, left: tile_size * 2 });
                board.createEnemy({ item: "merchant1", top: tile_size * 15, left: tile_size * 15 });
                board.createEnemy({ item: "merchant1", top: tile_size * 15, left: tile_size * 15 });
                board.createEnemy({ item: "merchant1", top: tile_size * 15, left: tile_size * 15 });
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

                // board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 0 });
                // board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 1 });
                // board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 4 });
                // board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 5 });
                // board.createItem({ item: "forniture", top: tile_size * 15, left: tile_size * 5 });
                // board.createItem({ item: "forniture", top: tile_size * 16, left: tile_size * 5 });

                // board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 0 });
                // board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 1 });
                // board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 2 });
                // board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 3 });
                // board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 4 });
                // board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 5 });
                // board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 6 });
                // board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 7 });
                // board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 8 });
                // board.createItem({ item: "forniture", top: tile_size * 11, left: tile_size * 9 });
                // board.createItem({ item: "forniture", top: tile_size * 12, left: tile_size * 9 });
                // board.createItem({ item: "forniture", top: tile_size * 13, left: tile_size * 9 });
                // board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 9 });
                // board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 10 });
                // board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 11 });
                // board.createItem({ item: "forniture", top: tile_size * 14, left: tile_size * 12 });
                // board.createItem({ item: "forniture", top: tile_size * 13, left: tile_size * 12 });
                // board.createItem({ item: "forniture", top: tile_size * 12, left: tile_size * 12 });
                // board.createItem({ item: "forniture", top: tile_size * 11, left: tile_size * 12 });
                // board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 12 });
                // board.createItem({ item: "forniture", top: tile_size * 10, left: tile_size * 11 });



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


    },[])



    return (
        <div id="level" className="level">
            <Image className="board-img" id="lvl" width="600px" height="600px" src="/MAP_LVL_01.gif" alt="AlphaBots Level 1" />
        </div>
    );
}


