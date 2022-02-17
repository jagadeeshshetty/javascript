
/**
 * https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem?isFullScreen=true
 */
function reverseString(s) {
    try {
        s = s.split('').reverse().join('');
    } catch (err) {
        console.log(err.message);
    } finally {
        console.log(s);
    }
}

reverseString('1234');
reverseString(1234);
