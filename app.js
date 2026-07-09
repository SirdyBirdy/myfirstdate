/* ================================================================
   myfirstdate.lol , app.js
   ================================================================ */

/* ================================================================
   CATEGORIES
   ================================================================ */
var CATS = [
  { id:"all",   label:"Mix It Up",  emoji:"◆", desc:"A bit of everything" },
  { id:"spark", label:"Spark",      emoji:"○", desc:"Light and easy" },
  { id:"laugh", label:"Laugh",      emoji:"◇", desc:"Funny, no filter" },
  { id:"deep",  label:"Real Talk",  emoji:"●", desc:"Actual honesty" },
  { id:"wild",  label:"Wild Card",  emoji:"◈", desc:"A little strange" },
  { id:"dream", label:"What's Next",emoji:"◐", desc:"Future and hopes" },
  { id:"quick", label:"Quick Fire", emoji:"⚡", desc:"This or that, fast" }
];

var CATS_SPICY = CATS.concat([
  { id:"spicy", label:"After Dark", emoji:"✦", desc:"Adults only" }
]);

/* ================================================================
   QUESTIONS
   Tokens: {they} {their} {them} for partner pronoun
   ================================================================ */
var QS = [
  /* SPARK */
  {id:1,  c:"spark", q:"What's a small ritual that makes your day feel like yours?"},
  {id:2,  c:"spark", q:"What made you smile before you even got here tonight?"},
  {id:3,  c:"spark", q:"What's a place in this city you'd want to show someone new?"},
  {id:4,  c:"spark", q:"What song instantly changes your mood?"},
  {id:5,  c:"spark", q:"What's the best thing you've eaten this month?"},
  {id:6,  c:"spark", q:"What's a random skill you're quietly good at?"},
  {id:7,  c:"spark", q:"What's something you've gotten really into lately?"},
  {id:8,  c:"spark", q:"Free Saturday, zero plans. What do you actually do?"},
  {id:9,  c:"spark", q:"What's a comfort food you'd never apologize for?"},
  {id:10, c:"spark", q:"What's the last thing that made you laugh out loud alone?"},
  {id:11, c:"spark", q:"What does a genuinely good morning look like for you?"},
  {id:12, c:"spark", q:"What's a small thing that instantly makes you trust someone?"},

  /* LAUGH */
  {id:13, c:"laugh", q:"What's the most ridiculous thing you've googled this year?"},
  {id:14, c:"laugh", q:"What's a lie you told as a kid that spiraled completely out of control?"},
  {id:15, c:"laugh", q:"What's your most useless talent?"},
  {id:16, c:"laugh", q:"What's a food combination you love that people judge you for?"},
  {id:17, c:"laugh", q:"What's the worst haircut you've ever had?"},
  {id:18, c:"laugh", q:"What's a phrase you overuse without realizing it?"},
  {id:19, c:"laugh", q:"What's the pettiest thing you've ever held a grudge about?"},
  {id:20, c:"laugh", q:"What's a moment you were sure you looked cool and definitely didn't?"},
  {id:21, c:"laugh", q:"What's your karaoke song, no judgment allowed?"},
  {id:22, c:"laugh", q:"What's the strangest thing you believed for way too long?"},
  {id:23, c:"laugh", q:"Which app on your phone would surprise people the most?"},
  {id:24, c:"laugh", q:"What's your most dramatic reaction to something completely minor?"},

  /* DEEP */
  {id:25, c:"deep", q:"What's something you believed for years that you don't anymore?"},
  {id:26, c:"deep", q:"What does actually feeling at ease look like for you?"},
  {id:27, c:"deep", q:"What's a boundary you had to learn to set?"},
  {id:28, c:"deep", q:"Who's someone who quietly shaped how you see the world?"},
  {id:29, c:"deep", q:"What's something you're proud of that not many people know?"},
  {id:30, c:"deep", q:"What's a fear you've slowly made peace with?"},
  {id:31, c:"deep", q:"What do you wish people understood about you sooner?"},
  {id:32, c:"deep", q:"What does a meaningful life look like to you right now?"},
  {id:33, c:"deep", q:"What's something you needed to hear when you were younger?"},
  {id:34, c:"deep", q:"What's a risk that ended up paying off?"},
  {id:35, c:"deep", q:"What's a part of yourself you're still getting to know?"},
  {id:36, c:"deep", q:"What would you want to be remembered for?"},

  /* WILD */
  {id:37, c:"wild", q:"If you could instantly master one random skill, what would it be?"},
  {id:38, c:"wild", q:"What's a conspiracy theory you secretly find entertaining?"},
  {id:39, c:"wild", q:"If your life had a soundtrack right now, what genre would it be?"},
  {id:40, c:"wild", q:"What animal do you feel like today, honestly?"},
  {id:41, c:"wild", q:"Stranded for a week with only three items. What are they?"},
  {id:42, c:"wild", q:"You run the world for one day. What's your first rule?"},
  {id:43, c:"wild", q:"What's the weirdest thing you've done to try to fall asleep?"},
  {id:44, c:"wild", q:"Swap lives with a stranger for a day. What would you want to learn?"},
  {id:45, c:"wild", q:"What's your villain origin story, hypothetically speaking?"},
  {id:46, c:"wild", q:"What's a made up superstition you secretly follow?"},
  {id:47, c:"wild", q:"If you could add one holiday to the calendar, what would it celebrate?"},

  /* DREAM */
  {id:48, c:"dream", q:"What's something you want to try before you feel too settled to?"},
  {id:49, c:"dream", q:"Where do you actually want to be living in five years?"},
  {id:50, c:"dream", q:"What does success look like when it has nothing to do with money?"},
  {id:51, c:"dream", q:"What's a skill you wish you'd started learning years ago?"},
  {id:52, c:"dream", q:"What's a trip you think about more than you'd admit?"},
  {id:53, c:"dream", q:"What would you build or make if you had unlimited time?"},
  {id:54, c:"dream", q:"What does an ordinary Tuesday look like for you, ten years from now?"},
  {id:55, c:"dream", q:"What's something you want more of in your life right now?"},
  {id:56, c:"dream", q:"What's a goal you haven't told many people about?"},
  {id:57, c:"dream", q:"What's a small legacy you'd want to leave behind?"},
  {id:58, c:"dream", q:"What would you do differently if you weren't afraid of judgment?"}
];

