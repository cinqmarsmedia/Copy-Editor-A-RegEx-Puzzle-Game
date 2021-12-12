import { Component, ViewChild } from "@angular/core";
import { lvlDB } from "./../../constants";
import { regexTips } from "./../../constants";
import { vulgarities } from "./../../constants";
import { starChars } from "./../../constants";
import { reqStars } from "./../../constants";
import { tipsShowTo } from "./../../constants";
import { mediumIDs } from "./../../constants";
import { newchart } from "./../../constants";
import { emailDomainBlacklist } from "./../../constants";
import { AngularFireDatabase } from "angularfire2/database";

import { Chart } from "chart.js";

import { Slides } from "ionic-angular";

import * as jsdiff from "diff";
import { AlertController } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { ModalController, NavParams } from "ionic-angular";
import { Events } from "ionic-angular";
import { ViewController } from "ionic-angular";

import { enableProdMode } from "@angular/core";

import * as howler from "howler";

declare var RegexColorizer;
declare var ReplaceColorizer;

const storageID = "<storageID>";

const demoMODE = false; // ()()() demo
const debugMODE = false;

const slideshowLibrary = {"Introduction":[1,6]}

if (!debugMODE) {
  enableProdMode();
}

@Component({
  selector: "lvlWonDialogue",
  templateUrl: "lvlWonDialogue.html",
})
export class lvlWonDialogue {
  @ViewChild("rulesCanvas") rulesCanvas;
  @ViewChild("charsCanvas") charsCanvas;
  content: any;
  rulesChart:any
  charsChart:any
  levelName:any;
  pic:any
  btn:any
  problem:any=0;

  constructor(
    public params: NavParams,
    public events: Events,
    public viewCtrl: ViewController,
    private alertCtrl: AlertController
  ) {
        setTimeout(() => {

let usrData = params.get("usrData");
let yourData = params.get("yourData");


this.content = params.get("content");
this.levelName = params.get("levelName");
this.pic= params.get("pic");
this.btn=params.get("btn");
          //if (!this.lineChart){
//this.graphPoints[1].push({ x: Math.random(), y: Math.random() })
if (usrData){
this.problem=usrData.rules.length;
}else{
  this.problem=-1
  return;
}
console.log(this.problem);

var processedData={rules:[],chars:[]}

var rules=JSON.parse(JSON.stringify(newchart));

var chars=JSON.parse(JSON.stringify(newchart));
/*
var originalLineDraw = Chart.controllers.line.prototype.draw

Chart.helpers.extend(Chart.controllers.line.prototype, {
  draw: function() {
    originalLineDraw.apply(this, arguments);

    var chart = this.chart;
    var ctx = chart.chart.ctx;

    var index = chart.config.data.lineAtIndex;
    if (index) {
      var xaxis = chart.scales['x-axis-0'];
      var yaxis = chart.scales['y-axis-0'];

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(xaxis.getPixelForValue(undefined, index), yaxis.top);
      ctx.strokeStyle = '#fff';
      ctx.lineTo(xaxis.getPixelForValue(undefined, index), yaxis.bottom);
      ctx.stroke();
      ctx.restore();
    }
  }
});
*/

rules.options.scales.xAxes[0].scaleLabel.labelString="Rules"
chars.options.scales.xAxes[0].scaleLabel.labelString="Chars"

var color1 = this.genColor()
var color2 = this.genColor()

rules.data.datasets[0].backgroundColor="rgba("+color1+",.1)"
rules.data.datasets[0].borderColor="rgba("+color1+",.8)"

chars.data.datasets[0].backgroundColor="rgba("+color2+",.1)"
chars.data.datasets[0].borderColor="rgba("+color2+",.8)"

chars.data.datasets[1].backgroundColor="rgba(236, 155, 0)"
chars.data.datasets[1].borderColor="rgba(236, 155, 0)"
rules.data.datasets[1].backgroundColor="rgba(236, 155, 0)"
rules.data.datasets[1].borderColor="rgba(236, 155, 0)"

//rules.data.lineAtIndex=yourData[0];
//chars.data.lineAtIndex=yourData[1];

let ruleMap={};
let charMap={};


usrData.rules.forEach((rule)=>{
  if (ruleMap[String(rule)]){
    ruleMap[String(rule)]++
  }else{
    ruleMap[String(rule)]=1
  }
})
usrData.chars.forEach((char)=>{
    if (charMap[String(char)]){
    charMap[String(char)]++
  }else{
    charMap[String(char)]=1
  }
})

let ruleData=[]
let charData=[]

Object.keys(ruleMap).forEach((num)=>{
ruleData.push({x:parseInt(num),y:ruleMap[num]/usrData.rules.length})
})

Object.keys(charMap).forEach((num)=>{
charData.push({x:parseInt(num),y:charMap[num]/usrData.chars.length})
})

console.log(ruleData)
console.log(charData)


var yourRules=[{x:yourData[0],y:0}]
var yourChars=[{x:yourData[1],y:0}]

ruleData.forEach((record)=>{
if (record.x==yourData[0]){
  yourRules[0].y=record.y;
}
})

charData.forEach((record)=>{
if (record.x==yourData[1]){
  yourChars[0].y=record.y;
}
})

rules.data.datasets[0].data = ruleData;
rules.data.datasets[1].data = yourRules;
chars.data.datasets[0].data = charData;
chars.data.datasets[1].data = yourChars;

this.rulesChart = new Chart(this.rulesCanvas.nativeElement, rules);
this.charsChart = new Chart(this.charsCanvas.nativeElement, chars);
this.rulesChart.update();
this.charsChart.update();

        }, 0);

  }


genColor(){
 return String(Math.floor(Math.random()*130)+100)+","+String(Math.floor(Math.random()*130)+100)+","+String(Math.floor(Math.random()*130)+100);
}

optimize(){
  this.viewCtrl.dismiss();
  this.events.publish("wonBtn",false);
}

next(){
  this.viewCtrl.dismiss();
  this.events.publish("wonBtn",true);
}

}


@Component({
  selector: "lvlSel",
  templateUrl: "lvlSel.html",
})
export class lvlSel {
  lvlList: any;
  currLvl: any;
  best: any;
  nightmode: any;
  devMode: any;
  edit: any = false;
  starChars: any = starChars;
  reqStars: any = reqStars;
  yourStars: any;
  skipifthree:any=0;


  constructor(
    public params: NavParams,
    public events: Events,
    public viewCtrl: ViewController,
    private alertCtrl: AlertController
  ) {
    this.devMode = params.get("devMode");




    let lvls = [];
    let viz = params.get("prodVisible");

    Object.keys(lvlDB).forEach((key, i) => {
      if (this.devMode || i < viz) {
        for (var n = parseInt(key) - 2; n > -1; n--) {
          if (!lvls[n]) {
            lvls[n] = { name: "undef", id: "undef" };
          }
        }

        lvls[parseInt(key) - 1] = {
          name: lvlDB[key].promptName,
          id: lvlDB[key].id,
        };
      }
    });

    //console.log(lvls);
    this.lvlList = lvls;
    this.currLvl = params.get("level");
    this.best = params.get("best");
    this.nightmode = params.get("dark");
    this.edit = params.get("edit");

    this.yourStars = params.get("yourStars");
  }

  warning(index) {
    var needed = this.reqStars[index] - this.yourStars;

    if (needed < 1) {
      this.selLevel(index, true);
      return;
    }

var btns=[
      {
          text: "Answer Guide",
          handler: (data) => {
          this.events.publish("walkthrough");
          },
        },
        
        
        /*,
        {
          text: "Preview Anyway",
          handler: (data) => {
            this.selLevel(index, true);
          },

        },
        */
      ]

if (this.skipifthree>=2){
        btns.push({
          text: "Skip Ahead",
          handler: (data) => {
            this.selLevel(index, true);
          },
        })
}else{
  btns.push({
          text: "ok",
          handler: (data) => {
            this.skipifthree++
          },
        })
}




    var alert = this.alertCtrl.create({
      title: needed + " more stars needed",
      subTitle:
        "This level requires " +
        this.reqStars[index] +
        " stars to unlock. Now that you've learned new skills, you can return to old levels and optimize your solutions to earn more stars!",
      buttons: btns,
    });

   
    alert.present();
  }



  selLevel(i, force: any = false) {
    if (demoMODE && i > 4) {
      this.events.publish("demoPrompt");
      return;
    }

   // console.log(i, this.currLvl);
    let unlocked =
      this.best[this.lvlList[i].id] || this.yourStars >= reqStars[i - 1];

    if (force || this.devMode || unlocked) {
      this.events.publish("loadLevel", {
        index: i,
        edit: this.edit,
        devMode: this.devMode,
      });
      this.viewCtrl.dismiss();
    } else {
      this.warning(i);
    }
  }
}

// modal
@Component({
  selector: "makeUsr",
  templateUrl: "makeUsr.html",
})
export class makeUsr {
  avatarNameList = [
    "Josh",
    "Boss",
    "Chad",
    "Marie",
    "Ned",
    "avatar_1",
    "avatar_2",
    "avatar_3",
    "avatar_4",
    "avatar_5",
    "avatar_6",
    "avatar_7",
    "avatar_8",
    "avatar_9",
    "avatar_10",
    "avatar_11",
    "avatar_13",
    "avatar_14",
    "avatar_16",
    "avatar_19",
    "avatar_20",
    "avatar_21",
    "avatar_22",
    "avatar_23",
    "avatar_24",
  ].sort(() => 0.5 - Math.random());
  avatarIndex: any = Math.floor(Math.random() * this.avatarNameList.length);
  error: any = "";
  users: any;
  username: any;

  constructor(
    public params: NavParams,
    public events: Events,
    public viewCtrl: ViewController
  ) {
    this.users = params.get("users");
  }

  cycleAvatar() {
    if (this.avatarIndex == this.avatarNameList.length - 1) {
      this.avatarIndex = 0;
    } else {
      this.avatarIndex++;
    }
  }

  isExplicit(txt) {
    let profane = false;

    vulgarities.forEach((term) => {
      if (txt.includes(term)) {
        profane = true;
      }
    });

    return profane;
  }

  press(submit: any = false) {
    if (submit) {
      var user = this.username.toLowerCase().trim();

      if (user.length < 4) {
        this.error = "Usernames need to be at least 4 characters long";
        return false;
      } else if (user.length > 15) {
        this.error = "Usernames need to be no more than 15 characters long";
        return false;
      } else if (!user.match(/^[a-z0-9.-]*$/g)) {
        this.error = "Usernames must only include letters and numbers";
        return false;
      } else if (this.isExplicit(user)) {
        this.error = "Usernames must be appropriate";
        return false;
      } else if (this.users.includes(user) || this.users.includes("!" + user)) {
        this.error = "This username is already in use";
        return false;
      } else {
        this.events.publish("verifyUser", {
          username: this.username,
          avatar: this.avatarNameList[this.avatarIndex],
          make: this.params.get("make"),
        });
      }
    }
    this.viewCtrl.dismiss();
  }
}
// modal
@Component({
  selector: "txtMod",
  templateUrl: "txtMod.html",
})
export class txtMod {
  text: any;
  type: any;
  other: any;
  fontScale: any = 1;
  applySwitch: any = false;

  constructor(
    public params: NavParams,
    public events: Events,
    public viewCtrl: ViewController
  ) {
    this.text = params.get("txt");
    this.type = params.get("type");
    this.other = params.get("other");

    events.subscribe("fontsize", (bool) => {
      //console.log('hello world');
      if (bool) {
        this.fontScale += 0.1;
      } else {
        this.fontScale -= 0.1;
      }
    });

    

    setTimeout(() => {
      let element: any = document.getElementById("txt");

      element.focus();
      //element.setSelectionRange(element.value.length, element.value.length);
    }, 500);
  }

  applyOutput() {
    this.text = this.other;
  }

  switchOutIn() {
    if (this.applySwitch) {
      let temp = this.text;
      this.text = this.applySwitch;
      this.applySwitch = temp;
    } else {
      this.applySwitch = this.text;
      this.text = this.other;
    }
  }

  replaceSpaces(txt) {
    return txt.replace(/ /g, " ");
  }

  pressed(save: any = false) {
    if (save) {
      this.events.publish("modTxt", {
        type: this.type,
        txt: this.replaceSpaces(this.text),
        other: this.applySwitch,
      });
    }

    this.viewCtrl.dismiss();
  }
}

// modal
@Component({
  selector: "selectflags",
  templateUrl: "selectFlags.html",
})
export class selectflags {
flags:any
allowed:any=[];
ruleIndex:any
state:any={};
stars:any=0;
allFlags:any=['g','i','m','s']
flagDict:any={'g':{name:'global',desc:'global match',explain:'Does not return after first match'},'i':{name:'insensitive',desc:'case insensitive',explain:'Matches Uppercase and Lowercase letters'},'m':{name:'multi line',desc:'multi line',explain:'^ and $ match start/end of line'},'s':{name:'single line',desc:'single line',explain:'periods match newlines'}}

