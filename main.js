const main = async () => {
  const response = await fetch("./config.json");
  const config = await response.json();
  console.log(config);
  stlite.mount(config, document.getElementById("root"));
};

main();
