// コールバック関数
{
    // 実行後も結果を配列データとして返してくれる
    let array = [1, 2, 3].map(function (value) {
        return value * 2
    });
    console.log(array);
// 
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // index番号だけを２倍している
    let mix = num.map(function (value, index) {
        if (index % 2 !== 0) {
            return value * 2
        } else {
            return value
        }
    });
    console.log(mix);

    // 元データを変更する
    num.map(function (value, index, array) {
        array[index] = value * 2
    });
    console.log(num);
}

// 第２引数のオブジェクト
{
    let foodList = {
        'オムライス': 450,
        '焼きそば': 500,
        'お好み焼き': 600,
        '焼き飯': 400
    };

    // 任意のキーワードを指定する
    let order = ['焼き飯', 'お好み焼き'];
    let menu = order.map(function (value, index, array) {

        //配列のキーワードを使ってオブジェクト内の値を取得する
        return this[value];
    }, foodList);
    console.log(menu);
}