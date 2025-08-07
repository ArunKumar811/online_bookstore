document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const book = document.getElementById("book").value;
  const address = document.getElementById("address").value;

  const message = `Thanks ${name}, your order for "${book}" has been received!`;
  document.getElementById("responseMessage").innerText = message;

  this.reset();
});