/* ================================================================
   QUICK FIRE , this or that. a and b render as tap chips
   ================================================================ */
var QS_QUICK = [
  {id:201, c:"quick", q:"Morning person or night owl?", a:"Morning", b:"Night owl"},
  {id:202, c:"quick", q:"Mountains or ocean?", a:"Mountains", b:"Ocean"},
  {id:203, c:"quick", q:"Plan every detail or wing it?", a:"Plan it out", b:"Wing it"},
  {id:204, c:"quick", q:"Texts or calls?", a:"Texts", b:"Calls"},
  {id:205, c:"quick", q:"Coffee or tea?", a:"Coffee", b:"Tea"},
  {id:206, c:"quick", q:"City life or small town?", a:"City", b:"Small town"},
  {id:207, c:"quick", q:"Save dessert for later or eat it first?", a:"Save it", b:"Eat it first"},
  {id:208, c:"quick", q:"Window seat or aisle seat?", a:"Window", b:"Aisle"},
  {id:209, c:"quick", q:"Early to the airport or cutting it close?", a:"Early", b:"Cutting it close"},
  {id:210, c:"quick", q:"Finish the book or binge the show?", a:"Finish the book", b:"Binge the show"},
  {id:211, c:"quick", q:"Quiet night in or spontaneous night out?", a:"Night in", b:"Night out"},
  {id:212, c:"quick", q:"Sunrise or sunset?", a:"Sunrise", b:"Sunset"},
  {id:213, c:"quick", q:"Handwritten notes or voice notes?", a:"Handwritten", b:"Voice notes"},
  {id:214, c:"quick", q:"Adventure trip or relaxing trip?", a:"Adventure", b:"Relaxing"}
];

/* ================================================================
   SPICY QUESTIONS , flirty and honest, adults only
   ================================================================ */
