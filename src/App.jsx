import React from 'react';

const reasons = {
  "砍炮理由": ["😤 無人覆我 message", "🔥 佢講嘢好煩", "💣 成日遲到我忍夠", "👻 講完唔做，得個講字"],
  "分手理由": ["💔 性格唔夾", "😶 講極都唔聽", "😒 唔再有感覺", "🚪 我只係想靜靜咁離開"],
  "旅行理由": ["🌍 世界太大要去睇", "✈️ 飛出去透透氣", "📸 打卡要素材", "🌤 香港落雨我走先"],
  "未發達理由": ["💸 投資失手", "⏰ 起唔到身錯過機會", "🧠 諗得多做得少", "📉 市況唔好"]
};

function App() {
  const [type, setType] = React.useState("砍炮理由");
  const [reason, setReason] = React.useState("");

  const drawReason = () => {
    const options = reasons[type];
    const random = options[Math.floor(Math.random() * options.length)];
    setReason(random);
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>100個理由研究所 Reason Studio</h1>
      <div>
        {Object.keys(reasons).map((key) => (
          <button key={key} onClick={() => setType(key)} style={{ margin: '5px' }}>{key}</button>
        ))}
      </div>
      <button onClick={drawReason} style={{ marginTop: '20px', padding: '10px 20px' }}>抽一個理由</button>
      <h2 style={{ marginTop: '30px' }}>{reason}</h2>
    </div>
  );
}

export default App;
