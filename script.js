const $=s=>document.querySelector(s);
// [category, difficulty 0-2, question, correct, wrong1, wrong2, wrong3]
const Q=[
["GTA",0,"What fictional city is GTA IV set in?","Liberty City","Vice City","Los Santos","San Fierro"],
["GTA",0,"Who is the protagonist of GTA IV?","Niko Bellic","Johnny Klebitz","Carl Johnson","Tommy Vercetti"],
["GTA",1,"Which real-life city inspired GTA: Vice City?","Miami","Los Angeles","New York","Las Vegas"],
["GTA",1,"In which year was GTA IV released?","2008","2006","2010","2004"],
["GTA",2,"Which studio is the main developer of GTA V?","Rockstar North","Rockstar San Diego","Rockstar Leeds","Rockstar Toronto"],
["Minecraft",0,"Who created Minecraft?","Markus Persson","Jens Bergensten","Gabe Newell","Hideo Kojima"],
["Minecraft",0,"Which block is needed to build a Nether portal?","Obsidian","Bedrock","Diamond","Netherrack"],
["Minecraft",0,"Which boss lives in The End?","Ender Dragon","Wither","Warden","Elder Guardian"],
["Minecraft",2,"How much did Microsoft pay to buy Mojang in 2014?","$2.5 billion","$500 million","$1 billion","$5 billion"],
["Fortnite",0,"Which company developed Fortnite?","Epic Games","Valve","Activision","Ubisoft"],
["Fortnite",0,"What is the in-game currency of Fortnite?","V-Bucks","Robux","Vibranium","Gems"],
["Fortnite",1,"In what year did Fortnite Battle Royale launch?","2017","2015","2019","2020"],
["Call of Duty",0,"Which mode in Call of Duty is a free-to-play battle royale?","Warzone","Blackout Zone","Ground War","Gunfight"],
["Call of Duty",1,"Which game first introduced the Zombies mode?","World at War","Modern Warfare 2","Black Ops 3","Ghosts"],
["Call of Duty",1,"Which studio created the original Call of Duty (2003)?","Infinity Ward","Treyarch","Sledgehammer","Raven"],
["FIFA / FC",0,"Into what was the FIFA video game series renamed in 2023?","EA Sports FC","PES","Football Manager","eFootball"],
["FIFA / FC",1,"What is FIFA's famous card-collecting mode called?","Ultimate Team","Career Mode","Pro Clubs","Volta"],
["Roblox",0,"What is the premium currency in Roblox?","Robux","V-Bucks","Coins","Minecoins"],
["Roblox",2,"Roblox games are scripted in a dialect of which language?","Lua","Python","JavaScript","C#"],
["Red Dead",0,"Who is the protagonist of Red Dead Redemption 2?","Arthur Morgan","John Marston","Dutch van der Linde","Sadie Adler"],
["Red Dead",1,"Who leads the Van der Linde gang?","Dutch","Micah Bell","Hosea Matthews","Javier Escuella"],
["Assassin's Creed",1,"Which Assassin is the hero of AC II?","Ezio Auditore","Altaïr","Connor","Edward Kenway"],
["Assassin's Creed",1,"Where is Assassin's Creed Origins set?","Egypt","Greece","Italy","England"],
["Assassin's Creed",2,"Who is the modern-day protagonist of the first AC games?","Desmond Miles","Layla Hassan","Shay Cormac","Aveline"],
["Resident Evil",0,"What company's experiments cause the outbreak in Resident Evil?","Umbrella Corporation","Aperture Science","Abstergo","Shinra"],
["Resident Evil",1,"Which city is destroyed in Resident Evil 2 and 3?","Raccoon City","Silent Hill","Midgar","Arklay"],
["Resident Evil",1,"Who is the hero of Resident Evil 4?","Leon S. Kennedy","Chris Redfield","Jill Valentine","Ethan Winters"],
["God of War",0,"Who is the protagonist of God of War?","Kratos","Atreus","Zeus","Dante"],
["God of War",1,"Which mythology does the 2018 God of War explore?","Norse","Egyptian","Japanese","Celtic"],
["The Last of Us",0,"Who is Ellie's guardian in The Last of Us?","Joel","Tommy","Abby","David"],
["The Last of Us",1,"What fungus causes the infection in The Last of Us?","Cordyceps","Candida","Penicillium","Mycena"],
["The Last of Us",1,"Which studio developed The Last of Us?","Naughty Dog","Santa Monica Studio","Insomniac","Guerrilla"],
["Elden Ring",0,"Which studio developed Elden Ring?","FromSoftware","Capcom","CD Projekt","Bandai Namco Studios"],
["Elden Ring",1,"Which author helped write the world's lore of Elden Ring?","George R. R. Martin","J. R. R. Tolkien","Brandon Sanderson","Andrzej Sapkowski"],
["Elden Ring",2,"What is the name of Elden Ring's world?","The Lands Between","Lordran","Yharnam","Hyrule"],
["League of Legends",0,"Which studio made League of Legends?","Riot Games","Blizzard","Valve","Epic Games"],
["League of Legends",1,"What is the main map of League of Legends called?","Summoner's Rift","Howling Abyss","Bind Mountain","Haunted Hollow"],
["Counter-Strike",1,"Counter-Strike began as a mod for which game?","Half-Life","Quake","Doom","Unreal Tournament"],
["Counter-Strike",1,"Which famous Counter-Strike map is called 'de_...'?","dust2","valley","rift","stormwind"],
["Valorant",0,"Which studio made Valorant?","Riot Games","Valve","Respawn","Bungie"],
["Valorant",1,"Which Valorant agent can resurrect teammates?","Sage","Jett","Sova","Phoenix"],
["Nintendo",0,"Who created Mario?","Shigeru Miyamoto","Satoru Iwata","Hideo Kojima","Masahiro Sakurai"],
["Nintendo",1,"In which year was the original Nintendo Switch released?","2017","2015","2019","2016"],
["Nintendo",0,"What is the name of the hero in The Legend of Zelda?","Link","Zelda","Ganon","Sora"],
["PlayStation / Xbox",1,"Who developed the Halo series?","Bungie","343 Industries only","Rare","Epic Games"],
["PlayStation / Xbox",2,"In what year was the original Xbox released?","2001","1999","2003","2005"],
["PlayStation / Xbox",1,"What was Sony's first console called?","PlayStation","PlayStation 2","Saturn","Dreamcast"],
["General",0,"Which yellow character eats dots and avoids ghosts?","Pac-Man","Sonic","Kirby","Q*bert"],
["General",1,"Which classic game was created by Alexey Pajitnov?","Tetris","Pong","Space Invaders","Snake"],
["General",2,"Which company made the 1972 arcade game Pong?","Atari","Sega","Nintendo","Namco"],
["General",2,"In which year was Super Mario Bros. released in Japan?","1985","1981","1989","1983"]
];
const MODES=[
["mixed","Mixed Gaming","All categories"],["easy","Easy Mode","Beginner-friendly"],
["hard","Hardcore Mode","Medium & hard only"],["random","Random Challenge","Any question, any level"],
["survive","Survival Mode","One mistake ends it"]];
let mode="mixed",deck=[],i=0,score=0,right=0,wrong=0,skip=0,locked=true,deadline=0,raf=0,wait=0,last=10;
const sh=a=>{a=a.slice();for(let k=a.length-1;k>0;k--){const j=Math.random()*(k+1)|0;[a[k],a[j]]=[a[j],a[k]]}return a};
const show=id=>{document.querySelectorAll(".scr").forEach(s=>s.classList.toggle("on",s.id===id))};
// skyline
(()=>{let r="";let x=0;while(x<1200){const w=30+Math.random()*60,h=60+Math.random()*300;r+=`<rect x="${x}" y="${400-h}" width="${w}" height="${h}" fill="#050506"/>`;for(let n=0;n<h/22;n++)if(Math.random()<.35)r+=`<rect x="${x+6+Math.random()*(w-14)}" y="${400-h+8+n*22}" width="4" height="6" fill="#d98a35" opacity=".5"/>`;x+=w+4}
$("#sky").innerHTML=`<svg viewBox="0 0 1200 400" preserveAspectRatio="none">${r}</svg>`})();
$("#modes").innerHTML=MODES.map(m=>`<button class="mode${m[0]==mode?" sel":""}" data-m="${m[0]}"><strong>${m[1]}</strong><small>${m[2]}</small></button>`).join("");
$("#modes").onclick=e=>{const b=e.target.closest(".mode");if(!b)return;mode=b.dataset.m;document.querySelectorAll(".mode").forEach(x=>x.classList.toggle("sel",x===b));beep(520,.06)};
// audio (synthesised, royalty-free) + optional user soundtrack
let ac,master,drone,custom,musicOn=false;
function ctx(){if(!ac){ac=new (window.AudioContext||window.webkitAudioContext)();master=ac.createGain();master.gain.value=.5;master.connect(ac.destination)}if(ac.state=="suspended")ac.resume();return ac}
function beep(f,d,t="sine",v=.15,f2){try{const c=ctx(),o=c.createOscillator(),g=c.createGain();o.type=t;o.frequency.setValueAtTime(f,c.currentTime);if(f2)o.frequency.linearRampToValueAtTime(f2,c.currentTime+d);g.gain.setValueAtTime(v,c.currentTime);g.gain.exponentialRampToValueAtTime(.001,c.currentTime+d);o.connect(g).connect(master);o.start();o.stop(c.currentTime+d)}catch(e){}}
function startDrone(){const c=ctx();const g=c.createGain();g.gain.value=0;g.gain.linearRampToValueAtTime(.12,c.currentTime+2);g.connect(master);const lp=c.createBiquadFilter();lp.type="lowpass";lp.frequency.value=380;lp.connect(g);
const os=[55,82.4,110,164.8].map((f,n)=>{const o=c.createOscillator();o.type=n%2?"sawtooth":"triangle";o.frequency.value=f*(1+n*.002);o.connect(lp);o.start();return o});
const lfo=c.createOscillator(),lg=c.createGain();lfo.frequency.value=.12;lg.gain.value=160;lfo.connect(lg).connect(lp.frequency);lfo.start();drone={g,os:os.concat(lfo)}}
function startDrone(){const c=ctx();const g=c.createGain();g.gain.value=0;g.gain.linearRampToValueAtTime(.14,c.currentTime+2);g.connect(master);
const dl=c.createDelay();dl.delayTime.value=.45;const fb=c.createGain();fb.gain.value=.4;dl.connect(fb);fb.connect(dl);dl.connect(g);
const lp=c.createBiquadFilter();lp.type="lowpass";lp.frequency.value=420;lp.connect(g);
const pad=[55,82.4,130.8,164.8].map((f,n)=>{const o=c.createOscillator();o.type=n%2?"sawtooth":"triangle";o.frequency.value=f*(1+n*.0015);o.connect(lp);o.start();return o});
const lfo=c.createOscillator(),lg=c.createGain();lfo.frequency.value=.1;lg.gain.value=180;lfo.connect(lg).connect(lp.frequency);lfo.start();
const roots=[55,43.65,49,41.2],sc=[440,523.25,659.25,587.33,493.88,392];let b=0;
const note=(f,t,d,type,v,out)=>{const o=c.createOscillator(),e=c.createGain();o.type=type;o.frequency.value=f;e.gain.setValueAtTime(0,t);e.gain.linearRampToValueAtTime(v,t+.02);e.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(e);e.connect(out);o.start(t);o.stop(t+d+.05)};
const iv=setInterval(()=>{const t=c.currentTime;note(roots[b%4],t,1.6,"sine",.5,g);if(b%2==0&&Math.random()<.8)note(sc[Math.random()*sc.length|0],t+.5,1.2,"triangle",.12,dl);b++},2000);
drone={g,os:pad.concat([lfo,{stop(){clearInterval(iv)}}])}}
function stopDrone(){if(!drone)return;const d=drone;d.g.gain.linearRampToValueAtTime(0,ac.currentTime+.8);setTimeout(()=>d.os.forEach(o=>o.stop()),900);drone=null}
$("#mus").onclick=()=>{musicOn=!musicOn;setMus();$("#mus").classList.toggle("on",musicOn);
if(musicOn){custom?custom.play():startDrone()}else{custom&&custom.pause();stopDrone()}};
$("#file").onchange=e=>{const f=e.target.files[0];if(!f)return;if(custom)custom.pause();custom=new Audio(URL.createObjectURL(f));custom.loop=true;stopDrone();musicOn=true;setMus();$("#mus").classList.add("on");custom.play()};
// game
function begin(){
let p=Q.filter(q=>mode=="easy"?q[1]==0:mode=="hard"?q[1]>0:true);
deck=sh(p);if(mode!="survive")deck=deck.slice(0,15);
i=0;score=right=wrong=skip=0;show("game");next()}
function next(){
if(i>=deck.length)return finish();
const q=deck[i];locked=false;
$("#qn").textContent=mode=="survive"?`#${i+1}`:`${i+1}/${deck.length}`;
$("#cat").textContent=L=="ar"&&CAT[q[0]]||q[0];$("#sc").textContent=score;$("#q").textContent=L=="ar"&&QA[Q.indexOf(q)]||q[2];
const opts=sh(q.slice(3).map((t,n)=>({t,ok:n==0})));
$("#ans").innerHTML=opts.map((o,n)=>`<button class="a" data-ok="${o.ok?1:0}"><i>${"ABCD"[n]}</i>${o.t}</button>`).join("");
deadline=performance.now()+10000;last=10;$("#tnum").textContent=10;$("#tnum").classList.remove("warn");
cancelAnimationFrame(raf);raf=requestAnimationFrame(tick)}
function tick(){
const left=Math.max(0,deadline-performance.now());
$("#bar").style.transform=`scaleX(${left/10000})`;
const s=Math.ceil(left/1000);
if(s!=last){last=s;$("#tnum").textContent=s;if(s<=3&&s>0){$("#tnum").classList.add("warn");beep(880,.12,"square",.1)}}
if(left<=0&&!locked)return timeout();
if(!locked)raf=requestAnimationFrame(tick)}
document.addEventListener("visibilitychange",()=>{if(!document.hidden&&!locked&&performance.now()>=deadline)timeout()});
$("#ans").onclick=e=>{const b=e.target.closest(".a");if(!b||locked)return;lock();const ok=b.dataset.ok=="1";
document.querySelectorAll(".a").forEach(x=>{x.disabled=true;if(x.dataset.ok=="1")x.classList.add("ok")});
if(ok){right++;score+=100;beep(660,.15,"triangle",.2,990)}else{wrong++;b.classList.add("no");beep(200,.35,"sawtooth",.18,90)}
$("#sc").textContent=score;advance(!ok)};
function lock(){locked=true;cancelAnimationFrame(raf)}
function timeout(){lock();skip++;document.querySelectorAll(".a").forEach(x=>{x.disabled=true;if(x.dataset.ok=="1")x.classList.add("ok")});beep(160,.5,"sawtooth",.18,70);advance(true)}
function advance(bad){clearTimeout(wait);wait=setTimeout(()=>{if(bad&&mode=="survive")return finish();i++;next()},1300)}
function finish(){
lock();clearTimeout(wait);const n=right+wrong+skip||1,acc=Math.round(right/n*100);
const R=acc>=90?["Gaming Legend","Flawless. Absolute legend."]:acc>=70?["Elite Player","Sharp reflexes and serious knowledge."]:acc>=50?["Experienced Gamer","Solid run. A few more missions and you are elite."]:["New Player","Every legend starts somewhere. Hit replay."];
$("#rk").textContent=R[0];$("#msg").textContent=R[1]+(mode=="survive"?` Survived ${right} question${right==1?"":"s"}.`:"");
$("#stats").innerHTML=[["Final score",score],["Accuracy",acc+"%"],["Correct",right],["Incorrect",wrong],["Skipped",skip]].map(s=>`<div class="st"><span>${s[0]}</span><b>${s[1]}</b></div>`).join("");
show("end");endLang()}
let L="en";
const CAT={"General":"عام","Nintendo":"نينتندو","PlayStation / Xbox":"بلايستيشن / إكسبوكس","Minecraft":"ماينكرافت","Fortnite":"فورتنايت","Call of Duty":"كول أوف ديوتي","FIFA / FC":"فيفا / FC","Roblox":"روبلوكس","Red Dead":"ريد ديد","Assassin's Creed":"أساسنز كريد","Resident Evil":"ريزدنت إيفل","God of War":"غود أوف وور","The Last of Us":"ذا لاست أوف أس","Elden Ring":"إلدن رينغ","League of Legends":"ليغ أوف ليجندز","Counter-Strike":"كاونتر سترايك","Valorant":"فالورانت"};
const MODES_AR=[["mixed","مختلط","من كل الفئات"],["easy","الوضع السهل","أسئلة للمبتدئين"],["hard","وضع هاردكور","متوسط وصعب فقط"],["random","التحدي العشوائي","أي سؤال وأي مستوى"],["survive","وضع البقاء","خطأ واحد ينهي اللعبة"]];
const RK={"Gaming Legend":["أسطورة الألعاب","أداء مذهل. أسطورة حقيقية."],"Elite Player":["لاعب نخبة","ردود فعل حادة ومعرفة قوية."],"Experienced Gamer":["لاعب خبير","جولة ممتازة. بضع مهمات أخرى وتصبح نخبة."],"New Player":["لاعب جديد","كل أسطورة تبدأ من مكان ما. أعد المحاولة."]};
const QA=["ما المدينة الخيالية التي تدور فيها أحداث GTA IV؟","من هو بطل GTA IV؟","ما المدينة الحقيقية التي ألهمت GTA: Vice City؟","في أي عام صدرت GTA IV؟","ما الاستوديو المطوّر الرئيسي لـ GTA V؟","من ابتكر Minecraft؟","ما الكتلة اللازمة لبناء بوابة النذر (Nether)؟","أي زعيم يعيش في بُعد The End؟","كم دفعت مايكروسوفت للاستحواذ على Mojang عام 2014؟","أي شركة طوّرت Fortnite؟","ما العملة داخل لعبة Fortnite؟","في أي عام أُطلقت Fortnite Battle Royale؟","أي طور في Call of Duty هو باتل رويال مجاني؟","أي لعبة قدّمت طور الزومبي لأول مرة؟","أي استوديو صنع أول Call of Duty (2003)؟","إلى ماذا أُعيدت تسمية سلسلة FIFA عام 2023؟","ما اسم الطور الشهير لجمع البطاقات في FIFA؟","ما العملة المميزة في Roblox؟","ألعاب Roblox تُبرمج بنسخة من أي لغة؟","من بطل Red Dead Redemption 2؟","من يقود عصابة فان دير ليند؟","أي قاتل هو بطل Assassin's Creed II؟","أين تدور أحداث Assassin's Creed Origins؟","من بطل العصر الحديث في أولى ألعاب Assassin's Creed؟","أي شركة تتسبب تجاربها في تفشي الوباء في Resident Evil؟","أي مدينة تُدمَّر في Resident Evil 2 و3؟","من بطل Resident Evil 4؟","من بطل God of War؟","أي أساطير يستكشفها God of War لعام 2018؟","من حارس إيلي في The Last of Us؟","أي فطر يسبب العدوى في The Last of Us؟","أي استوديو طوّر The Last of Us؟","أي استوديو طوّر Elden Ring؟","أي كاتب ساهم في أساطير عالم Elden Ring؟","ما اسم عالم Elden Ring؟","أي استوديو صنع League of Legends؟","ما اسم الخريطة الرئيسية في League of Legends؟","بدأت Counter-Strike كتعديل (mod) لأي لعبة؟","أي خريطة شهيرة في Counter-Strike تبدأ بـ de_؟","أي استوديو صنع Valorant؟","أي عميل في Valorant يستطيع إحياء زملائه؟","من ابتكر ماريو؟","في أي عام صدر Nintendo Switch الأصلي؟","ما اسم بطل The Legend of Zelda؟","من طوّر سلسلة Halo؟","في أي عام صدر Xbox الأصلي؟","ما اسم أول جهاز ألعاب من سوني؟","أي شخصية صفراء تأكل النقاط وتتجنب الأشباح؟","أي لعبة كلاسيكية ابتكرها أليكسي باجيتنوف؟","أي شركة صنعت لعبة Pong الأركيد عام 1972؟","في أي عام صدرت Super Mario Bros. في اليابان؟"];
function setMus(){const a=L=="ar";$("#mus").textContent=(a?"الموسيقى: ":"Music: ")+(musicOn?(a?"تشغيل":"on"):(a?"إيقاف":"off"));$("#mus").classList.toggle("on",musicOn)}
function endLang(){if(L!="ar")return;const r=RK[$("#rk").textContent];$("#rk").textContent=r[0];$("#msg").textContent=r[1]+(mode=="survive"?` نجوت من ${right} سؤال.`:"");document.querySelectorAll(".st span").forEach((s,n)=>s.textContent=["النتيجة النهائية","الدقة","صحيحة","خاطئة","تم تخطيها"][n])}
function applyLang(){const a=L=="ar";document.documentElement.lang=a?"ar":"en";document.documentElement.dir=a?"rtl":"ltr";
$("#home h1").innerHTML=a?"اختبار<b>الألعاب الأسطوري</b>":"Ultimate<b>Gaming Quiz</b>";
$("#home .sub").textContent=a?"ما مدى معرفتك الحقيقية بألعاب الفيديو؟":"How much do you really know about video games?";
$("#home .intro").textContent=a?"مرحباً بك أيها اللاعب. عشر ثوانٍ لكل سؤال وإجابة واحدة فقط. من GTA إلى Elden Ring ومن Minecraft إلى Valorant — أثبت أنك لاعب حقيقي.":"Welcome, player. Ten seconds per question, one shot per answer. From GTA to Elden Ring, Minecraft to Valorant — prove you are a real gamer.";
$("#start").textContent=a?"ابدأ الاختبار":"Start Quiz";$("#again").textContent=a?"العب مجدداً":"Play Again";$("#homeb").textContent=a?"العودة للرئيسية":"Return to Home";
$("#file").parentNode.firstChild.textContent=a?"حمّل موسيقى GTA IV":"Load GTA IV music";$("#lang").textContent=a?"English":"العربية";
$("#end .sub").textContent=a?"انتهت الجولة":"Round complete";
$(".hud div:first-child").firstChild.textContent=a?"السؤال ":"Question ";$(".hud div:last-child").firstChild.textContent=a?"النتيجة ":"Score ";
document.title=a?"اختبار الألعاب الأسطوري":"Ultimate Gaming Quiz";
$("#modes").innerHTML=(a?MODES_AR:MODES).map(m=>`<button class="mode${m[0]==mode?" sel":""}" data-m="${m[0]}"><strong>${m[1]}</strong><small>${m[2]}</small></button>`).join("");setMus()}
$("#lang").onclick=()=>{L=L=="ar"?"en":"ar";applyLang()};
$("#start").onclick=()=>{ctx();begin()};$("#again").onclick=begin;
$("#homeb").onclick=()=>{lock();show("home")};