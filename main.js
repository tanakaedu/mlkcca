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
  chatDataStore.push({uname : nm,content : text},function(data){  // ←これ
    console.log("送信完了!");
    textArea.value = "";
  });
}

chatDataStore.on("push",function(data){
  addText(data.value);     // ←これ
});

function addText(text){
  var msgDom = document.createElement("li");
  msgDom.innerHTML = text.uname+":"+text.content; // ←これ
  board.insertBefore(msgDom, board.firstChild);
}
