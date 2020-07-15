// Sono l’utente e voglio mandare un messaggio. Quindi scrivo nell’input, poi clicco sul pulsante e il messaggio viene inviato e compare nella lista dei messaggi
//
// Ora devo spiegare al mio software che
// 1 l’utente può inserire un testo nell’input dedicato
// 2. l’ultente preme sul pulsante e lui deve prendere il testo dal posto giusto
// 3. il software deve far vedere quel messaggio nella lista dei messaggi di quella chat



//funzione che attiva tutte le funzioni


function addChatMsg(){
  var messageWritten = $("#scrivi-un-messaggio");
  console.log(messageWritten);

  messageWritten.keyup(sendKeyup);


}

function sendKeyup(event) {
  var key = event.which;

  if (key === 13) {
    var input = $(this);
    var text = input.val();
    console.log(text);
    input.val("");
  }

}

function init() {
  addChatMsg();  //attivazione della funzione





}
$(document).ready(init);


//FUNZIONI


// var submit= $('#submit').click();
// console.log(submit);
// var text = document.getElementById('scrivi-un-messaggio').value;
// console.log(text);


// questo document mi aggiunge il testo dopo l'uguale esattamente in chat user dove ho creato il riquadro verde


// submit .addEventListener ( "click", function () {
//
//
// })



// document.addEventListener ('click',function(){
//   var submit = document.getElementById('submit');
//   //console.log(submit);
//
//
//
//   var messaggio = 'scrivi-un-messaggio';
//
//   //ad ogni click submit va azzerata la chatbar
//
//   var messaggio = document.getElementById('scrivi-un-messaggio').value;
//   console.log(messaggio);
//
//   var chatMsg = $('.bot-bar input').clone();
//   var chatuser = $('.chat-user');
//   chatuser.append(chatMsg);
//
//   document.getElementById("chat-user").innerHTML= messaggio;  //questo porta il messaggio che scrivo nella chatbar nel blocco verde della chatroom
//
// })


// $(function () {
//     $('#submit').on('click', function () {
//         var text = $('#scrivi-un-messaggio');
//         text.val(text.val() );
//     });
// });
// console.log(text);



// function addChatMsg() {

//   var messaggio = ()

//   var chatMsg = $('.bot-bar input').clone();
//   var chat-user = $('.chat-user');
//   chat-user.append(chatMsg);
// }
