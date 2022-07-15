const resultPlaceholder = document.querySelector("#result");

//  Read file
async function readFile() {
  const res = await fetch("./file.json", {
    method: "GET",
    headers: {
      "Content-Type": "text/plain",
    },
  });

  const data = await res.text();

  console.log(data);
}

readFile();
