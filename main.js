const arr = [1,2,3];
const arrObj = {
    a: 'a',
    '1': 'b',
    2: 'c'
};

arrObj.b = '1234';

console.log(arrObj["b"]);

const obj = {
    'Anna': 500,
    'Alice': 800,
}