var QS_SPICY = [
  {id:101, c:"spicy", q:"What's the first thing you noticed about me?"},
  {id:102, c:"spicy", q:"What's something you find attractive that has nothing to do with looks?"},
  {id:103, c:"spicy", q:"What's your idea of a really good second date?"},
  {id:104, c:"spicy", q:"What's a compliment you don't hear often enough?"},
  {id:105, c:"spicy", q:"Do you lean into plans or spontaneity once things get serious?"},
  {id:106, c:"spicy", q:"What makes you feel most at ease getting close to someone?"},
  {id:107, c:"spicy", q:"What's something you've never told a date this early?"},
  {id:108, c:"spicy", q:"What's a small gesture that means more to you than people realize?"},
  {id:109, c:"spicy", q:"Do you like being pursued subtly, or do you prefer it direct?"},
  {id:110, c:"spicy", q:"What's your version of a perfect quiet night together?"},
  {id:111, c:"spicy", q:"What's something you're surprisingly confident about?"},
  {id:112, c:"spicy", q:"What's a boundary you always set early and actually mean?"},
  {id:113, c:"spicy", q:"What do you need to feel safe getting close to someone?"},
  {id:114, c:"spicy", q:"What instantly builds trust for you, physically speaking?"},
  {id:115, c:"spicy", q:"What's a memory you'd want someone to make with you?"},
  {id:116, c:"spicy", q:"Do you believe in taking things slow, or do you just know?"},
  {id:117, c:"spicy", q:"What's the most attractive thing someone can do without saying a word?"},
  {id:118, c:"spicy", q:"What would you want me to know before this goes further?"},
  {id:119, c:"spicy", q:"What's something you want more of from people you date?"},
  {id:120, c:"spicy", q:"What's a moment that made you feel completely wanted?"}
];

/* ================================================================
   PALETTES , iOS style accent duotones
   ================================================================ */
var PAL = [
  {p1:"#0A84FF",p1d:"#0040DD",p2:"#5E5CE6",p2d:"#2C2A80"},
  {p1:"#FF375F",p1d:"#A80031",p2:"#FF9F0A",p2d:"#B25900"},
  {p1:"#30D158",p1d:"#0A8A31",p2:"#64D2FF",p2d:"#0071A4"},
  {p1:"#BF5AF2",p1d:"#6B1B8C",p2:"#FF375F",p2d:"#A80031"},
  {p1:"#FF9F0A",p1d:"#B25900",p2:"#FF453A",p2d:"#A6281B"},
  {p1:"#64D2FF",p1d:"#0071A4",p2:"#0A84FF",p2d:"#0040DD"}
];

var PAL_SPICY = [
  {p1:"#FF2D55",p1d:"#7A0026",p2:"#BF5AF2",p2d:"#5B1B7A"},
  {p1:"#FF375F",p1d:"#8A0030",p2:"#FF2D55",p2d:"#6B0026"},
  {p1:"#BF5AF2",p1d:"#5B1B7A",p2:"#FF375F",p2d:"#8A0030"},
  {p1:"#FF453A",p1d:"#7A1108",p2:"#BF5AF2",p2d:"#5B1B7A"}
];

/* ================================================================
   PRONOUNS
   ================================================================ */
var PRONOUNS = {
  any: {they:"they",  their:"their", them:"them"},
  mw:  {they:"she",  their:"her",   them:"her" },
  ww:  {they:"she",  their:"her",   them:"her" },
  mm:  {they:"he",   their:"his",   them:"him" },
  nb:  {they:"they", their:"their", them:"them"}
};

/* ================================================================
   STATE
   ================================================================ */
var selCat    = "all", coupleType = "any";
var name1     = "", name2 = "";
var turn      = null, started = false;
var shown     = 0, turns = 0;
var used      = {}, pool = [];
var favourites  = [];
var currentQ    = null;
var currentWho  = null;
var tooltipOpen = false;
var spicyMode   = false;
var quickFireActive = false;
var savedPool = null, savedUsed = null, savedShown = 0; // to resume main pool after a quick fire detour
var toastTimer = null;
var lastMilestone = 0;

/* ================================================================
   DOM HELPERS
   ================================================================ */
function g(id){ return document.getElementById(id); }

