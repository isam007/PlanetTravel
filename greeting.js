// Random greeting generator
const greetings = ["Hello!", "Ola!", "Bonjour!", "Salam!"];

function getGreeting()
{
  let rand = Math.floor(Math.random() * greetings.length);
  return greetings[rand];

}

// export module
exports.greet = ()=>getGreeting();