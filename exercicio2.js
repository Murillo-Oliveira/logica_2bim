const input = require("prompt-sync")()

let p1 = Number(input("Digite o código do produto 1: "))
let n1 = Number(input("quantidade de produtos dp p1: "))
let v1 = Number(input("valor do p1: "))
let p2 = Number(input("codigo do p2: "))
let n2 = Number(input("quantidade de produtos do p2: "))
let v2 = Number(input("valor do p2: "))

let Total = (n1 * v1 + n2 * v2)

console.log(Total)