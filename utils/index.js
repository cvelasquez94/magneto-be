const getLeftToRightDiagonal = (m) => {
    let i, x, y, d;
    const o = [];
    for (i = 0; i < m.length; i++) {
        d = [];
        for(y = i, x = 0; y >= 0; y--, x++)
            d.push(m[y][x]);
        o.push(d);
    }
    for (i = 1; i < m[0].length; i++) {
        d = [];
        for(y = m.length - 1, x = i; x < m[0].length; y--, x++){
            d.push(m[y][x]);
        }
        o.push(d);
    }
    return o.map((array) => {
        return array.join('');
    });
};

const reverseString = (string) => string.split('').reverse().join('');
const getRightToLeftDiagonal= (m) => getLeftToRightDiagonal(reverseMatrix(m));
const reverseMatrix = (m) => m.map((string) => reverseString(string));
const  handleError = (error, res) => { 
    res.status(500).json({
        message: 'An error acurred',
        error
    });
};

module.exports = {
    getLeftToRightDiagonal,
    getRightToLeftDiagonal,
    handleError
};
