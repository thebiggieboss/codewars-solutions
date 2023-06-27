// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']
function solution(str){
    if(!str.length) return []
    str = str.match(/.{1,2}/g)
    return str.map(item => item.length === 1 ? `${item}_` : item)
}

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
function moveZeros(arr) {
    return arr.filter(item => item !== 0).concat(arr.filter(item => item === 0))
}

// console.log(moveZeros([ 9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0 ]))