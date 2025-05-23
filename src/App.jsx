import React, { useState } from 'react';

const reasons = {
  "砍炮理由": [
    "砍炮理由001:HR 話我太有主見，我問佢係咪唔鍾意人有腦。",
  "砍炮理由002:老細叫我寫周報，我寫咗封辭職信俾佢。",
  "砍炮理由003:同事開會唔戴耳機，佢女朋友罵佢全 office 聽晒。",
  "砍炮理由004:開會開足一個鐘，最後結論係再開會。",
  "砍炮理由005:打印機第十次 jam 紙，我懷疑佢抗議我加班。",
  "砍炮理由006:我明明做 marketing，點解要幫同事掃地？",
  "砍炮理由007:老細讚我笑容真誠，其實我笑緊辭職信。",
  "砍炮理由008:一星期七日，我五日想離職，兩日放假。",
  "砍炮理由009:返工唔係為咗生活，而係為咗請假。",
  "砍炮理由010:啲 budget 流水咁走，人工仲係滴水。",
  "砍炮理由011:Zoom 見到自己塊面，我決定攞返人生控制權。",
  "砍炮理由012:Lunch hour 仲要開會，個腸胃都嬲。",
  "砍炮理由013:KPI 多過公司人數，我開始信佛。",
  "砍炮理由014:我條命唔係用嚟交報告，而係用嚟呼吸。",
  "砍炮理由015:IT 部重設我密碼，我順便重設人生。",
  "砍炮理由016:返工如打仗，我著咗戰衣但未見希望。",
  "砍炮理由017:Email loop 永無終結，我驚自己變機械人。",
  "砍炮理由018:佢話我做得慢，我話我做人細緻。",
  "砍炮理由019:每次 promote 都同我講R下次到你R，我信到老。",
"公司茶水間個水機都比我早退休。",
  "開咗個 task force，結果冇人知道做緊乜。",
  "公司話要 digital transformation，第一個變走咗係我。",
  "返咗五年工，個 office plants 都升職。",
  "每日 check-in、daily sync、weekly retro，我連自己生活都唔 sync。",
  "叫我去 team building，我諗住建緊自己個 team。",
  "喺 pantry 食杯麵都要避監視器，我唔係囚犯。",
  "老細送嘅新年禮物係每日再 OT 一個鐘。",
  "我試過用 ChatGPT 寫報告，效果比我好，我嬲。",
  "公司叫我自動化啲流程，我先自動化咗離職程序。",
  "我唔係唔努力，只係唔想為錯嘅公司用力。",
  "老細日日話我唔主動，我主動辭職佢又嬲。",
  "Slack 彈出嚟我就彈起，返工等於 PTSD。",
  "有次準時收工，HR 問我係咪病咗。",
  "唔好再叫我熱愛工作，我只熱愛自由。",
  "我畀晒心機交份 deck，老細改到變咗份 quiz。",
  "返工好似無盡 trial version，日日被限住功能。",
  "隔離 team 話我冇 ownership，我話我唔想擁有你份工。",
  "project 改完再改，最後取消咗。",
  "人工凍過冷氣，心都冇溫度。",
  "老細鍾意 standup meeting，我鍾意 sit down 靜靜搵出路。",
  "開 OT 開到食飽飯都唔記得係乜味。",
  "我已經將 resignation letter 擺做桌布提醒自己。",
  "唔係我冇能力，而係我能力唔想留喺呢度。",
  "部門話要節省成本，結果 cut 咗我個人。",
  "開會當辯論賽，冇人想聽，個個想贏。",
  "做嘢要求高，回報就貼地。",
  "公司 culture 唔係信任，而係 surveillance。",
  "我唔係 multitask，我係多重人格。",
  "deadline 永遠突襲，似考試唔似創作。",
  "話包容失敗，但第一次出錯就寫報告。",
  "職場生存法則：唔出聲等過日子。",
  "我用完假期之後開始思考人生意義。",
  "升職無望，放假都要講理由。",
  "試過扮笑容上 Zoom，其實我已經崩潰。",
  "上司鍾意每日早會，但冇一次有內容。",
  "工作環境開放式，但心靈係密封式。",
  "叫我 show initiative，我 show 咗條路線圖辭職。",
  "我打工好似返小學，老細當自己訓導主任。",
  "最開心一刻就係出糧，不過五分鐘後又冇咗。",
  "話我唔投入，其實我根本唔屬於呢度。",
  "HR 做咗個員工關懷問卷，但無人敢填真心話。",
  "搞咗個開心 Friday，結果 OT 到星期六。",
  "茶水間變咗投訴中心，個個都唔敢出聲。",
  "打工令我學識咗演技，日日都係戲。",
  "每次請假都好似求神拜佛先批。",
  "想認真做嘢，但會議搞到冇晒火。",
  "覺得自己係公司 backup device，永遠備而不用。",
  "返工最大動力係下班。",
  "project 做到一半，換咗上司就要重來。",
  "做得最多係推 email 同追 deadline。",
  "最怕老細講『我覺得你可以再 push 多啲』。",
  "份工冇問題，問題係我唔想做呢份工。",
  "返工返到每日都想買張單程機票。",
  "叫我 show passion，我已經用晒 quota 喺忍耐。",
  "發現每日嘅唯一收穫係 Slack 上面條綠點。",
  "我嘅熱情早就俾上次 project 燒晒。",
  "冇乜野想講，只係唔想再講。",
  "星期一係職場黑洞，吞咗我個 weekend。",
  "唯一升級咗嘅係加班時間。",
  "做嘢做到唔記得今日係星期幾。",
"我唔係無能，我係無心戀戰。",
  "老細話你係 potential，但永遠留喺 potential。",
  "一入 office，笑容就自動熄機。",
  "會議開到我懷疑人生，仲要再安排 follow-up。",
  "部門 restructure 完，我 restructure 緊人生。",
  "講咗三次想離職，自己都唔信未走。",
  "每次出 report 都似寫小說。",
  "我嘅 dream job 唔係呢個，我知你都唔係 dream 老細。",
  "工作唔應該令人恐懼，但呢度令我每日驚醒。",
  "我做緊份工，感覺好似被 download 緊 energy。",
  "試過咁努力，只係換嚟一句：keep it up。",
  "聽到工作群組通知聲會心悸。",
  "成日講咩 value alignment，我淨係想 align 返自己生活。",
  "一個禮拜七日有五日係懷疑人生。",
  "返工係每日嘅崩潰練習。",
  "最終覺悟：工作唔係生活核心，我要搵返自己。",
  "我唔係唔想努力，而係唔想幫錯人成功。",
  "開完會要再開會，仲要開總結會，我好想關機。",
  "我唔係玻璃心，我係太耐冇聽人講句人話。",
  "公司講話重視人才，其實係資源回收。"  
],

  "分手理由": [
    "你打機唔理我，我試過同你部機講早晨。",
  "你影相淨係 crop 靚自己，我識得欣賞咗我塊面嘅邊角。",
  "我生日你話唔記得，遊戲更新你凌晨三點爬起身。",
  "我講一日 3 次我愛你，你講一日 3 次你肚餓。",
  "你為咗睇波放我飛機，最後我決定畀你直飛出局。",
  "你成日問我做乜咁敏感，我話我只係做人。",
  "你 IG story 有其他人，我 WhatsApp 你已讀唔回。",
  "你話你鍾意自然，但我素顏你又彈。",
  "你唔肯同我打卡，話我唔上相，我上心囉。",
  "你唔鍾意貓唔鍾意狗，我唔知你鍾意過啲咩。",
  "你同我講愛係信任，但你密密查我電話。",
  "你嘅浪漫就係每年七夕問我今晚食咩。",
  "你話你唔記得前度，但你部車仲用緊佢個 Spotify。",
  "我同你講我唔開心，你叫我去搵心理醫生。",
  "我講我冇安全感，你話我小器，我唔想再解釋。",
  "你屋企 Wi-Fi password 改咗都唔通知我，我係路人。",
  "你朋友叫我前度面前『低調啲』，我唔係第三者。",
  "你話我太 drama，我覺得你唔夠情深。",
  "你咁怕麻煩，點解又同我拍拖？",
  "我有病你唔嚟睇我，打機話『等 round 完先』。",
  "你話我成日唔笑，我笑咗你又話我虛偽。",
  "我成日畀 surprise，你成日畀我驚。",
  "我只想要啲愛，你成日話我要求多。",
  "你從來冇問過我鍾意咩，只係問你啱唔啱。",
  "你鬧我洗碗唔乾淨，我建議你自己洗。",
  "你成日話唔想束縛，但連拍拖都唔願公開。",
  "你話自己冇問題，我就成日成為問題。",
  "你口口聲聲講未 ready，我聽夠啦。",
  "我好耐冇開心過，而你係原因。",
  "你仲係唔明點解我要走，我覺得我唔需要再解釋。",
  "你將我放響朋友圈最後一格，感情都變得好遠。",
  "你話我唔成熟，我覺得你唔值得我長大。",
  "每次我講感受，你都話我太多嘢。",
  "你太習慣獨處，唔需要我參與你人生。",
  "我係你嘅選擇之一，但你唔係我唯一想要。",
  "你成日話我唔明你，但你有冇想了解我？",
  "我以為你唔講係深沉，原來係唔在意。",
  "你已經冇再努力維繫，我唔想再單方面經營。",
  "每次冷戰都係我開口，我唔想再輸自己。",
  "你講『隨便』次數多過講我個名。",
  "你講你愛我，但行動冇一次兌現。",
  "每次出街你望手機多過望我。",
  "你俾嘅安全感，就係完全唔理我。",
  "你叫我唔好疑心，但你連定位都關晒。",
  "你唔肯講將來，我唔想再講今日。",
  "我期待嘅關心，變成你覺得我煩。",
  "你成日將我同你前度比較，我唔係佢。",
  "你永遠要自由，我永遠要等待。",
  "你鍾意自由多過我，我唔再爭。",
  "你講你忙，我見你仲有時間出 post。",
  "你從來唔記得我講過啲咩。",
  "每次都係我哄你，冇一次你試下理解我。",
  "你為咗贏爭拗，輸晒我哋關係。",
  "你唔肯承認錯，我唔想再讓步。",
  "你從來冇為我拒絕過任何誘惑。",
  "你鍾意影情侶照，但唔肯 post 我。",
  "你話愛係唔控制，但你控制晒我情緒。",
  "我唔想再扮開心去迎合你。",
  "你唔再為我笑，我唔想再為你喊。",
  "我再唔想喺冷暴力入面自我安慰。",
  "你講每句都似對自己講，冇諗過我感受。",
  "我講咗好多次唔鍾意，你一次都冇改過。",
  "你從來冇介紹我俾你朋友識。",
  "你永遠 online，永遠都唔回我。",
  "你唔想解釋，我唔想再問。",
  "你嘅「我係咁嘅」唔係藉口。",
  "你嘅 silence 對我嚟講就係拒絕。",
  "你有需要我就存在，冇需要我就消失。",
  "我唔想再做你嘅情緒垃圾桶。",
  "你為咗唔負責任，可以好有創意。",
  "你唔捨得放手機，我學識咗放低你。",
  "你唔講再見，但我學識講句夠了。",
  "你寧願同兄弟飲酒，都唔想聽我講野。",
  "我唔係你生活嘅必要，最多係選項。",
  "你話你忙到唔記得情人節，我記得你有玩 Game。",
  "你有千百個藉口，冇一個係我。",
  "你成日提起前度，我想做你下一任前度。",
  "你唔係唔愛人，你只係唔識愛我。",
  "你對人好容易心軟，唯獨對我夠硬淨。",
  "我唔想再憑你一句『我錯咗』去原諒你。",
  "你出軌一次係錯，唔改就係選擇。",
  "你冷靜嘅方式係封鎖我。",
  "你講承諾嗰陣望住我，轉身就忘記晒。",
  "我唔係想聽甜言蜜語，只係想你真心。",
  "你避開每個我想傾心事嘅夜晚。",
  "你冇背叛，但已經唔再靠近。",
  "你對我愈嚟愈客套，我識趣。",
  "你最溫柔嘅對象唔係我。",
  "你開始計較，我開始心寒。",
  "你話過會陪我行落去，但轉彎就甩咗我手。",
  "你講話我煩，其實我只係在意你。",
  "你講我負能量，我只係想你理下我。",
  "你講要我改變，我改到唔似自己。",
  "你永遠話我諗多咗，我想少啲咁難。",
  "你唔再問我食咩，冇再想同我食。",
  "你對住其他人笑，對住我冇反應。",
  "你成日講你有壓力，從來唔問我頂得幾多。",
  "我係你生命嘅背景音，唔係主角。",
  "我冇想像中咁堅強，所以唔想再裝住愛你。",
  "你唔再睇我眼神，連假裝都唔做。",
  "你開始覺得我煩，我決定唔再煩你。",
  "我攰到連走都冇力，只能放手。",
  "你唔係唔好，你只係唔適合再好落去。"
  ],
  "旅行理由": [
    "我每日打卡，但打唔到出走個心。",
  "打開電腦嘅同時，我幻想緊機場大堂。",
  "我唔想再靠 IG filter 遮蓋生活乏味。",
  "人生咁短，唔應該困喺 spreadsheet 入面。",
  "我張 annual leave 等咗三個月，就係等呢張機票。",
  "開 Google Maps 搵唔到自己方向，唯有飛出去搵答案。",
  "辦公室冷氣好凍，但我想去陽光曬傷疲憊。",
  "想去一個地方，唔需要密密回 Slack。",
  "再唔去旅行，連自拍都唔記得點笑。",
  "每日返工好似重播，我想錄新 episode。",
  "個腦太塞，要用旅程清一清 cache。",
  "每次刷 IG 見人打卡，我刷到心淡。",
  "唔出走，點知自己原來可以咁開心。",
  "去旅行唔係為咗相，而係為咗感受自己。",
  "背包未攞出嚟，但心已經離開咗辦公室。",
  "我想用真腳印代替 emoji。",
  "呢刻只想喺機艙入面訓覺，唔想再開 Google Meet。",
  "呢幾個月儲落嚟，就係為咗一程說走就走。",
  "生活得太密，要有一段時間鬆返啲。",
  "唔係唔鍾意屋企，而係個世界太吸引。",
  "每一次飛走，其實都係搵返真正嘅自己。",
  "我要用空氣入肺唔係空氣清新機。",
  "返咗太多次工，想返一次自由。",
  "想去一個地方，手機唔識得自動連 Wi-Fi。",
  "每日最想見到嘅唔係 inbox，而係藍天。",
  "我唔想再用 Zoom 睇世界，我要親身去。",
  "去旅行唔係奢侈，而係自救。",
  "想離開依個城市，等心情 reboot。",
  "我需要重新 download 快樂呢個 app。",
  "每次請假都係為咗唔請病假。",
  "我想將 IG story 變返 reality。",
  "等唔到公司安排 team trip，我自己安排一個 life trip。",
  "日曬雨淋都好過喺 office 灰沉沉。",
  "冇人講英文都唔緊要，最緊要唔講 KPI。",
  "呢個城市太熟悉，我想去迷路一下。",
  "喺山頂深呼吸，比任何成功都實在。",
  "想去一個地方，時間會慢啲。",
  "做一份工唔代表唔可以去十個國家。",
  "我要嘅係經歷唔係經驗值。",
  "我想畀自己一個理由唔覆 email。",
  "人生應該有片沙灘，而唔係只有 deadline。",
  "一個人食飯好孤單？不如試下一個人旅行。",
  "出走唔係任性，而係生活嘅需要。",
  "機票貴過人情，但值得過大多數交情。",
  "每日返工係 routine，旅行先係真實感覺。",
  "我唔係唔愛香港，只係想呼吸唔同空氣。",
  "想喺唔同時區搵返自己。",
  "人生應該要有幾次隨心出發。",
  "旅程未必完美，但一定比公司企劃精彩。",
  "對陌生風景嘅渴望，壓過對安全感嘅依賴。",
  "世界咁大，點解要困自己喺電腦前？",
  "搭車搭船搭飛機都好過搭電梯返工。",
  "唔再將旅行當逃避，而係生活嘅一部份。",
  "我想見啲唔同嘅人，唔再係 meeting 裡面嗰班。",
  "唔洗 schedule，唔洗 KPI，洗滌心靈先最重要。",
  "我唔係想走遠啲，只係想離開而家啲煩惱。",
  "最幸福係瞓醒唔知自己喺邊個城市。",
  "想要嘅唔係一個目的地，而係心情變得輕啲。",
  "我想做返個會對風景感動嘅人。",
  "身體同心態都要 reset，先有力向前行。",
  "唔再羨慕人地，而係變成人地羨慕嗰個旅人。",
  "空氣唔同，連壓力都淡啲。",
  "我唔係走避現實，我係走向希望。",
  "去旅行係唯一唔會後悔嘅衝動決定。",
  "工作講求效率，旅行追求感受。",
  "每次旅行都會記得，點樣再鍾意生活。",
  "機票可以貴，但自由無價。",
  "放低責任一陣，拎返自己一份。",
  "張枱太亂，唔如整理吓人生。",
  "我想瞓覺前聽蟲鳴唔係 Slack 通知聲。",
  "遠方未必風景靚，但起碼唔係四面牆。",
  "生活得太理性，旅行係唯一任性出口。",
  "唔知自己要咩，就出去行吓搵下。",
  "我想體驗唔一樣嘅 sunrise。",
  "邊走邊攰好過困住唔郁。",
  "每日都係 deadline，我想過啲冇界線嘅日子。",
  "試過每日被鬧，不如試下每日讚風景。",
  "有啲煩惱唔係解決，而係要走開。",
  "唔去世界睇睇，點知自己幾細。",
  "用腳步搵返自己節奏。",
  "唔係冇方向，只係個方向唔係公司個目標。",
  "我唔想再過得像機械人，連心跳都 schedule 定。",
  "離開幾日先發現，原來我可以笑得咁自然。",
  "陌生地方帶嚟嘅安靜，先知平日幾嘈。",
  "行出第一步，就已經唔同晒。",
  "旅程唔係用嚟逃避，而係提醒我仲可以選擇。",
  "背包入面裝住嘅唔止衣物，仲有希望。",
  "每次機場起飛，我都覺得自己重生。",
  "風景可以轉，心情都可以轉。",
  "世界冇變，但我可以變開心啲。",
  "心煩意亂時，地圖係我唯一會聽我講嘢嘅朋友。",
  "我每日都見住時間咁過，唔如去見下世界。",
  "連續三星期無陽光，我諗住去搵番太陽。",
  "想記得生活係咩味道，就要離開辦公室氣味。",
  "搭飛機唔係為咗逃，而係向返理想靠近。",
  "世界無義務等我，所以我要主動行出去。",
  "唔想日子過得太正確，想過吓唔合理嘅精彩。",
  "脫離 routine 嘅唯一方法，就係踏出第一步。",
  "如果我唔出走，我會對生活冇期望。",
  "工作教我守規則，旅行提醒我可以自由。"
  ],
  "未發達理由": [
    "冇背景、冇樓、連車位都租唔起，點發達？",
    "我老豆冇地產、我老母冇舖頭，我靠邊個？",
    "朋友個 startup 諗一晚，我諗一個月仲未開始。",
    "搵咗三份工都係幫人發達，唔係自己。",
    "識寫 business plan，但唔識搵人投資。",
    "人地 startup 成功，我係 start 咗唔 up。",
    "日日諗爆款，結果爆咗部 notebook。",
    "諗得多，做得慢，得個諗字。",
    "打工太穩陣，創業太心虛。",
    "IG講成功學，現實食緊杯麵。",
    "阿媽成日話唔好搏，咁就唔搏咗十年。",
    "創意係有，不過一見 Excel 就唔識郁。",
    "每次諗做老闆，最後變咗老忙。",
    "驚輸又想贏，結果唔輸唔贏只係停。",
    "條路係自己揀，不過揀咗條死路。",
    "人地喺會議講 vision，我喺 pantry 搵食。",
    "覺得打工穩陣，但年年人工加唔過通脹。",
    "創業夢太遠，床太舒服。",
    "朋友搞 NFT 賺車，我搞完只得 JPEG。",
    "每日發夢發達，結果訓到中午。",
    "唔夠膽 quit job，又唔肯定副業掂唔掂。",
    "想創業但太怕丟架，所以永遠 on hold。",
    "去過最多嘅 pitch 就係打邊爐果隻。",
    "講過最多就係「下個月開始啦」。",
    "問過最多人意見，無人叫我做。",
    "想搵人合作，但冇人信你可以做。",
    "老闆叫我快啲諗 idea，我諗住辭職。",
    "最擅長係諗諗吓就覺得唔值搏。",
    "開咗個 IG Page，但冇 post 過。",
    "開咗個 Excel，但得返個 Sheet。",
    "啱啱想 start，YouTube 播咗下一條片。",
    "太多人話我得，但我自己唔信。",
    "想搵投資者，結果中咗投資騙局。",
    "身邊人話支持，其實係等你仆街。",
    "日日做 content，但冇人 content。",
    "太鍾意改 Logo，未諗清做咩。",
    "Pitch 前一晚仲喺度整 slide。",
    "心態係 CEO，銀行戶口係打工仔。",
    "一見租金報價，立即冷靜落嚟。",
    "創業 budget 全部用咗去做品牌。",
    "好 idea 講出嚟，人地即刻 launch。",
    "創業唯一成功就係改咗個 LinkedIn title。",
    "公司名改咗三次，仲未註冊。",
    "部 printer 出問題都覺得係宇宙阻我發達。",
    "成日講 pivot，但其實係冇方向。",
    "冇 mentor、冇錢、冇 self-discipline。",
    "怕 rejection 怕到連 email 都唔 send。",
    "同學會見到個個升職，我仲寫緊 proposal。",
    "創業三年，張 business card 攞出嚟都黃咗。",
    "試過 freelancing，最後變 free 勞。",
    "IG 推唔到廣告，FB 幫唔到 like。",
    "好多人話我創意勁，但唔會掏錢支持。",
    "寫住 not for sale，其實根本冇人問過。",
    "想拍片但驚冇人睇，所以拍都冇拍。",
    "自稱 content creator，但 content 冇創過。",
    "開咗個網站，但只係得首頁。",
    "每次改 logo 就當自己 launch 緊新 brand。",
    "創業第一課：做乜都要錢。",
    "創業第二課：你冇錢。",
    "報完 coworking，結果每日都訓晏覺。",
    "年頭話今年要爆，年尾爆晒 credit。",
    "目標係做出 impact，但自己已經冇 energy。",
    "創業以為會自由，結果仲忙過老細。",
    "啱啱儲夠本，Apple 出新 iPhone。",
    "諗住做咩副業可以發圍，結果發癲。",
    "事業未起飛，阿媽已經發火。",
    "想買部 Macbook 做嘢，但 budget 得本 notebook。",
    "最大投資就係買咗張 ergonomic 椅。",
    "用晒時間排 workflow，一日冇 start 過。",
    "日日畫 business model，冇畫面實踐過。",
    "人生最叻畫餅充飢，但餅都畫爛咗。",
    "靠廣告收入，click rate 得幾下。",
    "搞咗 Patreon，無人知我係邊個。",
    "報咗個 accelerator，但先知我太 slow。",
    "最大回報就係攞過 early bird 優惠。",
    "朋友 crowd fund 過百萬，我 fund 唔起自己生活。",
    "買晒器材做內容，但自己成日 content 鬼上身。",
    "啱啱做完 business plan，時代就變晒。",
    "最大生意就係自己買自己件 product。",
    "叫咗設計師整咗 logo，生意仲係零。",
    "試過搞工作坊，最後參加者得自己同 friend。",
    "做咗份問卷，冇人填。",
    "喺 IG 開咗 page，follow 得十幾個係同學。",
    "品牌 slogan 諗好咗，連 product 都未整。",
    "人生最大嘅 launch 就係發咗個 post。",
    "我做嘢唔慢，只係未諗好方向。",
    "創業 road map 畫完三頁，依然喺原地。",
    "開口收費成日唔好意思，結果成日白做。",
    "最大 exposure 就係自己 repost 自己。",
    "創業以為型，結果收入唔夠食宵夜。",
    "冇錢請人，自己又唔夠手。",
    "努力寫文案，like 數都係自己讚。",
    "賣嘢冇人買，賣廣告被人 block。",
    "老細要 ROI，我連 R 嘅資格都未有。",
    "做咗副業，主業已經唔穩。",
    "有心但力唔從心，有 idea 冇 execution。",
    "開咗張 invoice，比人拖數拖到失戀。",
    "最大流量係 post 咗自己貓張相。",
    "覺得自己好得，但銀行戶口唔認同。",
    "打完呢段字，發覺都係去返打工穩陣。",
  ],
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
        {Object.keys(reasons).map((key) => (
          <button key={key} onClick={() => setType(key)} style={{ margin: 5 }}>{key}</button>
        ))}
      </div>
      <button onClick={drawReason}>抽一個理由</button>
      <h2 style={{ marginTop: 30 }}>{result}</h2>
    </div>
  );
}

export default App;
