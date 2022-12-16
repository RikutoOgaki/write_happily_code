let array = [1,2,3].map(function(value){
    return value*2
});
console.log(array);
// 実行後も結果を配列データとして返してくれる

let num = [1,2,3,4,5,6,7,8,9];
let mix = num.map(function(value,index){
    if(index % 2 !== 0){
        return value * 2
    }
    else{
        return value
    }
})
console.log(mix);