  constructor(
    public params: NavParams,
    public events: Events,
    public viewCtrl: ViewController
  ) {


    this.stars=params.get("stars");
    this.flags = params.get("flags");
    var allowed=params.get("allowed");
    if (allowed){
      this.allowed = allowed;
    }
   if (this.stars==3){
     this.allowed = ["g","m","s","i"]
   }
    this.ruleIndex = params.get("ruleIndex");


if (this.allowed.length>0){
    this.allowed.forEach((flg)=>{
      this.state[flg]=this.flags.includes(flg);
    })
}else{
  this.allFlags.forEach((flg)=>{
  this.state[flg]=flg=='g';
})

}
  }

  flagInfo(){
    window.open(
                "https://javascript.info/regexp-introduction#flags",
                "_blank", "frame=true,nodeIntegration=no"
              );
  }

    pressed(save: any = false) {
    if (save) {
let flags=[];

Object.keys(this.state).forEach((flg)=>{
if (this.state[flg]){
  flags.push(flg)
}
})

      this.events.publish("updateFlags", {
        ruleIndex: this.ruleIndex,
        flags:flags
      });
    }

    this.viewCtrl.dismiss();
  }

}

// modal
@Component({
  selector: "submitLvl",
  templateUrl: "submitLvl.html",
})
export class submitLvl {
  verify: any = false;
  name: any = "";
  hint: any = "";
  usr: any;
  error: any = ["", "", ""];
  prompts: any = [
    "Hi! This is my awesome new level!",
    "Howdy! Please enjoy my puzzle!",
    "I hope you find this challenging!",
    "Hello and good luck!",
    "Thanks for trying my creation!",
  ];

  constructor(
    public params: NavParams,
    public events: Events,
    public viewCtrl: ViewController
  ) {
    this.usr = params.get("usr");
  }

  press(submit: any = false) {
    if (submit) {
      if (!this.verify || this.name == "" || this.hint == "") {
        this.error = ["", "", ""];

        if (this.name == "") {
          this.error[0] = "a level name is required";
        } else if (this.hint == "") {
          this.error[1] = "a level hint is required";
        } else {
          this.error[2] = "you must agree to the community rules";
        }

        return;
      } else {
        this.events.publish("uploadLevelFB", {
          difficulty: document.getElementById("diff")["value"],
          name: this.name,
          hint: this.hint,
          message:
            this.prompts[parseInt(document.getElementById("prompts")["value"])],
        });
      }
    }
    this.viewCtrl.dismiss();
  }
}

@Component({
  selector: "usrLvls",
  templateUrl: "usrLvls.html",
})
export class usrLvls {
  db: any = [];
  searchUsr: any;
  searchID: any;
  selDiff: any = 0;
  searchRez: any = 0;
  featured:any
  puzzleOfDay:any
  difficulty: any = [[], [], [], [], [], []];
  searchResults: any;
  rez: any = [];

  constructor(
    public params: NavParams,
    public events: Events,
    public viewCtrl: ViewController
  ) {
    this.processUserLevels(params.get("lvlData"), params.get("bestScores"));
  }

  openUsrLvl(lvl) {
    this.events.publish("loadUsrLvl", lvl);
    this.viewCtrl.dismiss();
  }

  searchLvls(term, key) {
    this.rez = [];
    this.db.forEach((lvl) => {
      if (term == lvl[key].substr(0, term.length)) {
        this.rez.push(lvl);
      }
    });

    //this.db
    //this.searchResults=
  }

  searchUsrChange() {
    if (this.searchUsr.length > 0) {
      this.searchRez = 2;
      this.searchLvls(this.searchUsr, "username");
    } else {
      this.searchRez = 0;
    }
  }

  searchIDChange() {
    if (this.searchID.length > 0) {
      this.searchRez = 1;
      this.searchLvls(this.searchID, "id");
    } else {
      this.searchRez = 0;
    }
  }

computePuzzleOfDay(){
  var now = new Date().getTime() 
  now=Math.floor(now/1000/60/60/24);
  var index=now%this.difficulty[0].length;
  this.puzzleOfDay=this.difficulty[0][index];

  if (this.featured && this.puzzleOfDay.id==this.featured.id){
    index++
    this.puzzleOfDay=this.difficulty[0][index];
  }
}

  processUserLevels(db, bestScores) {
    //this.db.sort((a, b) => (a.date > b.date) ? 1 : -1);
    db.forEach((lvl) => {
      if (bestScores[lvl.id]) {
        lvl.won = true;
      } else {
        lvl.won = false;
      }

      if (lvl.featured){
        this.featured=lvl;
      }

      this.db.push(lvl);
 

      this.difficulty[parseInt(lvl.difficulty)].push(lvl);
      this.difficulty[0].push(lvl);
      // sort by rated
      //console.log(db);

      // process lvlSel
    });
    this.computePuzzleOfDay();

  }
}

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
    @ViewChild(Slides) slides: Slides;

  async handleKeyboardEvent(event: KeyboardEvent) {

//if (){

if (lvlDB[this.level] && lvlDB[this.level].id=='caesarcipher' && !this.creationMode && !this.userLevelMode && event.key.match(/[A-z]/g) && event.key.match(/[A-z]/g).length>0 && event.key.length==1){



var code = event.key.charCodeAt(0);
var rez
//console.log(event.key.match(/[A-z]/g));
if ((event.key.match(/[A-z]/g) || []).length>0){


// Uppercase letters
if (code >= 65 && code <= 90) {
rez = String.fromCharCode(((code - 65 + 15) % 26) + 65);
}
// Lowercase letters
else if (code >= 97 && code <= 122) {
rez = String.fromCharCode(((code - 97 + 15) % 26) + 97);
}
}else{
  rez=event.key
}
var currentInput:any=document.getElementById(document.activeElement.id);

if (!currentInput){return}
event.preventDefault();
if (lvlDB["6"].id=="caesarcipher" && currentInput.innerText.length<lvlDB["6"].maxCharsFind){
  //console.log(this.rules[0].find);
currentInput.innerText+=rez;

var id=parseInt(currentInput.id)-1
var i=Math.floor(id/2)


this.rules[i][id%2==0?'find':'replace']=currentInput.innerText
}


RegexColorizer.colorizeAll();
ReplaceColorizer.colorizeAll();
this.evaluateRegEx();

function moveCaretToEnd(el) {
    var range = document.createRange()
    var sel = window.getSelection()
    
if (!el){return}

    range.setStart(el.childNodes[0], el.innerText.length)
    range.collapse(true)
    
    sel.removeAllRanges()
    sel.addRange(range)
}

console.warn("moving cursor to end of input")

moveCaretToEnd(currentInput)

}

if (!this.mute){

var i=Math.floor(Math.random()*9)+1;

      this.keystrokeSFX = new howler.Howl({
      src: "assets/audio/keys/"+i+".mp3",
      loop: false,
      volume: .65
      })

    this.keystrokeSFX.play()
}

     // typeof this.globalModal !== "undefined" &&
      

    if (document.getElementById("lvlselele")) {
      if (event.key == "PageUp") {
        event.preventDefault();
        // setTimeout(()=>{
        document.getElementById("lvlselele").scrollTop -= 40;
        //},100)
      } else if (event.key == "PageDown") {
        event.preventDefault();
        document.getElementById("lvlselele").scrollTop += 40;
      }
    }

    if (typeof this.gamestate == "undefined") {
      event.preventDefault();
      return;
    }

    if (this.popupAlert && this.popupAlert._state == 3) {
      event.preventDefault();
      return;
    }

    if (event.key == "ArrowRight" && event.shiftKey) {
      if (this.cornerWindow == "chat") {
        this.cornerWindow = "regex";
      } else if (this.cornerWindow == "regex") {
        this.cornerWindow = "help";
      }
    } else if (event.key == "ArrowLeft" && event.shiftKey) {
      if (this.cornerWindow == "help") {
        this.cornerWindow = "regex";
      } else if (this.cornerWindow == "regex") {
        this.cornerWindow = "chat";
      }
    }

    if (
      typeof this.globalModal !== "undefined" &&
      this.globalModal.overlay._state == 3
    ) {
      if ((event.key == "ArrowUp" || event.key == "=") && event.ctrlKey) {
        this.events.publish("fontsize", false);
        event.preventDefault();
      } else if (
        (event.key == "ArrowDown" || event.key == "-") &&
        event.ctrlKey
      ) {
        this.events.publish("fontsize", true);
        event.preventDefault();
      }

      return;
    }

    var ruleIndex = Math.ceil(parseInt(document.activeElement.id) / 2) - 1;
    if (event.key == "n" && event.ctrlKey) {
      event.preventDefault();
      this.addRule();
    }

    if (event.key == "r" && event.metaKey && !debugMODE) {
      event.preventDefault();
    }

    if (event.key == "m" && event.ctrlKey) {
      event.preventDefault();
      await this.highlight(this.rules[ruleIndex], ruleIndex);
    }

    if (event.key == "h" && event.ctrlKey) {
      event.preventDefault();
      if (this.rules.length > 1) {
        await this.toggleViz(this.rules[ruleIndex]);
      }
    }

    if (event.key == "d" && event.ctrlKey) {
      event.preventDefault();
      if (this.rules.length > 1) {
        await this.rmRule(ruleIndex);
      }
    }

    if (event.key == "=" && event.ctrlKey) {
      event.preventDefault();
      this.scaleFont(false);
    }

    if (event.key == "-" && event.ctrlKey) {
      event.preventDefault();
      this.scaleFont(true);
    }

    if (event.key == "ArrowRight" && event.ctrlKey) {
      event.preventDefault();
      if (this.section < this.sectionsSolved.length - 1) {
        this.section++;
      }
    }

    if (event.key == "ArrowUp" && event.ctrlKey) {
      event.preventDefault();
      this.scaleFont(false);
    }

    if (event.key == "ArrowDown" && event.ctrlKey) {
      event.preventDefault();
      this.scaleFont(true);
    }

    if (event.key == "ArrowLeft" && event.ctrlKey) {
      event.preventDefault();
      if (this.section > 0) {
        this.section--;
      }
    }

    let findReplaceBox = !isNaN(parseInt(document.activeElement.id));
    let bannedChars =
      ((this.gamestate.bannedChars &&
        this.gamestate.bannedChars.includes(event.key)) ||
        (this.creationMode &&
          this.inProgressLvl.bannedChars &&
          this.inProgressLvl.bannedChars.includes(event.key))) &&
      !event.metaKey;

    //let maxRules = this.creationMode?this.inProgressLvl.maxRules:this.gamestate.maxRules
    let maxFindChars =
      (this.creationMode
        ? this.inProgressLvl.maxCharsFind
        : this.gamestate.maxCharsFind) || 999;
    let maxRepChars =
      (this.creationMode
        ? this.inProgressLvl.maxCharsReplace
        : this.gamestate.maxCharsReplace) || 999;

    if (parseInt(document.activeElement.id) % 2 == 0) {
      var index = Math.ceil(parseInt(document.activeElement.id) / 2) - 1;
      if (!isNaN(index) && this.rules[index].highlit) {
        this.rules.forEach((rule) => {
          rule.highlit = false;
        });
      }
    }

    if (bannedChars && findReplaceBox) {
      this.shakeInput(document.activeElement.id);
      event.preventDefault();
    }

    var findInput = parseInt(document.activeElement.id) % 2 !== 0;
    var html = document.activeElement.innerHTML;

    var div = document.createElement("div");
    div.innerHTML = html;
    var txt = div.textContent || div.innerText || "";

    /**/

    if (
      findReplaceBox &&
      !findInput &&
      (event.key == "[" ||
        event.key == "]" ||
        event.key == "<" ||
        event.key == ">")
    ) {
      this.shakeInput(document.activeElement.id);
      event.preventDefault();
    }

    if (
      event.key !== "Backspace" &&
      event.key !== "Delete" &&
      !event.metaKey &&
      event.key !== "Tab" &&
      !event.key.includes("Arrow")
    ) {
      if (findReplaceBox) {
        if (event.key == "Alt") {
          if (this.inputGrow > 0) {
            this.inputGrow = 0;
          } else {
            this.inputGrow = document.activeElement.id;
          }
        }

        //console.log(maxFindChars,maxRepChars)
        if (findInput) {
          //console.log(txt)
          //console.log(txt.length)
          if (txt.length >= maxFindChars) {
            this.shakeInput(document.activeElement.id);
            event.preventDefault();
          }
        } else {
          // console.log(txt)
          //console.log(txt.length)
          if (txt.length >= maxRepChars) {
            this.shakeInput(document.activeElement.id);

            event.preventDefault();
          }
        }
      }
    }

    var lastChar =
      document.activeElement.innerHTML[
        document.activeElement.innerHTML.length - 1
      ];

    if (event.key == "Enter" || event.key == "Tab") {
      event.preventDefault();
      this.inputGrow = 0;

      if (event.shiftKey) {
        this.setFocus(false, -1, true);
      } else {
        this.setFocus();
      }
    }

    if (findReplaceBox) {
      this.processTips(findInput, event, lastChar);
    }

  }

  demoMode: any = demoMODE;
  creationMode: any = false;
  nightmode: any = true;
  level: any = 1;
  regexTips: any = regexTips;
  tipFired: any = false;
  tipsOff: any = false;
  expandedView:any=false;
  gamestate: any;
  volume:any;
  mute:any=false;
  keystrokeSFX:any;
  vizState:any=[];
  cornerWindow: any = "chat"; // chat
  today: any = new Date().getTime();
  view: any;
  loading: any = false;
  bestScores: any = {};
  section: number = 0;
  sectionsSolved: any;
  rules: any;
  numChars: any;
  winState: any = false;
  highlit: any = -1;
  popupAlert: any;
  hintIndex: any = 0;
  source: any;
  //txtModModal:any;
  globalModal: any;
  devMode: any = false;
   //!navigator.userAgent.match(/Electron/i);
  version: any = "1.0";
  productionLvlsVisible: any = 42;
  inProgressLvl: any;
  username: any = null;
  _userSub: any;
  _levelSub: any;
  _scoresSub:any;
  offlineLvls: any = {};
  userLevelMode: any = false;
  userLevelRating: any = 0;
  userAvatar: any;
  lastCampaginLevel: any = this.level;
  shake: any = [];
  fontScale: any = 1;
  fontScaleOutIn: any = [1, 1];
  starChars: any = starChars;
  numHints: any;
  inputGrow: any = 0;
  fullscreen:any=true;
  hideRules: boolean = false;
  regexWorker: RegexWorker = new RegexWorker();
  jsDiffWorker: JSDiffWorker = new JSDiffWorker();
  regexLoading: boolean = false;
  regexLoadingTimeout: any;
  regexLoadingTime: number = 1000;
  diffLoading: boolean = false;
  diffLoadingTimeout: any;
  diffLoadingTime: number = 1000;
  regexUnresponsiveTime: number = 10000;
  regexUnresponsive: boolean = false;
  regexUnresponsiveTimeout: any;
  slideshowstate:any=[];
  mystars:any=0;
  slideFX:any=new howler.Howl({ src: ["/assets/audio/slide.mp3"] });
  elevatorMusic:any=new howler.Howl({
      src: "assets/audio/slideBck.mp3",
      loop: true,
      volume: 1
      })
  ambiance:any=new howler.Howl({
      src: "assets/audio/ambiance.mp3",
      loop: true,
      volume: 1
      })
  slideIndex:any=0;
  oldData:any=null;
  unlockThresh:any={'online':10,'create':25,'procedural':75}
  userScores:any={};

  constructor(
    private alertCtrl: AlertController,
    public storage: Storage,
    public modalCtrl: ModalController,
    public events: Events,
    public db: AngularFireDatabase
  ) {

this._scoresSub = this.db
      .list("/scores")
      .valueChanges()
      .subscribe((scoresData) => {
        this._scoresSub.unsubscribe();

scoresData.forEach((ele)=>{

if (!this.userScores[ele[0]]){
  this.userScores[ele[0]]={rules:[],chars:[]};
}

this.userScores[ele[0]].rules.push(ele[1])
this.userScores[ele[0]].chars.push(ele[2])

})



  })

    events.subscribe("wonBtn", (bool) => {

      if (bool) {
        
            this.loading = true;
            let lvl;
            if (this.userLevelMode) {
              this.userLvls();
              return;
            } else {
              lvl = this.level + 1;
            }

            if (this.calcStars() < reqStars[lvl - 1]) {
              this.lvlSel();
              setTimeout(() => {
                this.pop(
                  "Need More Stars",
                  "The next assignment requires you to go back and optimize previous solutions using new concepts you've learned. Stars that are now attainable pulse"
                );
              }, 20);
            } else {
              if (demoMODE && lvl > 5) {
                this.demoPrompt(true);
                return;
              }
              this.loadLevel(lvl, false);
            }
          
      } else {
        this.winState = true;
      }
    });

    //operation timer loop fix - make rules invisible to avoid dialog loop
    if (window.location.hash == "#reset") {
      this.hideRules = true;
    }
       
    events.subscribe("loadLevel", (event) => {
      this.fontScale = 1;
      this.loadLevel(event);
    });


      events.subscribe("updateFlags", (event) => {
this.rules[event.ruleIndex].flags=event.flags.join("");
     this.evaluateRegEx();
    });

    events.subscribe("modTxt", async (event) => {
      console.log("MODTXT")
      await this.modText(event);
    });

    events.subscribe("uploadLevelFB", (event) => {
      this.reallyUploadLvl(event);
    });

    events.subscribe("loadUsrLvl", (event) => {
      this.userLevelMode = true;
      this.loadLevel(event);
    });

    events.subscribe("demoPrompt", (event) => {
      this.demoPrompt();
    });

 events.subscribe("walkthrough", (event) => {
      this.walkthrough();
    });

    events.subscribe("verifyUser", async (event) => {
      this.username = event.username;
      this.userAvatar = event.avatar;

      this.db.list("/usernames").push(this.username);
      /**/
      if (event.make) {
        await this.lvlCreate();
      }

      this.setData();
    });
    /*
    setTimeout(()=>{
    //this.lvlCreate() // debug
    //this.makeUsername();
     //this.userLvls();
    //this.submitLvl()
  this.levelWon();
    //this.lvlSel();
    
    //console.log(this.bestScores);
    },500)
*/


  }

