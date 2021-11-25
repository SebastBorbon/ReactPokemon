const mongoose = require("mongoose");
const TeamsModel = mongoose.model("TeamsModel", {
  userId: String,
  team: [],
});

const newUserTeam = async (userId) => {
  //when a  new user is created, the team also is created over that user
  let newTeam = new TeamsModel({ userId: userId, team: [] });
  try {
    await newTeam.save().then(() => console.log("new team created"));
  } catch (err) {
    console.log("cant create new team ");
  }
};

const getTeamUser = async (userId) => {
  try {
    //try to take the user team and render it
    let dbTeam = await TeamsModel.findOne({ userId: userId });
    return dbTeam.team;
  } catch (err) {
    console.log("can't connect to DB");
  }
};

const addPokemon = async (userId, pokemon) => {
  try {
    // look for a team in the db that no contains more than 6 pokemon in it, and add the pokemon to them
    let dbPokeTeam = await TeamsModel.findOne({ userId: userId });
    // if (
    //   dbPokeTeam.team.findIndex((element) => element === pokemon.pokeId) ===
    //   undefined
    // ) {
    if (dbPokeTeam.team.length == 6) {
      return console.log("user already got 6 pokemon");
    } else {
      dbPokeTeam.team.push(pokemon);
      await dbPokeTeam.save().then(() => console.log("pokemon added"));
    }
    // } else {
    //   console.log("already have that pokemon");
    // }
  } catch (err) {
    console.log("don't exist");
  }
};

const deletePokemonAt = async (userId, pokemonId) => {
  try {
    //look if the pokemon already exists in the team and because if an array splice the array to delete the pokemon from the team
    dbTeam = await TeamsModel.findOne({ userId: userId });
    console.log(dbTeam.team);
    let index = dbTeam.team.map((pokemon) => pokemon.pokeId).indexOf(pokemonId);

    if (dbTeam.team[index]) {
      dbTeam.team.splice(index, 1);
    }
    await dbTeam.save();
    return dbTeam.team;
  } catch (err) {
    console.log(" deletePkAt failed");
  }
};

module.exports = {
  newUserTeam,
  addPokemon,
  getTeamUser,
  deletePokemonAt,
};
