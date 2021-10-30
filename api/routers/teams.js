const express = require("express");
const router = express.Router();
const passport = require("passport");
require("../auth")(passport);
const axios = require("axios");
const { setTeam, getTeamUser, addPokemon } = require("../controllers/teams");
const { getUserIdFromEmail, getUser } = require("../controllers/users");

router
  .route("/")
  .get(async (req, res) => {
    res.send("estas en el teams");
    const { id } = req.query;

    let user = await getUser(id);
    res.json({
      userName: user.userName,
      team: await getTeamUser(id),
    });
  })
  .put((req, res) => {
    setTeam(req.body.user, req.body.team);
  });

router
  .route("/pokemons")
  .post(async (req, res) => {
    let pokemonName = req.body.name;
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      let pokemon = {
        name: pokemonName,
        pokeId: response.data.id,
      };
      await addPokemon("8111cbbf-0b9c-4cb3-ba59-a8e566e62858", pokemon);

      console.log(pokemon);
      res.send("Pokemon guardado exitosamente");
    } catch (error) {
      console.error([error]);
      console.log("aqui fallecio");
    }
  })
  .get((req, res) => {
    res.send("estas en pokemons");
  });

router.route("/pokemons/:pokeid").delete(() => {
  res.send("hello word");
});

exports.router = router;
