const team = {
    _players: [{
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 22
    },{
      firstName: 'John',
      lastName: 'Smith',
      age: 25
    }, {
      firstName: 'Max',
      lastName: 'Verstappen',
      age: 24
    }],
    _games: [{
      opponent: 'Realmadrid',
      teamPoints: 42,
      opponenetPoints: 27
    },{
      opponent: 'Manchester United',
      teamPoints: 39,
      opponentPoints: 31
    },{
      opponent: 'Liverpool',
      teamPoints: 44,
      opponentPoints: 33
    }],
    get games() {
      return this._games;
    },
    get players() {
      return this._players;
    },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName,
        lastName,
        age
      };
      this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
      const game = {
        opponent,
        teamPoints,
        opponentPoints
      };
        this.games.push(game);
    },
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  console.log(team.players);
  
  team.addGame('Red-Bull', 25, 33);
  team.addGame('Knicks', 12, 22);
  team.addGame('Williams', 34, 55);
  
  console.log(team.games);