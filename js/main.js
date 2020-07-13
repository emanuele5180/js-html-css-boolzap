
$(document).ready(init)

function init() {
  addChatMsg();



}



//FUNZIONI

function addChatMsg() {
  var chatMsg = $('.bot-bar input').clone();
  var chat-user = $('.chat-user');
  chat-user.append(chatMsg);
}
