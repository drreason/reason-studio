import { useState } from "react";

const reasons = {
  "砍炮理由": [
    "💥 HR 話我太有主見，我問佢係咪唔鍾意人有腦。",
    "😤 老細叫我寫周報，我寫咗封辭職信俾佢。",
    "🪞 Zoom 見到自己塊面，我決定攞返人生控制權。"
  ],
  "分手理由": [
    "📵 佢 WhatsApp 只識覆 OK，我唔係搵個機械人拍拖。",
    "🍽️ 每次問食咩都話隨便，結果我一世都食唔到想食嘅嘢。"
  ],
  "旅行理由": [
    "🔕 聽到工作群組通知聲會心悸。",
    "🌤️ 連續三星期無陽光，我諗住去搵番太陽。"
  ],
  "未發達理由": [
    "😮‍💨 IG 睇咗兩粒鐘發夢，Excel 未開過。",
    "💔 條女話支持我創業，跟住離咗婚。",
    "🧠 個發達 idea 成日有，但醒起時只係臨瞓前。"
  ]
};

export default function ReasonStudio() {
  const [currentType, setCurrentType] = useState("砍炮理由");
  const [reason, setReason] = useState("");

  function drawReason() {
    const options = reasons[currentType];
    const random = options[Math.floor(Math.random() * options.length)];
    setReason(random);
  }

  function shareToWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent(reason + "\n#100個理由研究所")}`;
    window.open(url, "_blank");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
        做人最緊要講得出理由。
      </h1>

      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {Object.keys(reasons).map((type) => (
          <button
            key={type}
            className={\`px-4 py-2 rounded-full border font-semibold transition \${currentType === type
              ? "bg-red-500 text-white border-red-500"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}\`}
            onClick={() => setCurrentType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <button
        onClick={drawReason}
        className="bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition mb-6"
      >
        幫我搵個籍口啦
      </button>

      {reason && (
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-xl text-xl text-center leading-relaxed">
          <p className="mb-4">{reason}</p>
          <button
            onClick={shareToWhatsApp}
            className="text-sm text-blue-600 underline hover:text-blue-800"
          >
            👉 分享去 WhatsApp
          </button>
        </div>
      )}
    </div>
  );
}
