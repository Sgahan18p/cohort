// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman

const fs = require("fs");

fs.readFile("./file.txt", "utf-8", function (err, data) {
  if (err) {
    console.error(err.message);
    return;
  }
  var collecteddata = data.replace(/\s+/g, " ").trim();

  fs.writeFile("./file.txt", collecteddata, "utf-8", function (err) {
    if (err) {
      console.error(err.message);
    }
  });
});