var p1el    = g("p1"), p2el = g("p2");
var l1      = g("l1"), s1 = g("s1"), l2 = g("l2"), s2 = g("s2");
var sd      = g("sd"), sl = g("sl");
var ov      = g("ov");
var oqTop   = g("oq-top"), otTop = g("ot-top"), ocTop = g("oc-top");
var oqBot   = g("oq-bot"), otBot = g("ot-bot"), ocBot = g("oc-bot");
var chipsTop = g("chips-top"), chipsBot = g("chips-bot");
var chipATop = g("chip-a-top"), chipBTop = g("chip-b-top");
var chipABot = g("chip-a-bot"), chipBBot = g("chip-b-bot");
var favBtn  = g("fav-btn");
var deepWarn = g("deep-warn");
var tooltip  = g("tooltip");
var toastEl  = g("toast");

/* ================================================================
   PALETTE
   ================================================================ */
var activePal = PAL[0];

function palette(){
  var pals = spicyMode ? PAL_SPICY : PAL;
  activePal = pals[Math.floor(Math.random() * pals.length)];
  applyPal(activePal);
}

function applyPal(p){
  var r = document.documentElement.style;
  r.setProperty("--p1",  p.p1);  r.setProperty("--p1d", p.p1d);
  r.setProperty("--p2",  p.p2);  r.setProperty("--p2d", p.p2d);
  p1el.style.background = "linear-gradient(160deg," + p.p1 + "," + p.p1d + ")";
  p2el.style.background = "linear-gradient(160deg," + p.p2 + "," + p.p2d + ")";
  document.querySelectorAll(".logo b")[0].style.background = p.p1;
  document.querySelectorAll(".logo b")[1].style.background = p.p2;
  g("sw1").style.background = p.p1;
  g("sw2").style.background = p.p2;
}

/* ================================================================
   HAPTICS
   ================================================================ */
function buzz(pattern){
  if(navigator.vibrate) navigator.vibrate(pattern || 10);
}

/* ================================================================
   COUPLE TYPE BUTTONS
   ================================================================ */
document.querySelectorAll(".ctype-btn").forEach(function(btn){
  btn.onclick = function(){
    buzz(8);
    document.querySelectorAll(".ctype-btn").forEach(function(b){ b.classList.remove("on"); });
    btn.classList.add("on");
    coupleType = btn.dataset.ct;
  };
});

/* ================================================================
   VIBE BUTTONS , rebuilt when mode changes
   ================================================================ */
function buildVibeButtons(){
  var cats = spicyMode ? CATS_SPICY : CATS;
  var vg   = g("vg");
  vg.innerHTML = "";
  selCat = "all";
  cats.forEach(function(cat){
    var b = document.createElement("button");
    b.className = "vbtn" + (cat.id === "all" || cat.id === "spicy" ? " wide" : "");
    if(cat.id === "all") b.classList.add("on");
    b.innerHTML = '<span class="ve">'+cat.emoji+'</span>'
                + '<span class="vn">'+cat.label+'</span>'
                + '<span class="vd">'+cat.desc+'</span>';
    b.onclick = function(){
      buzz(8);
      document.querySelectorAll(".vbtn").forEach(function(x){ x.classList.remove("on"); });
      b.classList.add("on");
      selCat = cat.id;
      deepWarn.classList.toggle("show", cat.id === "deep");
    };
    vg.appendChild(b);
  });
}

/* ================================================================
   SPICY TOGGLE + AGE GATE
   ================================================================ */
var ageGate = g("age-gate");

g("spicy-toggle").onclick = function(){
  buzz(8);
  if(spicyMode){
    spicyMode = false;
    document.body.classList.remove("spicy-mode");
    g("spicy-toggle").classList.remove("active");
    g("spicy-badge").textContent = "OFF";
    buildVibeButtons();
  } else {
    ageGate.classList.add("show");
  }
};

g("ag-yes").onclick = function(){
  buzz([8,30,8]);
  spicyMode = true;
  ageGate.classList.remove("show");
  document.body.classList.add("spicy-mode");
  g("spicy-toggle").classList.add("active");
  g("spicy-badge").textContent = "ON";
  buildVibeButtons();
};

