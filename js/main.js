async function type() {
  var text =
   ["$ whoami","","",
    "Hi, I'm Lukáš!","",
    "This page is empty, because I haven't yet gotten around to updating it."
   ];
  document.getElementById("terminal-text").innerHTML = "";
  await sleep(1200);
  for (var i = 0; i < text.length; i++) {
    if (text[i] == "") {
      document.getElementById("terminal-text").innerHTML += "<br/>";
    } else {
      for (var j = 0; j < text[i].length; j++) {
        await sleep(100);
        document.getElementById("terminal-text").innerHTML += text[i][j];
      }
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('readystatechange', function() {
  if (document.readyState === "complete") {
    type();
  }
})
