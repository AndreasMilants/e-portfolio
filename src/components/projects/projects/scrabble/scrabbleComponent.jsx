import React, {Component} from 'react';
import BoardComponent from './boardComponent'
import CarouselComponent from "../../../carousel";
import {withTranslation} from "react-i18next";

class ScrabbleComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boardLetters: this.getEmptyBoard(this.props.dimensions),
            boardMultipliers: this.getMultipliersBoard(this.props.dimensions),
            lines: this.getLines(),
            letters: [],
            lttrs: '',
            wordset: new Set()
        };
    }

    componentDidMount() {
        fetch('/scrabble/dutch.txt')
            .then(response => response.arrayBuffer())
            .then(buffer => {
                let decoder = new TextDecoder("utf-8");
                let text = decoder.decode(buffer);
                this.setState({...this.state, wordset: new Set(text.split('\r\n'))});
            });
    }

    render() {
        const {t} = this.props;

        return (
            <article>
                <h1>Scrabble</h1>
                <div>
                    <BoardComponent state={this.state} getLetter={this.getLetter} getMultiplier={this.getMultiplier}
                                    changeLetter={this.changeLetter}/>
                    <hr/>
                    <div className={"unused-tiles"}>{(this.state.lttrs + "       ").substring(0, 7).split("").map(l =>
                        <div>
                            <div><span>{l}</span></div>
                        </div>)}</div>
                    <form onSubmit={this.test} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <input style={{margin: ".5rem", border: "1px solid #eee", padding: 10}} type="text"
                               value={this.state.lttrs}
                               onChange={this.handleLetterInput}/>
                        <button style={{margin: ".5rem"}} className={"md-button"} type="submit">Enter</button>
                        <button className={"md-button"} style={{background: "darkred"}} onClick={this.clearBoard}>Clear
                            board
                        </button>
                    </form>
                </div>
            </article>
        );
    };

    handleLetterInput = (event) => {
        let lttrs = event.target.value.toUpperCase().substring(0, 7);
        this.setState(
            {
                ...this.state,
                letters: lttrs.split(''),
                lttrs
            }
        )
    }

    clearBoard = (event) => {
        let boardLetters = this.getEmptyBoard(this.props.dimensions);
        this.setState({
            ...this.state,
            boardLetters
        })
    }

    changeLetter = (lineIndex, tileIndex, letter) => {
        let boardLetters = this.state.boardLetters;
        boardLetters[lineIndex][tileIndex] = letter.toUpperCase();
        this.setState({
            ...this.state,
            boardLetters
        })
    }

    getLetter = (lineIndex, tileIndex) => {
        return this.state.boardLetters[lineIndex][tileIndex];
    }

    getMultiplier = (lineIndex, tileIndex) => {
        return this.state.boardMultipliers[lineIndex][tileIndex];
    }

    getLines() {
        let lines = []
        for (let i = 0; i < this.props.dimensions; i++) {
            let line = []
            for (let i = 0; i < this.props.dimensions; i++) {
                line.push({index: i});
            }
            lines.push({
                tiles: line,
                index: i
            })
        }
        return lines;
    }

    test = (event) => {
        event.preventDefault();
        let solved = solve(this.state.boardLetters, this.state.letters, this.state.boardMultipliers, this.state.wordset);
        let boardLetters = this.state.boardLetters;

        if (solved.solution) {
            let bestOption = solved.bestOption;
            if (!solved.transpose) {
                for (let i = 0; i < bestOption.combo.length; i++) {
                    boardLetters[bestOption.positions.sps[i].r][bestOption.positions.sps[i].c] = bestOption.combo[i];
                }
            } else {
                for (let i = 0; i < bestOption.combo.length; i++) {
                    boardLetters[bestOption.positions.sps[i].c][bestOption.positions.sps[i].r] = bestOption.combo[i];
                }
            }

            this.setState({
                ...this.state,
                boardLetters: boardLetters,
            });
        }
        this.setRandomLetters();
    }

    setRandomLetters() {
        let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let ret = [];
        let lttrs = '';
        for (let i = 0; i < 7; i++) {
            let a = Math.floor(Math.random() * 26);
            ret.push(letters[a]);
            lttrs += letters[a];
        }
        this.setState({
            ...this.state,
            letters: ret,
            lttrs
        })
    }

    getEmptyBoard(dimensions) {
        let b = [];
        for (let i = 0; i < dimensions; i++) {
            let line = [];
            for (let j = 0; j < dimensions; j++) {
                line.push('');
            }
            b.push(line);
        }
        return b;
    }

    getMultipliersBoard(dimensions) {
        let b = []
        for (let i = 0; i < dimensions; i++) {
            let line = [];
            for (let j = 0; j < dimensions; j++) {
                let tile = {mul: 1, type: 'l'}
                if (i % 7 === 0 && j % 7 === 0) {
                    tile = {mul: 3, type: 'w'};
                } else if (i === j || i === 14 - j || 14 - i === j) {
                    tile = {mul: 2, type: 'w'};
                }
                if (i % 4 === 1 && j % 4 === 1 && !((2 > 14 - i && (2 > 14 - j || 14 - j > 12)) || (14 - i > 12 && (2 > 14 - j || 14 - j > 12)))) {
                    tile = {mul: 3, type: 'l'};
                }
                line.push(tile);
            }
            b.push(line);
        }
        return b;
    }
}

