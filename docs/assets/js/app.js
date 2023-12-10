/* eslint-disable vue/html-self-closing,no-unused-vars */
/**
 * Represents a game app.
 * @name app
 * @returns {Object} An object with methods and properties for the app.
 */
export function app() {
    return {
        turns: 0,
        won: false,
        winSeq: ['012', '345', '678', '036', '147', '258', '048', '246'],
        grid: new Array(9).fill(null),
        xChars: ['x', 'X'],
        oChars: ['o', 'O'],
        xTurns: '',
        oTurns: '',

        /**
         * Selects a cell in the game grid.
         *
         * @function
         * @name reset
         * @memberof App
         *
         * @param {number} index - The index of the cell to select.
         */
        select: function (index) {
            if (this.won || this.grid[index] !== null || this.turns >= 9)
                return;

            this.turns++;

            if (this.turns % 2 === 0) {
                this.grid[index] = this.xChars[Math.floor(
                    Math.random() * this.xChars.length)];
                this.xTurns += index;
            } else {
                this.grid[index] = this.oChars[Math.floor(
                    Math.random() * this.oChars.length)];
                this.oTurns += index;
            }
            this.checkWinner();
        },

        /**
         * Checks if there is a winner by comparing the current turns of X and O with the winning sequences.
         *
         * @function
         * @name checkWinner
         * @memberof App
         * @return {string} The winner ('X', 'O', or null if no winner yet).
         */
        checkWinner: function () {
            for (let i = 0, length = this.winSeq.length; i < length; i++) {
                if (new RegExp
                        (`[${this.winSeq[i]}]{3}`).test(
                            this.xTurns.replace(
                                new RegExp(`[^${this.winSeq[i]}]+`,
                                    'g'),
                                    '')
                            )
                    )
                    {
                        this.won = 'X';
                        break;
                    }
                else if (
                    new RegExp(`[${this.winSeq[i]}]{3}`).test(
                        this.oTurns.replace(
                            new RegExp(`[^${this.winSeq[i]}]+`,
                                'g'),
                                '')))
                    {
                        this.won = 'O';
                        break;
                    }
            }
            return this.won;
        },

        /**
         * Resets the game state.
         * @function
         * @name reset
         * @memberof App
         *
         * @returns {void}
         */
        reset: function () {
            this.turns = 0;
            this.won = false;
            this.grid = new Array(9).fill(null);
            this.xTurns = '';
            this.oTurns = '';
        }

    }
}


/**
 * Represents a game app and assigned to the window object to make globally accessible.
 * @name app
 * @returns {Object} An object with methods and properties for the app.
 */
window.game = app;  // Make the app function globally accessible
