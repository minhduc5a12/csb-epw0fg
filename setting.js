document.onkeydown = (e) => {
  switch (e.keyCode) {
    case 123:
      return false;
      break;
    case 17 && 80:
      return false;
      break;
    case 17 && 85:
      return false;
      break;
    case 17 && 79:
      return false;
      break;
    case 17 && 83:
      return false;
      break;
    case 17 && 16 && 67:
      return false;
      break;
    case 17 && 16 && 73:
      return false;
      break;
    case 17 && 16 && 74:
      return false;
      break;
  }
};
document.addEventListener("contextmenu", (event) => event.preventDefault());
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
