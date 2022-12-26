// filterの使い方
{
    // let items = 配列データ
    // items.filter(コールバック関数);

    // 配列のデータ抽出
    let Nnm = [5, 2, 7, 8, 3, 1, 6, 8, 4];

    let fil = Nnm.filter(function (value) {
        return value < 5
    });
    console.log(fil);
}

// filterのコールバック関数
{
    // var items = 配列データ;
    // //3つの引数を受け取ることが可能
    // items.filter(function (value, index, array) {
    // })

    // 重複データが含まれる配列データ
    let num = [3,2,2,4,8,8,8,6,9];
    let ber = num.filter(function(value,index,array){
        // 配列のインデックス番号を使って重複部分を検出する
        console.log(array.indexOf(value)+ ":" + index);
    });

    let bck = num.filter(function(value,index,array){
        //インデックス番号を比較して重複データのみ排除
        return array.indexOf(value) === index;
    });
    console.log(bck);
}

// 第２引数オブジェジェクト
{
    let fruits = {
        'アップル': 400,
        'パイナップル': 200,
        'メロン': 600,
        'スイカ': 300,
        'ナシ': 350,
        'イチゴ': 400
    };
    var items = ['オムライス', 'イチゴ', 'ケーキ', 'タルト', 'スイカ'];

    let auto = items.filter(function(value,index){
        // オブジェクト内を繰り返す
        for(let items in this){
            // オブジェクトを配列の品名を比較する
            if(items === value)return value
        }
    },fruits);// 第２引数にオブジェクト指定
    console.log(auto);
}