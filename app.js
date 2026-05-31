/* ================================================================
   myfirstdate.lol — app.js
   ================================================================ */

/* ================================================================
   CATEGORIES
   ================================================================ */
var CATS = [
  { id:"all",   label:"Mix It Up", emoji:"🎲", desc:"Bit of everything" },
  { id:"spark", label:"Spark",     emoji:"✨", desc:"Light, feel-good"  },
  { id:"laugh", label:"Laugh",     emoji:"😂", desc:"Funny and silly"   },
  { id:"deep",  label:"Go Deep",   emoji:"🌊", desc:"Actual real talk"  },
  { id:"wild",  label:"Wild Card", emoji:"🃏", desc:"Weird and fun"     },
  { id:"dream", label:"Dream Big", emoji:"🌙", desc:"Future stuff"      }
];

var CATS_SPICY = [
  { id:"all",   label:"Mix It Up", emoji:"🎲", desc:"Bit of everything" },
  { id:"spark", label:"Spark",     emoji:"✨", desc:"Light, feel-good"  },
  { id:"laugh", label:"Laugh",     emoji:"😂", desc:"Funny and silly"   },
  { id:"deep",  label:"Go Deep",   emoji:"🌊", desc:"Actual real talk"  },
  { id:"wild",  label:"Wild Card", emoji:"🃏", desc:"Weird and fun"     },
  { id:"dream", label:"Dream Big", emoji:"🌙", desc:"Future stuff"      },
  { id:"spicy", label:"Spicy",     emoji:"🌶️", desc:"Adults only"      }
];

/* ================================================================
   QUESTIONS
   Tokens: {they} {their} {them} for partner pronoun
   ================================================================ */
var QS = [
  /* SPARK */
  {id:1,  c:"spark", q:"What's something tiny that actually made your week?"},
  {id:2,  c:"spark", q:"Last thing you did that felt genuinely good?"},
  {id:3,  c:"spark", q:"What's your ideal nothing-to-do day look like, actually?"},
  {id:4,  c:"spark", q:"Song you always skip to when it shuffles up?"},
  {id:5,  c:"spark", q:"Best meal you've had in your life. Walk me through it."},
  {id:6,  c:"spark", q:"What's a habit you have that you'd never explain to a stranger?"},
  {id:7,  c:"spark", q:"Hobby you keep saying you'll start. What is it?"},
  {id:8,  c:"spark", q:"Pick any city. You live there for a year. Where?"},
  {id:9,  c:"spark", q:"Something you're proud of that feels weird to say out loud?"},
  {id:10, c:"spark", q:"If you could only eat one country's food forever, which one?"},
  {id:11, c:"spark", q:"What does your version of a really good morning look like?"},
  {id:12, c:"spark", q:"Last thing you watched that you actually loved?"},

  /* LAUGH */
  {id:13, c:"laugh", q:"Most embarrassing thing you did while trying to look cool?"},
  {id:14, c:"laugh", q:"Show or movie you've rewatched a shameful number of times?"},
  {id:15, c:"laugh", q:"Worst advice you got that you actually followed?"},
  {id:16, c:"laugh", q:"What's your karaoke song? You have to have one."},
  {id:17, c:"laugh", q:"Food take you hold that would get you cancelled?"},
  {id:18, c:"laugh", q:"Irrational thing you're genuinely scared of?"},
  {id:19, c:"laugh", q:"Most unhinged thing you believed as a kid?"},
  {id:20, c:"laugh", q:"App on your phone that would reveal the most about you?"},
  {id:21, c:"laugh", q:"Skill you have that literally nobody knows about?"},
  {id:22, c:"laugh", q:"Worst date story. Go."},
  {id:23, c:"laugh", q:"Something you bought that you'd be embarrassed to explain?"},
  {id:24, c:"laugh", q:"What's a hill you will absolutely die on?"},

  /* DEEP */
  {id:25, c:"deep", q:"What's something you actually changed your mind on this year?"},
  {id:26, c:"deep", q:"What does home feel like to you, not what does it look like?"},
  {id:27, c:"deep", q:"Thing you won't budge on, no matter what?"},
  {id:28, c:"deep", q:"What do people get wrong about you when they first meet you?"},
  {id:29, c:"deep", q:"Person in your life who changed how you see things?"},
  {id:30, c:"deep", q:"What's a version of a good day that has nothing to do with work?"},
  {id:31, c:"deep", q:"Fear you got over that you're kind of quietly proud of?"},
  {id:32, c:"deep", q:"How do you want people to describe you at your retirement party?"},
  {id:33, c:"deep", q:"Part of your life you'd rename if you could look back at it?"},
  {id:34, c:"deep", q:"What does success actually mean to you right now, honestly?"},
  {id:35, c:"deep", q:"Something you want but find it hard to ask for?"},
  {id:36, c:"deep", q:"What's a thing your younger self would be surprised about?"},

  /* WILD */
  {id:37, c:"wild", q:"What genre is the movie of your life right now?"},
  {id:38, c:"wild", q:"One rule you'd make if you ran your city for 48 hours?"},
  {id:39, c:"wild", q:"What animal is your energy today, be honest?"},
  {id:40, c:"wild", q:"Theme song for this current chapter of your life?"},
  {id:41, c:"wild", q:"Most random skill nobody has ever needed from you?"},
  {id:42, c:"wild", q:"Swap lives with anyone for one day. Who?"},
  {id:43, c:"wild", q:"What would your warning label say?"},
  {id:44, c:"wild", q:"Pick a superpower. What's the annoying downside?"},
  {id:45, c:"wild", q:"Conspiracy theory you low-key believe just because it's funny?"},
  {id:46, c:"wild", q:"Something you've googled at 2am that you'd rather not share?"},
  {id:47, c:"wild", q:"If your personality was a snack, what is it?"},

  /* DREAM */
  {id:48, c:"dream", q:"Thing you'd do if you genuinely couldn't fail at it?"},
  {id:49, c:"dream", q:"Where do you want to be in five years, not career, actual life?"},
  {id:50, c:"dream", q:"Dream trip if money just wasn't a thing?"},
  {id:51, c:"dream", q:"Skill you'd want downloaded into your brain overnight?"},
  {id:52, c:"dream", q:"Project you keep thinking about but haven't started yet?"},
  {id:53, c:"dream", q:"Something you want to make or build before you're done?"},
  {id:54, c:"dream", q:"If you wrote a book what would it actually be about?"},
  {id:55, c:"dream", q:"Version of your life you almost had but didn't take?"},
  {id:56, c:"dream", q:"One thing that equally scares and excites you at the same time?"},
  {id:57, c:"dream", q:"What does your 70 year old self look like on a Tuesday afternoon?"}
];

