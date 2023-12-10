/*jshint esversion: 6 */
// noinspection GrazieInspection

import Alpine from 'alpinejs'

// noinspection GrazieInspection
/**
 * The App class represents a Tic-Tac-Toe game application.
 * It includes methods to handle game logic and state management.
 * @class App
 * @classdescription The App class represents a Tic-Tac-Toe game application.
 * @summary The App class represents a Tic-Tac-Toe game application.
 * @copyright Copyright © 2022. Charles J Fowler
 * @author Charles J Fowler
 * @license MIT Open Source Licence, Scott Windon (v1.0.0)
 * @license MIT Open Source Licence, Charles J Fowler (v2.0.0)
 * @see https://alpinejs.dev/advanced/reactivity for Alpine.reactive()
 * @version 2.0.0.
 */
// noinspection JSClassNamingConvention
class App {
    // noinspection FunctionNamingConventionJS
    /**
     * Gets the Player 1 Token.
     * @returns {string} The name of the property for turns.
     * @static
     */
    static get P1() {
        return 'X'
    }

    /**
     * Gets the Player 1 Token.
     * @returns {string} The name of the property for turns.
     * @static
     */
    // noinspection FunctionNamingConventionJS
    static get P2() {
        return 'O'
    }

    /**
     * Gets the name of the property for keeping track off the number of X turns.
     * @returns {string} The name of the property for X turns.
     * @static
     */
    // noinspection FunctionNamingConventionJS
    static get X_TURNS_PROP() {
        return 'xTurns'
    }

    /**
     * Gets the name of the property for keeping track of the number of O turns.
     * @returns {string} The name of the property for O turns.
     * @static
     */
    // noinspection FunctionNamingConventionJS
    static get O_TURNS_PROP() {
        return '._oTurns'
    }

    /**
     * Returns the maximum (array/grid cell) length allowed for the grid
     * @returns {number} The maximum length allowed.
     * @static
     */
    // noinspection FunctionNamingConventionJS
    static get MAX_LENGTH() {
        return 9
    }

    /**
     * Returns the initialisation value for turns.
     * @returns {number} The value for TURN_INIT.
     * @static
     */
    // noinspection FunctionNamingConventionJS
    static get TURN_INIT() {
        return 0
    }

    /**
     * Constructor for the App class.
     * Initializes the App object with default values and reactivity, for
     * - turns,
     * - win state,
     * - win sequences,
     * - game grid,
     * - x characters | o characters.
     * The constructor also logs the instantiation of the ...
     *      App object to the console.
     * @url https://alpinejs.dev/advanced/reactivity
     * @constructor
     */
    // noinspection FunctionNamingConventionJS
    constructor() {
        //
        console.log('Instantiate App:', this) // jshint ignore:line
        this.turns = App.TURN_INIT
        /** @access public */
        this.won = false // The default check win state of the game
        /** @access public */
        this.winSeq = [
            '012',
            '345',
            '678', // HorizontalWins
            '036',
            '147', // DiagonalWins
            '258',
            '048',
            '246',
        ] // VerticalWins
        // noinspection JSUnresolvedReference, ChainedFunctionCallJS, NestedFunctionCallJS
        /** @access public */
        this.grid = Alpine.reactive(new Array(App.MAX_LENGTH).fill(null)) // ES6 Arrow Function
        // noinspection JSUnresolvedReference
        /** @access public */
        this._xChars = Alpine.reactive(['x', 'X'])
        // noinspection JSUnresolvedReference
        /** @access public */
        this._oChars = Alpine.reactive(['o', 'O'])
        /** @access public */
        this._xTurns = ''
        /** @access public */
        this._oTurns = ''
    }

    // noinspection FunctionNamingConventionJS
    /**
     * Returns a random character from the given character array.
     * @design
     *  This randomiser allows variation of the game token sizes (lower case/upper case).
     *  It mimics variation in hand strokes when hand drawing the game tokens.
     * @function _getRandomCharacter
     * @param {Array} characterArray - The array containing characters.
     * @return {string} - A random character from the character array.
     */
    _getRandomCharacter(characterArray) {
        // noinspection LocalVariableNamingConventionJS,NestedFunctionCallJS
        /** An inner function/closure for generating a random index. Improve maintainability/readability.
         * @function {arrow function} _getRandomIndex
         * @param {number} arrayLength
         */
        const _getRandomIndex = arrayLength => Math.floor(Math.random() * arrayLength)
        let index = _getRandomIndex(characterArray.length)
        return characterArray[index]
    }

    /**
     * Update the turns and grid at the specified index
     * with a random character from the characterArray.
     * @function _updateTurnsAndGrid
     * @param {number} index - The index of the grid to update.
     * @param {Array} characterArray - The array of characters to choose from.
     * @param {string} turnProperty - The property to update the turns with.
     * @return {undefined}
     * @desc It takes in three parameters: index, characterArray, and turnProperty.
     * It updates the grid array at the specified index with a random character from the characterArray and ...
     * increments the value of the turnProperty by index.
     */
    _updateTurnsAndGrid(index, characterArray, turnProperty) {
        this.grid[index] = this._getRandomCharacter(characterArray)
        this[turnProperty] += index
    }