slideshowMenu(){

if (Object.keys(slideshowLibrary).length==1){
this.startSlideShow("Introduction");
  return;
}
  var buttons=[{
          text: "cancel",
          handler: () => {},
        }]


Object.keys(slideshowLibrary).forEach((key)=>{
  buttons.push({
          text: key,
          handler: () => {
            this.startSlideShow(key)
          },
        })
})


    var alert = this.alertCtrl.create({
      title: "Re-Watch Presentation",
      enableBackdropDismiss: true,
      //subTitle:"",
      //message: "Are you sure you want to quit?",
      buttons: buttons,
    });

    alert.present();



}

startSlideShow(name){


var start = slideshowLibrary[name][0]
var end = slideshowLibrary[name][1]

var path='assets/imgs/slides/';

for (var i = start; i <= end; i++) {
  var filename = path + i + '.jpg'

    if (!this.slideshowstate.includes(filename)) {
        this.slideshowstate.push(filename);
      }
}


this.elevatorMusic.play()
}

slideShowButton(forward){

if (forward || this.slideIndex==0){

if (this.slideshowstate.length-1 > this.slideIndex) {
  this.slideIndex++
  this.slides.slideNext(1000);
     this.slideFX.play();
}else{
  this.slideShowDone();
}
}else{
  this.slideIndex--
  this.slides.slidePrev(1000);
     this.slideFX.play();
}


}

slideShowDone(){

this.slideshowstate = [];
this.slideIndex = 0;

this.elevatorMusic.stop();

}

  //   this.pushevent(event)
  // });

  //this.diff('output','goal');
ionViewDidLoad(){
 setTimeout(() => {
        RegexColorizer.colorizeAll();
        ReplaceColorizer.colorizeAll();
      }, 0);
}

  ionViewCanEnter(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.get(storageID).then(async (val) => {
        if (!val) {
          if (!demoMODE) {
            this.earlyAccess();
          }
        }else if (!val.version){

this.newVersion();
this.username = val.username;
this.userAvatar = val.userAvatar;
this.bestScores=val.bestScores;
this.nightmode = val.nightmode;

//this.oldStars=

        } else if (val.level) {

if (val.version==9){
  this.newVersion(true);
}
          //console.log(val.bestScores);
          if (this.hideRules) {
            val.rules = val.rules.map((rule) => ({ ...rule, visible: false }));
          }

          if (typeof lvlDB[String(val.level+1)]!=='undefined'){
          this.level = val.level;         
          this.gamestate = val.gamestate;
          this.view = val.view;
          this.section = val.section;
          this.lastCampaginLevel = val.lastCampaginLevel;
          }

          
          this.sectionsSolved = val.sectionsSolved;
          this.tipFired = val.tipFired;
          this.tipsOff = val.tipsOff;
          this.rules = val.rules;



// set to g

this.rules.forEach((rule,i)=>{

if (!rule.flags){
  this.rules[i].flags="g";
}

})



          this.offlineLvls = val.offlineLvls;
          this.bestScores = val.bestScores;
          this.nightmode = val.nightmode;
          this.inProgressLvl = val.inProgressLvl;
          this.username = val.username;
          this.userAvatar = val.userAvatar;
          this.userLevelMode = val.userLevelMode;
          this.creationMode = val.creationMode;
          
          if (val.mute){
            this.mute=val.mute
          }else{
            this.mute=false;
          }

          if (val.fontScaleOutIn) {
            this.fontScaleOutIn = val.fontScaleOutIn;
          } else {
            this.fontScaleOutIn = [1, 1];
          }
        } else {
          this.username = val.username;
          this.userAvatar = val.userAvatar;
        }



if (!this.mute){
      this.ambiance = new howler.Howl({
      src: "assets/audio/ambiance.mp3",
      loop: true,
      volume: 1
      })

    this.ambiance.play()
}

this.mystars=this.calcStars();

        if (this.creationMode) {
          await this.lvlCreate();
        } else {
          await this.loadLevel(this.level, this.rules);
        }

        resolve(true);
      });
    });
  }

  newVersion(back:any=false){

    let alert = this.alertCtrl.create({
      title: "Welcome Back!",
      message: "Thank you for all your support during our non-profit's first early access game. We've been thrilled and humbled to learn from all of you and integrate many of your wonderful suggestions. This is our full release, but we're still hard at work building new features and additional content that will be freely updated in the near future. We're honored to be making this game and sharing it with all of you. Have fun and keep in touch by signing up for our newsletter if you haven't already!",
      inputs: [
        {
          name: "email",
          placeholder: "Your Email",
        },
      ],
      buttons: [
        {
          text: "Later",
          handler: () => {
            if (!back){
                  this.startSlideShow("Introduction");
                  }
          },
        },
        {
          text: "Sign-Up",
          handler: (data) => {
            if (!window.navigator.onLine) {
              this.pop(
                "No Internet",
                "Signing Up requires an internet connection"
              );
              return false;
            }
            var postAt = data.email.match(/@(.+)/i);

            if (
              /(.+)@(.+){2,}\.(.+){2,}/.test(data.email) &&
              data.email.length > 7 &&
              postAt &&
              !emailDomainBlacklist.includes(postAt[1])
            ) {
                 this.startSlideShow("Introduction");
              fetch(
                "<signupEmail>",
                {
                  method: "POST",
                  mode: "no-cors",
                  headers: {
                    "Content-Type":
                      "application/x-www-form-urlencoded;charset=UTF-8",
                  },
                  body: "EMAIL=" + data.email,
                }
              );
            } else {
              // alert('please enter a valid email');
              alert.setMessage(
                '<span class="red">Please Enter a Valid Email</span>'
              );
              return false;
            }
          },
        }
      ],
    });
    alert.present();
  
  }

  shakeInput(id) {
    this.shake[id] = true;
    setTimeout(() => {
      this.shake[id] = false;
    }, 200);
  }

  bugReport() {
    window.open(
      "mailto:example@email.com" +
        this.version +
        "&body=Please describe how to reproduce your issue in detail. Thank you for your time and feedback!",
      "_blank"
    );
  }

  trimTrailingSpace(input) {
    input = input.replace(/[^\S\t\n]*\n/g, "\n");
    input = input.replace(/\n*$/g, "");
    return input;
  }