g("ag-no").onclick = function(){
  buzz(8);
  ageGate.classList.remove("show");
};

/* ================================================================
   SCREEN SWITCH
   ================================================================ */
function show(id){
  ["welcome","game","end"].forEach(function(s){
    g(s).classList.toggle("active", s === id);
  });
  document.body.classList.toggle("game-active", id !== "welcome");
  if(id === "welcome") window.scrollTo(0, 0);
}

/* ================================================================
   COUPLE TYPE COLLAPSE TOGGLE
   ================================================================ */
var coupleToggle = g("couple-toggle");
var coupleBox    = g("couple-box");
coupleToggle.onclick = function(){
  buzz(8);
  coupleBox.classList.toggle("open");
  coupleToggle.classList.toggle("open");
};

/* ================================================================
   PRONOUN SUBSTITUTION
   ================================================================ */
function fillPronouns(text){
  var pr = PRONOUNS[coupleType] || PRONOUNS.any;
  return text
    .replace(/\{they\}/g,  pr.they)
    .replace(/\{their\}/g, pr.their)
    .replace(/\{them\}/g,  pr.them);
}

/* ================================================================
   MASTER POOL (excludes quick fire unless explicitly chosen)
   ================================================================ */
function allQuestions(){
  var base = spicyMode ? QS.concat(QS_SPICY) : QS.slice();
  return base;
}

function buildPool(cat){
  if(cat === "quick") return QS_QUICK.slice();
  var base = allQuestions();
  return cat === "all" ? base : base.filter(function(q){ return q.c === cat; });
}

/* ================================================================
   START
   ================================================================ */
g("go").onclick = function(){
  buzz(12);
  pool = buildPool(selCat);
  if(!pool.length) return;

  name1 = g("n1").value.trim() || "You";
  name2 = g("n2").value.trim() || "Them";

  palette();
  used={}; shown=0; turns=0; turn=null; started=false; favourites=[]; currentQ=null;
  lastMilestone = 0;
  g("prog").style.width = "0%";
  resetPanels();
  show("game");
};

function resetPanels(){
  p1el.classList.remove("dim","big"); p2el.classList.remove("dim","big");
  l1.textContent = name1||"You";   s1.textContent = "tap to start";
  l2.textContent = name2||"Them";  s2.textContent = "tap to start";
  p1el.querySelector(".p-icon").textContent = "↑";
  p2el.querySelector(".p-icon").textContent = "↑";
  sd.style.background = "#2c2c2e"; sl.textContent = "Either of you starts";
}

/* ================================================================
   PANEL TAPS
   ================================================================ */
p1el.addEventListener("click", function(e){ tap("p1", e); });
p2el.addEventListener("click", function(e){ tap("p2", e); });

function tap(who, e){
  if(ov.classList.contains("show")) return;
  if(tooltipOpen) return;
  if(!started){ turn = who; started = true; }
  else if(turn !== who) return;
  buzz(12);
  makeRipple(who === "p1" ? p1el : p2el, e);
  showPrompt(who);
}

function makeRipple(el, e){
  var rect = el.getBoundingClientRect();
  var r    = document.createElement("div");
  r.className = "ripple";
  var sz = 80;
  var cx = (e.clientX || rect.left + rect.width/2)  - rect.left - sz/2;
  var cy = (e.clientY || rect.top  + rect.height/2) - rect.top  - sz/2;
  r.style.cssText = "width:"+sz+"px;height:"+sz+"px;left:"+cx+"px;top:"+cy+"px";
  el.appendChild(r);
  setTimeout(function(){ r.remove(); }, 600);
}

/* ================================================================
   QUICK FIRE , jump into a short this or that detour, then resume
   ================================================================ */
g("quickfire-btn").onclick = function(){
  if(ov.classList.contains("show")) return;
  buzz([8,20,8]);
  if(!quickFireActive){
    quickFireActive = true;
    savedPool = pool; savedUsed = used; savedShown = shown;
    pool = QS_QUICK.slice(); used = {}; shown = 0;
    showToast("Quick round: five fast rounds");
  }
  var who = turn || "p1";
  if(!started){ turn = who; started = true; }
  showPrompt(who);
};

