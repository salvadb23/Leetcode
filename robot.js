var judgeCircle = function(moves) {
    x = 0
    y = 0 
    moves.split('').forEach((move) => {
        if(move == 'U'){
            y++
        }else if(move == 'D'){
            y--
        }else if (move == 'L'){
            x++
        }else if (move == 'R'){
            x--
        }
    })
    return x == 0 && y == 0
};