let banner = [
   "<span>Neyk Portfolio Website [Testing Version 0.0.1]<br>",
   "(c) Neyk Corporation. All rights reserved.</span><br><br>",
   '888b....888...................888...........888.......888..........888.....<br>',
   '8888b...888...................888...........888...o...888..........888.....<br>',
   '88888b..888...................888...........888..d8b..888..........888.....<br>',
   '888Y88b.888...d88b...888..888 888..888......888.d888b.888...d88b...88888b..<br>',
   '888.Y88b888.d8P..Y8b 888..888 888..88P......888d88888b888.d8P..Y8b.888."88b<br>',
   '888..Y88888.88888888 888..888 888888K.......88888P.Y88888.88888888.888..888<br>',
   '888...Y8888.Y8b......Y88b.888 888."88b......8888P...Y8888.Y8b......888.d88P<br>',
   '888....Y888.."Y8888..."Y88888 888..888......888P.....Y888.."Y8888..88888P".<br>',
   '..........................888..............................................<br>',
   '.....................Y8b d88P..............................................<br>',
   '......................"Y88P"...............................................<br>',
   '<br><br><span>Wellcome to my portfolio website🎉!</span><br><span>Type <span class="purple">"help"</span> to see all comands you can use</span><br>'
];

let whoami = [
   "Hi! I am Edgar, Neyk in the internet..."
]

let help = [

]


document.onkeydown = () => {
   if(event.keyCode == 13){
      const terminalContent = document.getElementById("terminal-content");
      const Input = document.getElementById("input");

      switch(Input.value){
         case "":
            break;
         case "banner":
            banner.forEach((line) => {
               terminalContent.innerHTML += line;
            });
            break;
         case "clear":
            terminalContent.innerHTML = "";
            banner.forEach((line) => {
               terminalContent.innerHTML += line;
            });
            break;
         case "help":
            terminalContent.innerHTML += help;
            break;
         case "whoami":
            terminalContent.innerHTML += whoami;
            break;
         default:
            terminalContent.innerHTML += `
            <span class="err">ERROR... </span><span>oops it looks like <span class="err">${Input.value}</span> is not a command</span><br>
            `;
            break;
      }
      
      terminalContent.innerHTML += '<br>';
      Input.value = "";

      const container = document.getElementById('container');
      window.scrollTo(0, container.scrollHeight); //keeps scroll at the bottom of the document
   }
}
