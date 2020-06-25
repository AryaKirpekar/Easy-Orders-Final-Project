var orderList = $('.orderList');
var addToList = $('.addToList');
addToList.on("click", addToOrder);
function addToOrder() {
  var orders = $('.order').val();orderList.append(`
  <li class="product">${orders}</li>
  `)
  var productInput = $('.order')
  productInput.val(" ");

  event.preventDefault()
}


orderList.on("click", removeItem)
function removeItem() {
  if (event.target.className==="product"){
    event.target.remove()
  }
}

$('.timepicker').wickedpicker();

var thankYou = $('.thankYou');
var checkOutButton = $('.checkOutButton');
checkOutButton.on("click", thankYouMessage);
function thankYouMessage() {
  thankYou.append(`<h4>Thank you for your order. </h4>`)

  //clear all inputs
  var inputs = $('.input');
  inputs.val(" ")

  //clear list
  var list = document.getElementById("myList");
  while (list.hasChildNodes()) {   
  list.removeChild(list.firstChild);
  }

  event.preventDefault();
}
