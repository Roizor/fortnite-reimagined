const fortnite = require('fortnite');


console.clear()
fortnite.fn.newfnclient(fortnite.fn.Token) // Attempt to use built-in token

fortnite.fn.auth('user', 'password');// Never type real credentials because the game will auto auth into a real epic account
fortnite.fn.createUser("name"); // Username you wanna use
fortnite.fn.createGame();
fortnite.fn.packageData();
fortnite.fn.StartFortniteGame(); // All fortnite code is contained in a single C# structure