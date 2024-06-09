let image = document.querySelectorAll(".card_profile_img");
let allEmojis = [
  "😀",
  "😁",
  "😂",
  "😃",
  "😄",
  "😅",
  "😆",
  "😇",
  "😈",
  "👿",
  "😉",
  "😊",
  "😋",
  "😌",
  "😍",
  "😎",
  "😏",
  "😐",
  "😑",
  "😒",
  "😓",
  "😔",
  "😕",
  "😖",
  "😗",
  "😘",
  "😙",
  "😚",
  "😛",
  "😜",
  "😝",
  "😞",
  "😟",
  "😠",
  "😡",
  "😢",
  "😣",
  "😤",
  "😥",
  "😦",
  "😧",
  "😨",
  "😩",
  "😪",
  "😫",
  "😬",
  "😭",
  "😮",
  "😯",
  "😰",
  "😱",
  "😲",
  "😳",
  "😴",
  "😵",
  "😶",
  "😷",
  "😸",
  "😹",
  "😺",
  "😻",
  "😼",
  "😽",
  "😾",
  "😿",
  "🙀",
  "👨🏽",
  "👨🏾",
  "👨🏿",
  "👩",
  "👩🏻",
  "👩🏼",
  "👩🏽",
  "👩🏾",
  "👱",
  "👱🏻",
  "👱🏼",
  "👱🏽",
  "👱🏾",
  "👱🏿",
  "👲",
  "👲🏻",
  "👲🏼",
  "👲🏽",
  "👲🏾",
  "👲🏿",
  "👳",
  "👳🏻",
  "👳🏼",
  "👳🏽",
  "👳🏾",
  "👳🏿",
  "👴",
  "👴🏻",
  "👴🏼",
  "👴🏽",
  "👴🏾",
  "👴🏿",
  "👵",
  "👵🏻",
  "👵🏼",
  "👵🏽",
  "👵🏾",
  "👵🏿",
  "👸",
  "👸🏻",
  "👸🏼",
  "👸🏽",
  "👸🏾",
  "👸🏿",
];

image[0].classList.add("awesome");
image[0].innerHTML = allEmojis[randomInteger(0, allEmojis.length - 1)];
image[0].style.fontSize = `65px`;
image[0].style.position = "relative";
image[1].classList.add("awesome");
image[1].innerHTML = allEmojis[randomInteger(0, allEmojis.length - 1)];
image[1].style.fontSize = `65px`;
image[1].style.position = "relative";


function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}