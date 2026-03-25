const socket = io();
const username = localStorage.getItem("username");

let selectedUser = null;

socket.emit("join", username);

// USERS
socket.on("users", (users) => {
  const usersDiv = document.getElementById("users");
  usersDiv.innerHTML = "";

  users.forEach(user => {
    if(user === username) return;

    const div = document.createElement("div");
    div.innerText = user;
    div.className = "p-3 border cursor-pointer hover:bg-gray-300";

    div.onclick = () => {
      selectedUser = user;
      document.getElementById("chatHeader").innerText = "Chat with " + user;
      document.getElementById("messages").innerHTML = "";
    };

    usersDiv.appendChild(div);
  });
});

// SEND
function send(){
  if(!selectedUser){
    alert("Select a user first");
    return;
  }

  const msg = document.getElementById("msg").value;

  socket.emit("privateMessage", {
    to: selectedUser,
    msg,
    from: username
  });

  document.getElementById("msg").value = "";
}

// RECEIVE
socket.on("privateMessage", (data) => {
  const li = document.createElement("li");

  const isMe = data.from === "Me";

  li.innerHTML = `
    <div style="
      background:${isMe ? 'green':'gray'};
      color:white;
      padding:5px;
      margin:5px;
      text-align:${isMe?'right':'left'};
    ">
      ${data.from}: ${data.msg}
    </div>
  `;

  document.getElementById("messages").appendChild(li);
});

// LOGOUT
function logout(){
  localStorage.removeItem("username");
  window.location = "index.html";
}