function maybeEndQuickFire(){
  if(quickFireActive && shown >= 5){
    quickFireActive = false;
    pool = savedPool; used = savedUsed; shown = savedShown;
    showToast("Back to the main deck");
  }
}

/* ================================================================
   CONVERSATION METER
   ================================================================ */
function showToast(msg){
  clearTimeout(toastTimer);
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  toastTimer = setTimeout(function(){ toastEl.classList.remove("show"); }, 2200);
}

function checkMilestone(pct){
  if(quickFireActive) return;
  var steps = [25,50,75,100];
  steps.forEach(function(s){
    if(pct >= s && lastMilestone < s){
      lastMilestone = s;
      if(s===25) showToast("Warming up");
      if(s===50) showToast("You're in the flow");
      if(s===75) showToast("Deep in it now");
      if(s===100) showToast("You made it through the whole deck");
    }
  });
}

/* ================================================================
   SHOW PROMPT
   ================================================================ */
function showPrompt(who){
  var rem = pool.filter(function(q){ return !used[q.id]; });
  if(!rem.length){
    if(quickFireActive){ quickFireActive = false; pool = savedPool; used = savedUsed; shown = savedShown; showToast("Quick round done"); return; }
    endGame("all"); return;
  }

  var q       = rem[Math.floor(Math.random() * rem.length)];
  used[q.id]  = true;
  currentQ    = q;
  currentWho  = who;

  var allCats = spicyMode ? CATS_SPICY : CATS;
  var cat  = allCats.find(function(c){ return c.id === q.c; }) || allCats[1];
  var text = fillPronouns(q.q);
  var tag  = quickFireActive ? "⚡ Quick fire" : (cat.emoji + " " + cat.label);
  var ctr  = (shown+1) + " / " + pool.length;

  oqTop.textContent = text; otTop.textContent = tag; ocTop.textContent = ctr;
  oqBot.textContent = text; otBot.textContent = tag; ocBot.textContent = ctr;

  /* Quick fire chips */
  var isQuick = !!(q.a && q.b);
  [chipsTop, chipsBot].forEach(function(el){ el.classList.toggle("show", isQuick); });
  if(isQuick){
    chipATop.textContent = q.a; chipBTop.textContent = q.b;
    chipABot.textContent = q.a; chipBBot.textContent = q.b;
    [chipATop, chipBTop, chipABot, chipBBot].forEach(function(c){ c.classList.remove("picked"); });
  }

  /* Pulse animation */
  [oqTop, oqBot].forEach(function(el){
    el.classList.remove("fresh");
    void el.offsetWidth;
    el.classList.add("fresh");
  });

  /* Reset fav */
  favBtn.textContent = "○ save this";
  favBtn.classList.remove("loved");
  favBtn.style.display = isQuick ? "none" : "flex";

  ov.className = "show " + (who === "p1" ? "cp1" : "cp2");

  if(who === "p1"){
    p1el.classList.add("big"); p1el.classList.remove("dim");
    p2el.classList.add("dim"); p2el.classList.remove("big");
    sd.style.background = "var(--p1)";
  } else {
    p2el.classList.add("big"); p2el.classList.remove("dim");
    p1el.classList.add("dim"); p1el.classList.remove("big");
    sd.style.background = "var(--p2)";
  }
  shown++; turns++;

  if(!quickFireActive){
    var pct = Math.min(100, (shown / pool.length) * 100);
    g("prog").style.width = pct + "%";
    checkMilestone(pct);
  }
}

/* Chip taps, purely for fun, no hidden state since it's one shared screen */
[chipATop, chipBTop, chipABot, chipBBot].forEach(function(chip){
  chip.addEventListener("click", function(e){
    e.stopPropagation();
    buzz(8);
    chip.classList.toggle("picked");
  });
});

/* ================================================================
   SKIP
   ================================================================ */
g("skip-btn").onclick = function(){
  buzz([8,40,8]);
  if(currentQ) used[currentQ.id] = false;
  shown = Math.max(0, shown-1);
  turns = Math.max(0, turns-1);
  ov.className = "";
  showPrompt(currentWho);
};

/* ================================================================
   FAVOURITE
   ================================================================ */
