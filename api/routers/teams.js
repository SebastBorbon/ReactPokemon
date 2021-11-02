const express = require("express");
const router = express.Router();
const passport = require("passport");
require("../auth")(passport);
const axios = require("axios");
const { setTeam, getTeamUser, addPokemon } = require("../controllers/teams");
const { getUser } = require("../controllers/users");

router.route("/").post(async (req, res) => {
  const id = req.body.userId;
  console.log("esto es lo que llega en el body", req.body.userId);

  let user = await getUser(id);
  console.log(user);
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
    console.log(req.body);
    let pokemonName = req.body.name;
    let userId = req.body.userId;
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      let pokemon = {
        name: pokemonName,
        pokeId: response.data.id,
      };
      await addPokemon(userId, pokemon);

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
