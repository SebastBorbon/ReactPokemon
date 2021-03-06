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
  try {
    let user = await getUser(id);
    if (user.userName === undefined) {
      console.log("error on user");
    } else {
      res.send({
        userName: user.userName,
        team: await getTeamUser(id),
      });
    }
  } catch (err) {
    console.log(err);
  }
});

router.route("/pokemons").post(async (req, res) => {
  let pokemonName = req.body.pokemonName;
  let userId = req.body.userId;
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    let pokemon = {
      name: pokemonName,
      pokeId: response.data.id,
      sprite: response.data.sprites.other.home.front_default,
    };
    await addPokemon(userId, pokemon);
    res.send(pokemon);
  } catch (error) {
    console.log(err);
  }
});

router.route("/pokemons").delete(async (req, res) => {
  try {
    await deletePokemonAt(req.body.userId, req.body.pokemonId);
    let user = await getUser(req.body.userId);
    res.send({
      userName: user.email,
      team: await getTeamUser(req.body.userId),
    });
  } catch (err) {
    return console.log(err);
  }
});

exports.router = router;
