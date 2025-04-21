
import React, { useState } from 'react';
import './App.css';

const reasons = {
  "砍炮理由": [
    "聽到工作群組通知聲會心悸。",
    "返工唔想講野，連打招呼都覺得負擔。",
    "午飯時間係唯一既自由。",
    "個deadline係假嘅，但壓力係真。",
    "開完個會唔知講過咩，只係想快啲完。",
    "老細鍾意開夜會，我鍾意收工瞓覺。",
    "明明做緊野，俾人話hea。",
    "每次報告都要改三次以上。",
    "啲同事淨係識Hi，唔識做。",
    "為份人工，忍哂所有氣。"
  ],
  "分手理由": [
    "我哋只係習慣咗一齊，唔係真係適合。",
    "你唔再令我期待未來。",
    "沉默比對話多，已經唔再想解釋。",
    "我地嘅節奏唔再同步。",
    "當我唔再嬲你，就係我唔再在意你。",
    "每次都係我遷就，攰。",
    "你鍾意嘅世界，我參與唔到。",
    "唔係唔愛，只係唔啱。",
    "溝通變咗冷戰。",
    "我唔想將就自己過一世。"
  ],
  "旅行理由": [
    "我需要一個唔問原因就可以發呆嘅地方。",
    "去見識世界，搵返真正嘅自己。",
    "逃離城市，就係一種療癒。",
    "飲個唔同地方嘅早餐，心情都唔同。",
    "出走，唔一定有目的地。",
    "新地方，新靈感。",
    "唔使打卡，只想呼吸。",
    "我想見識唔同人嘅生活。",
    "遠離wifi，接近自己。",
    "張機票係自由嘅門票。"
  ],
  "未發達理由": [
    "太鍾意試新野，每次都係重新開始。",
    "未搵到適合我天份嘅位。",
    "貪過生活，捨不得拼命。",
    "無背景，靠自己行得慢。",
    "想太多，做得少。",
    "怕失敗，唔敢賭大。",
    "諗緊完美時機，錯過咗所有機會。",
    "選擇安穩，而唔係冒險。",
    "做嘢認真，但唔識包裝自己。",
    "運氣未到，唯有繼續捱。"
  ]
};

function App() {
  const [currentType, setCurrentType] = useState("砍炮理由");
  const [reason, setReason] = useState("");

  const drawReason = () => {
    const options = reasons[currentType];
    const random = options[Math.floor(Math.random() * options.length)];
    setReason(random);
  };

  return (
    <div className="App">
      <h1>100個理由研究所 Reason Studio</h1>
      <div>
        <button onClick={() => setCurrentType("砍炮理由")}>砍炮理由</button>
        <button onClick={() => setCurrentType("分手理由")}>分手理由</button>
        <button onClick={() => setCurrentType("旅行理由")}>旅行理由</button>
        <button onClick={() => setCurrentType("未發達理由")}>未發達理由</button>
      </div>
      <button onClick={drawReason}>抽一個理由</button>
      <h2>{reason}</h2>
    </div>
  );
}

export default App;