function solve(board, letters, boardMultipliers, wordset) {
    let foundHor = solveHorizontal(board, letters, boardMultipliers, wordset);
    let foundVer = solveHorizontal(transposeMatrix(board), letters, transposeMatrix(boardMultipliers), wordset);
    let bestOption = {points: 0};
    let transpose = false;
    let solution = false;

    if (foundHor.length > 0 && foundHor[0].points > bestOption.points) {
        bestOption = foundHor[0];
        solution = true;
    }
    if (foundVer.length > 0 && foundVer[0].points > bestOption.points) {
        bestOption = foundVer[0];
        transpose = true;
        solution = true;
    }

    return {bestOption, transpose, solution};
}

function solveHorizontal(board, letters, boardMultipliers, wordset) {
    let combos = combinations(letters, '');
    let sps = startPositions(board, letters);
    let found = [];

    for (let sp = 0; sp < sps.length; sp++) {
        for (let com = 0; com < combos.length; com++) {
            solveComboOnPosition(board, sps[sp], combos[com], boardMultipliers, 0, 0, found, wordset);
        }
    }
    found.sort(function (a, b) {
        return a.points - b.points;
    }).reverse();
    return found;
}

function solveComboOnPosition(board, sp, comboList, boardMultipliers, num, pointsAlready, options, wordset) {
    if (num >= sp.sps.length) {
        return;
    }
    if (comboList.current === 'O' && board[6][7] === 'M' && sp.sps[0].r === 6 && sp.sps[0].c === 6) {
        console.log(sp.sps);
    }
    let option = addLetter(board, sp.sps[num].r, sp.sps[num].c, comboList.current[num], boardMultipliers, wordset);
    if (!option.break) {
        for (let i = 0; i < comboList.next.length; i++) {
            solveComboOnPosition(board, sp, comboList.next[i], boardMultipliers, num + 1, pointsAlready + option.verPoints, options, wordset);
        }
        // Determine horizontal Points of word
        if (sp.from <= num + 1) {
            let isValid = true;
            let points = 0;
            let r = sp.sps[num].r;
            let cs = sp.sps[num].c - 1;
            while (cs >= 0 && board[r][cs] !== '') {
                cs--;
            }
            let ce = sp.sps[0].c + 1; // Should start looking from the most right placed letter in this combination
            while (ce < board[r].length && board[r][ce] !== '') {
                ce++;
            }
            if (ce - cs > 2) {
                let word = ''
                let wordMultiplier = 1;
                let currentLetterInCombo = num;
                for (let i = cs + 1; i < ce; i++) {
                    if (board[r][i] !== '') {
                        word += board[r][i];
                        points += getValueLetter(board[r][i]);
                    } else {
                        word += comboList.current[currentLetterInCombo];
                        if (boardMultipliers[r][i].type === 'l') {
                            points += getValueLetter(board[r][i]) * boardMultipliers[r][i].mul;
                        } else if (boardMultipliers[r][i].type === 'w') {
                            wordMultiplier *= boardMultipliers[r][i].mul;
                        } else {
                            points += getValueLetter(comboList.current[currentLetterInCombo]);
                        }
                        currentLetterInCombo--;
                    }
                }
                if (checkWordExists(word, wordset)) {
                    points *= wordMultiplier
                } else {
                    isValid = false;
                }
            }
            if (isValid) {
                options.push({combo: comboList.current, positions: sp, points: option.verPoints + points});
            }
        }
    }
}

