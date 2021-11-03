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

const deleteTeam = async () => {
  try {
    await TeamsModel.deletMany({});
  } catch (err) {
    console.log(err);
  }
};

const getTeamUser = async (userId) => {
  try {
    let dbTeam = await TeamsModel.findOne({ userId: userId });
    console.log("mandamos el equipo");
    return dbTeam.team;
  } catch (err) {
    console.log("can't connect to DB");
  }
};

const addPokemon = async (userId, pokemon) => {
  try {
    let dbPokeTeam = await TeamsModel.findOne({ userId: userId });
    console.log(dbPokeTeam, " este es el team");
    if (dbPokeTeam.team.find((element) => element === pokemon) === undefined) {
      if (dbPokeTeam.team.length == 6) {
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

// const setTeam = async (userId, team) => {
//   let [err, dbTeam] = await to(
//     TeamsModel.updateOne(
//       { userId: userId },
//       { $set: { team: team } },
//       { upsert: true }
//     ).exec()
//   );
//   if (err || !dbTeam) {
//     return reject(err);
//   }
// };

module.exports = {
  newUserTeam,
  addPokemon,
  // setTeam,
  getTeamUser,
  deleteTeam,
};
