const mongoose = require("mongoose");
const TeamsModel = mongoose.model("TeamsModel", {
  userId: String,
  team: [],
});

const newUserTeam = async (userId) => {
  let newTeam = new TeamsModel({ userId: userId, team: [] });
  try {
    await newTeam.save().then(() => console.log("nuevo equipo creado"));
  } catch (err) {
    console.log("se da;o aca");
  }
};

const getTeamUser = async (userId) => {
  let dbTeam = await TeamsModel.findOne({ userId: userId });
  return dbTeam.team;
};

const addPokemon = async (userId, pokemon) => {
  let [err, dbTeam] = await TeamsModel.findOne({ userId: userId });
  if (dbPokeTeam.team.length == 6) {
    return console.log("ya tienes 6 pokemon");
  } else {
    dbTeam.team.push(pokemon);
    await dbTeam.save().then(() => console.log("pokemon a;adido"));
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

module.exports = {
  newUserTeam,
  addPokemon,
  setTeam,
  getTeamUser,
};
