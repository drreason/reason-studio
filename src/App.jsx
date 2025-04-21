
import React, { useState } from 'react'

const reasons = {
  "砍炮理由": [
    "屋企人唔係出街就係打機，想搵個理由自己靜一靜 🧘",
    "天氣太好，不出去對唔住個太陽 ☀️",
    "做 gym 做到好煩，想有個出門既藉口 🏋️",
    "個肚唔舒服，唔想解釋咁多 🙈",
    "聽到工作群組通知聲會心悸 📲"
  ],
  "分手理由": [
    "你有你嘅自由，我有我嘅選擇 ✌️",
    "再唔愛並唔代表討厭 🙃",
    "已經唔再係對方生命入面嘅主角 🎭",
    "感情變得好似例行公事 🕰️",
    "我地變成左最好嘅陌生人 🚶‍♂️"
  ],
  "旅行理由": [
    "去旅行唔係為咗逃，而係向更想要嘅生活進發 🌍",
    "搭飛機唔係為咗遠，而係向返理想靠近 ✈️",
    "世界無義務等我，所以我要主動行出去 🏃‍♀️",
    "唔想日子過得太正確，想過吓唔合理嘅精彩 🎨",
    "脫離 routine 嘅唯一方法，就係踏出第一步 👣"
  ],
  "未發達理由": [
    "每日都諗緊爆紅，但唔知紅乜 🔴",
    "太忙為夢想打工，無時間創業 💼",
    "個腦太清醒，唔夠瘋狂 🤯",
    "儲夠勇氣未？定係儲緊藉口？ 🧠",
    "社交媒體出唔夠 post 🐢"
  ]
};

function App() {
  const [type, setType] = useState("砍炮理由");
  const [result, setResult] = useState("");

  const drawReason = () => {
    const list = reasons[type];
    const random = list[Math.floor(Math.random() * list.length)];
    setResult(random);
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: 40 }}>
      <h1>100個理由研究所 Reason Studio</h1>
      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setType("砍炮理由")}>砍炮理由</button>{" "}
        <button onClick={() => setType("分手理由")}>分手理由</button>{" "}
        <button onClick={() => setType("旅行理由")}>旅行理由</button>{" "}
        <button onClick={() => setType("未發達理由")}>未發達理由</button>
      </div>
      <button onClick={drawReason}>抽一個理由</button>
      <h2 style={{ marginTop: 30 }}>{result}</h2>
    </div>
  );
}

export default App;