pastedContent(event){
let clipboardData = event.clipboardData;
if (!clipboardData){return true}
  let pastedText = clipboardData.getData('text');

let allowed=true;
console.log(pastedText);
if (this.gamestate.bannedChars){
pastedText.split('').forEach((char)=>{
if (this.gamestate.bannedChars.includes(char)){
  allowed=false;
}
})
}

var id=document.activeElement.id;
var currentTxt=document.getElementById(id).innerText
var newLen=currentTxt.length+pastedText.length
var limit=99999999;
if(parseInt(id)%2==1){
  if (this.gamestate.maxCharsFind){
 limit=this.gamestate.maxCharsFind
  }
}else{
 if (this.gamestate.maxCharsReplace){
 limit=this.gamestate.maxCharsReplace
  }
}

if (allowed){
  allowed=newLen<=limit;
}



if (!allowed){
 this.shakeInput(document.activeElement.id); 
}

return allowed;

  }


  changeFlags(flgs,i){

    //this.gamestate.allowedFlags=["g","m","s","i"];// (debug)

//if (typeof this.gamestate.allowedFlags == 'undefined'){return}

this.globalModal = this.modalCtrl.create(selectflags, {
      flags:flgs,
      allowed:this.gamestate.allowedFlags,
      ruleIndex:i,
      stars:this.calcLvlStars(this.gamestate.id)
    });
    this.globalModal.present();

  }

  setData() {
    //let store = this.wrapVariables();

    let store = {
      level: this.level,
      gamestate: this.gamestate,
      view: this.view,
      tipFired: this.tipFired,
      tipsOff: this.tipsOff,
      rules: this.rules,
      mute: this.mute,
      bestScores: this.bestScores,
      section: this.section,
      nightmode: this.nightmode,
      sectionsSolved: this.sectionsSolved,
      inProgressLvl: this.inProgressLvl,
      username: this.username,
      offlineLvls: this.offlineLvls,
      userAvatar: this.userAvatar,
      userLevelMode: this.userLevelMode,
      lastCampaginLevel: this.lastCampaginLevel,
      creationMode: this.creationMode,
      fontScaleOutIn: this.fontScaleOutIn,
      version:10,
      oldData:this.oldData
    };
    this.storage.set(storageID, store);
  }


  toggleMute(){

this.mute=!this.mute;

if (this.mute){
  // stop

    this.ambiance.stop();

}else{
  // start

      this.ambiance = new howler.Howl({
      src: "assets/audio/ambiance.mp3",
      loop: true,
      volume: 1
      })

    this.ambiance.play()

}

this.setData();

  }

  reset() {
    var alert = this.alertCtrl.create({
      title: "Are you sure?",
      enableBackdropDismiss: false,
      subTitle:
        "All your data will be lost. Your username and uploaded levels will remain.",
      //message: "Are you sure you want to quit?",
      buttons: [
        {
          text: "cancel",
          handler: (data) => {},
        },
        {
          text: "Reset",
          handler: (data) => {
            if (!this.devMode || !this.username) {
              this.storage.clear().then(() => {
                window.location.reload(true);
              });
            } else {
              var temp = this.username;
              var temp2 = this.userAvatar;

              this.storage.clear().then(() => {
                this.storage
                  .set(storageID, {
                    username: temp,
                    userAvatar: this.userAvatar,
                  })
                  .then(() => {
                    window.location.reload(true);
                  });
              });
            }
          },
        },
      ],
    });

    alert.present();
  }

  themeToggle() {
    this.nightmode = !this.nightmode;
    this.setData();
  }

  rate(i) {
    this.userLevelRating = i;
  }
  async loadLevel(level: any = this.level, savedRules: any = false) {
    let lvl;
    let editMode = false;
    this.userLevelRating = 0;
    this.hintIndex = 0;
    this.inputGrow = 0;

    if (level>this.productionLvlsVisible){
      this.dispMessage('Congratulations!','You have completed the current campaign for the game. There are 126 stars to earn in total, and if you\'re  struggling, feel free to check out our answer guide for inspiration. We hope to release new levels shortly, but in the meantime, consider playing other user\'s levels as well as creating your own! Thanks!');
return;
    }
/*
if (!lvlDB[this.lastCampaginLevel] || !lvlDB[this.level]){
  console.error("level undefined");
  return;
}
*/

    if (lvlDB[this.lastCampaginLevel].id == "lightness") {
      this.nightmode = true;
    }







    if (typeof level == "string") {
      // offline usr
      this.userLevelMode = true;
      lvl = this.offlineLvls[level];
    } else {
      if (isNaN(level)) {
        //console.log(level);
        if (typeof level.goal == "undefined") {
          // it is an object but not a complete level

          this.userLevelMode = false;
          this.level = level.index + 1;
          this.lastCampaginLevel = this.level;
          editMode = level.edit;
          level = this.level;
          lvl = lvlDB[level];
        } else {
          // we set the incoming level equal to level
          lvl = level;
          this.level = lvl.id;
        }
      } else {
        // it's a number, of the regular levels
        this.lastCampaginLevel = level;
        this.userLevelMode = false;
        lvl = lvlDB[level];
        this.level = level;
      }
    }

    if (lvl.id == "lightness" && !this.bestScores["lightness"]) {
      this.nightmode = false;
    }

if (lvl.id == "ascii") {
 this.fontScale = .5
    }


    if (typeof lvl.hint !== "undefined") {
      this.numHints = lvl.hint.length;
    }

    if (!editMode) {
      this.creationMode = false;
    }

    if (typeof lvl == "undefined") {
      alert("level not found");
      return;
    }

    this.winState = false;

    if (typeof lvl["input"] == "string") {
      lvl["input"] = [lvl["input"]];
      lvl["goal"] = [lvl["goal"]];
    }

    this.gamestate = {
      input: JSON.parse(JSON.stringify(lvl["input"])),
      output: JSON.parse(JSON.stringify(lvl["input"])),
      goal: JSON.parse(JSON.stringify(lvl["goal"])),
      prompt: lvl["prompt"],
      promptName: lvl["promptName"],
      initialRuleState: [
        { find: "", replace: "", flags:"g", visible: true, highlit: false },
      ],
      bannedChars: [],
      maxRules: 99,
      maxCharsFind: 999,
      maxCharsReplace: 999,
      //maxChars:[999,999],
      regexTipsShowTo: 99,
    };

    if (!isNaN(this.level)) {
      var pulse = false;

      if (level == 1 || tipsShowTo[level - 2] < tipsShowTo[level - 1]) {
        pulse = true;
      }
      if (this.bestScores[lvlDB[this.level].id]) {
        pulse = false;
      }

      this.gamestate["pulse"] = pulse;
    } else {
      //console.log(lvl);
      if (typeof lvl["date"] !== "undefined") {
        this.gamestate.date = lvl["date"];
      }
      if (typeof lvl["id"] !== "undefined") {
        this.gamestate.id = lvl["id"];
      }

      if (typeof lvl["userAvatar"] !== "undefined") {
        this.gamestate.userAvatar = lvl["userAvatar"];
      }
      if (typeof lvl["username"] !== "undefined") {
        this.gamestate.username = lvl["username"];
      }
      if (typeof lvl["message"] !== "undefined") {
        this.gamestate.message = lvl["message"];
      }
    }
    if (typeof lvl["bannedChars"] !== "undefined") {
      this.gamestate.bannedChars = lvl["bannedChars"];
    }
    if (typeof lvl["maxRules"] !== "undefined") {
      this.gamestate.maxRules = lvl["maxRules"];
    }
    if (typeof lvl["allowedFlags"] !== "undefined") {
      this.gamestate.allowedFlags = lvl["allowedFlags"];
    }
    if (typeof tipsShowTo[level] !== "undefined") {
      //console.log(tipsShowTo[level])
      this.gamestate.regexTipsShowTo = tipsShowTo[level - 1];
    }
    if (
      typeof lvl["initialRuleState"] !== "undefined" &&
      !editMode &&
      !this.userLevelMode
    ) {
      this.gamestate.initialRuleState = lvl["initialRuleState"];
    }
    if (typeof lvl["maxCharsFind"] !== "undefined") {
      this.gamestate.maxCharsFind = lvl["maxCharsFind"];
    }
    if (typeof lvl["maxCharsReplace"] !== "undefined") {
      this.gamestate.maxCharsReplace = lvl["maxCharsReplace"];
    }

    if (typeof lvl["id"] !== "undefined") {
      this.gamestate.id = lvl["id"];
    }
    //console.log(this.gamestate);
    this.section = 0;
    this.sectionsSolved = [];
    lvl["input"].forEach(() => {
      this.sectionsSolved.push(false);
    });

    if (editMode) {
      await this.lvlCreate(this.gamestate);
      return;
    }

    this.view = {
      output: this.trimTrailingSpace(this.gamestate.output[0]),
      //input:this.gamestate.input[0],
      goal: this.trimTrailingSpace(this.gamestate.goal[0]),
    };

    this.source = lvl.source;

    await this.diff("output", "goal", "red");
    await this.diff("goal", "input", "green");

    if (!this.tipsOff && typeof this.bestScores[level.id] !== "undefined") {
      this.tipFired = false;
    }

    if (!savedRules) {
      this.rules = this.gamestate.initialRuleState;
    } else {
      setTimeout(() => {
        RegexColorizer.colorizeAll();
        ReplaceColorizer.colorizeAll();
      }, 0);
    }
    if (this.loading) {
      this.loading = false;
    } else {
      this.evaluateRegEx();
    }

    this.setData();
    if (!this.userLevelMode) {
      this.cornerWindow = "chat";
    } else {
      this.cornerWindow = "info";
    }
  }

  getNextLvlID(id) {}

  processTips(findInput, event, lastChar) {
    var tipsOff = this.tipsOff || this.creationMode;

    if (
      event.key == "I" &&
      findInput &&
      lvlDB[this.level].id == "corruption" &&
      !tipsOff
    ) {
      event.preventDefault();
      this.alertMessage(
        "Ned",
        'The "<b>OR</b> operator is a "vertical bar" <i>(shift+backslash on most keyboards)</i> not an upper case i',
        "Helpful Tip",
        true
      );
    }

   if (
      event.key == "n" &&
      findInput && lastChar=="\\" &&
      lvlDB[this.level].id == "rex" &&
      !tipsOff
    ) {
      event.preventDefault();
      this.alertMessage(
        "Ned",
        'The "\\n" can be used in find AND replace, the latter allowing you to add newlines to the output.',
        "Helpful Tip",
        true
      );
    }

    if (
      (event.key == "-" || event.key == "=") &&
      (event.altKey || event.metaKey) &&
      findInput &&
      lvlDB[this.level].id == "ascii" &&
      !tipsOff
    ) {
      this.alertMessage(
        "Ned",
        "To adjust font size, you must hold down the control key, not command, option or alt.",
        "Helpful Tip",
        true
      );
    }

    if (
      (event.key == "(" || event.key == ")") &&
      lastChar !== ">" &&
      findInput &&
      lvlDB[this.level].id == "nonotes" &&
      !tipsOff
    ) {
      console.log(lastChar);
      event.preventDefault();
      this.alertMessage(
        "Ned",
        'Parentheses <b><span class="c">( )</span></b> are special commands you haven\'t unlocked yet. To reference a LITERAL parentheses you must add a <b>\\</b> behind it.',
        "Helpful Tip",
        true
      );
    }

    if (
      event.key == "$" &&
      findInput &&
      lvlDB[this.level].id == "suffix" &&
      !tipsOff
    ) {
      event.preventDefault();
      this.alertMessage(
        "Ned",
        'To reference the first capture group, <b><span class="c">$</span>1</b> should be entered in the <b>replace</b> field.',
        "Helpful Tip",
        true
      );
    }

    if (
      (event.key == "." || event.key == "$" || event.key == "*") &&
      findInput &&
      !tipsOff &&
      !this.bestScores[this.gamestate.id] &&
      lastChar !== ">" &&
      lastChar !== "\\" &&
      !isNaN(this.level) &&
      this.level < 6
    ) {
      event.preventDefault();
      this.alertMessage(
        "Ned",
        "We have not gone over this RegEx command yet and it isn't necessary to complete your current assignment. Keep in mind that you'll have to put a \"\\\" character behind it to make it <b>literal</b>",
        "Helpful Tip",
        true
      );
    }

    if (event.key == " ") {
      if (findInput) {
        this.shakeInput(document.activeElement.id);
        event.preventDefault();

        if (
          !tipsOff &&
          !this.bestScores[lvlDB[this.level].id] &&
          this.level < 3
        ) {
          this.alertMessage(
            "Ned",
            'To match a whitespace in the "Find" input, use the "<b><span class="b">\\s</span></b>" token. Traditional spaces are not allowed in "Find" but are in "Replace!".',
            "Helpful Tip",
            true
          );
        }
      }
    }

    if (
      (event.key == "|" ||
        event.key == "[" ||
        event.key == "]" ||
        event.key == "^") &&
      !findInput
    ) {
      if (!tipsOff && !this.bestScores[lvlDB[this.level].id]) {
        event.preventDefault();
        this.alertMessage(
          "Ned",
          'Special characters (with the exception of capture groups i.e. <span class="c">$</span>1) only work in the "<b>Find</b>" input!',
          "Helpful Tip",
          true
        );
      }
    }

    if (
      (event.key == "(" || event.key == ")") &&
      !findInput &&
      lvlDB[this.level].id == "suffix"
    ) {
      if (!tipsOff && !this.bestScores[lvlDB[this.level].id]) {
        event.preventDefault();
        this.alertMessage(
          "Ned",
          'Special characters (with the exception of capture groups i.e. <span class="c">$</span>1) only work in the "<b>Find</b>" input!',
          "Helpful Tip",
          true
        );
      }
    }

    if (
      event.key == "\\" &&
      !findInput &&
      lvlDB[this.level].id == "taletwocities"
    ) {
      if (!tipsOff && !this.bestScores[lvlDB[this.level].id]) {
        event.preventDefault();
        this.alertMessage(
          "Ned",
          'You can use the spacebar in the replace field, <b><span class="b">\\s</span></b> is only for the find input!',
          "Helpful Tip",
          true
        );
      }
    }
  }

  reportUsrLvl() {
    alert("coming soon!");
  }
  async highlight(rule, i) {
    if (!rule.highlit) {
      this.rules.forEach((rule) => {
        rule.highlit = false;
      });
    }

    rule.highlit = !rule.highlit;

    if (rule.highlit) {

      this.setFocus(false, i);
      this.highlit = 0;
      this.rules[i].visible = true;
      this.vizState=[];
      
      for (let v = i + 1; v < this.rules.length; v++) {
        this.vizState[v]=this.rules[v].visible
        this.rules[v].visible = false;
      }
    } else {
      if (this.vizState.length==0){
      for (let v = i + 1; v < this.rules.length; v++) {
        this.rules[v].visible = true;
      }
    }else{

for (let v = i + 1; v < this.rules.length; v++) {
    if (typeof this.vizState[v] !== 'undefined' && this.vizState[v] !== null){     
        this.rules[v].visible = this.vizState[v];
      }else{
        this.rules[v].visible = true;
      }
      }
      this.vizState=[];
    }
    }

    await this.evaluateRegEx();
  }

  async toggleViz(rule) {
    if (rule.visible) {
      rule.highlit = false;
    }
    rule.visible = !rule.visible;
    if (rule.replace !== "" || rule.find !== "") {
      await this.evaluateRegEx();
    }
  }

  noPulse() {
    this.gamestate.pulse = false;
  }

  procedural(){


if (debugMODE){

var message='We\'re working to build a procedural engine that can make random and unique challenges for infinite replayability. Check back soon and sign up to our newsletter for updates!'

 var alert = this.alertCtrl.create({
      title: 'Feature In Development',
      enableBackdropDismiss: false,
      subTitle: message,
      inputs: [
        {
          name: "email",
          placeholder: "Your Email",
        },
      ],
      //message: "Are you sure you want to quit?",
      buttons: [
        {
          text: "Later",
          handler: (data) => {
          },
        },
        {
          text: "Sign-Up",
          handler: (data) => {
            if (!window.navigator.onLine) {
              this.pop(
                "No Internet",
                "Signing Up requires an internet connection"
              );
              return false;
            }
            var postAt = data.email.match(/@(.+)/i);

            if (
              /(.+)@(.+){2,}\.(.+){2,}/.test(data.email) &&
              data.email.length > 7 &&
              postAt &&
              !emailDomainBlacklist.includes(postAt[1])
            ) {
                 this.startSlideShow("Introduction");
              fetch(
                "https://cinqmarsmedia.us2.list-manage.com/subscribe/post?u=551a0b16e3eff4f13cbac507b&amp;id=5e54ff5bad",
                {
                  method: "POST",
                  mode: "no-cors",
                  headers: {
                    "Content-Type":
                      "application/x-www-form-urlencoded;charset=UTF-8",
                  },
                  body: "EMAIL=" + data.email,
                }
              );
            } else {
              // alert('please enter a valid email');
              alert.setMessage(
                '<span class="red">Please Enter a Valid Email</span>'
              );
              return false;
            }
          },
        },
      ],
    });

    alert.present();


return;
}


    if (this.mystars<this.unlockThresh.procedural  && !debugMODE){

this.dispMessage('More Stars Needed','Earn stars by solving and optimizing campaign levels. If struggling, you can always use hints or check out our answer guide.');
    }else{
//alert('procedural mode')
console.error("integrate procedural mode");
    }
  }


