import express from "express";

const app = express();

app.get("/", (req, res) => res.send("Hello From Your API"));

We are making good progress by typing in this box. You need to commit to something Solomon. You need to create a focus time and deep yourself into learning. You don't know anything. You need to focus and learn.


/**
* Editing this line below will cause your code to break and not build successfully. Except you know what you're doing.
*/

// =============DO NOT EDIT HERE===========================================
app.listen(process.env.PORT || 5050, process.env.HOST || "0.0.0.0", () => {
  console.log(
    `Server running on http://${process.env.HOST || "0.0.0.0"}:${
      process.env.PORT || 5050
    }`
  );
});
// =============DO NOT EDIT HERE===========================================
