        var Cash = 999;

var ShackCost = 50;
var Shack = 0;
var ShackTot = 0;
var ShackTotCost1 = 50;
var ShackOut = 1;
var ShackUpgradeCost = 1000;

function buyShack() {
    if (Cash >= ShackCost) {
      Cash = Cash - ShackCost;
      Shack = Shack + 1;
      ShackCost = Math.round(ShackCost * 1.05);
      ShackCount = Shack;
      ShackTotCost1 = ShackCost;

      document.getElementById("Cash").innerHTML = Cash;
      document.getElementById("ShackTot").innerHTML = ShackCount;
      document.getElementById("ShackTotCost").innerHTML = ShackTotCost1;
    }
  }
function buyShack10() {
    if (Cash >= ShackCost) {
      Cash = Cash - ShackCost;
      Shack = Shack + 10;
      ShackCost = Math.round(0.96 * (ShackCost * (1.05 ** 10)));
      ShackCount = Shack;
      ShackTotCost1 = ShackCost;
      ShackTotCost10  = ShackTotCost1 * 10;

      document.getElementById("Cash").innerHTML = Cash;
      document.getElementById("ShackTot").innerHTML = ShackCount;
      document.getElementById("ShackTotCost").innerHTML = ShackTotCost1;
      document.getElementById("ShackTotCost10").innerHTML = ShackTotCost10;
    }
  }
  function buyShack100() {
    if (Cash >= ShackCost) {
      Cash = Cash - ShackCost;
      Shack = Shack + 100;
      ShackCost = Math.round(0.9 * (ShackCost * (1.05 ** 100)));
      ShackCount = Shack;
      ShackTotCost1 = ShackCost;
      ShackTotCost100  = ShackTotCost1 * 100;

      document.getElementById("Cash").innerHTML = Cash;
      document.getElementById("ShackTot").innerHTML = ShackCount;
      document.getElementById("ShackTotCost").innerHTML = ShackTotCost1;
      document.getElementById("ShackTotCost100").innerHTML = ShackTotCost100;
    }
  }

function upgradeShack() {
    if (Cash >= ShackUpgradeCost) {
      Cash = Cash - ShackUpgradeCost;
      ShackOut = Math.round(ShackOut * 1.5);
      ShackUpgradeCost = Math.round(ShackUpgradeCost * 1.1);

      document.getElementById("Cash").innerHTML = Cash;
      document.getElementById("ShackOut").innerHTML = ShackOut;
      document.getElementById("ShackUpgradeCost").innerHTML = ShackUpgradeCost;
    }
  }

setInterval(function() {
    Cash = Cash + Shack * ShackOut;
    document.getElementById("Cash").innerHTML = Cash;
  }, 250);
