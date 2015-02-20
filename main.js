var milkcocoa = new MilkCocoa("https://io-hi1wslbu4.mlkcca.com");
/* your-app-id にアプリ作成時に発行される"io-"から始まるapp-idを記入します */
var chatDataStore = milkcocoa.dataStore("chat");

// フォームの情報を記録しておく変数
var textArea, board,textName;                   // ←これ

// ページが読み込み終わったときの処理
window.onload = function(){
  textArea = document.getElementById("msg");
  board = document.getElementById("board");
  textName = document.getElementById("txtName");  // ←これ
}

function clickEvent(){
  var text = textArea.value;
  sendText(text,textName.value);                  // ←これ
}

function sendText(text,nm){                       // ←これ
var esc = text.replace(/&/g,"&amp;").replace(/\</g , "&lt;").replace(/\>/g,"&gt;").replace(/[\n\r]/g,"<br>").replace(/\s/g,"&nbsp;");
  chatDataStore.push({uname : nm,content : esc},function(data){  // ←これ
    console.log("送信完了!");
    textArea.value = "";
  });
}

chatDataStore.on("push",function(data){
  addText(data.value);     // ←これ
});

function addText(text){
  var msgDom = document.createElement("p");
  msgDom.innerHTML = "<b>"+text.uname+"</b><br />"+text.content;//.replace(/[\n\r]/g,"<br />"); // ←これ
  board.insertBefore(msgDom, board.firstChild);
}
