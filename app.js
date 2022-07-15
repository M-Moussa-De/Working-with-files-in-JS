const resultPlaceholder = document.querySelector("#result");
const textBtn = document.querySelector("#text");
const jsonBtn = document.querySelector("#json");

async function readFile(url, kind) {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": `${kind === "text" ? "text/plain" : "Application/json"}`,
    },
  });

  const data = `${kind === "text" ? res.text() : res.json()}`;

  console.log(data);
}

textBtn.addEventListener("click", () => {
  readFile("file.txt", "text");
});

jsonBtn.addEventListener("click", () => {
  readFile("file.json", "json");
});