favBtn.onclick = function(){
  if(!currentQ) return;
  var text    = fillPronouns(currentQ.q);
  var already = favourites.indexOf(text);
  if(already === -1){
    buzz([8,30,8]);
    favourites.push(text);
    favBtn.textContent = "● saved";
    favBtn.classList.add("loved");
  } else {
    buzz(8);
    favourites.splice(already, 1);
    favBtn.textContent = "○ save this";
    favBtn.classList.remove("loved");
  }
};

/* ================================================================
   DISMISS
   ================================================================ */
g("od").onclick = function(){
  buzz(12);
  ov.className = "";
  maybeEndQuickFire();
  turn = turn === "p1" ? "p2" : "p1";

  p1el.classList.remove("dim","big"); p2el.classList.remove("dim","big");

  if(turn === "p1"){
    p1el.classList.add("big"); p2el.classList.add("dim");
    sd.style.background = "var(--p1)"; sl.textContent = name1 + ", tap your side";
    l1.textContent = "Tap!"; s1.textContent = "your turn";
    l2.textContent = "..."; s2.textContent = "wait";
    p1el.querySelector(".p-icon").textContent = "↓";
    p2el.querySelector(".p-icon").textContent = "···";
  } else {
    p2el.classList.add("big"); p1el.classList.add("dim");
    sd.style.background = "var(--p2)"; sl.textContent = name2 + ", tap your side";
    l2.textContent = "Tap!"; s2.textContent = "your turn";
    l1.textContent = "..."; s1.textContent = "wait";
    p2el.querySelector(".p-icon").textContent = "↓";
    p1el.querySelector(".p-icon").textContent = "···";
  }
};

/* ================================================================
   HOW-TO TOOLTIP
   ================================================================ */
g("info-btn").onclick = function(e){
  e.stopPropagation();
  buzz(8);
  tooltipOpen = !tooltipOpen;
  tooltip.classList.toggle("show", tooltipOpen);
};
document.addEventListener("click", function(){
  if(tooltipOpen){ tooltipOpen = false; tooltip.classList.remove("show"); }
});

/* ================================================================
   END GAME
   ================================================================ */
g("qb").onclick = function(){ buzz(12); endGame("quit"); };

function endGame(why){
  ov.className = "";
  quickFireActive = false;
  g("ep").textContent = shown;
  g("et").textContent = turns;
  g("ef").textContent = favourites.length;
  g("emsg").textContent = why === "all"
    ? "You went through the whole deck"
    : "Hope you're already deep in conversation";

  var sec  = g("fav-section");
  var list = g("fav-list");
  list.innerHTML = "";
  if(favourites.length){
    favourites.forEach(function(text){
      var item = document.createElement("div");
      item.className   = "fav-item";
      item.textContent = text;
      list.appendChild(item);
    });
    sec.classList.add("has-favs");
  } else {
    sec.classList.remove("has-favs");
  }
  show("end");
}

g("ab").onclick = function(){
  buzz(12);
  pool = buildPool(selCat);
  palette(); used={}; shown=0; turns=0; turn=null; started=false; favourites=[]; currentQ=null;
  lastMilestone = 0;
  g("prog").style.width = "0%";
  resetPanels(); show("game");
};

g("hb").onclick = function(){ buzz(8); show("welcome"); };

/* ================================================================
   SHARE / COPY saved questions
   ================================================================ */
g("share-btn").onclick = function(){
  var btn = g("share-btn");
  if(!favourites.length){
    btn.textContent = "No saved questions yet";
    setTimeout(function(){
      btn.innerHTML = "⧉ Copy saved questions";
      btn.classList.remove("copied");
    }, 1800);
    return;
  }
  var text = "Questions from our date\n\n"
    + favourites.map(function(q,i){ return (i+1) + ". " + q; }).join("\n");
  if(navigator.share){
    navigator.share({ text: text }).catch(function(){});
  } else if(navigator.clipboard){
    navigator.clipboard.writeText(text).then(function(){
      btn.textContent = "Copied to clipboard";
      btn.classList.add("copied");
      setTimeout(function(){
        btn.innerHTML = "⧉ Copy saved questions";
        btn.classList.remove("copied");
      }, 2000);
    });
  }
};

