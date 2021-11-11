const mongoose = require("mongoose");
const TeamsModel = mongoose.model("TeamsModel", {
  userId: String,
  team: [],
});

const newUserTeam = async (userId) => {
  //when a  new user is created, the team also is created over that user
  let newTeam = new TeamsModel({ userId: userId, team: [] });
  try {
    await newTeam.save().then(() => console.log("nuevo equipo creado"));
  } catch (err) {
    console.log("se da;o aca");
  }
};

const deleteTeam = async () => {
  try {
    await TeamsModel.deletMany({});
  } catch (err) {
    console.log(err);
  }
};

const getTeamUser = async (userId) => {
  try {
    //try to take the user team and render it
    let dbTeam = await TeamsModel.findOne({ userId: userId });
    console.log("mandamos el equipo");
    return dbTeam.team;
  } catch (err) {
    console.log("can't connect to DB");
  }
};

const addPokemon = async (userId, pokemon) => {
  try {
    // look for a team in the db that no contains more than 6 pokemon in it, and add the pokemon to them
    let dbPokeTeam = await TeamsModel.findOne({ userId: userId });
    if (dbPokeTeam.team.find((element) => element === pokemon) === undefined) {
      if (dbPokeTeam.tam.length == 6) {
        return console.log("ya tienes 6 pokemon");
      } else {
        dbPokeTeam.team.push(pokemon);
        await dbPokeTeam.save().then(() => console.log("pokemon a;adido"));
      }
    } else {
      console.log("el pokemon ya esta en el");
    }
  } catch (err) {
    console.log("no existe");
  }
};

const setTeam = async (userId, team) => {
  let [err, dbTeam] = await to(
    TeamsModel.updateOne(
      { userId: userId },
      { $set: { team: team } },
      { upsert: true }
    ).exec()
  );
  if (err || !dbTeam) {
    return reject(err);
  }
};

const deletePokemonAt = async (userId, pokemonId) => {
  try {
    //look if the pokemon already exists in the team and because if an array splice the array to delete the pokemon from the team
    dbTeam = await TeamsModel.findOne({ userId: userId });
    console.log(dbTeam.team);
    let index = dbTeam.team.map((pokemon) => pokemon.pokeId).indexOf(pokemonId);
    console.log("el index a borrar es", index, "que");
    if (dbTeam.team[index]) {
      dbTeam.team.splice(index, 1);
    }
    await dbTeam.save();
    return dbTeam.team;
  } catch (err) {
    console.log("fallo el deletePkAt");
  }
};

module.exports = {
  newUserTeam,
  addPokemon,
  setTeam,
  getTeamUser,
  deleteTeam,
  deletePokemonAt,
};
