const btn = document.querySelectorAll(".btn");
console.log(btn);
{
    // innerHTMLでの書き方
    let tet = document.getElementById("text");
    let tText = "innerHTMLで入力した";
    btn[0].addEventListener('click', () => {
        tet.innerHTML = tText;
    })
}
{
    // textContentでの書き方
    let tet = document.getElementById("text2");
    let tText = "textContentで入力した";
    btn[1].addEventListener('click', () => {
        console.log("hello");
        tet.textContent = tText;
    })
}
{
    // tableに<>を使って入れたい
    
}