dispMessage(title,message){
  var alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
      {
          text: "Answer Guide",
          handler: (data) => {},
        },
        {
          text: "Ok",
          handler: (data) => {},
        },
      ],
    });

  alert.present();
}


  getHint() {
    if (lvlDB[this.level].hint) {
      if (!lvlDB[this.level].hint[this.hintIndex]) {
        this.hintIndex = 0;
      }

      var name = lvlDB[this.level].hint[this.hintIndex].name;
      // make sure it is capital
      /*
if (!name.includes('_')){

}
*/
      this.alertMessage(
        name,
        lvlDB[this.level].hint[this.hintIndex].txt,
        "Hint " +
          (parseInt(this.hintIndex) + 1) +
          " of " +
          lvlDB[this.level].hint.length,
        true,
        true
      );

      this.hintIndex++;
    } else {
      this.walkthrough();
    }
  }

  scaleFont(smaller, type: any = 0) {
    //type1 is output, type 2 is goal type 0 is both

    if (type == 0) {
      this.fontScale += smaller ? 0.1 : -0.1;
    } else if (type == 1) {
      this.fontScaleOutIn[0] += smaller ? 0.03 : -0.03;
    } else if (type == 2) {
      this.fontScaleOutIn[1] += smaller ? 0.03 : -0.03;
    }
  }

  async rmRule(i) {
    this.rules.splice(i, 1);
    this.setFocus(true);
    await this.evaluateRegEx();
  }

  makeUsername(make: any = false) {
    if (!window.navigator.onLine) {
      this.pop("No Internet", "Please try again when you have a connection");
      return;
    }

    this._userSub = this.db
      .list("/usernames")
      .valueChanges()
      .subscribe((userList) => {
        this._userSub.unsubscribe();
        console.log(userList);
        this.globalModal = this.modalCtrl.create(
          makeUsr,
          { users: userList, make: make },
          {
            cssClass: "makeuser-modal",
          }
        );
        this.globalModal.present();
      });
  }

  setFocus(addrule: any = false, index: any = -1, bck: any = false) {
    setTimeout(() => {
      var activeID = document.activeElement.id;
      var objective = 1;
      if (!bck) {
        if (activeID) {
          objective = parseInt(activeID) + 1;
        }

        if (objective > this.rules.length * 2) {
          objective = 1;
        }
      } else {
        if (activeID) {
          objective = parseInt(activeID) - 1;
        }

        if (objective < 1) {
          objective = this.rules.length * 2;
        }
      }

      if (addrule) {
        objective = (this.rules.length - 1) * 2 + 1;
      }

      if (index !== -1) {
        objective = index * 2 + 1;
        //console.log(objective);
      }
      //console.log(objective);
      var ele = document.getElementById(String(objective));
      if (ele) {
        ele.focus();
      }
    }, 100);
  }

  ngOnInit() {
    this.setFocus();
  }

  turnBackHints() {
    this.tipsOff = false;
    this.setData();
  }

  requiredStars() {
    //console.log(starChars)
    let chars = starChars[this.gamestate.id][0];
    let rules = starChars[this.gamestate.id][1];

    let threeStars =
      this.bestScores[this.gamestate.id].rules <= rules &&
      this.bestScores[this.gamestate.id].chars <= chars;

    var alert = this.alertCtrl.create({
      title: threeStars ? "Best User Solutions" : "Earn More Stars",
      subTitle:
        "<span class='float'>Level <b>" +
        this.level +
        "</b> " +
        lvlDB[this.level].promptName +
        "</span>",
      message: threeStars
        ? "You have earned all three stars for this level allowing you to view the most efficient solutions users have submitted: <COMING SOON>"
        : "<div class='starrules'>Chars: <b>" +
          chars +
          "</b> &nbsp;&nbsp;&nbsp;&nbsp;Rules: <b>" +
          rules +
          "</b></div>" +
          "In order to get all three stars for this level, you must submit a solution with <b>" +
          chars +
          "</b> chars or fewer and one with <b>" +
          rules +
          "</b> rules or fewer. It will often be impossible to find one solution that accomplishes both simultaneously. It is also often the case that, until you learn later concepts in the game, you will not be able to optimize the level fully.",
      buttons: [
        {
          text: "Ok",
          handler: (data) => {},
        },
      ],
    });

    alert.present();
  }

  submitLvl() {
    // error if it isn't solved and also grayed out

    //this.winState=true; // DELETEEEEEE

    if (!this.winState) {
      var alert = this.alertCtrl.create({
        title: "Solution Needed",
        enableBackdropDismiss: false,
        //subTitle: message,
        message:
          "Your current solution does not seem to work. You can submit once it does.",
        buttons: [
          {
            text: "Ok",
            handler: (data) => {},
          },
        ],
      });

      alert.present();
    } else {
      this.globalModal = this.modalCtrl.create(submitLvl, {
        usr: this.username,
      });
      this.globalModal.present();
    }
  }

  onRightClick(event) {
    if (!debugMODE) {
      event.preventDefault(); //this will disable default action of the context menu
    }

    //there will be your code for the expected right click action
  }

  scrollUp() {
    document.getElementById("main-menu").scrollTop = 0;
  }

  spacesUniform(txt) {
    // replacing 32 with 160, may break?
    return txt.replace(/ /g, " ");
  }

  async onInput(event) {
    //el.innerText=el.innerText.replace(/\\s/g,' ');
    //------------- all the caret stuff---------------
    function getCaretPosition(editableDiv: any) {
      var caretPos = 0,
        sel: any,
        range: any;
      if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
          range = sel.getRangeAt(0);
          //console.log("CURRENT SELECTIOn", sel, sel.focusNode, sel.anchorNode)
          caretPos = range.endOffset;
        }
      }
      return caretPos;
    }

    function setCaret(el, index) {
      const childNodesArray = [];
      function recursivelyStoreNodes(el) {
        Array.from(el.childNodes).forEach((node) => {
          if (node["firstChild"]) {
            // console.log("node has child - ", node)
            recursivelyStoreNodes(node);
          } else {
            childNodesArray.push(node);
          }
        });
      }
      recursivelyStoreNodes(el);

      var range = document.createRange();
      var sel = window.getSelection();
      //console.log(childNodesArray)
      const { x, y } = traverse(el, index);

      if (y == -1) {
        // console.log("setting cursor at the end of the ",x," element:",childNodesArray[x])
        if (typeof childNodesArray[x] == "undefined") {
          return;
        }
        range.setStartAfter(childNodesArray[x]);
      } else {
        let elx = childNodesArray[x];

        if (elx.firstChild) {
          elx = elx.firstChild;
          //console.log("found firsechdild", elx, typeof(elx))
        }
        //console.log("setting cursor at the ",y," position of the ",x," element:",elx)
        range.setStart(elx, y);
      }
      range.collapse(true);

      sel.removeAllRanges();
      sel.addRange(range);
    }

    function elLength(el: any) {

      if (el && el.length) {
        return el.length;
      }
      if (el && el.innerText && el.innerText.length) {
        return el.innerText.length;
      }
      return 0;
    }

    function traverse(el: any, index: any) {
      const childNodesArray = [];
      function recursivelyStoreNodes(el) {
        Array.from(el.childNodes).forEach((node) => {
          if (node["firstChild"]) {
            //console.log("node has child - ", node)
            recursivelyStoreNodes(node);
          } else {
            childNodesArray.push(node);
          }
        });
      }

      recursivelyStoreNodes(el);

      let prev: number = 0;
      let i: number = 0;
      //console.log("prev = ", prev," index = ", index)
      while (prev < index) {
        //console.log("prev = ", prev,"length = ",elLength(childNodesArray[i]), " index = ", index)
        if (index < prev + elLength(childNodesArray[i])) {
          return {
            x: i,
            y: index - prev,
          };
        }
        if (index == prev + elLength(childNodesArray[i])) {
          return {
            x: i,
            y: -1,
          };
        }
        prev = prev + elLength(childNodesArray[i]);
        i++;
      }
      //console.log("fa returning  ",{x:Math.max(i-1,0), y:-1})//elLength(el.lastChild)})
      return { x: Math.max(i - 1, 0), y: -1 }; //elLength(el.lastChild)}
    }
    //console.log( window.getSelection().getRangeAt(0),window.getSelection().getRangeAt(0).endOffset, window.getSelection().getRangeAt(0).endContainer, window.getSelection().getRangeAt(0).startOffset )

    let initialCursorPos = getCaretPosition(event.target);
    // console.log("caret position  right now =", initialCursorPos);
    // console.log("oritnign ", Array.from(event.target.childNodes));

    let childNodesArray = [];

    function recursivelyStoreNodes(el) {
      Array.from(el.childNodes).forEach((node) => {
        if (node["firstChild"]) {
          //console.log("node has child - ", node)
          recursivelyStoreNodes(node);
        } else {
          childNodesArray.push(node);
        }
      });
    }

    recursivelyStoreNodes(event.target);

    //console.log(childNodesArray.map(x=>x.innerText||x.textContent))
    //initialCursorPos += Array.from(event.target.childNodes).reduce((prev, curr)=>{console.log(curr, elLength(curr)); return prev + elLength(curr)},0)
    //console.log("done calculating child pos init")
    let currentNode = window.getSelection().focusNode;
    //console.log(window.getSelection(), typeof(window.getSelection().focusNode))

    let selectedChildIndex = -1;
    for (let i = 0; i < childNodesArray.length; i++) {
      let x = childNodesArray[i];
      if (x.isSameNode(currentNode) || x.isSameNode(currentNode.parentNode)) {
        selectedChildIndex = i;
        break;
      }
    }
    // let selectedChildIndex = Array.from(event.target.childNodes).findIndex(x=>{console.log("is ", x, " the same as ", currentNode," ?", x.isSameNode(currentNode)); return x.isSameNode(currentNode)})
    //console.log("selected node: ", currentNode)
    //console.log("selected child node index = ", selectedChildIndex)
    initialCursorPos += Array.from(childNodesArray)
      .slice(0, selectedChildIndex)
      .reduce((prev, curr) => prev + elLength(curr), 0);
    //initialCursorPos -= elLength(event.target.childNodes[selectedChildIndex])
    //console.log("final cursor pos = ",initialCursorPos)

    RegexColorizer.colorizeAll();
    ReplaceColorizer.colorizeAll();
    this.evaluateRegEx();
    if (initialCursorPos > 0) {
      setCaret(event.target, initialCursorPos);
    }
    if (this.creationMode) {
      //this.inProgressLvl=JSON.parse(JSON.stringify(this.gamestate));
      this.inProgressLvl.initialRuleState = this.rules;
    }

    this.setData();
  }

  asyncEval(input, find, txt) {
    return new Promise((resolve) => {
      setTimeout(() => {
        //     console.log(window["embedly"]);

        //     //alert(cards);
        //     //alert(JSON.stringify(this.feedStore.currentFeed));
        resolve(input.replace(new RegExp(find, "g"), txt));
      }, 10);
    });
  }

  async evaluateRegEx() {
    this.regexWorker.abortAllWorkers();
    clearTimeout(this.regexUnresponsiveTimeout);
    clearTimeout(this.regexLoadingTimeout);
    this.regexLoadingTimeout = setTimeout(()=>{
      this.regexLoading = true;
    }, this.regexLoadingTime);

  
    this.regexUnresponsiveTimeout = setTimeout(()=>{
      this.regexUnresponsive = true;
      this.alertMessage(
        "Ned",
        "This regex seems to be taking too long to compute. This could be because of \"catastrophic backtracking\". You can try waiting longer or change the regex query.",
        "Tip",
        true,
        true
      );
    }, this.regexUnresponsiveTime);
    let index: number, input: string;
    for ([index, input] of this.gamestate.input.entries()) {
      //var input=original // WANT TO DEEP CLONE
      //var input=(' ' + original).slice(1); //DOES NOT WORK
      //var obj={txt:original};var input=JSON.parse(JSON.stringify(obj)).txt // DOES NOT WORK
      //var input="It was the best of times, it was the worst of times"// works properly
      //var input=JSON.stringify()

      var chars = 0;
      var highlighter;
      var highlightFlags;

      for (const rule of this.rules) {
        if (rule.highlit) {
          highlighter = rule.find;
          highlightFlags = rule.flags
        }

        rule.replace = rule.replace.replace(/\\s/g, " "); // better way?

        chars += rule.find.length;
        chars += rule.replace.length;

        if (!highlighter) {
          if (rule.visible && rule.find !== "") {
            try {
              var repCopy = rule.replace;
              //input=input.replace(/&nbsp;/g,' ');
              repCopy = repCopy.replace(/∙/g, " ");
              repCopy = repCopy.replace(/\\n/g, "\n");
              repCopy = repCopy.replace(/\\t/g, "\t");
              repCopy = repCopy.replace(/\\r/g, "\r");
              repCopy = repCopy.replace(/\\s/g, "s");
              repCopy = repCopy.replace(/\\v/g, "\v");

              //console.log(repCopy);
              //https://www.javaer101.com/en/article/30582644.html ()() catastrophic backtracking
              //input = input.replace(new RegExp(rule.find, "g"), repCopy); //this.asyncEval(input,rule.find,repCopy);

              input = await this.regexWorker.replace(
                input,
                new RegExp(rule.find, rule.flags),
                repCopy
              );
            } catch (err) {
              //console.log('invalid regex catch: ',err)
            } finally {
            }
          }
        }
      }

      this.numChars = chars;
      //console.log(this.numChars)
      //input=input.replace(/\s\s/g,'&nbsp;&nbsp;')
      //input=input.replace(/>\s/g,'>')
      this.gamestate.output[index] = this.trimTrailingSpace(input);

      //console.log(highlighter);
      if (!highlighter) {
        this.highlit = -1;

        // highlighting spaces

        var diffSpaces =
          this.condenseSpaces(this.gamestate.output[this.section]) ==
          this.condenseSpaces(this.gamestate.goal[this.section]);
        //console.log(this.condenseSpaces(this.gamestate.input[this.section]));
        //console.log(this.condenseSpaces(this.gamestate.goal[this.section]))
        //console.log(diffSpaces, 'should be true')

        if (this.section == index) {
          await this.diff("output", "goal", diffSpaces ? "redSpace" : "red");
          await this.diff("goal", "output", "green");
        }
        //console.log(this.gamestate.output.replace(/\s|\&nbsp;/g,' '))
        //console.log(this.gamestate.goal.replace(/\s/g,' '))

        if (
          this.spacesUniform(this.gamestate.output[index]) ==
          this.spacesUniform(this.trimTrailingSpace(this.gamestate.goal[index]))
        ) {
          this.sectionsSolved[index] = true;
        } else {
          this.sectionsSolved[index] = false;
        }
      } else {
        if (this.section == index) {
          try {

            console.log(highlighter, highlighter);
            var regex = new RegExp(highlighter, highlightFlags);
            //var capgex = new RegExp("(" + highlighter + ")", highlightFlags);
            // this.highlit = 1;
            this.highlit = await this.regexWorker.numMatches(
              this.gamestate.output[index],
              regex
            );
            //this.diff('output','goal','white');
            //this.gamestate.output[index]=this.gamestate.output[index].replace(/\&nbsp;/g,' ')
            this.gamestate.output[index] = await this.regexWorker.specialReplace(
              this.gamestate.output[index],
              regex,
              '<span class="high">','</span>'
            );

            // this.gamestate.output[index].replace();
            // this.gamestate.output[index].replace();
            //console.log(this.gamestate.output);
            this.view.output = this.sanitizeChars(
              this.sanitizeView(this.gamestate.output[index])
            );
          } catch (err) {
            //console.log('invalid regex catch: ',err)
          }
        }
      }
    }

    var lvlWon = this.gamestate.input[0] !== this.gamestate.goal[0];

    this.sectionsSolved.forEach((rez) => {
      lvlWon = lvlWon && rez;
    });

    clearTimeout(this.regexLoadingTimeout);
    this.regexLoading = false;
    clearTimeout(this.regexUnresponsiveTimeout);
    this.regexUnresponsive = false;

    if (lvlWon) {
      let id = this.level;
      if (this.level < 1000) {
        id = lvlDB[this.level].id;
      }

      if (typeof this.bestScores[id] == "undefined" && !this.creationMode) {
        this.levelWon();
        return;
      } else {
var highlightActive=false;

this.rules.forEach((rule)=>{
  highlightActive=highlightActive || rule.highlit
})

if (!highlightActive){
        this.winState = true;
        }else{
         this.winState = false 
        }

      }
    } else {
      this.winState = false;
    }
  }

  sanitizeView(txt) {
    return txt;
    //return txt.replace(/>+\s<+/g,'<span class="interpunct">·</span>');
  }

  condenseSpaces(txt) {
    var temp = txt.replace(/[^\S\t\n]+/g, " ");
    temp = temp.replace(/^[^\S\t\n]+/g, "");
    temp = temp.replace(/\n[^\S\t\n]+/g, "\n");
    temp = temp.replace(/[^\S\t\n]+\n/g, "\n");
    temp = temp.replace(/[^\S\t\n]+$/g, "");
    temp = temp.replace(/\s/g, "");

    return temp;
  }

  async pageSel(i) {
    this.section = i;
    await this.evaluateRegEx();
  }

  post() {
    if (this.winState) {
      this.levelWon();
    } else {
      var rule = "";
      var char = "";
      var id = lvlDB[this.level].id;

      if (this.bestScores[id].chars > starChars[id][0]) {
        char =
          '<span class="small"><i>reduce chars to <b>' +
          starChars[id][0] +
          "</b> or less to earn another star</i></span>";
      }

      if (this.bestScores[id].rules > starChars[id][1]) {
        rule =
          '<span class="small"><i>reduce rules to <b>' +
          starChars[id][0] +
          "</b> or fewer to earn another star</i></span>";
      }

      var rules = ['<div class="show">', '<div class="show">'];

      JSON.parse(this.bestScores[id].charSolution).forEach((rule) => {
        rules[0] +=
          "/<b>" + rule.find + "</b>/g => <b>" + rule.replace + "</b><br>";
      });

      JSON.parse(this.bestScores[id].ruleSolution).forEach((rule) => {
        rules[1] +=
          "/<b>" + rule.find + "</b>/g => <b>" + rule.replace + "</b><br>";
      });

      rules[0] += "</div>";
      rules[1] += "</div>";

      var alert = this.alertCtrl.create({
        title: "Your Best Solutions",
        subTitle:
          "<span class='float'>Level <b>" +
          this.level +
          "</b> " +
          lvlDB[this.level].promptName +
          "</span>",
        message:
          "<u>Fewest Rules</u>: <b>" +
          this.bestScores[id].rules +
          rule +
          "</b><br>" +
          rules[1] +
          "<br><br>" +
          "<u>Fewest Chars</u>: <b>" +
          this.bestScores[id].chars +
          char +
          "</b><br>" +
          rules[0],
        buttons: [
          {
            text: "Apply Rules",
            handler: (data) => {
              //console.log(this.bestScores[id].charSolution)
              this.rules = JSON.parse(this.bestScores[id].ruleSolution);
              this.evaluateRegEx();
            },
          },
          {
            text: "Apply Chars",
            handler: (data) => {
              //console.log(this.bestScores[id].charSolution)
              this.rules = JSON.parse(this.bestScores[id].charSolution);
              this.evaluateRegEx();
            },
          },
        ],
      });

      alert.present();
    }
  }

  levelWon() {
    var attaboy = [
      "Nicely Done!",
      "Way to Go!",
      "Good Job!",
      "Good Work!",
      "Nice Work!",
      "Great Job!",
    ];

    var numRules = this.rules.length;

    var totalChars = this.numChars;
    var winningRules = JSON.stringify(this.rules);
    var id = this.level;

    if (parseInt(this.level) < 1000) {
      id = lvlDB[this.level].id;
    }

    if (typeof this.bestScores[id] == "undefined") {
      this.bestScores[id] = {
        rules: numRules,
        chars: totalChars,
        charSolution: JSON.stringify(this.rules),
        ruleSolution: JSON.stringify(this.rules),
      };
      this.uploadBest(numRules,totalChars,this.gamestate.id)
    } else {
var rulesBetter=this.bestScores[id].rules > numRules
var charsBetter=this.bestScores[id].chars > totalChars

      if (rulesBetter) {
        this.bestScores[id].rules = numRules;
        this.bestScores[id].ruleSolution = winningRules;
      }

      if (charsBetter) {
        this.bestScores[id].chars = totalChars;
        this.bestScores[id].charSolution = winningRules;
      }

      if (charsBetter || rulesBetter){
        this.uploadBest(numRules,totalChars,this.gamestate.id)
      }
    }

    var messag =
      attaboy[Math.floor(attaboy.length * Math.random())] +
      " You used <b>" +
      numRules +
      "</b> rule" +
      (numRules > 1 ? "s" : "") +
      " and <b>" +
      totalChars +
      "</b> total characters. ";

    if (
      this.bestScores[id].rules !== numRules ||
      this.bestScores[id].chars !== totalChars
    ) {
      messag +=
        "Your most optimized score is <b>" +
        this.bestScores[id].rules +
        "</b> rules, <b>" +
        this.bestScores[id].chars +
        "</b> chars. ";
    }
this.mystars=this.calcStars();
    //console.log(id);
    // starChars
    if (starChars[id]) {
      let stars = [false, false];

      stars[0] = this.bestScores[id].chars <= starChars[id][0];
      stars[1] = this.bestScores[id].rules <= starChars[id][1];
      //console.log(stars);
      let diff = [
        this.bestScores[id].chars - starChars[id][0],
        this.bestScores[id].rules - starChars[id][1],
      ];

      messag += "<br><br>";
      console.log(stars);
      if (!stars[0] && !stars[1]) {
        messag +=
          '<div class="starContainer"><img class="star" src="assets/star.svg"></div> Solve the level using <b>' +
          diff[0] +
          "</b> fewer total characters or <b>" +
          diff[1] +
          "</b> fewer rule" +
          (diff[1] > 1 ? "s" : "") +
          " to earn another star!";
      }

      if (!stars[0] && stars[1]) {
        messag +=
          '<div class="starContainer"><img class="star" src="assets/star.svg"><img class="star" src="assets/star.svg"></div> Solve the level using <b>' +
          diff[0] +
          "</b> fewer total characters to earn another star!";
      }

      if (stars[0] && !stars[1]) {
        messag +=
          '<div class="starContainer"><img class="star" src="assets/star.svg"><img class="star" src="assets/star.svg"></div> Solve the level using <b>' +
          diff[1] +
          "</b> fewer rule" +
          (diff[1] > 1 ? "s" : "") +
          " to earn another star!";
      }

      if (!stars[0] || !stars[1]) {
        messag +=`<br><span class="subtext">
<i>* many stars are only attainable once newer concepts have been learned</i>
</span>`;
      }

      if (stars[0] && stars[1]) {
        messag +=
          '<div class="starContainer"><img class="star" src="assets/star.svg"><img class="star" src="assets/star.svg"><img class="star" src="assets/star.svg"></div> You have earned all three stars for this level!';
      }
/*  
      if (stars[0] && stars[1]) {
        messag +=
          '<br><br><i>histograms will show how your score compares to others playing and allow you to look at their solutions</i><img class="hist" src="assets/hist.png">';
      }
  */  
    }


//console.log(this.userScores[this.gamestate.id])
this.globalModal = this.modalCtrl.create(lvlWonDialogue, {
          content: messag,
          pic:this.userLevelMode ? this.gamestate.userAvatar : "Boss",
          usrData:this.userScores[this.gamestate.id],
          yourData:[this.bestScores[id].rules,this.bestScores[id].chars],
          levelName:this.gamestate.promptName,
          btn:this.userLevelMode ? "MORE LEVELS" : "NEXT ASSIGNMENT"

        },{enableBackdropDismiss: false});
        this.globalModal.present();
/*
    this.alertMessage(
      this.userLevelMode ? this.gamestate.userAvatar : "Boss",
      messag
    );
*/
  }

