const router = require("express").Router();
const { sendResponse } = require("./../utils/sendResponse");

router.post("/passwordReset", async function(req, res) {
  const results = await fetch("http://localhost:8000" + "/passwordReset", {
    // change this to actual server
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: req.body.email,
      pin: req.body.pin,
      password: req.body.password
    })
  });
  const parsed = await results.json();
  res.send(parsed);
});

module.exports = router;