function transposeMatrix(board) {
    let ret = []
    for (let c = 0; c < board[0].length; c++) {
        let row = [];
        for (let r = 0; r < board.length; r++) {
            row.push(board[r][c]);
        }
        ret.push(row);
    }
    return ret;
}

function checkWordExists(word, wordset) {
    return wordset.has(word.toLowerCase());
}

function getValueLetter(letter) {
    return 1;
}

function addLetter(board, r, c, letter, boardMultipliers, wordset) {
    let rs = r - 1;
    while (rs >= 0 && board[rs][c] !== '') {
        rs--;
    }
    let re = r + 1;
    while (re < board.length && board[re][c] !== '') {
        re++;
    }
    if (re - rs > 2) {
        let word = ''
        let points = 0;
        let wordMultiplier = 1;
        for (let i = rs + 1; i < re; i++) {
            if (i !== r) {
                word += board[i][c];
                points += getValueLetter(board[i][c]);
            } else {
                word += letter;
                if (boardMultipliers[r][c].type === 'l') {
                    points += getValueLetter(letter) * boardMultipliers[r][c].mul;
                } else if (boardMultipliers[r][c].type === 'w') {
                    wordMultiplier *= boardMultipliers[r][c].mul;
                    points += getValueLetter(letter);
                } else {
                    points += getValueLetter(letter);
                }
            }
        }
        if (checkWordExists(word, wordset)) {
            return {verPoints: points * wordMultiplier, break: false}
        } else {
            return {verPoints: 0, break: true};
        }
    }
    return {verPoints: 0, break: false}
}

function combinations(letters, already) {
    let combos = []
    for (let i = 0; i < letters.length; i++) {
        let copyLetters = [];
        for (let j = 0; j < letters.length; j++) {
            if (j !== i) {
                copyLetters.push(letters[j]);
            }
        }
        combos.push({current: already + letters[i], next: combinations(copyLetters, already + letters[i])});
    }
    return combos;
}

function startPositions(board, letters) {
    function connectedPosition(board, r, c) {
        if (board[r][c] !== '') {
            return false;
        }
        if (r > 0 && board[r - 1][c] !== '') {
            return true;
        }
        if (r < board.length - 1 && board[r + 1][c] !== '') {
            return true;
        }
        if (c > 0 && board[r][c - 1] !== '') {
            return true;
        }
        if (c < board[r].length - 1 && board[r][c + 1] !== '') {
            return true;
        }
    }

    function startPosition(board, r, c, letters) {
        let startPosition = [];
        let ci = c;
        let possibleFromLength = 1;
        let connected = false;

        while (ci >= 0 && startPosition.length !== letters.length) {
            if (board[r][ci] === '') {
                startPosition.push({r, c: ci});
            }
            if (!connected) {
                if (connectedPosition(board, r, ci)) {
                    connected = true;
                } else {
                    possibleFromLength++;
                }
            }
            ci--;
        }
        return {from: possibleFromLength, sps: startPosition};
    }

    function positionsContains(positions, el) {
        for (let i = 0; i < positions.length; i++) {
            if (positions[i].sps[0].r === el.sps[0].r && positions[i].sps[0].c === el.sps[0].c) {
                return true;
            }
        }
        return false;
    }

    let positions = [];
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            if (connectedPosition(board, r, c)) {
                let count = 0;
                let pos = c;
                while (pos < board[r].length && count < letters.length) {
                    if (board[r][pos] === '') {
                        let sp = startPosition(board, r, pos, letters);
                        if (!positionsContains(positions, sp)) {
                            positions.push(sp);
                        }
                        count++;
                    }
                    pos++;
                }
            }
        }
    }
    if (positions.length === 0) {
        positions.push(startPosition(board, Math.floor(board.length / 2), Math.floor(board[0].length / 2), letters));
        positions[0].from = 1;
    }
    return positions;
}

export default withTranslation()(ScrabbleComponent);