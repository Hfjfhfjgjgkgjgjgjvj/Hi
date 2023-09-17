document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById("grid-container");
    const cells = [];
    const gameState = Array(16).fill(0); // Initialize game state

    // Function to update the grid with the current state of the game
    function updateGrid() {
        for (let i = 0; i < 16; i++) {
            cells[i].innerText = gameState[i] !== 0 ? gameState[i] : "";
        }
    }

    // Function to generate a new random number (either 2 or 4)
    function generateRandomNumber() {
        return Math.random() < 0.9 ? 2 : 4;
    }

    // Function to add a new random number to the game state
    function addRandomNumber() {
        const emptyCells = gameState.reduce((acc, cell, index) => {
            if (cell === 0) {
                acc.push(index);
            }
            return acc;
        }, []);

        if (emptyCells.length > 0) {
            const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            gameState[randomIndex] = generateRandomNumber();
        }
    }

    // Function to handle the left movement
    function moveLeft() {
        // Implementation of left movement logic
        // ... your code here ...
        // Ensure to update the gameState array accordingly
        // Example: gameState[0] = 2; gameState[1] = 4; ...

        // After the movement, add a new random number to the game state
        addRandomNumber();

        // Finally, update the grid to reflect the changes
        updateGrid();
    }

    // Function to handle the right movement
    function moveRight() {
        // Implementation of right movement logic
        // ... your code here ...

        addRandomNumber();
        updateGrid();
    }

    // Function to handle the up movement
    function moveUp() {
        // Implementation of up movement logic
        // ... your code here ...

        addRandomNumber();
        updateGrid();
    }

    // Function to handle the down movement
    function moveDown() {
        // Implementation of down movement logic
        // ... your code here ...

        addRandomNumber();
        updateGrid();
    }

    // Function to handle keyboard events
    function handleKeyPress(event) {
        if (event.key === "ArrowLeft") {
            moveLeft();
        } else if (event.key === "ArrowRight") {
            moveRight();
        } else if (event.key === "ArrowUp") {
            moveUp();
       Certainly! Here's the updated HTML, CSS, and JavaScript code for your 2048 game:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
    <title>2048 Game</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>2048 Game</h1>
        <div id="grid-container"></div>
        <div class="instructions">
            <p>Use arrow keys or swipe to move the tiles.</p>
        </div>
        <script src="script.js"></script>
    </div>
</body>
</html>