uploadBest(rules,chars,id){
this.db.list("/scores/").push([id,rules,chars]);
}





  alertMessage(
    name,
    message,
    header: any = false,
    help: any = false,
    supress: any = false
  ) {
    this.tipFired = true;
    var buttons;

    if (help) {
      if (supress) {
        buttons = [
        {
            text: "Reveal Solution",
            handler: (data) => {
              this.walkthrough(true);
            },
          },
          {
            text: "Thanks!",
            handler: (data) => {},
          },
        ];
      } else {
        buttons = [
          {
            text: "Hide Tips",
            handler: (data) => {
              var alert = this.alertCtrl.create({
                title: "Are you sure?",
                enableBackdropDismiss: false,
                subTitle:
                  "Tips can help tremendously in understanding the complexities of regular expressions",
                //message: "Are you sure you want to quit?",
                buttons: [
                  {
                    text: "Cancel",
                    handler: (data) => {},
                  },

                  {
                    text: "Disable Tips",
                    handler: (data) => {
                      this.tipsOff = true;
                    },
                  },
                ],
              });

              alert.present();
            },
          },
          {
            text: "Thanks!",
            handler: (data) => {},
          },
        ];
      }
    } else {
      buttons = [
        {
          text: "Optimize",
          handler: (data) => {
            //console.log('replace with "Optimize" and it wouldn\'t automatically win, instead turn boolean on that would supress the auto alert message for winning, and replace the add-rule button with a "submit answer" that pulses')
            //this.loading=true;

            //this.loadLevel(this.level);

            this.winState = true;
          },
        },
        {
          text: this.userLevelMode ? "More Levels" : "Next Assignment",
          handler: (data) => {
            this.loading = true;
            let lvl;
            if (this.userLevelMode) {
              this.userLvls();
              return;
            } else {
              lvl = this.level + 1;
            }

            if (this.calcStars() < reqStars[lvl - 1]) {
              this.lvlSel();
              setTimeout(() => {
                this.pop(
                  "Need More Stars",
                  "The next assignment requires you to go back and optimize previous solutions using new concepts you've learned. Stars that are now attainable pulse"
                );
              }, 20);
            } else {
              if (demoMODE && lvl > 5) {
                this.demoPrompt(true);
                return;
              }
              this.loadLevel(lvl, false);
            }
          },
        },
      ];
    }

    var prepareAlert = {
      //title: "You Win!",
      enableBackdropDismiss: false,
      //subTitle: "Check out our other free apps and projects on our website!",
      message: "<img class='avatar' src=assets/imgs/" + name + ".png>",

      buttons: buttons,
    };

    if (header) {
      prepareAlert.message =
        prepareAlert.message +
        "<span class='headerTitle'><b>" +
        header +
        "</b></span><br>";
    }

    prepareAlert.message =
      prepareAlert.message + "<span class='message'>" + message + "</span>";

    this.popupAlert = this.alertCtrl.create(prepareAlert);

    this.popupAlert.present();
  }

  userLvls() {
    if (demoMODE) {
      this.demoPrompt();
      return;
    }

        if (this.mystars<this.unlockThresh.online && !debugMODE){
this.dispMessage('More Stars Needed','Earn stars by solving and optimizing campaign levels. If struggling, you can always use hints or check out our answer guide.');
return;
    }

    if (!window.navigator.onLine) {
      if (this.offlineLvls) {
        this.pop(
          "Warning",
          "We are unable to fetch new levels, you can play offline with your last cache"
        );
        this.globalModal = this.modalCtrl.create(usrLvls, {
          lvlData: this.offlineLvls,
          bestScores: this.bestScores,
        });
        this.globalModal.present();
        return;
      } else {
        this.pop("No Internet", "Please try again when you have a connection");
        return;
      }
    }

    this._levelSub = this.db
      .list("/levels")
      .valueChanges()
      .subscribe((levelData) => {
        this._levelSub.unsubscribe();
        let DB = [];

        levelData.forEach((lvl: any) => {
          let objKeys = Object.keys(lvl);
          if (!lvl.rating){
           // lvl.rating=2.5;
          }
          if (objKeys.length == 1) {
            let daKey = objKeys[0];
            console.log(daKey);
            lvl[daKey].key = daKey;
            DB.push(lvl[daKey]);
            this.offlineLvls[lvl[daKey].id] = lvl[daKey];
          } else {
            DB.push(lvl);
            this.offlineLvls[lvl.id] = lvl;
          }
        });

        this.globalModal = this.modalCtrl.create(usrLvls, {
          lvlData: DB,
          bestScores: this.bestScores,
        });
        this.globalModal.present();
      });
  }

  toggleFullScreen(){
    this.fullscreen=!this.fullscreen;
  window["electron"].fullscreen();
}

