/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for(let x=0; x < s.length/2; x++){
        var temp = s[x];
        s[x] = s[s.length - (1 + x) ];
        s[s.length - (1 + x)] = temp;
    }
};
