// eslint-disable-next-line no-array-constructor
let arrPlayer = new Array();
let arrLotaP = new Array();


function addPlayer() {
  let player = prompt('Message');
  arrPlayer = player.split(' ');
}

function printPlayer() {
  alert(arrPlayer);
}

function printLotation() {
  alert(arrPlayer.length - 11);
  for (var i = 0; i <= arrPlayer.length - 11; i++) {
    arrLotaP[i] = arrPlayer[arrPlayer.length - i-1];
  }
  alert(arrLotaP);
}