quitGame(){
  window["electron"].quit();
}

  isExplicit(txt) {
    let profane = false;

    vulgarities.forEach((term) => {
      if (txt.includes(term)) {
        profane = true;
      }
    });

    return profane;
  }

  demoPrompt(finished: any = false) {
    let message =
      "<img class='avatar' src=assets/imgs/avatar_" +
      (Math.floor(Math.random() * 10) + 1) +
      ".png><span class='message'>";

    if (finished) {
      message =
        message +
        "Thank you for playing our demo of <b>Copy Editor</b>! If you have enjoyed this preview, please consider donating to our non-profit to get the <b>full version</b> of the game.</span>";
    } else {
      message =
        message +
        "This <b>demo</b> only contains the first five levels of the game, please consider donating to our educational non-profit to get the full version of <b>Copy Editor</b>! Thank you!</span>";
    }

    var alert = this.alertCtrl.create({
      title: "",
      enableBackdropDismiss: false,
      subTitle: message,
      //message: "Are you sure you want to quit?",
      buttons: [
        {
          text: "Later",
          handler: (data) => {},
        },
        {
          text: "Full Version",
          handler: (data) => {
            if (!window.navigator.onLine) {
              this.pop(
                "No Internet",
                "Please try again when you have a connection"
              );
              return;
            } else {
              window.open(
                "https://store.steampowered.com/app/1489660/Copy_Editor_A_RegEx_Puzzle/",
                "_blank", "frame=true,nodeIntegration=no"
              );
            }
          },
        },
      ],
    });

    alert.present();
  }

  async lvlCreate(modify: any = false) {
    if (demoMODE) {
      this.demoPrompt();
      return;
    }


/**/

    if (this.mystars<this.unlockThresh.create && !debugMODE){
this.dispMessage('More Stars Needed','Earn stars by solving and optimizing campaign levels. If struggling, you can always use hints or check out our answer guide.');
return;
    }



    if (debugMODE) {
      this.username = "ccj242";
    }

    if (!this.username) {
      this.makeUsername(true);
      return;
    }

    if (this.inProgressLvl) {
      modify = this.inProgressLvl;
    }

    this.creationMode = true;

    this.cornerWindow = "tools";

    this.gamestate = {
      input: [
        `
      Welcome to the Level Builder!

Click anywhere in this area to the left to edit the starting text for your puzzle level. You can change your starting text at any time.`,
      ],
      output: [
        `Click anywhere in this box to the left to edit the starting text for your puzzle level. You can change your starting text at any time.`,
      ],
      goal: [
        `


Click anywhere in this area to the right to edit the objective text for your puzzle level. You can change your objective text at any time.

In order to prove your level is fair, you must beat it below and then hit "upload". Let us know about your creation on social media, we'd love to hear about it!`,
      ],
      //prompt: null,
      //promptName: lvlDB[level]["promptName"],
      initialRuleState: [
        { find: "", replace: "", flags:"g", visible: true, highlit: false },
      ],
      bannedChars: [],
      maxRules: 99,
      regexTipsShowTo: 99,
      bannedCharStr: "",
      maxCharsReplace: null,
      maxCharsFind: null,
    };

    if (modify) {
      this.gamestate.input = modify.input;
      this.gamestate.output = modify.output;
      this.gamestate.goal = modify.goal;
      this.gamestate.bannedChars = modify.bannedChars;
      this.gamestate.bannedCharStr = modify.bannedChars.join(" ");
      this.gamestate.maxRules = modify.maxRules;
      this.gamestate.maxCharsFind = modify.maxCharsFind;
      this.gamestate.maxCharsReplace = modify.maxCharsReplace;
      this.gamestate.initialRuleState = modify.initialRuleState;
    }
    //console.log(this.gamestate.initialRuleState)
    this.rules = this.gamestate.initialRuleState;

    this.section = 0;
    this.sectionsSolved = [];

    this.view = {
      output: this.gamestate.output[0],
      goal: this.gamestate.goal[0],
    };

    await this.diff("output", "goal", "red");
    await this.diff("goal", "input", "green");

    setTimeout(() => {
      RegexColorizer.colorizeAll();
      ReplaceColorizer.colorizeAll();
    }, 0);

    if (this.loading) {
      this.loading = false;
    } else {
      await this.evaluateRegEx();
    }

    this.inProgressLvl = JSON.parse(JSON.stringify(this.gamestate));
  }

  onMouseWheel(out, evt) {
    if (evt.ctrlKey) {
      evt.preventDefault();
      if (out) {
        this.scaleFont(evt.deltaY < 0, 1);
      } else {
        this.scaleFont(evt.deltaY < 0, 2);
      }
    }
  }

  inOutClick(bool: any = false) {
    if (!this.creationMode) {
      return;
    }

    this.globalModal = this.modalCtrl.create(txtMod, {
      type: !bool ? "Input" : "Goal",
      dark: this.nightmode,
      txt: this.gamestate[!bool ? "input" : "goal"][0],
      other: this.gamestate[!bool ? "goal" : "output"][0],
    });
    this.globalModal.present();
  }

  clearLvl() {
    let alert = this.alertCtrl.create({
      title: "Are You Sure?",
      message: "Your level data will be lost",
      buttons: [
        {
          text: "Cancel",
          handler: () => {},
        },
        {
          text: "Confirm",
          handler: async () => {
            this.inProgressLvl = null;
            await this.lvlCreate();
            this.setData();
          },
        },
      ],
    });
    alert.present();
  }
  async modText(obj) {

    if (obj.other) {
      // switch out/in
      this.gamestate["goal"][0] = obj.other;
    }
    //input or goal
    let type = obj.type == "Goal" ? "goal" : "input";
    this.gamestate[type][0] = obj.txt;
    this.inProgressLvl[type][0] = obj.txt;
    this.setData();

    setTimeout(() => {
      RegexColorizer.colorizeAll();
      ReplaceColorizer.colorizeAll();
    }, 0);

    await this.evaluateRegEx();
  }

  help() {
    window.open("https://regex101.com/r/KN112C/1", "_blank", "frame=true,nodeIntegration=no");
  }

  about() {
    window.open("https://cinqmarsmedia.com/copyeditor/guide", "_blank", "frame=true,nodeIntegration=no");
  }

  walkthrough(currLvl:any=true){
var num
var param=''
if (isNaN(this.level)){
num=this.lastCampaginLevel-1
}else{
  num=this.level-1
}

if (num>3){
  if (mediumIDs[num]){
param='#'+mediumIDs[num]
  }
}

window.open("https://blog.cinqmarsmedia.com/copy-editor-answer-star-guide-b47d1f06e663"+param, "_blank", "frame=true,nodeIntegration=no");
  }

  earlyAccess(end: any = false) {


    let message

if (this.version[0]=='0'){
 message="<b>Copy Editor</b> is in early access, please expect things to break and to encounter some bugs as well as imperfections. For development updates, launch discounts and news on our non-profit's other games, sign up for our non-profit's newsletter to be notified if you haven't already! We collect anonymous data on crashes and errors, the trace of the error and your operating system only.";
}else{
 message="We are so thrilled to announce the full release of <b>Copy Editor</b>! Thank you to the community for your continued support and feedback throughout early access. For development updates and news on our non-profit's other games, sign up for our non-profit's newsletter to be notified if you haven't already! * We collect completely anonymous data on crashes and fatal errors as well as aggregate the best scores for each level.";
}
      

    // newsletter for updates!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var alert = this.alertCtrl.create({
      title: "Copy Editor: " + this.version,
      enableBackdropDismiss: false,
      subTitle: message,
      inputs: [
        {
          name: "email",
          placeholder: "Your Email",
        },
      ],
      //message: "Are you sure you want to quit?",
      buttons: [
        {
          text: "Later",
          handler: (data) => {
               this.startSlideShow("Introduction");
          },
        },
        {
          text: "Sign-Up",
          handler: (data) => {
            if (!window.navigator.onLine) {
              this.pop(
                "No Internet",
                "Signing Up requires an internet connection"
              );
              return false;
            }
            var postAt = data.email.match(/@(.+)/i);

            if (
              /(.+)@(.+){2,}\.(.+){2,}/.test(data.email) &&
              data.email.length > 7 &&
              postAt &&
              !emailDomainBlacklist.includes(postAt[1])
            ) {
                 this.startSlideShow("Introduction");
              fetch(
                "https://cinqmarsmedia.us2.list-manage.com/subscribe/post?u=551a0b16e3eff4f13cbac507b&amp;id=5e54ff5bad",
                {
                  method: "POST",
                  mode: "no-cors",
                  headers: {
                    "Content-Type":
                      "application/x-www-form-urlencoded;charset=UTF-8",
                  },
                  body: "EMAIL=" + data.email,
                }
              );
            } else {
              // alert('please enter a valid email');
              alert.setMessage(
                '<span class="red">Please Enter a Valid Email</span>'
              );
              return false;
            }
          },
        },
      ],
    });

    alert.present();
  }

  pop(title, txt) {
    let alert = this.alertCtrl.create({
      title: title,
      message: txt,
      buttons: [
        {
          text: "Ok",
          handler: () => {},
        },
      ],
    });
    alert.present();
  }

  genId() {
    return Math.random().toString(36).substr(2, 6);
  }

  async reallyUploadLvl(obj) {
    if (!window.navigator.onLine) {
      this.pop("No Internet", "Please try again when you have a connection");
      return;
    }
    this.inProgressLvl.bannedCharStr = "";
    this.inProgressLvl.hint = [
      { name: "ned", txt: obj.hint, header: "Author Hint" },
    ];
    this.inProgressLvl.difficulty = obj.difficulty;
    this.inProgressLvl.promptName = obj.name;
    this.inProgressLvl.regexTipsShowTo = 99;
    this.inProgressLvl.username = this.username;
    let id = this.genId();
    this.inProgressLvl.id = id;
    this.inProgressLvl.ratings = [Math.floor((Math.random() + 3) * 10) / 10];
    this.inProgressLvl.date = new Date().getTime();
    this.inProgressLvl.userAvatar = this.userAvatar;
    this.inProgressLvl.message = obj.message;
    //this.inProgressLvl.maxCharsFind=[this.inProgressLvl.maxCharsFind,this.inProgressLvl.maxCharsReplace]

    this.db.list("/levels").push(this.inProgressLvl);

    this.cornerWindow = "chat";
    this.inProgressLvl = null;
    await this.loadLevel(this.lastCampaginLevel);

    let message =
      "Your level has been uploaded with ID: <b>" +
      id +
      "</b>. Other players can find it using this id or by searching your username, <b>@" +
      this.username +
      "</b>. Be sure to share your creation on social media and with friends and family!";

    let alert = this.alertCtrl.create({
      title: "Level Uploaded",
      message: message,
      buttons: [
        {
          text: "Copy ID to Clipboard",
          handler: () => {
            alert.setMessage(
              message +
                '<br><span class="orange">Your Level ID has been copied to the clipboard</span>'
            );

            this.copyToClip(id, false);
            return false;
          },
        },
      ],
    });
    alert.present();
  }

  copyToClip(val, pop: any = true) {
    let selBox = document.createElement("textarea");
    selBox.style.position = "fixed";
    selBox.style.left = "0";
    selBox.style.top = "0";
    selBox.style.opacity = "0";
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);
    this.pop("Success!", "<b>" + val + "</b> successfully copied to Clipboard");
  }

  github(){
        window.open("https://github.com/cinqmarsmedia/Copy-Editor-A-RegEx-Puzzle-Game", "_blank", "frame=true,nodeIntegration=no");
  }

  deDupe(str) {
    let chars = str.split("");

    let dedup = [...new Set(chars)];

    return dedup.join("");
  }

  bannedCharChange(event) {
    let old = this.inProgressLvl.bannedCharStr;
    setTimeout(() => {
      /**/
      this.inProgressLvl.bannedCharStr = this.deDupe(
        this.inProgressLvl.bannedCharStr
      );
      if (this.inProgressLvl.bannedCharStr == " ") {
        this.inProgressLvl.bannedCharStr = "";
      }
      this.inProgressLvl.bannedCharStr =
        this.inProgressLvl.bannedCharStr.replace(" ", "");
      console.log(this.inProgressLvl.bannedCharStr);

      if (this.inProgressLvl.bannedCharStr.length > 0) {
        this.inProgressLvl.bannedChars =
          this.inProgressLvl.bannedCharStr.split("");

        this.inProgressLvl.bannedCharStr = this.inProgressLvl.bannedCharStr
          .split("")
          .join(" ");
      } else {
        this.inProgressLvl.bannedChars = [];
      }

      this.applyNewRules({ type: "bannedCharStr", val: old });
    }, 0);
  }

  applyNewRules(oldRules) {
    this.inProgressLvl.maxRules = parseInt(this.gamestate.maxRules || 99);

    setTimeout(() => {
      var fatal = false;

      if (!this.inProgressLvl[oldRules.type]) {
        return;
      }
      this.rules.forEach((rule) => {
        if (oldRules.type == "bannedCharStr") {
          this.inProgressLvl.bannedCharStr.split("").forEach((char) => {
            if (rule.find.includes(char) || rule.replace.includes(char)) {
              fatal = true;
            }
          });
        } else if (oldRules.type == "maxCharsReplace") {
          if (rule.replace.length > this.inProgressLvl.maxCharsReplace) {
            this.inProgressLvl.maxCharsReplace = rule.replace.length;
          }
        } else if (oldRules.type == "maxCharsFind") {
          if (rule.find.length > this.inProgressLvl.maxCharsFind) {
            this.inProgressLvl.maxCharsFind = rule.find.length;
          }
        }

        if (oldRules.type == "maxRules") {
          if (this.rules.length > this.gamestate.maxRules) {
            fatal = true;
          }
        }

        if (fatal) {
          if (oldRules.type == "maxRules") {
            this.gamestate.maxRules = this.rules.length;
          } else {
            this.inProgressLvl[oldRules.type] = oldRules.val;
            this.pop(
              "Illegal Banned Characters",
              "Your existing rules contain banned characters. Reverting."
            );
          }
        }
      }, 10);
    });
  }

  calcLvlStars(id){
    var stars=0;
if (this.bestScores[id]){
stars++

 if (starChars[id] && this.bestScores[id].chars <= starChars[id][0]) {
        stars++;
      }
      if (starChars[id] && this.bestScores[id].rules <= starChars[id][1]) {
        stars++;
      }
}
return stars
  }

  calcStars() {
    let stars = 0;

    Object.keys(this.bestScores).forEach((id) => {
      stars++;
      if (starChars[id] && this.bestScores[id].chars <= starChars[id][0]) {
        stars++;
      }
      if (starChars[id] && this.bestScores[id].rules <= starChars[id][1]) {
        stars++;
      }
    });

    return stars;
  }

  lvlSel(edit: any = false) {
    this.globalModal = this.modalCtrl.create(lvlSel, {
      level: this.level,
      best: this.bestScores,
      dark: this.nightmode,
      edit: edit,
      devMode: this.devMode,
      prodVisible: this.productionLvlsVisible,
      yourStars: this.calcStars(),
    });
    this.globalModal.present();
  }

  addRule() {
    this.inputGrow = 0;
    if (!this.tipFired && !this.creationMode && !this.userLevelMode) {
      if (
        lvlDB[this.level].help &&
        this.rules.length + 1 == lvlDB[this.level].help.rule
      ) {
        this.alertMessage(
          lvlDB[this.level].help.message.name,
          lvlDB[this.level].help.message.txt,
          lvlDB[this.level].help.message.header,
          true
        );
      }
    }

    this.rules.push({ find: "", replace: "", flags:"g", visible: true, highlit: false });
    this.setFocus(true);
  }

  sanitizeChars(txt) {
    //var temp=txt;
    //temp=temp.replace(/</g,'&lt;');
    //temp=temp.replace(/>/g,'&gt;');
    return txt;
  }

  async diff(view1, view2, color: any = "blue") {
    clearTimeout(this.diffLoadingTimeout);
    this.diffLoadingTimeout = setTimeout(()=>{
      this.diffLoading = true;
    }, this.diffLoadingTime);
 
    //console.log(this.gamestate[view1],this.gamestate[view2])
    var first = this.gamestate[view1][this.section];

    var second = this.gamestate[view2][this.section];

    first = this.spacesUniform(first);
    second = this.spacesUniform(second);

    var diffs = await this.jsDiffWorker.diffWordsWithSpace(first, second);
    var runningDiffed = "";

    Object.keys(diffs).forEach((num) => {
      var seg = diffs[num];
      if (!seg.added && !seg.removed) {
        runningDiffed += seg.value;
      } else {
        if (seg.removed) {
          var sanChars = this.sanitizeChars(seg.value);

          if (color == "red" || color == "redSpace") {
            sanChars = sanChars.replace(
              /[^\S\r\n]/g,
              '<span class="newRedSpace"> </span>'
            );
          }
          sanChars = sanChars.replace(/\n/g, '<span class="half">¶</span>\n');

          //
          runningDiffed +=
            '<span class="' + color + '"><b>' + sanChars + "</b></span>";
        }
      }
    });

    this.view[view1] = this.sanitizeView(runningDiffed);
    clearTimeout(this.diffLoadingTimeout);
    this.diffLoading = false;
  }
}

