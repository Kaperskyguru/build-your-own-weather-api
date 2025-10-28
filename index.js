import express from "express";

const app = express();

app.get("/", (req, res) => res.send("Hello From Your API"));

/**
 * THis is a long comment and I can write whatever I love to write here. I need stability. I have been searching for it for a while and I need to go out more, connect with people more change my circle and share ideas with people more
 * 
 */


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