/* ================================================================
   SPICY QUESTIONS — flirty / intimate, adults only
   ================================================================ */
var QS_SPICY = [
  {id:101, c:"spicy", q:"What's something you find attractive that you'd never lead with?"},
  {id:102, c:"spicy", q:"Best compliment anyone's ever given you in bed?"},
  {id:103, c:"spicy", q:"What does someone do that immediately makes you more attracted to them?"},
  {id:104, c:"spicy", q:"Describe your ideal Sunday morning after a really good night."},
  {id:105, c:"spicy", q:"What's something you've always wanted to try but haven't brought up yet?"},
  {id:106, c:"spicy", q:"Do you prefer to lead or be led? In life, and the other thing."},
  {id:107, c:"spicy", q:"What's the most attractive thing about yourself that isn't your looks?"},
  {id:108, c:"spicy", q:"Tell me something you're surprisingly good at that would impress me."},
  {id:109, c:"spicy", q:"What's something small that turns you on that people wouldn't expect?"},
  {id:110, c:"spicy", q:"What do you wish people initiated more often with you?"},
  {id:111, c:"spicy", q:"How do you know when you're really comfortable with someone physically?"},
  {id:112, c:"spicy", q:"What's a fantasy you've had that you've never told anyone?"},
  {id:113, c:"spicy", q:"Morning person or night person, and which one comes out when things get intimate?"},
  {id:114, c:"spicy", q:"What's the most memorable thing someone has done to make you feel desired?"},
  {id:115, c:"spicy", q:"What's a dealbreaker in bed that you've never said out loud?"},
  {id:116, c:"spicy", q:"Spontaneous or planned — which do you prefer and does that change behind closed doors?"},
  {id:117, c:"spicy", q:"What would you want me to know about you before things got serious?"},
  {id:118, c:"spicy", q:"Describe your perfect first night in together. All of it."},
  {id:119, c:"spicy", q:"What's a boundary you always make clear early on?"},
  {id:120, c:"spicy", q:"What's the difference between someone you'd sleep with and someone you'd fall for?"},
  {id:121, c:"spicy", q:"When do you feel most attractive?"},
  {id:122, c:"spicy", q:"What's something you want more of in a relationship that you've been afraid to ask for?"},
  {id:123, c:"spicy", q:"Kiss on the first date — do you believe in waiting, or do you just know?"},
  {id:124, c:"spicy", q:"What's the most romantic thing someone could do for you right now, tonight?"},
  {id:125, c:"spicy", q:"What's a part of your personality that only comes out with someone you trust completely?"}
];

