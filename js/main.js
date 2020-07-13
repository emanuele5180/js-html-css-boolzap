// Sono l’utente e voglio mandare un messaggio. Quindi scrivo nell’input, poi clicco sul pulsante e il messaggio viene inviato e compare nella lista dei messaggi
//
// Ora devo spiegare al mio software che
// 1 l’utente può inserire un testo nell’input dedicato
// 2. l’ultente preme sul pulsante e lui deve prendere il testo dal posto giusto
// 3. il software deve far vedere quel messaggio nella lista dei messaggi di quella chat


$(document).ready(init)

function init() {
  // addChatMsg();



}



//FUNZIONI


// questo document mi aggiunge il testo dopo l'uguale esattamente in chat user dove ho creato il riquadro verde


// submit .addEventListener ( "click", function () {
//
//
// })



document.addEventListener ('click',function(){
  var submit = document.getElementById('submit');
  //console.log(submit);


  //da usare un ciclo while
  var messaggio = 'scrivi-un-messaggio';

  //ad ogni click submit va azzerata la chatbar

  var messaggio = document.getElementById('scrivi-un-messaggio').value;
  console.log(messaggio);

  var chatMsg = $('.bot-bar input').clone();
  var chatuser = $('.chat-user');
  chatuser.append(chatMsg);

  document.getElementById("chat-user").innerHTML= messaggio;

})
//
// function addChatMsg() {
//
//   var messaggio = ()
//
//   var chatMsg = $('.bot-bar input').clone();
//   var chat-user = $('.chat-user');
//   chat-user.append(chatMsg);
// }
