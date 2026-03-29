function sendMessage() {
  const username = document.getElementById("username").value;
  const message = document.getElementById("messageInput").value;
  const image = document.getElementById("imageInput").value;
  const chatBox = document.getElementById("chatBox");

  let html = "<p><strong>" + username + ":</strong> " + message + "</p>";

  if (image) {
    html += "<img src='" + image + "' width='150'>";
  }

  chatBox.innerHTML += html;
}