/* ================================================================
   PALETTES
   ================================================================ */
var PAL = [
  {p1:"#e8734a",p1d:"#8f3518",p2:"#4a9eb5",p2d:"#1e6a82"},
  {p1:"#c96bb5",p1d:"#7d2e6f",p2:"#6bbf7f",p2d:"#2d7d44"},
  {p1:"#e8b84a",p1d:"#8f6614",p2:"#5a7fcb",p2d:"#223e8a"},
  {p1:"#e85a7a",p1d:"#8f1e3d",p2:"#5abfa0",p2d:"#1e7a5e"},
  {p1:"#7c6fcd",p1d:"#3a2e90",p2:"#e8934a",p2d:"#8f4714"},
  {p1:"#4ac4b5",p1d:"#18807a",p2:"#e8614a",p2d:"#8f1e0a"},
  {p1:"#d4a85a",p1d:"#7a5214",p2:"#5a8fd4",p2d:"#1e4a90"},
  {p1:"#e87a4a",p1d:"#8f3a0a",p2:"#7a4ab5",p2d:"#3a1080"},
  {p1:"#4a7ab5",p1d:"#0a2e80",p2:"#b54a7a",p2d:"#700a3a"},
  {p1:"#b5694a",p1d:"#6a2510",p2:"#4ab58a",p2d:"#0e7050"}
];