    /**
     * Checks if the given move is invalid.
     * @function _isInvalidMove
     * @param {number} index - The index of the move.
     * @return {boolean} - Returns true if the move is invalid, false otherwise.
     * @desc Checks if a given move is invalid. The function takes an index as an argument and returns true if the
     * move is invalid, and false otherwise.
     * The move is considered invalid if any of the following conditions are met: the game is already won, the
     * grid at the given index is not null, or the number of turns is greater than or equal to the maximum index.
     */
    _isInvalidMove(index) {
        const MAX_INDEX = this.grid.length - 1
        console.log('isInvalidMove:', index, this.won, this.grid[index], this.turns, MAX_INDEX) // jshint ignore:line
        const isInvalidMove = this.won || this.grid[index] !== null || this.turns >= MAX_INDEX
        console.log('isInvalidMove:', isInvalidMove) // jshint ignore:line
        // The Move is invalid and is True.
        if (isInvalidMove) {
            return true
        }
        // The Move is valid and is False.
        return false
    }

    /**
     * Determines if the turn is even and updates the turns and grid accordingly.
     * @function _isEvenTurn
     * @param {number} index - The index of the grid to be updated.
     * @return {undefined}
     * @desc determines if the turn is even and updates the turns and grid accordingly.
     * It takes an input parameter index which represents the index of the grid to be updated.
     * It calculates whether the turn is even by checking if the remainder of the division of `this.turns`
     * by 2 is equal to 0. If the turn is even, it assigns certain values to variables char and prop.
     */
    _isEvenTurn(index) {
        const isEvenTurn = this.turns % 2 === 0
        // noinspection ConditionalExpressionJS
        const char = isEvenTurn ? this._xChars : this._oChars
        // noinspection ConditionalExpressionJS
        const prop = isEvenTurn ? App.X_TURNS_PROP : App.O_TURNS_PROP
        this._updateTurnsAndGrid(index, char, prop)
        console.log('isEvenTurn:', isEvenTurn, char, prop, index, this.grid[index]) // jshint ignore:line
    }

    /**
     * Selects a cell, bu index, on the game board.
     * @function select
     * @param {number} index - The index of the cell to be selected.
     * @returns {string} - Game Token for X || Y.
     * @desc  It logs the selected index, checks if the move is invalid, and returns the game token for X or Y.
     * If the move is invalid, it logs an error message and returns the current item from the grid. //
     * If the move is valid, it updates the turns and grid, checks if the game has been won, logs a success message,
     * and returns the updated item/token from the grid.
     * */
    select(index) {
        console.log('The selected index:', index) // jshint ignore:line
        // Check if move is invalid, and proceed to next turn if the return is false,
        if (this._isInvalidMove(index)) {
            //
            console.log('Invalid Move: ', index) // jshint ignore:line
            return this.grid[index]
        } else {
            // Update the turns and grid
            this.turns += 1
            this._isEvenTurn(index)
            // Check if the game has been won
            const isWinner = this.checkWinner()
            // Return the updated item from grid
            console.log('Valid Move: ', this.turns, this.grid[index], isWinner) // jshint ignore:line
            return this.grid[index] // @Update 23/12/06 to return updated item/token from grid
        }
    }

    /**
     * Checks whether the sequence of turns is a winner.
     * @function _checkSequenceWin
     * @param {string} turns - The sequence of turns.
     * @param {string} sequence - The sequence of turns to check.
     * @returns {boolean}
     * @private
     * @desc It takes in two parameters: turns and sequence.  Inside the function, it creates a regular expression
     * using the sequence parameter. This regular expression matches any three characters in the sequence string.
     * Then, it uses the created regular expression to filter out any characters in the turns string that are not
     * present in the sequence string. The filtered string is stored in the filteredTurns variable.
     * Finally, the function returns true if the filtered string contains a sequence of three consecutive characters
     * that match the sequence string, and false otherwise.
     * */
    _checkSequenceWin(turns, sequence) {
        const sequenceRegExp = new RegExp(`[${sequence}]{3}`)
        const searchRegExp = new RegExp(`[^${sequence}]+`, 'g')
        const filteredTurns = turns.replace(searchRegExp, '')
        return sequenceRegExp.test(filteredTurns)
    }

    /**
     * Checks if the sequence of turns is a winner.
     * @function checkWinner
     * @returns {boolean} True if the sequence of turns is a winner.
     * @desc checks for a winner in a game. It iterates over a list of winning sequences and calls the
     * _checkSequenceWin method to check if either player has won.
     * If Player 1 has won, the won variable is set to App.P1 (indicating Player 1's victory).
     * If Player 2 has won, the won variable is set to App.P2 (indicating Player 2's victory).
     * The method returns the value of the won variable, indicating the winner of the game.
     * */

    checkWinner() {
        for (let sequence of this.winSeq) {
            if (this._checkSequenceWin(this._xTurns, sequence)) {
                this.won = App.P1 // Player 1 wins | X wins
                break
            } else if (this._checkSequenceWin(this._oTurns, sequence)) {
                this.won = App.P2 // Player 2 wins | O wins
                break
            }
        }
        return this.won
    }

    /**
     * Reset the game state to its initial values.
     * @function reset
     * @return {void}
     * @desc that resets the game state to its initial values.
     * - Resets turns to a predefined value
     * - Reset won to false.
     * - Reset grid to an empty array.
     * - Reset _xTurns and _oTurns to empty strings.
     * */
    reset() {
        this.turns = App.TURN_INIT
        this.won = false
        // noinspection ChainedFunctionCallJS,NestedFunctionCallJS,JSUnresolvedReference
        this.grid = Alpine.reactive(new Array(App.MAX_LENGTH).fill(null))
        this._xTurns = ''
        this._oTurns = ''
    }
}

/**
 * The `gameApp` function creates a new instance of the `App` class.
 * @function gameApp
 * @returns {App} A new instance of the App class.
 * */
function gameApp() {
    return new App()
}

/**
 * Assigns the gameApp function to the global window object.
 * @global
 * @object window
 * @name game
 * @type {App}
 * */
window.game = gameApp // Make the app function globally accessible
