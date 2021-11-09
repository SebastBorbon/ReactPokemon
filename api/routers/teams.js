const express = require("express");
const router = express.Router();
const passport = require("passport");
require("../auth")(passport);
const axios = require("axios");
const {
  deletePokemonAt,
  getTeamUser,
  addPokemon,
} = require("../controllers/teams");
const { getUser } = require("../controllers/users");

router.route("/").post(async (req, res) => {
  const id = req.body.userId;

  let user = await getUser(id);
  if (!user.userName) {
    console.log("no he cargado el user");
  } else {
    res.send({
      userName: user.userName,
      team: await getTeamUser(id),
    });
  }
});
// .put(async (req, res) => {
//   await setTeam(req.body.user, req.body.team);
// });

router
  .route("/pokemons")
  .post(async (req, res) => {
    let pokemonName = req.body.pokemonName;
    let userId = req.body.userId;
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      let pokemon = {
        name: pokemonName,
        pokeId: response.data.id,
        sprite: response.data.sprites.front_default,
      };
      await addPokemon(userId, pokemon);
      res.send(pokemon);
    } catch (error) {
      console.log("pokemon no encontrado");
    }
  })
  .get((req, res) => {
    res.send("estas en pokemons");
  });

router.route("/pokemons/").delete(async (req, res) => {
  //Deberia ser query params
  let pokemonId = req.body.pokemonId;
  let userId = req.body.userId;
  try {
    await deletePokemonAt(pokemonId, userId);
    let user = await getUser(userId);
    res.send({
      userName: user.userName,
      team: await getTeamUser(id),
    });
  } catch (err) {
    return console.log(err);
  }
});

exports.router = router;