/* ================================================================
   KEEPSAKE CARD , canvas generated, downloadable image
   ================================================================ */
g("keepsake-btn").onclick = function(){
  buzz(12);
  var btn = g("keepsake-btn");
  var canvas = document.createElement("canvas");
  var W = 1080, H = 1350;
  canvas.width = W; canvas.height = H;
  var ctx = canvas.getContext("2d");

  var pal = activePal;

  var grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, pal.p1d);
  grad.addColorStop(1, "#000000");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = pal.p1;
  ctx.globalAlpha = 0.35;
  ctx.beginPath(); ctx.arc(W*0.85, H*0.12, 260, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = pal.p2;
  ctx.beginPath(); ctx.arc(W*0.1, H*0.9, 300, 0, Math.PI*2); ctx.fill();
  ctx.globalAlpha = 1;

  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(255,255,255,0.55)";
  ctx.font = "600 30px -apple-system, sans-serif";
  ctx.fillText("MY FIRST DATE", W/2, 150);

  ctx.fillStyle = "#ffffff";
  ctx.font = "italic 600 76px Georgia, serif";
  var titleNames = (name1 && name1 !== "You" ? name1 : "You") + " & " + (name2 && name2 !== "Them" ? name2 : "them");
  ctx.fillText(titleNames, W/2, 250);

  var statsY = 420;
  var stats = [
    { n: shown, l: "PROMPTS" },
    { n: turns, l: "TURNS" },
    { n: favourites.length, l: "SAVED" }
  ];
  var slotW = W / 3;
  stats.forEach(function(s, i){
    var cx = slotW * i + slotW/2;
    ctx.font = "700 92px Georgia, serif";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(String(s.n), cx, statsY);
    ctx.font = "600 24px -apple-system, sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.fillText(s.l, cx, statsY + 40);
  });

  ctx.textAlign = "left";
  var qY = 620;
  ctx.font = "600 24px -apple-system, sans-serif";
  ctx.fillStyle = "rgba(255,255,255,0.5)";
  ctx.fillText(favourites.length ? "QUESTIONS WE SAVED" : "TONIGHT'S VIBE", 90, qY);

  qY += 60;
  var toDraw = favourites.length ? favourites.slice(0, 3) : ["Every question was new to us tonight."];
  toDraw.forEach(function(text){
    var lines = wrapText(ctx, text, W - 180, "500 40px -apple-system, sans-serif");
    ctx.font = "500 40px -apple-system, sans-serif";
    ctx.fillStyle = "#ffffff";
    lines.forEach(function(line){
      ctx.fillText(line, 90, qY);
      qY += 52;
    });
    qY += 36;
  });

  ctx.textAlign = "center";
  ctx.font = "600 26px -apple-system, sans-serif";
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.fillText("myfirstdate.lol", W/2, H - 70);

  canvas.toBlob(function(blob){
    var file = new File([blob], "my-first-date.png", { type: "image/png" });
    if(navigator.canShare && navigator.canShare({ files: [file] })){
      navigator.share({ files: [file], title: "My First Date" }).catch(function(){});
    } else {
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url; a.download = "my-first-date.png";
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(function(){ URL.revokeObjectURL(url); }, 4000);
    }
    btn.textContent = "Saved";
    setTimeout(function(){ btn.innerHTML = "◈ Save keepsake card"; }, 1800);
  }, "image/png");
};

function wrapText(ctx, text, maxWidth, font){
  ctx.font = font;
  var words = text.split(" ");
  var lines = [];
  var line = "";
  words.forEach(function(w){
    var test = line ? line + " " + w : w;
    if(ctx.measureText(test).width > maxWidth && line){
      lines.push(line);
      line = w;
    } else {
      line = test;
    }
  });
  if(line) lines.push(line);
  return lines;
}

/* ================================================================
   iOS scroll lock , only during game/end
   ================================================================ */
document.addEventListener("touchmove", function(e){
  if(document.body.classList.contains("game-active")) e.preventDefault();
}, { passive: false });

/* ================================================================
   INIT
   ================================================================ */
buildVibeButtons();
palette();