var PAL_SPICY = [
  {p1:"#c2185b",p1d:"#7a0032",p2:"#8B008B",p2d:"#4a0050"},
  {p1:"#e91e63",p1d:"#880e4f",p2:"#9c27b0",p2d:"#4a0072"},
  {p1:"#d81b60",p1d:"#880035",p2:"#6a1b9a",p2d:"#38006b"},
  {p1:"#ff4081",p1d:"#c60055",p2:"#7b1fa2",p2d:"#4a0072"},
  {p1:"#c2185b",p1d:"#6a0032",p2:"#ad1457",p2d:"#78002e"}
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
var favBtn  = g("fav-btn");
var deepWarn = g("deep-warn");
var tooltip  = g("tooltip");

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
  p1el.style.background = p.p1;
  p2el.style.background = p.p2;
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
   VIBE BUTTONS — rebuilt when mode changes
   ================================================================ */
function buildVibeButtons(){
  var cats = spicyMode ? CATS_SPICY : CATS;
  var vg   = g("vg");
  vg.innerHTML = "";
  selCat = "all";
  cats.forEach(function(cat){
    var b = document.createElement("button");
    b.className = "vbtn" + (cat.id === "all" ? " wide on" : "");
    if(cat.id === "spicy") b.className += " wide";
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
  g("spicy-badge").textContent = "ON 🔥";
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
   START
   ================================================================ */
g("go").onclick = function(){
  buzz(12);
  var allQs = spicyMode ? QS.concat(QS_SPICY) : QS;
  pool = selCat === "all"
    ? allQs.slice()
    : allQs.filter(function(q){ return q.c === selCat; });
  if(!pool.length) return;

  name1 = g("n1").value.trim() || "You";
  name2 = g("n2").value.trim() || "Them";

  palette();
  used={}; shown=0; turns=0; turn=null; started=false; favourites=[]; currentQ=null;
  g("prog").style.width = "0%";
  resetPanels();
  show("game");
};

function resetPanels(){
  p1el.classList.remove("dim","big"); p2el.classList.remove("dim","big");
  l1.textContent = name1||"You";   s1.textContent = "tap to start";
  l2.textContent = name2||"Them";  s2.textContent = "tap to start";
  p1el.querySelector(".p-icon").textContent = "👆";
  p2el.querySelector(".p-icon").textContent = "👆";
  sd.style.background = "#2a2826"; sl.textContent = "Either of you starts";
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
   SHOW PROMPT
   ================================================================ */
function showPrompt(who){
  var rem = pool.filter(function(q){ return !used[q.id]; });
  if(!rem.length){ endGame("all"); return; }

  var q       = rem[Math.floor(Math.random() * rem.length)];
  used[q.id]  = true;
  currentQ    = q;
  currentWho  = who;

  /* Find cat label — check both arrays */
  var allCats = spicyMode ? CATS_SPICY : CATS;
  var cat  = allCats.find(function(c){ return c.id === q.c; }) || allCats[1];
  var text = fillPronouns(q.q);
  var tag  = cat.emoji + " " + cat.label;
  var ctr  = (shown+1) + " / " + pool.length;

  oqTop.textContent = text; otTop.textContent = tag; ocTop.textContent = ctr;
  oqBot.textContent = text; otBot.textContent = tag; ocBot.textContent = ctr;

  /* Pulse animation */
  [oqTop, oqBot].forEach(function(el){
    el.classList.remove("fresh");
    void el.offsetWidth;
    el.classList.add("fresh");
  });

  /* Reset fav */
  favBtn.textContent = "♡ save this one";
  favBtn.classList.remove("loved");

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

  /* Progress bar */
  g("prog").style.width = Math.min(100, (shown / pool.length) * 100) + "%";
}

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
    favBtn.textContent = "♥ saved!";
    favBtn.classList.add("loved");
  } else {
    buzz(8);
    favourites.splice(already, 1);
    favBtn.textContent = "♡ save this one";
    favBtn.classList.remove("loved");
  }
};

/* ================================================================
   DISMISS
   ================================================================ */
g("od").onclick = function(){
  buzz(12);
  ov.className = "";
  turn = turn === "p1" ? "p2" : "p1";

  p1el.classList.remove("dim","big"); p2el.classList.remove("dim","big");

  if(turn === "p1"){
    p1el.classList.add("big"); p2el.classList.add("dim");
    sd.style.background = "var(--p1)"; sl.textContent = name1 + ", tap your side";
    l1.textContent = "Tap!"; s1.textContent = "your turn";
    l2.textContent = "...";  s2.textContent = "wait";
    p1el.querySelector(".p-icon").textContent = "👇";
    p2el.querySelector(".p-icon").textContent = "⏳";
  } else {
    p2el.classList.add("big"); p1el.classList.add("dim");
    sd.style.background = "var(--p2)"; sl.textContent = name2 + ", tap your side";
    l2.textContent = "Tap!"; s2.textContent = "your turn";
    l1.textContent = "...";  s1.textContent = "wait";
    p2el.querySelector(".p-icon").textContent = "👇";
    p1el.querySelector(".p-icon").textContent = "⏳";
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
  g("ep").textContent = shown;
  g("et").textContent = turns;
  g("ef").textContent = favourites.length;
  g("emsg").textContent = why === "all"
    ? "You went through every single prompt!"
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
  var allQs = spicyMode ? QS.concat(QS_SPICY) : QS;
  pool = selCat === "all"
    ? allQs.slice()
    : allQs.filter(function(q){ return q.c === selCat; });
  palette(); used={}; shown=0; turns=0; turn=null; started=false; favourites=[]; currentQ=null;
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
    btn.textContent = "💛 No saved questions yet";
    setTimeout(function(){
      btn.innerHTML = "📋 Copy saved questions";
      btn.classList.remove("copied");
    }, 1800);
    return;
  }
  var text = "Questions from our date 💛\n\n"
    + favourites.map(function(q,i){ return (i+1) + ". " + q; }).join("\n");
  if(navigator.share){
    navigator.share({ text: text }).catch(function(){});
  } else if(navigator.clipboard){
    navigator.clipboard.writeText(text).then(function(){
      btn.textContent = "✓ Copied to clipboard!";
      btn.classList.add("copied");
      setTimeout(function(){
        btn.innerHTML = "📋 Copy saved questions";
        btn.classList.remove("copied");
      }, 2000);
    });
  }
};

/* ================================================================
   iOS scroll lock — only during game/end
   ================================================================ */
document.addEventListener("touchmove", function(e){
  if(document.body.classList.contains("game-active")) e.preventDefault();
}, { passive: false });

/* ================================================================
   INIT
   ================================================================ */
buildVibeButtons();
palette();