class RegexWorker {
  private workerPool: Worker[] = [];

  public replace(str, regex, rep): Promise<string> {
    return new Promise((res) => {
      let worker = new Worker("assets/js/regex-worker.js");
      this.workerPool.push(worker);
      worker.postMessage(["replace", str, regex, rep]);
      worker.onmessage = (e) => {
        res(e.data);
        worker.terminate();
      };
    });
  }

    public specialReplace(str, regex, before, after): Promise<string> {
    return new Promise((res) => {
      let worker = new Worker("assets/js/regex-worker.js");
      this.workerPool.push(worker);
      worker.postMessage(["specialReplace", str, regex, before, after]);
      worker.onmessage = (e) => {
        res(e.data);
        worker.terminate();
      };
    });
  }

  public numMatches(str, regex): Promise<number> {
    return new Promise((res) => {
      let worker = new Worker("assets/js/regex-worker.js");
      this.workerPool.push(worker);
      worker.postMessage(["numMatches", str, regex]);
      worker.onmessage = (e) => {
        res(e.data);
        worker.terminate();
      };
    });
  }

  public abortAllWorkers() {
    this.workerPool.forEach((worker) => worker.terminate());
    this.workerPool = [];
  }
}

class JSDiffWorker {
  private worker: Worker;

  diffWordsWithSpace(first: string, second: string): Promise<string> {
    return new Promise((res) => {
      if (this.worker) {
        this.worker.terminate();
      }
      this.worker = new Worker("assets/js/jsdiff-worker.js");

      this.worker.postMessage([first, second]);
      this.worker.onmessage = (e) => {
        res(e.data);
        this.worker.terminate();
      };
    });
  }
}
