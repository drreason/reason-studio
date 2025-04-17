const reasons = {
  "砍炮理由": [
    "老細聲音太磁性，我太易入睡。",
    "公司咖啡令我拉肚子三次，我覺得公司毒我。",
    "HR叫我要笑得自然啲，我笑完佢話我假笑。"
  ],
  "分手理由": [
    "你講嘢時會加「哈哈」，但你塊面係黑面。",
    "你食麵唔剪麵，成條吸晒，聲勁大。",
    "你成日叫我減肥，但你自己食兩碗飯。"
  ],
  "旅行理由": [
    "因為風未停，我未返。",
    "想睇未見過嘅天，行未行過嘅路。",
    "我哋每日都係返公司，而地球好大。"
  ]
};

let currentType = "砍炮理由";

function setType(type) {
  currentType = type;
  document.getElementById("result").innerText = "";
}

function drawReason() {
  const options = reasons[currentType];
  const random = options[Math.floor(Math.random() * options.length)];
  document.getElementById("result").innerText = random;
}
