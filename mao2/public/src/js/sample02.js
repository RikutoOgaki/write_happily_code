{
    const map = new Map();
    console.log(map.size);
}

{
    const map = new Map();
    // 新しい要素の追加
    map.set("key","value1")
    console.log(map.size);
    console.log(map.get("key"));
    // 要素の上書き
    map.set("key","value2")
    console.log(map.get("key"));
    // キーの存在
    console.log(map.has("key"));
    console.log(map.has("foo"));
}

{
   // mapの反復処理
   const map = new Map([["key1","value1"],["key2","value2"]]);
   const result = [];
   map.forEach((value,key)=>{
    result.push(`${key}:${value}`)
   });
   console.log(result);
}
