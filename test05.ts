//no parameter no return
function func() {
    console.log('woow...')
    return 'i love mai thai...'
}
//have parameter has return
function funD(n1: number, n2: number, n3: number): number {
    return n1 + n2 + n3;
}

console.log(func())
let result: number = funD(10, 20, 30)
console.log(result)