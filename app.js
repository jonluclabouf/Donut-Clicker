$(document).ready(function () {
  let donut = 0;
  let donutPlus = 1;
  let autoDonutPlus = 0;
  let autoClicker = 0;
  let autoClickerPrice = 100;
  const autoClickerButton = document.getElementById("autoClicker");

  setInterval(function () {
    donut += autoDonutPlus;
    changeInventory();
    changeClicker();
  }, 1000);

  $("#clickDonut").click(function () {
    donut += donutPlus;
    changeInventory();
  });

  $("#autoClicker").click(function () {
    if (donut >= autoClickerPrice) {
      donut -= autoClickerPrice;
      autoDonutPlus++;
      autoClicker++;
      autoClickerPrice = Math.round(autoClickerPrice * 1.1);
      autoClickerButton.innerHTML =
        "Buy [1] Auto Clicker Price: " + autoClickerPrice + " Donuts";
      changeInventory();
      changeClicker();
    }
  });

  function changeInventory() {
    if (donut == 1) {
      $("#donutAmount").html("You have " + donut + " donut");
    } else {
      $("#donutAmount").html("You have " + donut + " donuts");
    }
  }

  function changeClicker() {
    if (autoClicker == 1) {
      $("#clickerAmount").html("You have " + autoClicker + " auto clicker");
    } else {
      $("#clickerAmount").html("You have " + autoClicker + " auto clickers");
    }
  }

  $("#resetGame").click(function () {
    location.reload();
  });

  $("#company").click(function () {
    alert(
      "Fred the Baker Baking Company was started in 1992 by Fred Baker. Fred has loved donuts since his Grandmother gave him his first one on his 5th birthday, and that changed everything. He started his company right out of high school and has been running it ever since. His favorite donut has, and will always be chocolate frosted with sprinkles."
    );
  });
});
