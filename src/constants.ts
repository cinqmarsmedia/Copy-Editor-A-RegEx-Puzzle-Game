export const mediumIDs:any=['fa43','d485','35ce','eeb1','f941','27bc','85d2','f51f','3988','5300','2f99','300f','b832','6fc9','b116','e07a','46da','215','9aed','ce55','686d','4984','73be','9068','7b5e','d50a','e0a0','9a69','51f0','3da0','9bc6','224a','f66b','a108','c8a2','1f30','cb45','1406','bc0f','2a17','3b30','5618'];


export const newchart: any = {
  type: "scatter",
  
  data: {

    datasets: [{ 
            borderWidth: 3
        },{borderWidth:6}],
  
    
    //---------------------------------------
  },
  options: {
    bezierCurve: true,
    lineTension: 0,
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio:1.9,
    animation: false,
    scales: {

        yAxes: [{
            ticks: {
              min: 0,
              max: .8,
                display: false,
            }
        }],
        xAxes: [{
           scaleLabel: {
        display: true,
        fontColor: "#888"
    },
           ticks: {
            
                display: true
            },
          }],
    
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: true
    },
    //---------------------------------------
    // Container for pan options
    
    //---------------------------------------
  }
};

export const lvlDB:any={

'10':{
'input':`And when he XOXOerXO, with an intensification of relief and consummation that was pure peace to him, still she was XOwXOXOt. She felt herself XOaXOlf. And she knew, partly it was her own fault. She willed herself into this separateness. Now perhaps she was condemned to it. She lay still, feeling XhOXOmiX, his deep-sunk intentness, the sudden quiver of him at the XOhXOeXO, then the slow-subsiding XOtXrXO. That XOtXuXO, surely it was a little ridiculous. If you were a woman, and a part in all the business, surely that XOXOXO of the man's XO was supremely ridiculous. Surely the man was intensely ridiculous in this posture and this act...Yes, this was love, this ridiculous XOXtOXO of the XOlXO and the wilting of the poor, insignificant, XOmXOXO little XOpXOsXO. This was the divine love!!`,
'goal':`And when he (censored), with an intensification of relief and consummation that was pure peace to him, still she was (censored). She felt herself (censored). And she knew, partly it was her own fault. She willed herself into this separateness. Now perhaps she was condemned to it. She lay still, feeling (censored), his deep-sunk intentness, the sudden quiver of him at the (censored), then the slow-subsiding (censored). That (censored), surely it was a little ridiculous. If you were a woman, and a part in all the business, surely that (censored) of the man's (censored) was supremely ridiculous. Surely the man was intensely ridiculous in this posture and this act...Yes, this was love, this ridiculous (censored) of the (censored) and the wilting of the poor, insignificant, (censored) little (censored). This was the divine love!!`,
'prompt':[{usr:'Boss',txt:"Ok who is the smartass who replaced all the bad words with XOXOs?"},{usr:'Chad',txt:"You said to censor the DH Lawrence book!"},{usr:'Boss',txt:"Well not like that..."},{usr:'Marie',txt:"It looks like you forgot a bunch of letters inbetween, too..."},{usr:'Chad',txt:"Yeah, yeah, rub it in."},{usr:'Boss',txt:"Whoa, whoa - that's exactly the type of language we need censored here!"},{usr:'Ned', txt:"You're gonna need a new operator for this, \"<b><span class='b'>?</span></b>\": an optional match"},{usr:'Ned', txt:"Also, we're facing a surge at the moment, 4 rules at most everyone, sorry. 😘"}],
'promptName':'Hugs & Kisses',
'hint':[{name:'Ned',txt:'The optional token "<b><span class="b">?</span></b>" matches your expression whether the preceeding character is there or not. For example matching "<b>ca?</b>" and replacing with nothing will turn "<b>cancoon</b>" into "<b>noon</b>" by matching the "<b>ca</b>" as well as the lone "<b>c</b>"',header:'Helpful Tip'},{name:'Ned',txt:'Combining optional matches with other fuctions, such as the NOT match, can be a powerful tool. i.e. "<b>t<span class="b">\\S?</span>o</b> will match <b>too</b>, <b>two</b>, and <b>to</b>.',header:'Helpful Tip'}],
'maxRules':4,
'id':'hugs'
},


'11':{
'input':`162Xt, 19298, 24822, 34183, 20688, 21266, 113, 24949, 36984, 14971b, 35135, 19268, 36098, 19171, 15134, 21493, 29465, 21385, 172, 32170, 36416, 20591, 31449, 28915, 37508, 28392, 25797, 39514, 19084, 16500yu, 37084, 29307, 19304, 38973, 11775, 13370, 22025, 35042, 26687, 3545, 32032, 18409, 36850, 20745, 12448vs, 12135, 2880, 3519, 15533, 20448a, 31067, 16517, 2978, 39131, 18243c, 34101, 34631, 30842, 27148, 27691, 12031, 30983, 13008, 36303, 12987, 16959b, 22094, 25382, 16568, 1862, 3390, 15149, 11633, 25281, 34044zf, 36793, 10727, 31397, 16402, 21763, 22698, 37765, 11132, 10194, 23933, 19200, 15377, 3310, 18617a, 1595, 14954, 13758, 39745, 21705, 16250p, 32631, 26123, 26867, 12015, 13739, 33033, 10743, 2757, 32222, 26657, 39329, 12105, 22403, 33138, 13480, 38038, 22454, 37657, 36876, 27163, 33531, 12816s, 36691, 3195, 15210, 27948, 18036, 30382hh, 38293, 2804, 39051, 26682, 28659cx, 2312, 19424, 28990, 31688, 32326, 23567, 12004, 12787, 24493, 10365, 27359, 14999, 37365, 23355, 25547, 11115fQ, 28930, 30741, 27394, 23890, 39063, 14336, 1021, 38459, 26015, 32237, 14355, 30302, 12320, 10475, 12350, 16470vv, 189201`,
'goal':`162, 19298, 113, 14971, 19268, 19171, 15134, 172, 19084, 16500, 19304, 11775, 13370, 18409, 12448, 12135, 15533, 16517, 18243, 12031, 13008, 12987, 16959, 16568, 1862, 15149, 11633, 10727, 16402, 11132, 10194, 19200, 15377, 18617, 1595, 14954, 13758, 16250, 12015, 13739, 10743, 12105, 13480, 12816, 15210, 18036, 19424, 12004, 12787, 10365, 14999, 11115, 14336, 1021, 14355, 12320, 10475, 12350, 16470, 189201`,
'prompt':[{usr:'Marie',txt:"Uh.. what are all these random numbers on my screen?"},{usr:'Boss',txt:"Nothing! Just ignore it. Don't look at it!"},{usr:'Chad',txt:"ooooh this is gonna be entertaining...."},{usr:'Marie',txt:"I can't close it... it's slowing my system down, is it an error?"},{usr:'Ned',txt:"Nothing happened on our end that I can see"},{usr:'Boss',txt:"Ok, look - I was trying to fudge my cholesterol numbers before my cardiology appointment and I must have shared it with the group on accident"},{usr:'Chad',txt:"Sounds like fudge is part of the problem"},{usr:'Marie',txt:"These can't be cholesterol numbers... They're gigantic"},{usr:'Chad',txt:"FUDGE! Get it?? 🍫😂"},{usr:'Boss',txt:"It's total + hdl and I was bad at recording it on my meter and ... just forget it, ok?"},{usr:'Chad',txt:"How are you even alive? I don't think this is humanly possible..."},{usr:'Boss',txt:"Look just - remove all numbers that don't start with a 1, that way it'll look good, ok? And get rid of any letters at the end, those were errors by the machine."},{usr:'Chad',txt:"I think we should just call and ambulance instead and take the rest of the day off."},{usr:'Ned',txt:"I know this looks intimidating, but you totally got this. Don't sweat all the numbers, just take it one step at a time and don't be shy about using a hint below, I'm here to help!"}],
'promptName':'Cholesterol Catastrophe',
'hint':[{name:'Ned',txt:'Don\'t forget that inserting or replacing necessary characters with unique characters is a simple way to make sure they avoid transformation. In a level with so many numbers, maybe a non-digit would be safest?',header:'Helpful Tip'},{name:'Ned',txt:'Combining optional matches in a string, such as <b><span class="b">\\d\\d?\\d?\\d?</span><b>, will match a variety such as <b>2355</b>, <b>183</b>, <b>7</b>, and <b>12</b>.',header:'Helpful Tip'},{name:'Ned',txt:'Optional strings work best here when it is anchored at the start, either by a specific character <b>x<span class="b">\\d?</span></b>, for example, will match x, x1, x2, x3, etc..., or a rigid function <b><span class="b">\\d\\d?</span></b>, for example, will match any one or two digit numbers, but will not match x1, c1, _1, etc...',header:'Helpful Tip'}],
'maxRules':10,
'id':'cholesterol'
},

'5':{
'input':`                    HHHHHHHHHHH2            1BBBBBBBBBBBBB
         HHHHHHHHHHHHHHHH1      2BBBBBBBBBBBBBBBBBBBB
       HHHHHHHHHHHHHHHHHHH21BBBBBBBBBBBBBBBBBBBBBB
    HHHHHHHHHHHHHHHHHHHH1   1BBBBBBBBBBBBBBBBBBBBB
 HHHHHHHHHHHHHHHHHHHHHH2  1BBBBBBBBBBBBBBBBBBBBB
HHHHHHHHHHHHHHHHHHHHHH2  1BBBBBBBBBBBBBBBBBBBBBB
HHHHHHHHHHHHHHHHHHHH2   1BBBBBBBBBBBBBBBBBBBBBB
HHHHHHHHHHHHHHHHHHH2   1BBBBBBBBBBBBBBBBBBBBBB
HHHHHHHHHHHHHHHHHHHHHHH1   2BBBBBBBBBBBBBBBBB
 HHHHHHHHHHHHHHHHHHHHHHH1   1BBBBBBBBBBBBBBBB
  HHHHHHHHHHHHHHHHHHHHHH1  2BBBBBBBBBBBBBBBB
   HHHHHHHHHHHHHHHHHHHHH1   1BBBBBBBBBBBBBBB
      HHHHHHHHHHHHHHHHHH2  1BBBBBBBBBBBBBBB
         HHHHHHHHHHHHHHH4  1BBBBBBBBBBBBBB
            HHHHHHHHHHHH1  1BBBBBBBBBBBBBB
              HHHHHHHHHH1   1BBBBBBBBBBB
                HHHHHHHH2  1BBBBBBBBBB
                  HHHHHH1   3BBBBBBBB
                    HHHHH3   1BBBBBBB
                     HHHHH32BBBBBB
                       HHHHHBBBBB
                        HHHHHBBB
                          HHBBB
                            HHB`,
'goal':`                    BBBBBBBBBBBB            BBBBBBBBBBBBBB
         BBBBBBBBBBBBBBBBB      BBBBBBBBBBBBBBBBBBBBB
       BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
    BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
 BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
 BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
  BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
   BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
      BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
         BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
            BBBBBBBBBBBBBBBBBBBBBBBBBBBB
              BBBBBBBBBBBBBBBBBBBBBBB
                BBBBBBBBBBBBBBBBBBBB
                  BBBBBBBBBBBBBBBB
                    BBBBBBBBBBBBBB
                     BBBBBBBBBBBBB
                       BBBBBBBBBB
                        BBBBBBBB
                          BBBBB
                            BBB`,
'prompt':[{usr:'Boss',txt:"Someone broke my heart!"},{usr:'Chad',txt:"Aw, chin up. There are other fish in the sea"},{usr:'Boss',txt:"What? No, the graphics for our valentine's day promotion are all messed up!"},{usr:'Marie',txt:"It just looks like a bunch of random H's and B's to me...."},{usr:'Chad',txt:"For me it's just really tiny"},{usr:'Ned',txt:"You both need to change the font-size: hold down <b>ctrl</b> and scroll on either pane or use the <b>-/+</b> keys or the <b>up/down arrows</b>"},{usr:'Marie',txt:"Ohhhhhh that's so cool!"},{usr:'Chad',txt:"Newbie, you can handle this right? I only work on serious literature."}],
'promptName':'The ASCII to my heart',
'help':{rule:4,message:{name:'Chad',txt:'Hey, I just figured out that you can click and drag rules to change their order? Did you know about this?',header:'Helpful Tip'}},
'hint':[{name:'Ned',txt:'Order of operations can be critical! Did you know you can click and drag rules to change the order in which they\'re applied?',header:'Helpful Tip'}],
'id':'ascii'
},


'20':{

'input':`Dickens begins in the Chancery fog because he means to end in the Chancery fog. He did not begin in the Chuzzlewit wind because he meant to end in it; he began in it because it was a good beginning. This is perhaps the best short way of stating the peculiarity of the position of "Bleak House". In this "Bleak House" beginning we have the feeling that it is not only a beginning; we have the feeling that the author sees the conclusion and the whole. The beginning is alpha and omega: the beginning and the end. He means that all the characters and all the events shall be read through the smoky colours of that sinister and unnatural vapour.`,
'goal':`In this "Bleak House" beginning we have the feeling that it is not only a beginning; we have the feeling that the author sees the conclusion and the whole. The beginning is alpha and omega: the beginning and the end. He means that all the characters and all the events shall be read through the smoky colours of that sinister and unnatural vapour. This is perhaps the best short way of stating the peculiarity of the position of "Bleak House".`,
'prompt':[

{usr:'Ned',txt:"Yes, sorry about that. Find boxes are temporarily limited to 20 characters. Everything is all jumbled around here. Plus capital letters aren't working again "},
{usr:'Boss',txt:"The sentences are all out of order."},
{usr:'Marie',txt:"Is there anything I should be working on?"},
{usr:'Chad',txt:"What's the error?"},
{usr:'Boss',txt:"Actually yes - it looks like there's another error in the latest text"},
{usr:'Ned',txt:"You'll need '<b><span class='b'>^</span></b>' that matches the beginning of a passage. Also, its counterpart '<b><span class='b'>$</span></b>' matches the end."},
{usr:'Chad',txt:"Hey, I can only type a few words in the find box!"},
{usr:'Marie',txt:"Jeez. Do we need any new commands for this one? Ned?"},

],
'hint':[{name:'Ned',txt:'The <span class="b">^</span> command matches the beginning of the string. But depending on what you do, the beginning can change in further rules...',header:'Helpful Tip'},{name:'Marie',txt:'Once the uneeded sentences are removed, it\'s just a matter of capturing what you want and swapping it around.',header:'Helpful Tip'},{name:'Chad',txt:'By using <b><span class="b">^.+?</span>\.</b> you can capture the entire first sentence!',header:'Helpful Tip'}],
'promptName':'Alpha & Omega',
'maxCharsFind':20,
'bannedChars':['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
'maxRules':6,
'id':'alpha'

},

'18':{

'input':`796.8, 1.6329, 77085, 89.447, 59224, 375.44, 9240.8, 72.982, 87634, 308.5, 37.925, 4.4321, 35916, 34352, 36199, 49802, 99689, 12359, 74090, 545.5, 73.288, 265.80, 24565, 19050, 14387, 73.10, 79576, 98565, 678.53, 15265, 86386, 83871, 29372, 74.254, 41.429, 32887, 9932.9, 90506, 2.241, 16803, 66906, 53490, 917.05, 28484, 53842, 93035, 243.14, 539.25, 71.41, 43984, 20803, 811.73, 84109, 214.64, 67547, 20118, 71296, 69213, 42705, 44528, 40135, 69063, 43186, 79476, 96600, 717.09, 85292, 38.67, 4698, 41.97, 565.65, 45131, 4.8199, 43286, 5224, 2457.7, 153.03, 24237, 57293, 238.34, 92010, 6411, 98393, 45890, 41820, 11.819, 56086, 6407, 18446, 88437, 81476, 19508, 70044, 46421, 68139, 90.073, 15281, 3068, 28122, 30375, 94046, 79045, 32064, 26773, 30000, 60485, 16664, 63877, 91302, 65.348, 65190, 784.30, 38751, 799.48, 38594, 82.965, 51592, 58041, 37590, 95348, 35.780, 74675, 28479, 444.70, 40139, 367.91, 148.62, 61885, 46.290, 26078, 55273, 39141, 680.07, 95283, 877.75, 23884, 84.375, 61922, 19240, 55038, 15385, 41433, 7402, 59819, 7.9671, 30220, 86872, 71798, 60.282, 79229, 74.32, 52197, 18381, 58527, 11829, 3876, 40319, 765.08, 65198, 87.207, 99191, 39746, 74146, 435.71, 72006, 31061, 69476, 93064, 2.6201, 12849, 4962.0, 11150, 89917, 5157, 62628, 80427, 65091, 667, 49396, 40995, 26144, 5610, 9571, 93247, 24688, 84138, 96.3`,
'goal':`7.96, 0.01, 770.85, 0.89, 592.24, 3.75, 92.40, 0.72, 876.34, 3.08, 0.37, 0.04, 359.16, 343.52, 361.99, 498.02, 996.89, 123.59, 740.90, 5.45, 0.73, 2.65, 245.65, 190.50, 143.87, 0.73, 795.76, 985.65, 6.78, 152.65, 863.86, 838.71, 293.72, 0.74, 0.41, 328.87, 99.32, 905.06, 0.02, 168.03, 669.06, 534.90, 9.17, 284.84, 538.42, 930.35, 2.43, 5.39, 0.71, 439.84, 208.03, 8.11, 841.09, 2.14, 675.47, 201.18, 712.96, 692.13, 427.05, 445.28, 401.35, 690.63, 431.86, 794.76, 966.00, 7.17, 852.92, 0.38, 46.98, 0.41, 5.65, 451.31, 0.04, 432.86, 52.24, 24.57, 1.53, 242.37, 572.93, 2.38, 920.10, 64.11, 983.93, 458.90, 418.20, 0.11, 560.86, 64.07, 184.46, 884.37, 814.76, 195.08, 700.44, 464.21, 681.39, 0.90, 152.81, 30.68, 281.22, 303.75, 940.46, 790.45, 320.64, 267.73, 300.00, 604.85, 166.64, 638.77, 913.02, 0.65, 651.90, 7.84, 387.51, 7.99, 385.94, 0.82, 515.92, 580.41, 375.90, 953.48, 0.35, 746.75, 284.79, 4.44, 401.39, 3.67, 1.48, 618.85, 0.46, 260.78, 552.73, 391.41, 6.80, 952.83, 8.77, 238.84, 0.84, 619.22, 192.40, 550.38, 153.85, 414.33, 74.02, 598.19, 0.07, 302.20, 868.72, 717.98, 0.60, 792.29, 0.74, 521.97, 183.81, 585.27, 118.29, 38.76, 403.19, 7.65, 651.98, 0.87, 991.91, 397.46, 741.46, 4.35, 720.06, 310.61, 694.76, 930.64, 0.02, 128.49, 49.62, 111.50, 899.17, 51.57, 626.28, 804.27, 650.91, 6.67, 493.96, 409.95, 261.44, 56.10, 95.71, 932.47, 246.88, 841.38, 0.96`,
'prompt':[{usr:'Boss',txt:"I fired the accountants, I was thinking you guys could take over."},{usr:'Marie',txt:"...what?"},{usr:'Boss',txt:"It's just a little number crunching"},{usr:'Chad',txt:"Oh no no no I majored in English precisely so I wouldn't have to do math ever again"},{usr:'Boss',txt:"I just need you to divide everything by 100, truncate to two decimal places and use appropriate leading zeros. It'll be fun!"},{usr:'Chad',txt:"I'm.... I'm going to vomit."},{usr:'Marie',txt:"I'm afraid I'm with Chad on this, math is NEVER fun"},{usr:'Chad',txt:"🤮🤮🤮"},{usr:'Boss',txt:"Is that right? Well did you know some people play math video games for fun?"},{usr:'Marie',txt:"Really?"},{usr:'Chad',txt:"Psh no they don't"},{usr:'Boss',txt:`Oh yeah? Well <a href="javascript:window.open('https://store.steampowered.com/app/1014280/The_Devils_Calculator/','_blank','frame=true,nodeIntegration=no')"><b>This math game</b></a> was named one of the top 10 indie games of 2019 by PAX`},{usr:'Chad',txt:"The Devil's Calculator? Looks boring."},{usr:'Marie',txt:"This is kinda cool actually"},{usr:'Chad',txt:"🤮🤮"},{usr:'Chad',txt:"A PAX on both your houses!"}],
'promptName':'The Devil\'s Calculator',
'hint':[{name:'Chad',txt:'Seems like we need to move the decimal over two places for everything. That might be tough because not all numbers have two digits before their decimal, but don\'t feel like you have to deal with every case in the same rule.',header:'Helpful Tip'},{name:'Marie',txt:'Lazy matching is SO important. "<b>b<span class="b">.+?</span>a</b>" will match everything between a "<b>b</b>" and the NEXT "<b>a</b>".',header:'Helpful Tip'},{name:'Ned',txt:' Finding "<b><span class="c">(</span><span class="b">\\d</span><span class="c">)</span>\\.</b>" and Replacing "\\.<span class="c">$</span>1" would divide all numbers by ten.',header:'Helpful Tip'}],
'maxRules':8,
'id':'devil'

},


'27':{
'input':`legitiMate@real.com
vøak@aol.com
kawasaki@msn.com
mcnihil@verizon.net
satishr@me.com
andersbr5@yahoo.com
aracne@comcast
stellaAU@msn.com
atmarks@yahoo.2com
ccdennis@usg.edu
vøak@aol.com
andale@outlook.com
psharpe@comcast.net
real@tempmail.net
mail@gøøgle.net
dimensio@sbcglobal.net
drjlaW@mac.com
dave@loc.fake
person@place.cøm
herald@place.co
kosact©gmail.com
info@cinqmarsmedia.org
john@aol@att.com
dieman@att.net
mailMe@mail.comnet
dsow3sy@mac.com
sagal@gmail.com
tom@123.com
iapetus@verizon.net
mbalazin@sbcglobal.net
who@やる.com
wild@heart
personatatt.net
dobey@outlook.com
ßatair@yahoo.com
bbirt6h@sbcglobal.net
campware@att.net
eminence@live.
notƒake@gmail.com
@HiThere.com
xnormal@outlook.com
falca∂o@msn.com`,
'goal':`legitiMate@real.com REAL
vøak@aol.com
kawasaki@msn.com REAL
mcnihil@verizon.net REAL
satishr@me.com REAL
andersbr5@yahoo.com REAL
aracne@comcast
stellaAU@msn.com REAL
atmarks@yahoo.2com
ccdennis@usg.edu REAL
vøak@aol.com
andale@outlook.com REAL
psharpe@comcast.net REAL
real@tempmail.net REAL
mail@gøøgle.net
dimensio@sbcglobal.net REAL
drjlaW@mac.com REAL
dave@loc.fake
person@place.cøm
herald@place.co REAL
kosact©gmail.com
info@cinqmarsmedia.org REAL
john@aol@att.com
dieman@att.net REAL
mailMe@mail.comnet
dsow3sy@mac.com REAL
sagal@gmail.com REAL
tom@123.com REAL
iapetus@verizon.net REAL
mbalazin@sbcglobal.net REAL
who@やる.com
wild@heart
personatatt.net
dobey@outlook.com REAL
ßatair@yahoo.com
bbirt6h@sbcglobal.net REAL
campware@att.net REAL
eminence@live.
notƒake@gmail.com
@HiThere.com
xnormal@outlook.com REAL
falca∂o@msn.com`,
'prompt':[{usr:'Boss',txt:"Users have been submitting fake emails to our <a href='https://cinqmarsmedia.us2.list-manage.com/subscribe?u=551a0b16e3eff4f13cbac507b&id=5e54ff5bad'>newsletter</a>!"},{usr:'Marie',txt:"huh?"},{usr:'Boss',txt:"How could anyone do something so dishonest??"},{usr:'Chad',txt:"It's a sick world..."},{usr:'Boss',txt:"What are we going to do? We need them to sign up because it's awesome and wonderful and informative!"},{usr:'Marie',txt:"Well what do you want us to do?"},{usr:'Boss',txt:"Share the <a href='https://cinqmarsmedia.us2.list-manage.com/subscribe?u=551a0b16e3eff4f13cbac507b&id=5e54ff5bad'>link</a> with your friends! Tell your family! And FIX IT!!!"},{usr:'Chad',txt:"How?"},{usr:'Boss',txt:"What do you mean\"how\"? Just get the left side to match the right side"},{usr:'Marie',txt:"But some of these could be legit emails..."},{usr:'Boss',txt:"It doesn't have to be perfect."},{usr:'Ned',txt:"You'll need a new command for this: \"<b><span class='b'>\\n</span></b>\". This matches a line break. Remember also that everything in a match group <b><span class='d'>[]</span></b> is OR'd!"}],
'promptName':'Unfordeliverable',
'hint':[{name:'Chad',txt:'The only way I\'ve figured a way to do this is if I have one rule that matches a valid email, captures the whole thing, and replaces it with "<b><span class="c">$</span>1 REAL</b>". More rules don\'t seem to help me.',header:'Helpful Tip'},{name:'Ned',txt:'You can use parentheses to separate out logical operators even if you don\'t intend to capture. In fact, you can use parantheses inside of capture groups to do just this.',header:'Helpful Tip'},{name:'Marie',txt:'Remember, everything in a Match group is like an OR, for example, <b>t<span class="d">[abc]</span>p</b> will act kind of like <b>a<span class="b">|</span>b<span class="b">|</span>c</b>',header:'Helpful Tip'},{name:'Ned',txt:'You need to match emails from the start of the line, so try using "<b><span class="b">\\n</span></b>" to match a preceeding line break!',header:'Helpful Tip'}],
'maxRules':5,
'id':'emails'
},

'3':{
'input':`In the beginning God created the heavens and the earth. 1:2 Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters. 1:3 And God said, “Let there be light,” and there was light. 1:4 God saw that the light was good, and he separated the light from the darkness. 1:5 God called the light “day,” and the darkness he called “night.” And there was evening, and there was morning—the first day.  1:6 And God said, “Let there be a vault between the waters to separate water from water.” 1:7 So God made the vault and separated the water under the vault from the water above it. And it was so. 1:8 God called the vault “sky.” And there was evening, and there was morning—the second day.  1:9 And God said, “Let the water under the sky be gathered to one place, and let dry ground appear.” And it was so. 1:10 God called the dry ground “land,” and the gathered waters he called “seas.” And God saw that it was good.  1:11 Then God said, “Let the land produce vegetation: seed-bearing plants and trees on the land that bear fruit with seed in it, according to their various kinds.” And it was so. 1:12 The land produced vegetation: plants bearing seed according to their kinds and trees bearing fruit with seed in it according to their kinds. And God saw that it was good. 1:13 And there was evening, and there was morning—the third day.`,
'goal':`In the beginning God created the heavens and the earth. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters. And God said, “Let there be light,” and there was light. God saw that the light was good, and he separated the light from the darkness. God called the light “day,” and the darkness he called “night.” And there was evening, and there was morning—the first day. And God said, “Let there be a vault between the waters to separate water from water.” So God made the vault and separated the water under the vault from the water above it. And it was so. God called the vault “sky.” And there was evening, and there was morning—the second day. And God said, “Let the water under the sky be gathered to one place, and let dry ground appear.” And it was so. God called the dry ground “land,” and the gathered waters he called “seas.” And God saw that it was good. Then God said, “Let the land produce vegetation: seed-bearing plants and trees on the land that bear fruit with seed in it, according to their various kinds.” And it was so. The land produced vegetation: plants bearing seed according to their kinds and trees bearing fruit with seed in it according to their kinds. And God saw that it was good. And there was evening, and there was morning—the third day.`,
'prompt':[{usr:'Chad',txt:"AHHH my eyes!"},{usr:'Boss',txt:"You're right, those numbers make it really hard to read"},{usr:'Marie',txt:"What?"},{usr:'Chad',txt:"IT BURNSSSSS"},{usr:'Ned',txt:"So you have a new light theme for working..."},{usr:'Chad',txt:"GAHHH HELP"},{usr:'Ned',txt:"Um... You can easily toggle back and forth in the settings"},{usr:'Chad',txt:"Phew I just changed it back... I can see again."},{usr:'Marie',txt:"I prefer the light theme. This is great!"},{usr:'Chad',txt:"...I don't even know who you are anymore...."},{usr:'Boss',txt:"Condense the 'two spaces after periods' stuff and let's get all that chapter/verse junk out of there, keep it punchy."},{usr:'Marie',txt:"The verse numbers are important. I'm not sure I'm ok with that morally..."},{usr:'Chad',txt:"I will not be lectured on morality by someone who prefers a light theme to a dark one..."},{usr:'Marie',txt:"🙄😩"},{usr:'Ned',txt:"You can now match digits with the <b><span class='b'>\\d</span></b> command. Give it a try!"}],
'promptName':'Let There Be Light',
'help':{rule:4,message:{name:'Ned',txt:'Your output can have nothing highlighted in red and still be wrong! The right side needs to be free of green markings as well - (as that indicates missing content from the output)',header:'Helpful Tip'}},
'hint':[{name:'Ned',txt:'You can match more than one special character by using them in succession as many times as you need them. For instance, "<b><span class="b">\\s\\s</span></b>" matches a double space ("<span class="e">•</span><span class="e">•</span>").',header:'Helpful Tip'}],
'id':'lightness'
},


'19':{
'input':'Fatal Exception: Letters Cannot be Instantiated **a period is a wildcard that will match any character**', // censorship, passages
'goal':'Fix asap!',
'prompt':[{usr:'Boss',txt:"!!!!!"},{usr:'Ned',txt:"???"},{usr:'Marie',txt:"..."},{usr:'Chad',txt:"¯\\_(ツ)_/¯"},{usr:'Boss',txt:"•`_´•"}],
'promptName':'.................................................',
'bannedChars':['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
'maxRules':5,
'hint':[{name:'Ned',txt:'Periods can be used as wildcards. Check the RegExp tab for more info.',header:'Helpful Tip'},{name:'Ned',txt:'Use a period for every character in the sentence, then identify what letters you need to complete your objective and their placement in the string.',header:'Helpful Tip'}],
'id':'noletters'
},

'8':{
'input': `BAm Went My HeArt
Crisis of Lust
Eye of Silence
LAsso of Lust
The DescendAnt of Men
Clue of the Devil's ClAw
Outrun the MirAge
224625: DecimAtion
Apex Gun
The Buried LAdy
HAndsome And HAunting
210513: AlphA
The DynAsty of Tomorrow
HeArt of Stone
Left for Sorrow
Clue of the Invisible Footprint
The ScArlet Locket
Hidden Angel
Devil's Duel
Eclipse of CApellA
Night Peril
ApocAlypse FAlling
The Demon in the DArk City
Sirius Ascending
The Phoenix in the Ice
The StrAnger in the Smoke
The ShAdow in the Night
The Winter of the Isle
MetAl ShAdow
Blue PAndemic
Inferno HeArts
Before the Future
The Whispering Spider
Widow of Wolves
MArked for Revenge
Strike the SnAke
DeAth of the Shrieking Corgi
Seventy And Frisky
Crime of the Kissing StrAnger
The Horizon of AtlAs
The Children of the PlAnt People
Zenith of Celeste
Scoundrel's VoyAge
TrAp the PAst
Cold ShAdow
PlAgue of FeAr
CAged ShAdow
The Guild of the LeviAthAn
PolAr Dust
The FAce of the Sphinx
I DreAmt of HeAven
GAme of Evil
The Horizon of the PlAnt People
Sirius Ticking
Blue Moon
Crown of Bones
Crime of the ChArred Lodger
Song of A MAid
AssAssin's Hymn
The TitAn in the SeA
CloAked HeArt
The Empty StAircAse
The TrAnslucent Tower
GAmble of Acheron
Prison of Silence
Sound of Iron
The Sun of the LodestAr
Mystery of the PAle HeAdmAster
CAse of the Prize Goose
The Grinch Who Stole VAlentine's
Hot Young Stud
DeArest Duke
AviAn Eden
The TAngled Fortress
GAme of Kings
The Visitor in the PortrAit
Left for DeAth
DArling DeArest
Defend the Lie
Strike the Midnight Hour
Sign of the Invisible TubA
The ShAdow in the EntrAnce
DeAth of the MiniAture Viper
Cry of Wolves
The BlAde in the DArk
Mystery of the Silent Inspector
Electric Exile
Mists of Pluto
Abyss FAlling
52000 YArds ApArt
Touch of Smoke
MAgnificent Android
DeAth of the Horned Corgi
Secret of the Silent Cricketer
Eclipse of UrAnus
The DescendAnt of AvAlon
223015 - A Cold Angel
Clue of the Whispering FingernAil
The Lies of the DArk
The Killer in the DArk City
Crimson Evil
Birds of A FeAther
UnleAsh the Midnight Hour
Perfect Storm`, // censorship, passages
'goal':`Bam Went My Heart
Crisis of Lust
Eye of Silence
Lasso of Lust
The Descendant of Men
Clue of the Devil's Claw
Outrun the Mirage
2246: Decimation
Apex Gun
The Buried Lady
Handsome and Haunting
2105: Alpha
The Dynasty of Tomorrow
Heart of Stone
Left for Sorrow
Clue of the Invisible Footprint
The Scarlet Locket
Hidden Angel
Devil's Duel
Eclipse of Capella
Night Peril
Apocalypse Falling
The Demon in the Dark City
Sirius Ascending
The Phoenix in the Ice
The Stranger in the Smoke
The Shadow in the Night
The Winter of the Isle
Metal Shadow
Blue Pandemic
Inferno Hearts
Before the Future
The Whispering Spider
Widow of Wolves
Marked for Revenge
Strike the Snake
Death of the Shrieking Corgi
Seventy and Frisky
Crime of the Kissing Stranger
The Horizon of Atlas
The Children of the Plant People
Zenith of Celeste
Scoundrel's Voyage
Trap the Past
Cold Shadow
Plague of Fear
Caged Shadow
The Guild of the Leviathan
Polar Dust
The Face of the Sphinx
I Dreamt of Heaven
Game of Evil
The Horizon of the Plant People
Sirius Ticking
Blue Moon
Crown of Bones
Crime of the Charred Lodger
Song of A Maid
Assassin's Hymn
The Titan in the Sea
Cloaked Heart
The Empty Staircase
The Translucent Tower
Gamble of Acheron
Prison of Silence
Sound of Iron
The Sun of the Lodestar
Mystery of the Pale Headmaster
Case of the Prize Goose
The Grinch Who Stole Valentine's
Hot Young Stud
Dearest Duke
Avian Eden
The Tangled Fortress
Game of Kings
The Visitor in the Portrait
Left for Death
Darling Dearest
Defend the Lie
Strike the Midnight Hour
Sign of the Invisible Tuba
The Shadow in the Entrance
Death of the Miniature Viper
Cry of Wolves
The Blade in the Dark
Mystery of the Silent Inspector
Electric Exile
Mists of Pluto
Abyss Falling
520 Yards Apart
Touch of Smoke
Magnificent Android
Death of the Horned Corgi
Secret of the Silent Cricketer
Eclipse of Uranus
The Descendant of Avalon
2230 - A Cold Angel
Clue of the Whispering Fingernail
The Lies of the Dark
The Killer in the Dark City
Crimson Evil
Birds of A Feather
Unleash the Midnight Hour
Perfect Storm`,
'prompt':[{usr:'Boss',txt:"What happened to the title ideas for our next original novel?"},{usr:'Ned',txt:"Yeah, I saw that -- it seems like all the 'A' characters turned to uppercase...."},{usr:'Marie',txt:"How does that just happen?"},{usr:'Chad',txt:"I also saw the titles with years in them all have extra digits at the end"},{usr:'Ned',txt:"I think I know something that might help"},{usr:'Chad',txt:"200,001: A Space Odyssey!"},{usr:'Ned',txt:"All the regex matches you've learned so far, \\s, \\d and \\b can be changed to uppercase to match their NOT counterpart. Like \\S will match a NON-whitespace."},{usr:'Chad',txt:"Fahrenheit 45,100!"},{usr:'Marie',txt:"It still weirds me out that this kind of thing just happens randomly, it's like some dystopian future..."},{usr:'Chad',txt:"OOH! 198,400!"}],
'promptName':'A CApitAl Offense',
'maxRules':10,
'hint':[{name:'Ned',txt:'By using the uppercase token of the commands you\'ve learned so far, you can instead match the "not" version of it, for example <b><span class="b">\\D</span></b> will match anything that is NOT a number.',header:'Helpful Tip'}],
'id':'capital'
},

'28':{
'input':"Leader This is the house and he within; and she thou seest, the mother of his royal seed. *Jocasta rises, anxious, from her prayer. Stranger Being wife to such a man, happy indeed And ringed with happy faces may she live! Jocasta To one so fair of speech may the Gods give like blessing, courteous stranger; 'tis thy due. But say what leads thee hither. Can we do thy wish in aught, or hast thou news to bring? Stranger Good news, O Queen, for thee and for the King. Jocasta What is it? And from what prince comest thou? Stranger I come from Corinth.—And my tale, I trow, will give thee joy, yet haply also pain. Jocasta What news can have that twofold power? Be plain. Stranger 'Tis spoke in Corinth that the gathering of folk will make thy lord our chosen King. Jocasta How? Is old Polybus in power no more? Stranger Death has a greater power. His reign is o'er. Jocasta What say'st thou? Dead?... Oedipus' father dead? Stranger If I speak false, let me die in his stead. Jocasta Ho, maiden! To our master! Hie thee fast And tell this tale. *The maiden goes. Ye oracles of God? For many a year Oedipus fled before that man, in fear to slay him. And behold we find him thus slain by a chance death, not by Oedipus. *Oedipus comes out from the Palace. Oedipus O wife, O face I love to look upon, Why call'st thou me from where I sat alone? Jocasta Give ear, and ponder from what this man tells How end these proud priests and their oracles. Oedipus Whence comes he? And what word hath he for us?",
'goal':`      Leader
This is the house and he within; and she thou seest, the mother of his royal seed.
   (Jocasta rises, anxious, from her prayer)

      Stranger
Being wife to such a man, happy indeed And ringed with happy faces may she live!

      Jocasta
To one so fair of speech may the Gods give like blessing, courteous stranger; 'tis thy due. But say what leads thee hither. Can we do thy wish in aught, or hast thou news to bring?

      Stranger
Good news, O Queen, for thee and for the King.

      Jocasta
What is it? And from what prince comest thou?

      Stranger
I come from Corinth.—And my tale, I trow, will give thee joy, yet haply also pain.

      Jocasta
What news can have that twofold power? Be plain.

      Stranger
'Tis spoke in Corinth that the gathering of folk will make thy lord our chosen King.

      Jocasta
How? Is old Polybus in power no more?

      Stranger
Death has a greater power. His reign is o'er.

      Jocasta
What say'st thou? Dead?... Oedipus' father dead?

      Stranger
If I speak false, let me die in his stead.

      Jocasta
Ho, maiden! To our master! Hie thee fast And tell this tale.
   (The maiden goes)
Ye oracles of God? For many a year Oedipus fled before that man, in fear to slay him. And behold we find him thus slain by a chance death, not by Oedipus.
   (Oedipus comes out from the Palace)

      Oedipus
O wife, O face I love to look upon, Why call'st thou me from where I sat alone?

      Jocasta
Give ear, and ponder from what this man tells How end these proud priests and their oracles.

      Oedipus
Whence comes he? And what word hath he for us?`,
'prompt':[{usr:'Boss',txt:"There's something wrong with Oedipus"},{usr:"Chad",txt:"Yeah, no kidding."},{usr:'Boss',txt:"No, you idiot, the formatting is missing. We need to get this fixed by mother's day!"},{usr:'Marie',txt:"Why by mother's day?"},{usr:'Boss',txt:"Because it's the perfect mothers day gift."},{usr:'Chad',txt:"...what?"},{usr:'Marie',txt:"Um... Boss, did you, actually... read it?"},{usr:'Boss',txt:"Well no, but I know the gist, guy's a king, loves his mom - it'll be a big holiday seller."},{usr:'Chad',txt:"OMG PLEASE tell me you sent a copy to your mom this year and it's too late to cancel it..."},{usr:'Ned',txt:"Did you know \\n works in your replace too?"}],
'promptName':'Mother\'s Day Rex',
'hint':[{name:'Ned',txt:'Using "<b><span class="b">\\n</span></b>" in the replace field will add line breaks!',header:'Helpful Tip'}],
'maxRules':5,
'solutions':[{find:'([A-Z]\S+[a-z])\s([A-Z])',replace:'$1$2'}],
'id':'rex'
},

'4':{
	'input':`                  JULIET
But, soft! What light through yonder window breaks? It is the east, and Romeo is the sun. Arise, fair sun, and kill the envious moon, who is already sick and pale with grief, that thou her maid art far more fair than she: be not her maid, since she is envious; her vestal livery is but sick and green and none but fools do wear it; cast it off. It is my lady, O, it is my love! O, that she knew she were! She speaks yet she says nothing: what of that? Her eye discourses; I will answer it. I am too bold, 'tis not to me she speaks: Two of the fairest stars in all the heaven, Having some business, do entreat her eyes To twinkle in their spheres till they return. What if her eyes were there, they in her head? The brightness of her cheek would shame those stars, As daylight doth a lamp; her eyes in heaven Would through the airy region stream so bright that birds would sing and think it were not night. See, how she leans her cheek upon her hand! O, that I were a glove upon that hand, that I might touch that cheek!
	
                  ROMEO
Ay, me!
	
                  JULIET
She speaks: O, speak again, bright angel! for thou art as glorious to this night, being o'er my head as is a winged messenger of heaven unto the white-upturned wondering eyes of mortals that fall back to gaze on him when he bestrides the lazy-pacing clouds and sails upon the bosom of the air.
	
                  ROMEO
O Juliet, Juliet, wherefore art thou Juliet? Deny thy father and refuse thy name. Or if thou wilt not, be but sworn my love, And I’ll no longer be a Capulet.
	
                  JULIET
Shall I hear more, or shall I speak at this?
	
                  ROMEO
’Tis but thy name that is my enemy; Thou art thyself, though not a Montague. What’s Montague? It is nor hand nor foot, Nor arm, nor face, nor any other part Belonging to a man. O be some other name. What’s in a name? That which we call a rose By any other name would smell as sweet; So Juliet would, were he not Juliet call’d, Retain that dear perfection which he owes Without that title. Juliet, doff thy name, And for thy name, which is no part of thee, Take all myself.
	
                  JULIET
I take thee at thy word. Call me but love, and I’ll be new baptis’d; Henceforth I never will be Juliet.
	
                  ROMEO
What man art thou that, thus bescreen’d in night So stumblest on my counsel?
	
                  JULIET
By a name. I know not how to tell thee who I am: My name, dear saint, is hateful to myself, Because it is an enemy to thee. Had I it written, I would tear the word.
	
                  ROMEO
My ears have yet not drunk a hundred words Of thy tongue’s utterance, yet I know the sound. Art thou not Juliet, and a Montague?
	
                  JULIET
Neither, fair maid, if either thee dislike.`,
	
	
	'goal':`                  ROMEO
But, soft! What light through yonder window breaks? It is the east, and Juliet is the sun. Arise, fair sun, and kill the envious moon, who is already sick and pale with grief, that thou her maid art far more fair than she: be not her maid, since she is envious; her vestal livery is but sick and green and none but fools do wear it; cast it off. It is my lady, O, it is my love! O, that she knew she were! She speaks yet she says nothing: what of that? Her eye discourses; I will answer it. I am too bold, 'tis not to me she speaks: Two of the fairest stars in all the heaven, Having some business, do entreat her eyes To twinkle in their spheres till they return. What if her eyes were there, they in her head? The brightness of her cheek would shame those stars, As daylight doth a lamp; her eyes in heaven Would through the airy region stream so bright that birds would sing and think it were not night. See, how she leans her cheek upon her hand! O, that I were a glove upon that hand, that I might touch that cheek!
	
                  JULIET
Ay, me!
	
                  ROMEO
She speaks: O, speak again, bright angel! for thou art as glorious to this night, being o'er my head as is a winged messenger of heaven unto the white-upturned wondering eyes of mortals that fall back to gaze on him when he bestrides the lazy-pacing clouds and sails upon the bosom of the air.
	
                  JULIET
O Romeo, Romeo, wherefore art thou Romeo? Deny thy father and refuse thy name. Or if thou wilt not, be but sworn my love, And I’ll no longer be a Capulet.
	
                  ROMEO
Shall I hear more, or shall I speak at this?
	
                  JULIET
’Tis but thy name that is my enemy; Thou art thyself, though not a Montague. What’s Montague? It is nor hand nor foot, Nor arm, nor face, nor any other part Belonging to a man. O be some other name. What’s in a name? That which we call a rose By any other name would smell as sweet; So Romeo would, were he not Romeo call’d, Retain that dear perfection which he owes Without that title. Romeo, doff thy name, And for thy name, which is no part of thee, Take all myself.
	
                  ROMEO
I take thee at thy word. Call me but love, and I’ll be new baptis’d; Henceforth I never will be Romeo.
	
                  JULIET
What man art thou that, thus bescreen’d in night So stumblest on my counsel?
	
                  ROMEO
By a name. I know not how to tell thee who I am: My name, dear saint, is hateful to myself, Because it is an enemy to thee. Had I it written, I would tear the word.
	
                  JULIET
My ears have yet not drunk a hundred words Of thy tongue’s utterance, yet I know the sound. Art thou not Romeo, and a Montague?
	
                  ROMEO
Neither, fair maid, if either thee dislike.`,
	
	'prompt':[{usr:'Boss',txt:"I've gotten some complaints on the Romeo & Juliet text"},{usr:"Chad",txt:"All that 'wherefore' stuff, right? I knew that had to be wrong."},{usr:'Marie',txt:"No, it's correct. 'Wherefore' means 'why'"},{usr:"Boss",txt:"well wherefore are juliet and romeo's names mixed up?"},{usr:'Chad',txt:"Well they're talking about how names don't really matter, so it's fine, right? It's like... ironic."},{usr:"Boss",txt:"Well they do matter. Fix it."},{usr:"Chad",txt:"But wherefore though?"},{usr:"Boss",txt:"Ugh. Wherefore don't I just fire you?"}],
	'promptName':'Wherefore Art Thou', 
	'hint':[{name:'Marie',txt:'Try inserting a uniqe character into the middle of a word you replace, like "coxrn" so it doesn\'t match with "corn". You can always remove the character in a subsequent rule...',header:'Helpful Tip'}],
		'id':'romeo'
	},

		'16':{
'input':'concluded. he where beginning order, the reversing backwards, follow I',
'goal':'I follow backwards, reversing the order, beginning where he concluded.',
'prompt':[{usr:'Boss',txt:"We need those Abraham Lincoln speeches done ASAP"},{usr:"Chad",txt:"...Why? Is there really a demand?"},{usr:'Marie',txt:"Last I checked some of it was still backwards"},{usr:"Chad",txt:"It's like one sentence, just rewrite it manually"},{usr:'Ned',txt:"The replace input has a 50 character limit"},{usr:'Chad',txt:"Man, seriously??"},{usr:"Ned",txt:"And while I'm giving out bad news, only one rule is working. We're doing maintance. Sorry"},{usr:"Chad",txt:"You're not sorry.... "}],
'promptName':'FWD: ssA Backwards', // nlocniL
'maxRules':1,
'maxCharsReplace':50,
'solution':[{find:'(\S+\s)(\S+\s)(\S+\s)(\S+\s)(\S+\s)(\S+\s)(\S+\s)(\S+\s)(\S+\s)(\S+\s)(\S+\s)(\S+\s)(\S+\s)(\S+\s)(\S+\s)(\S+\s)(\S+\s)(\S+\s).',replace:'I $18$17$16$15$14$13$12$11$10$9$8$7$6$5$4$3$2$1'}],
'hint':[{name:'Ned',txt:'You can use as many <b><span class="c">(</span></b>captures<b><span class="c">)</span></b> as you need, and then reverse the order!',header:'Helpful Tip'},{name:'Chad',txt:'Don\'t forget things like punctuation and whitespaces!',header:'Helpful Tip'}],
'id':'backwards'
},
//----------------------------------------------------------
	'21':{
'input':'I is the first letter of the alphabet, the first word of the entirchange, the first thought of the mind, the first object of affection. In grammar it is a pronoun of the first person and unequi number. Its plural is said to be "We" but how there can be more than one myself is doubtless clearer to the grammarians than it is to the wretir of this inimetabli dictionary. Conception of two myselfs is difficult, but feni. The frank yet graceful use of "I" discrimenatis a good wretir from a bad; the latter carreis it with the manner of a theif trying to cloak his loot.',
'goal':'I is the first letter of the alphabet, the first word of the interchange, the first thought of the mind, the first object of affection. In grammar it is a pronoun of the first person and unique number. Its plural is said to be "We" but how there can be more than one myself is doubtless clearer to the grammarians than it is to the writer of this inimitable dictionary. Conception of two myselfs is difficult, but fine. The frank yet graceful use of "I" discriminates a good writer from a bad; the latter carries it with the manner of a thief trying to cloak his loot.',
'prompt':[{usr:'Marie',txt:"aye sn't workng"},{usr:"Chad",txt:"Why do you get a day off when the rest of us don't? And why are you talking like a pirate?"},{usr:'Marie',txt:"No you moron, my '(aye)' KEY sn't workng"},{usr:"Chad",txt:"Oooh... mne just stopped workng too"},{usr:"Ned",txt:"Sorry folks, 'aye' key seems to be down at the moment. Five rules to work with and the regex tab has been updated wth a new 'matching' token: <b><span class='d'>[]</span></b>."},{usr:"Chad",txt:"Ugh, can't we get a break?"},{usr:'Boss',txt:"Uhhh... No."},{usr:"Ned",txt:"By usng '<b><span class='d'>[</span>C-h<span class='d'>]</span></b>', you can match any character between upper case '<b>C</b>' and lower case '<b>h</b>' nclusive (though this might match a few unwanted chars, [c-hC-H] s techncally more correct). Combned with capturng, ths becomes very powerful."},{usr:"Chad",txt:"Oh yeah, feel stronger already 🙄"},{usr:'Boss',txt:"Now th ky won't work thr"},{usr:"Marie",txt:"Huh?"},{usr:"Boss",txt:"Now char aftr d and bfor f dosn't work too!!!"},{usr:"Ned",txt:"Oh boy bug s now dsablng and swtchng ay and lttr aftr d.... Troublshootng!"}
],
'help':{rule:3,message:{name:'Ned',txt:'All of your learned RegEx functions can work in tandem with one another. for example <b>"<span class="b">\\s</span><span class="c">(</span><span class="d">[</span>A-z<span class="d">]</span>e<span class="b">+</span><span class="d">[</span>n-p<span class="d">]</span><span class="b">|</span>box<span class="b">)</span><span class="b">\\s</span>"</b> will, among other words, capture "Pen","keep" and "box". Playing with how they all function together is the key to success!',header:'Helpful Tip'}},
'hint':[{name:'Chad',txt:'Maybe we can\'t use "i" but I figured out we can match "<b><span class="c">[</span>h-j<span class="c">]</span></b>". It\ll match an "<b>h</b>" or an "<b>j</b>" too but what are the odds that will matter??',header:'Helpful Tip'},{name:'Ned',txt:'You\'ll need two capture groups for this assignment and will need to reverse their order (i.e. "<b><span class="c">$</span>2</b>" followed by "<b><span class="c">$</span>1</b>")',header:'Helpful Tip'}],
'promptName':'Re: Aye Before E',//Ay-Caramba! 
'bannedChars':['i','I','e','E'],
'maxRules':5,
'id':'ibeforee'
},
	'15':{
'input':'There is no hope except the hope against hope that the crest is clear. True, he might prefer capture to death. So long as he advance, the line will not fire, -- why should it? He can safely ride into the hostile rank and become a prisoner of war. But this would defeat his object. It would not answer our question; it is necessary either that he return unharm or be shot to death before our eye. Only so shall we know how to act. If captur -- why, that might have been done by a half-dozen straggler. Now begin an extraordinary contest of intellect between a man and an army.',
'goal':'There is no hope except the hope against hope that the crest is clear. True, he might prefer capture to death. So long as he advances, the line will not fire, -- why should it? He can safely ride into the hostile ranks and become a prisoner of war. But this would defeat his object. It would not answer our question; it is necessary either that he return unharmed or be shot to death before our eyes. Only so shall we know how to act. If captured -- why, that might have been done by a half-dozen stragglers. Now begins an extraordinary contest of intellect between a man and an army.',
'prompt':[{usr:'Boss',txt:"Is IT any closer to fixing the computer bug?"},{usr:"Ned",txt:"We're making some progress, we can use up to two rules again, but there still seems to be an issue with some suffixes"},{usr:'Marie',txt:"Only TWO rules? How are we supposed to work like this?"},{usr:"Ned",txt:"Don't worry I'm gonna teach you all a new trick that will help a lot, it's called 'capturing'"},{usr:'Chad',txt:"Sounds boring 💤"},{usr:'Ned',txt:"By using <span class='c'><b>()</b></span> you can capture characters and use them in the replace field. For example, Find: '<b><span class='b'>\\s</span>a<span class='c'>(</span>r<span class='c'>)</span>e<span class='b'>\\s</span></b>' will match all instances of the word '<b>are</b>' like normal and by capturing the letter '<b>r</b>' you can use it in the replace field with '<span class='c'><b>$</span>1</b>'"},{usr:'Marie',txt:"Why '<span class='c'><b>$</span>1</b>'?"},{usr:'Ned',txt:"'<b><span class='b'>\\s</span><span class='c'>(</span>a<span class='c'>)(</span>r<span class='c'>)</span>e<span class='b'>\\s</span></b>' has two capture groups, and you can replace <b>'b<span class='c'>$</span>1<span class='c'>$</span>2'</b> to make '<b>bar</b>'. But you don't need multiple capture groups for <i>this</i> assignment."},{usr:'Marie',txt:"Oh Cool!"},{usr:'Chad',txt:"Yeah...'Cool'"}

],
'help':{rule:2,message:{name:'Ned',txt:'Capture groups (<b><span class="c">$</span>1</b>, <b><span class="c">$</span>2</b>, etc...) are always relative to that rule\'s find pattern and reference matching parentheses left to right. More generally, rules are fundamentally independent from each other.',header:'Helpful Tip'}},
'hint':[{name:'Ned',txt:'"<b>p<span class="c">$</span>1g</b>" adds a "p" to the beginning of whatever you captured and a "g" to the end.',header:'Helpful Tip'},{name:'Ned',txt:'In order to add a suffix to the end of a word, you\'ll need to first capture that word. Remember you can match things outside the capture group as well i.e. "<b><span class="c">(</span><span class="b">\\s</span>or<span class="c">)</span><span class="b">\\s</span></b>" will capture the first space before "<b>or</b> but not the latter one.',header:'Helpful Tip'},{name:'Ned',txt:'"<b><span class="c">(</span>x<span class="b">|</span>y<span class="b">|</span>z<span class="c">)</span></b>" will match x, y or z in the source and <span class="c">$</span>1 will be whichever character was matched at that location',header:'Helpful Tip'}],
'promptName':'Re:Suffix Fools Gladly',
'maxRules':2,
'id':'suffix'
},
	'14':{
'input':'ContaiXXning the Xentire sum of one thousand seven hundredand fifty-four verses, declare every word, figure, point point, and comma of this impressiXon to be authentic authentic: And do therefore strictly enjoin and forbiXXd any person or persons whatsoever, to erase erase, reverse, put between hooks,X orororor by any other means, directly or indirectly, change or mangle any of them. And we do hereby earnestly exhort all our brethreXXXn to follow this our example, which we heaXrtily wish our great predecessXors had heretofore set, as a remedy and prevention of all such abuXses. Provided alwaXys, that that that nothing in this Declaration shall be construed to limit theXX lawful and undoubteXd righXt of every subject of tXXXXXXhis realm, to judge, Xcensure, or condemn, in the whole or in partX, any poem or poet whatsoever.',
'goal':'Containing the entire sum of one thousand seven hundredand fifty-four verses, declare every word, figure, point, and comma of this impression to be authentic: And do therefore strictly enjoin and forbid any person or persons whatsoever, to erase, reverse, put between hooks, or by any other means, directly or indirectly, change or mangle any of them. And we do hereby earnestly exhort all our brethren to follow this our example, which we heartily wish our great predecessors had heretofore set, as a remedy and prevention of all such abuses. Provided always, that nothing in this Declaration shall be construed to limit the lawful and undoubted right of every subject of this realm, to judge, censure, or condemn, in the whole or in part, any poem or poet whatsoever.',
'prompt':[{usr:'Ned',txt:"NOT GOOD. NOT GOOD AT ALL"},{usr:"Boss",txt:"... What now?"},{usr:'Ned',txt:"There's some kind of bug that's wreaking havoc on our servers."},{usr:"Chad",txt:"Oh is that why I see all these X's everywhere?"},{usr:'Ned',txt:"It's duplicating some words too"},{usr:'Marie',txt:"Uhhhh... why can I only make ONE rule?"},{usr:"Boss",txt:"Oh no..."},{usr:'Ned',txt:"I'll try to troubleshoot, in the meantime try to make do. I've updated the regex tab with a new function, <b><span class='b'>|</span></b>. It should help."},{usr:"Chad",txt:"Is that the number one?"},{usr:"Ned",txt:"No, no it's a vertical bar, above your enter key. It means OR, it lets you string a bunch of rules together"}],
'hint':[{name:'Chad',txt:'By separating searches in find with "<b><span class="b">|</span></b>" <i>(shift + back slash)</i> its kind of like you have infinite rules, but all of them share a single replace command',header:'Helpful Tip'},{name:'Marie',txt:'Leaving "replace" blank just removes (deletes) all the matches for that rule!',header:'Helpful Tip'}],
'promptName':'!!Corruption Malfunction',
'maxRules':1,
'id':'corruption'
},





//-----------------------------------------
'12':{
'input':`By another zigzag      I thought that I had neveeeeeeeeeer known a day so closeeeee and stifling and humid. I then reflected upon                                          the comparative poverty of the French language, which I was told had only that ooooooone word for the condition we could call by half a dozen         different names, as humid, moist, damp, sssticky, reeeking, sssssssweltering, and sssoooo ooon. I supposed that a booook of synonyms would give even more English adjeectives; I thought of loooooking, but my booooook of sssssynonyms was at the back of my table, and I would have to rise for it.                  Then I questioned wheeeether the Freench language was so deeeestitute of adjeeeectivesssss, after all; I prefeeerred to doubt it rather than           risssseeeeeee.`,
'goal':`By another zigzag I thought that I had never known a day so close and stifling and humid. I then reflected upon the comparative poverty of the French language, which I was told had only that one word for the condition we could call by half a dozen different names, as humid, moist, damp, sticky, reeking, sweltering, and so on. I supposed that a book of synonyms would give even more English adjectives; I thought of looking, but my book of synonyms was at the back of my table, and I would have to rise for it. Then I questioned whether the French language was so destitute of adjectives, after all; I preferred to doubt it rather than rise.`,
'prompt':[{usr:'Marie',txt:"ugh i ssspilleeed sooomeething sssssticky on my keeeyboard"},{usr:"Chad",txt:"☹️ Bummer"},{usr:'Marie',txt:"Sssomeee of my keeyssss are ssticking"},{usr:"Chad",txt:"Which ones are sticking?"},{usr:"Marie",txt:"eeeeeeeeeeeeeee oooooooo ssssss"},{usr:"Chad",txt:"Can't you just not use those keys?"},{usr:'Marie',txt:"Theeee wooord I want to call you right now useeeess all threeeeee."},{usr:'Chad',txt:"'Delightful'? that doesn't have an 's' or an 'o'."},{usr:'Ned',txt:"I think she means 'a**h*l*', Chad"},{usr:'Marie',txt:"can   sssomeeeeooooneee          pleeasseee          heeelp?? My                   ssspaceeeeebar is now   ssticking     tooooo"},{usr:'Ned',txt:"I've added a new special character in your regex tab: '<b><span class='b'>+</span></b>', you'll need it! You also have <b>six</b> rules available for this assignment!"},{usr:"Chad",txt:"not sure it's relevant but i can't use capital letters all of a sudden..."},{usr:"Ned",txt:"Yes, I'm aware of that, try to work around it...."}],
'help':{rule:4,message:{name:'Chad',txt:'Use the <img class="inlineSize" src="assets/md-eye.svg"> icon to toggle the visibility of certain rules so you can play with different possibilities',header:'Helpful Tip'}},
'hint':[{name:'Ned',txt:'Ridding the text of excess spaces is critical. Find "<b><span class="b">\\s+</span></b>" will match any sized cluster of whitespaces',header:'Helpful Tip'},{name:'Marie',txt:'Some words have two consecutive "<b>o</b>\'s, like "book". Perhaps its easier to consolidate the "<b>o</b>\'s" first and then repair them later."',header:'Helpful Tip'}],
'promptName':'Attn:Sticky Situation',
'maxRules':6,
'bannedChars':['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
'id':'stickykeys'
},

    '7':{
'input':`Every one of Lesueur's church-pictures is worth examining and admiring; they are full of "unction" and pious, graceful lawfulness. "The Troubadour" is divine; and "Taking down from the Cross" as noble a composition as whatever else painted at the time; I care not by whom the other may be. There is more beauty, and less affectation, about this picture than you will find in the performances of many Italian masters, with high-sounding names. I hate those simpering Madonnas, hate, hate, hate. I declare that "The Chateau" is a bad drawing, an awful painting by an artist whose work as a whole was not so bad, but could have been so much better. I vow that the "Sabadilla" is a terrible composition, badly drawn, badly colored, in a bad, overt imitation of Titian,--an awful, terrible affectation. I say, that when Raphael painted his picture two years before his death, the spirit of painting had gone from out of him; it was time that he should die!`,
'goal':`Every one of Lesueur's church-pictures is worth examining and admiring; they are full of "unction" and pious, graceful lawfulness. "The Troubadour" is divine; and "Taking down from the Cross" as noble a composition as whatever else painted at the time; I care not by whom the other may be. There is more beauty, and less affectation, about this picture than you will find in the performances of many Italian masters, with high-sounding names. I love those simpering Madonnas, love, love, love. I declare that "The Chateau" is a good drawing, a wonderful painting by an artist whose work as a whole was not so good, but could have been so much better. I vow that the "Sabadilla" is a good composition, well drawn, well colored, in a good, overt imitation of Titian,--a wonderful, good affectation. I say, that when Raphael painted his picture two years before his death, the spirit of painting had not gone from out of him; it was not time that he should die!`,
'prompt': [{ usr: 'Boss', txt: "Research has shown that readers are more likely to engage less with our books the more negative sentiments the text has. Henceforth we're going to count on you guys to write rules that make our publications a bit more positive."}, { usr: "Chad", txt: "HA. 'henceforth'. Mr. smarty pants over here." }, { usr: 'Marie', txt: "Is it really ethical to change the author's work?" }, { usr: "Boss", txt: "Marie... let's try to be a bit more positive thinking, ok?" }, { usr: 'Ned', txt: "If I can just jump in here, there's a new command for you to learn: \"<b><span class='b'>\\b</span></b>\"" },{ usr: 'Ned', txt: "\"<b><span class='b'>\\b</span></b>\" indicates a word boundary, and can be placed at the beginning or the end of a word string. For example, <b><span class='b'>\\b</span></b>is<b><span class='b'>\\b</span></b> will match “is”, but not “wisdom”, “this” or “island”. <b><span class='b'>\\b</span></b>is will match “is” and “island”, but not “wisdom” or “this. Which means is<b><span class='b'>\\b</span></b> will match “this” and “is”, but not “island” or “wisdom”." }, { usr: 'Ned', txt: "Oh and also - henceforth, i'm capping the rules at 10 because our servers are getting crunched." }, { usr: 'Chad', txt: "Henceforth!! I'm dying." }, { usr: 'Chad', txt: "Sorry... POSITIVELY dying." }, { usr: 'Boss', txt: "That's the spirit!" }],
        'hint': [{ name: 'Ned', txt: 'Try using "<b><span class="b">\\b</span></b>" instead of "<b><span class="b">\\s</span></b>", and then vice versa - you\'ll see the difference.', header: 'Helpful Tip' },{ name: 'Marie', txt: "Boundaries work regardless of punctuation, it'll capture even if the word character is followed by a comma or period.", header: 'Helpful Tip' }],
'promptName':'Sentimental Education',
'maxRules':10,
'id':'sentiment'
},

'13':{
'input':`Now, Peter, what more do you know about Jimmy?" (Why ask?)

"He's lazy," replied Peter. (extremely mean)

"I'm not lazy," (big moment) retorted Jimmy Skunk. "I'm no more lazy than you are. (amen!) You call me lazy just because I don't hurry. (patience is virtue?) I don't have to hurry, and I never can see any good in hurrying when one doesn't have to." (moral of story?)

"That will do," interposed Old Mother Nature. (probably on test) "Go on, Peter, with what you know about Jimmy." (wanting compliment?) "He is good-natured," said Peter, and grinned (fake?) at Jimmy. (he's nice now?)

Jimmy grinned back. (tension?) "Thank you, Peter," said he.`,
'goal':`Now, Peter, what more do you know about Jimmy?"

"He's lazy," replied Peter.

"I'm not lazy,"  retorted Jimmy Skunk. "I'm no more lazy than you are.  You call me lazy just because I don't hurry.  I don't have to hurry, and I never can see any good in hurrying when one doesn't have to."

"That will do," interposed Old Mother Nature.  "Go on, Peter, with what you know about Jimmy."  "He is good-natured," said Peter, and grinned  at Jimmy.

Jimmy grinned back.  "Thank you, Peter," said he.`,
'prompt':[{usr:'Boss',txt:"No Notes!"},{usr:"Chad",txt:"Finally! Some praise for a change! That wasn't so hard, was it?"},{usr:'Boss',txt:"No stop being lazy and get rid of the notes in the text... why are they there anyway?"},{usr:"Marie",txt:"When we used OCR to scan the book, it must have been used and had notes written in the margins..."},{usr:"Ned",txt:"Couple things for this one -> '(' is a special regex command you'll learn later. To use it LITERALLY, you'll need to put a \\ behind it i.e. \\( otherwise it won't work."},{usr:'Chad',txt:"This sounds literally terrible."},{usr:'Ned',txt:"Also, remember your questionmark? Well when used after a plus sign, it makes matching LAZY."},{usr:'Chad',txt:"That... sounds more my style"},{usr:'Marie',txt:"Is lazy good?"},{usr:'Ned',txt:"It can be. By Default, the \"<b><span class=\"b\">+</span></b>\" token will match as much as it can of the string. Adding a \"<b><span class='b'>?</span></b>\" after makes it <b>lazy</b> - meaning it will instead match the <i>least</i> number of characters it can. For example, \"<b>a<span class='b'>+</span>a\" will match the entire string \"<b>alabama</b>\" where \"<b>a<span class='b'>+?</span>a</b>\" will simply match \"<b>ala</b>\""},{usr:'Chad',txt:"...why can I only use like 15 characters in the find field?"},{usr:'Ned',txt:"Uh-oh..."}],
'help':{rule:2,message:{name:'Marie',txt:'By default, the "<b><span class="b">+</span></b>" token is <b>greedy</b>, meaning that it will match as much as it can in a string. Adding a "<b><span class="b">?</span></b>" after makes it <b>lazy</b>, having it continue only until the next match. i.e. in the string "califragilistic", "<b>i<span class="b">+</span>i" will match "<b>ifragilisti"</b> where "<b>i<span class="b">+?</span>a</b>" will only match "<b>ifragi</b>"',header:'Helpful Tip'}},
'hint':[{name:'Ned',txt:'Lazy matches work best sandwiched between two anchor characters. Just know you wont see if they\'ve worked until both anchors are present in the "find"',header:'Helpful Tip'},{name:'Marie',txt:'You\'re lucky that everything you need to remove has two distinct anchors, <b>(</b> and <b>)</b>.',header:'Helpful Tip'}],
'promptName':'No Notes!',
'maxRules':6,
'maxCharsFind':15,
'id':'nonotes'
},

	'2':{
'input':'Middlemarch, written by George Eliot, first appeared in eight installments in 1871 and 1872. His sixth novel, it is set in a fictitious English Midland town in 1829–1832 and follows distinct, intersecting stories, the main plot of which follows protagonist Tertius Lydgate during his career as a doctor. Eliot proves a man ahead of his time as he tackles issues including the status of women, the nature of marriage, idealism, self-interest, religion, hypocrisy, political reform, and education. Despite comic elements, Eliot uses realism to encompass historical events: the 1832 Reform Act, early railways, and especially his brooding portrayal of the accession of His Majesty King William IV. It looks at medicine of the time and reactionary views in a settled community facing unwelcome change. Eliot began writing the two pieces that formed the novel in 1869–1870 and completed it in 1871. Initial reviews were mixed, but it is now seen widely as his best work and one of the great English novels.',
'goal':'Middlemarch, written by George Eliot, first appeared in eight installments in 1871 and 1872. Her sixth novel, it is set in a fictitious English Midland town in 1829–1832 and follows distinct, intersecting stories, the main plot of which follows protagonist Tertius Lydgate during his career as a doctor. Eliot proves a woman ahead of her time as she tackles issues including the status of women, the nature of marriage, idealism, self-interest, religion, hypocrisy, political reform, and education. Despite comic elements, Eliot uses realism to encompass historical events: the 1832 Reform Act, early railways, and especially her brooding portrayal of the accession of His Majesty King William IV. It looks at medicine of the time and reactionary views in a settled community facing unwelcome change. Eliot began writing the two pieces that formed the novel in 1869–1870 and completed it in 1871. Initial reviews were mixed, but it is now seen widely as her best work and one of the great English novels.',
'prompt':[{usr:'Boss',txt:"How is the forward to Middlemarch coming along?"},{usr:"Chad",txt:"All done!"},{usr:'Marie',txt:"🤦‍♂️ Chad... Really?"},{usr:"Chad",txt:"What?"},{usr:'Marie',txt:"George Eliot was a WOMAN you big dope"},{usr:"Chad",txt:"lol what?"}],
'help':{rule:3,message:{name:'Ned',txt:'The rule hierarchy is important - once the first rule acts on the text, the second rule acts on the output of the first and so on!',header:'Helpful Tip'}},
'hint':[{name:'Ned',txt:'Understanding "<b><span class="b">\\s</span></b>" as a substitute for matching a whitespace is key early on. To isolate a particular word or phrase, including some context <i>(like the beginning of the word in front of it)</i> can help.',header:'Helpful Tip'},{name:'Chad',txt:'To isolate the first "<b>His</b>" but not the second, try matching "<b>His<span class="b">\\s</span>s</b>" and replacing with "<b>Her<span class="e">•</span>s</b>"',header:'Helpful Tip'}],
'promptName':'Re:Forward March',
'source':"Middlemarch<br>by George Eliot",
'id':'middlemarch'

},

'1':{
'input':'It is the best of times, it is the worst of times, it is the age of wisdom, it is the age of foolishness, it is the epoch of belief, it is the epoch of incredulity, it is the season of Light, it is the season of Darkness, it is the spring of hope, it is the winter of despair, we have everything before us, we have nothing before us, we are all going direct to Heaven, we are all going direct the other way - in short, the period is so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.',
'goal':'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way - in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.',
'prompt':[{usr:'Boss',txt:"What the heck happend to our new reprint of a Tale of Two Cities?"},{usr:'Marie',txt:"What do you mean? 🤷"},{usr:'Boss',txt:"The tense is all wrong! How does something like this even happen?"},{usr:"Chad",txt:"Looks right to me..."},{usr:'Marie',txt:"Maybe the new hire can help?"},{usr:'Boss',txt:"Can someone from IT walk them through it?"},{usr:'Ned',txt:"Use find and replace (and JS regular expressions) to fix the errors in the text"},{usr:"Chad",txt:"In other words, get the stuff on the left look like the stuff on the right."},{usr:"Ned",txt:"I got you started. You'll need a special regex symbol for this: <b>\"<span class='b'>\\s</span>\"</b>. Look at the 'RegExp' tab above for more info, I'll keep it updated as you go along"}],

'initialRuleState':[{find:'have',replace:'had',flags:'g',visible:true,highlit:false}],
'promptName':'Fwd:What the Dickens??',
'help':{rule:3,message:{name:'Marie',txt:'Use the <img class="inlineSize" src="assets/md-list.svg"> icon to highlight what your find rule is matching <b>before</b> its replace function is triggered!',header:'Helpful Tip'}},
'hint':[{name:'Ned',txt:'use <b>"\\s"</b> to match a whitespace character, for example <b>"<span class="b">\\s</span>or<span class="b">\\s</span>"</b> would match the word <b>or</b> but not <b>for</b>, <b>ore</b> or <b>fore</b>',header:'Helpful Tip'},{name:'Chad',txt:'"<b>is</b>" will match substrings i.e. "wisdom". To avoid this, find "<b><span class="b">\\s</span>is<span class="b">\\s</span></b>" and replace with "<b><span class="e">•</span>was<span class="e">•</span></b>" <i>(with spaces)</i>',header:'Helpful Tip'}],
'source':"A Tale of Two Cities<br>by Charles Dickens",
'id':'taletwocities'

  },

'REMOVED':{
'input':`// program to check if a number is prime or not

// take input from the user
let number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither a prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("${'number'} is a prime number");
    } else {
        console.log("${'number'} is a not prime number");
    }
}`,
'goal':'let x=parseInt(prompt("Enter a positive number: ")),p=!0;if(1===x)console.log("1 is neither a prime nor composite number.");else if(x>1){for(let e=2;e<x;e++)if(x%e==0){p=!1;break}p?console.log(`${n} is a prime number`):console.log(`${n} is a not prime number`)}',
'prompt':[{usr:'Boss',txt:"Business has been slow so we're expanding to helping programmers."},{usr:"Chad",txt:"How are WE going to help programmers? WE need help FROM programmers."},{usr:"Boss",txt:"They need some minification done..."},{usr:"Ned",txt:"Um... boss, this is actually a really poor use case for regex, you should use another tool for something like this."}],
'promptName':'Prime Candidate',
'maxRules':20,
'id':'primes'
},

'17':{
'input':`Mary was beautiful, feminine in spirit, and lovely. Elizabeth was talented, masculine and plain. Mary was artless, unaffected and gentle. Elizabeth was heartless, intriguing and insincere. With Mary, though her ruling principle was ambition, her ruling passion was love. Her love led her to great transgressions and into many sorrows, but mankind pardon the sins and pity the sufferings which are caused by love more readily than those of any other origin. With Elizabeth, ambition was the ruling principle, and the ruling passion too. Love, with her, was only a pastime. She was, while connected with him, not a terribly faithful, true and affectionate wife.`,
'goal':`Mary was beautiful, feminine in spirit, and lovely. Elizabeth was talented, masculine, and plain. Mary was artless, unaffected, and gentle. Elizabeth was heartless, intriguing, and insincere. With Mary, though her ruling principle was ambition, her ruling passion was love. Her love led her to great transgressions and into many sorrows, but mankind pardon the sins and pity the sufferings which are caused by love more readily than those of any other origin. With Elizabeth, ambition was the ruling principle, and the ruling passion too. Love, with her, was only a pastime. She was, while connected with him, not a terribly faithful, true, and affectionate wife.`,
'prompt':[{usr:'Boss',txt:"Some people are complaining about grammar in our publications"},{usr:'Marie',txt:"Whats wrong?"},{usr:'Boss',txt:"\"what<b>'</b>s\", Marie! This is exactly why I'm taking so much heat here. Apparently we're missing some oxford commas."},{usr:'Chad',txt:"What<b>'</b>s in the world is an oxford comma?"},{usr:'Boss',txt:"...it's a comma before 'and' <last item> in a list"},{usr:'Chad',txt:"Oh my god this is SO boring...."},{usr:'Marie',txt:"Whom would care about something so trivial?"},{usr:'Boss',txt:"scholars, librarians, and grammarists!"},{usr:'Chad',txt:"I'm falling asleep..."},{usr:'Boss',txt:"wake up, shape up, and get to work!"},{usr:'Ned',txt:"so we're having trouble with capital letters again...."},{usr:'Chad',txt:"🥱😴"}],
'promptName':'Oxford Coma',
'hint': [{ name: 'Ned', txt: 'An oxford comma can be found by matching a comma, a word and then "and". Use your new operator "<b><span class="b">\\w</span></b>"', header: 'Helpful Tip' },{ name: 'Ned', txt: 'Pluralizing your <b><span class="b">\\w</span></b> and capturing it will match multiple different words, provided you define the anchors around it...', header: 'Helpful Tip' },{ name: 'Marie', txt: 'Often when you need to insert something into what you\'ve matched, it\'s helpful to capture before and after the insertion and combine using $1X$2', header: 'Helpful Tip' }],
'bannedChars':['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
'maxRules':1,
'id':'oxfordcomma'
},

'9':{
'input':`All Christian work is social, Mrs. Constable, but we endeavour to found it on love. 'Thou shalt love thy neighbour as thyself.' You favour your own soul as precious, since it is the shrine of God, our saviour. And for that meagre reason you hold equally precious your neighbour's soul. Love comes first, as revelation, as labour, as imparted knowledge, as the sombre, divine gist of autonomy. And then one cannot help but honour our work for which we are made by the lustre of nature. And in order to discover the very metre and centre for what that task is, we must wait.`,
'goal':`All Christian work is social, Mrs. Constable, but we endeavor to found it on love. 'Thou shalt love thy neighbor as thyself.' You favor your own soul as precious, since it is the shrine of God, our savior. And for that meager reason you hold equally precious your neighbor's soul. Love comes first, as revelation, as labor, as imparted knowledge, as the somber, divine gist of autonomy. And then one cannot help but honor our work for which we are made by the luster of nature. And in order to discover the very meter and center for what that task is, we must wait.`,
'prompt':[{usr:'Boss',txt:"You know, I love you guys"},{usr:'Chad',txt:"Uh... are you feeling ok?"},{usr:'Boss',txt:"I just sometimes worry I take you all for granted and want you all to know my true feelings. Besides, the bible says 'Love Thy Neighbour'"},{usr:'Chad',txt:"I am so uncomfortable right now"},{usr:'Chad',txt:"Besides, why are you spelling it like that? Like we're in Britain?"},{usr:'Boss',txt:"Funny you brought that up, I'm actually getting complaints that some of our spellings need to be more americanised."},{usr:'Marie',txt:"AmericaniZed"},{usr:'Boss',txt:"Right, right. We just need to fix those spelling errors"},{usr:'Chad',txt:"I think you mispelled \"we\""},{usr:'Boss',txt:"I did, yes - YOU need to fix those spelling errors. With love."},{usr:'Marie',txt:"Ever feel like our boss loves us too much?"}],
'hint': [{ name: 'Chad', txt: 'I thought "order of operations" was just a department\'s lunch run, but I\'ve heard it matters here too!', header: 'Helpful Tip' },{ name: 'Marie', txt: 'Since issues arise at the ends of the words, try isolating the ends with "<b><span class="b">\\b</span></b>"', header: 'Helpful Tip' },{ name: 'Marie', txt: 'You can use uppercase letters to match the opposite of the token\'s used so far, trying putting a "<b><span class="b">\\B</span></b>" behind a string to make sure it\'s part of a larger word and not just on its own', header: 'Helpful Tip'}],
'promptName':'Love Thy Neighbour',
'maxRules':5,
'id':'neighbour'
},

'31':{
'input':`6i1/6pp/5p2/8/5P2/P7/2K4P/8 b
3k4/2n2B2/1KP5/2B2p2/5b1p/7P/8/8 b
r7/4R2P/3p4/3k1K2/2p5/8/8/8 b
8/8/5p2/1P1K1k2/8/2r5/8/7R w
5n2/R7/4pk2/8/5PK1/8/8/8 b
6k1/5p2/6p1/8/7p/8/8/6PP/6K1 b
3Q4/8/1k6/7p/p1p4P/2q3PB/7K/8 b
4q3/2R4P/5R2/1p6/p3k3/P7/KP6/8 b
R7/8/5rk1/5p2/1p5P/5KP1/P7/8 b
3k4/5ppp/2q5/3p2r1/8/1Q3P2/P4P1P/3R3K w
4R3/1k6/1p2P1p1/p7/4r3/1P1r4/1K6/2R5 w
5k2/R7/3K4/5P2/8/8/5r2 w
5k2/1R6/4p1p1/1pr3Pp/7P/1K6/8/8 w
5k2/8/p7/4K1P1/P4R2/6r1/8/8 b
8/8/8/p2r1k2/7p/PP1RK3/6P1/8 b
8/8/8/1P4p1/5k2/5p2/P6K/8 b
5k2/3R4/2K1p1p15p/4P1P1/5P2/8/3r4/8 b
6k1/6pp/5p2/8/5P2/P7/2K4P/8 b
8/3R4/8/r3N2p/P1Pp1P2/2k2K1P/3r4/8 w
6k1/8/6r1/8/5b2/2PR4/4K3/8 w
8/1p3k2/3B4/8/3b2P1/1P6/6K1/8 b
8/8/8/2p1k3/P6R/1K6/6rP/8 w
6k1/5p1p/6p1/1P1n4/1K4P1/N6P/8/8 w
8/k5r1/2N5/PK6/2B5/8/8/8 b
6k1/8/5K2/8/5P1R/r6P/8/8 b
8/8/4k1KP/p5P1/r7/8/8/8 w
1R6/p2r4/2ppkp0/6p1/2PKP2p/P4P2/6PP/8 b
8/7p/6p1/8/k7/8/2K3P1/8 b
R7/8/8/6p1/4k3/3rPp1P/8/6K1 b
rnbqkbnr/ppppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w
8/7p/1p1k2p1/p1p2p2/8/PP2P2P/4KPP1/8 w
8/p7/1P6/1r3p1k/7P/3R1KP1/8/8 b
8/5p1p/pk1p2p1/2pP4/2P2P2/4K2P/1P4P1/8 w
5k2/5p2/6p1/7p/P7/2K3P1/7P/8 b
8/8/5K2/3kn3/6B1/7P/8/8 b
8/8/7k/8/8/8/5q2/3B2RK b
8/p6p/1p2p1k1/4pp2/2P5/8/PP1K1PPP/8 b
8/8/4kp2/5p1p/8/3KP1P1/7P/8 b
8/7p/5kp1/4p3/p3rPRP/2K3P1/8/8 w
8/6k1/8/R7/7K/1P6/5r2/8 b
3b1N2/8/3k4/5pp1/8/5K1P/8/8 w
R7/P7/5p2/4pk1p/5p2/3K1PP1/r6P/8 b
8/7p/6p1/5k2/7N/8/4KP2/8 b
6k1/8/p7/1p6/3K4/8/PPr4P/4R3 w
8/8/6R1/5p1p/5k2/7r/8/2K5 w
8/6Rp/8/5k2/5p2/5K2/7r/8 b
6k1/3R4/5Kp1/6r1/4P3/8/8/8 b
6K1/8/5P1k/2R5/1r6/8/2p5/8 w
8/4k1pp/2p2r2/1p6/1P6/2R1K2P/P5P1/8 w
5k2/1R3p2/1p2r2p/8/5pPP/5K2/8/8 b
8/1k6/8/5NP1/8/2p3K1/8/r7 w
8/1r4k1/3R1ppp/1p6/2p4P/2P5/1P4PK/8 b
1r6/8/p4kp1/P1KP3p/8/7P/4B1P1/8 b
8/8/2R2pk1/3r3p/1P3P1K/8/7P/8 w
3B4/K7/pPk1b1p11/1p2Pp1p/3P3P/2P3P1/8/8 w
8/8/p5rp/3k4/1P2R3/2P1K3/6P1/8 w
8/5pkp/1n4p1/1P6/3K2P1/2N4P/8/8 w
8/8/7B/8/8/3p4/6Kp/3k1n2 w
8/5pk1/4pbp1/7p/2Bp1P2/1P3KP1/8/8 b
rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w
2r1r3/5k2/3p3p/pp6/4P1PP/3P3Q/1P6/7K w
8/pp2k3/2p3B1/3p2P1/3n2K1/8/PPP5/8 b
3b4/6k1/4p1p1/1p5p/1q2B2P/5QP1/5P2/6K1 w
8/p4pk1/4n1p1/1p2P2p/q4P1P/P4QP1/5BK1/8 w
4R3/3q1ppk/p6p/P7/2pr4/7P/4QPP1/6K1 w
3r3k/p3b1pp/2p5/2p1p3/2P5/BPNPP1P1/P6P/6K1 w
8/6pk/5p1p/8/2b5/P1B2PP1/4r2P/3R2K1 w
8/1p3p1k/4b1p1/1PP4p/4Q2P/2q5/5PP1/5BK1 w
6b1/6p1/8/5kPP/K7/P1P5/8/8 w
8/3N4/1p2p2p/p1k1P3/4Rn2/P4r2/1KP4P/8 b
4b3/8/1p4p1/p1k1np1p/P1PNp2P/2K1P1P1/4BP2/8 w
4k3/2b5/6pN/2p4p/2B2p2/3P4/1P5P/3b2K1 w
3b4/6k1/4pqp1/1B5p/7P/5QP1/5P2/6K1 w
8/7B/8/2pkP2R/p6p/PbK5/6PP/3r4 b
8/1kp5/1pp3p1/p1n1qp2/4P3/3P1QP1/PPP1N3/1K6 w
rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w
6k1/1p3pp1/p2np2p/P7/2P2P2/1P5P/4N1P1/6K1 w
1n6/4k2p/p3ppp1/1pPp4/3P1PP1/3NP3/P3K2P/8 w
8/8/8/pp1k1p2/7p/1PK1PP1P/8/8 w
6k1/R7/8/5pp1/6P1/N3r3/P5KP/2b5 b
7r/8/8/6k1/R6p/6pK/8/8 w
8/8/6pk/4Rp2/4p2P/6PK/1r6/8 b
8/6k1/1p1r2pp/p7/P1P1K1P1/1P3R1P/8/8 b
2r5/3k1pp1/p7/1p2P1P1/3PK3/8/P7/1R6 w
8/6pp/1k1r1p2/8/1R2P3/4KP2/6rP/1R6 b
R7/8/8/8/6K1/5p2/5Pk1/4r3 w
8/5ppk/3N4/6n1/3RP3/1r6/5PPK/8 b
6k1/2p3np/1p1p2p1/3P4/1PPK1R2/6PB/7P/4r3 w
8/r7/5PK1/3k4/p7/8/1R6/8 w
5k2/5p2/6p1/2P1Pn1p/3pBP2/1N1P3b/5K2/8 w
3k4/1K5p/p2rpp2/4b1p1/P7/2P2B1P/1P3PP1/4R3 b
8/8/1pB2k1p/2p1pPpP/2P1P1P1/bP6/P1K5/8 w
8/pR4pk/1b2p3/2p3p1/N1p5/7P/PP1r2P1/6K1 b
3R4/7k/8/2p5/1pPb4/1P5P/3n2KP/8 w
R7/P4r2/5k2/3Kp3/8/8/8/8 w
8/pp4pp/4k3/3rEp2/1Pr4P/2B1KPP1/1P6/4R3 b
8/p3k1p1/5p1p/5P2/3PP3/8/P5K1/8 w
8/8/1p1k4/5ppp/PPK1p3/6P1/5PP1/8 b
8/5pp1/7p/5P1P/2p3P1/2k5/5P2/2K5 w
8/8/5n2/1P1k4/3p1P2/3P1K2/8/8 w
8/4kppp/R7/1r6/4PK1P/6P1/5P2/8 b
8/6p1/5p2/4pk2/r6p/5P2/4RKPP/8 b
8/5p2/r4kpp/P7/R6P/6P1/5PK1/8 w
R7/5pk1/P5p1/7p/7P/r5P1/5P2/5K2 b
8/r7/5ppk/p6p/8/R5P1/5P1P/6K1 w
6k1/6pp/8/2r2p2/P4P1P/3R2P1/8/5K2 b
8/5k2/4p3/2R2p2/6p1/4P1P1/1P2KP2/7r w
R7/6k1/P5p1/5p1p/5P1P/r5P1/5K2/8 b
R7/6k1/P7/5p1p/5PpP/6P1/r7/6K1 w
8/5p2/4pk2/p6p/3P3P/2K1PP2/8/8 b
8/PR4p1/5k2/7p//4p3/7P/r4PP1/5K2 w
3r4/5p1p/pkn3p1/1p6/8/1P2R3/1PB2PPP/4K3 b
b1k4r/p4ppp/4n3/1R6/8/8/PPP2P1P/2KR4 w
8/p2R1pkp/1p4p1/4P1r1/1P6/8/P3KPP1/8 w
3b4/8/1p6/p2k4/PP4Kp/8/8/7/4B3 b
8/8/8/1p2b1pp/p3Pp2/Pk3P1P/1P6/2KN4 b
8/2R5/p3k1p1/nr4P1/3PKP2/2B5/8/8 w
8/8/8/p1k2K1R/5P1P/8/4p1n1/8 w
8/2k5/8/8/R4b2/4p1p1/5r2/4B1K1 B
8/B2k4/1P3K2/3bP3/8/8/8/8 w
8/5k1p/5PpB/3PR3/2r4P/1p3K2/2b5/8 b
8/1p2p1kp/4p3/7p/8/5K2/1PP3P1/8 w
6k1/1pp3pp/p4p2/8/8/Pb2B3/1P3PPP/6K1 w
8/5k2/6R1/4r2p/8/6KP/6P1/8 w
4n3/p3k3/1z4P1/2pK4/P2p4/1P6/2P1B3/8 w
r7/pp5k/7p/3P1Np1/8/PP5P/1B5K/8 w
8/8/1Q5p/5p1k/P7/5PP1/b6K/q7 w
8/p5k1/6p1/n1p5/4B3/8/P5PP/5K2 w
8/1p4p1/5p1p/1k3P2/6PP/3KP3/8/8 w
8/8/1p1k4/5ppp/PPK1p3/6P1/5PP1/8 q`,
'goal':`6i1/6pp/5p2/8/5P2/P7/2K4P/8 b
6k1/5p2/6p1/8/7p/8/8/6PP/6K1 b
5k2/R7/3K4/5P2/8/8/5r2 w
5k2/3R4/2K1p1p15p/4P1P1/5P2/8/3r4/8 b
1R6/p2r4/2ppkp0/6p1/2PKP2p/P4P2/6PP/8 b
rnbqkbnr/ppppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w
3B4/K7/pPk1b1p11/1p2Pp1p/3P3P/2P3P1/8/8 w
8/pp4pp/4k3/3rEp2/1Pr4P/2B1KPP1/1P6/4R3 b
8/PR4p1/5k2/7p//4p3/7P/r4PP1/5K2 w
3b4/8/1p6/p2k4/PP4Kp/8/8/7/4B3 b
8/2k5/8/8/R4b2/4p1p1/5r2/4B1K1 B
4n3/p3k3/1z4P1/2pK4/P2p4/1P6/2P1B3/8 w
8/8/1p1k4/5ppp/PPK1p3/6P1/5PP1/8 q`,
'prompt':[{usr:'Chad',txt:"WHAT in the world is all this garbage on the screen?"},{usr:'Boss',txt:"Are you guys big chess players?"},{usr:'Chad',txt:"By chess do you mean Call of Duty?"},{usr:'Boss',txt:"Uh...no?"},{usr:'Chad',txt:"Yeah, then no."},{usr:'Marie',txt:"I like chess! I'm not very good though."},{usr:'Boss',txt:`Me neither, but I've been playing this new game called <a href="javascript:window.open('https://store.steampowered.com/app/1558020/Lazy_Chess/','_blank','frame=true,nodeIntegration=no')"><b>Lazy Chess</b></a>`},{usr:'Chad',txt:"That sounds a bit more up my alley, but what's with all the random nonsense on the screen?"},{usr:'Boss',txt:"Well, I reached out after I started playing and they want us to validate FENs for them. Identify and keep any that are corrupted."},{usr:'Marie',txt:"What in the world is a FEN?"},{usr:'Boss',txt:"Forsyth–Edwards Notation. A gamestate in chess."},{usr:'Marie',txt:"How can we tell if one is valid or not?"},{usr:'Ned',txt:`It's a bit involved. You can read more about it <a href="javascript:window.open('https://www.chess.com/terms/fen-chess?ref_id=5188186','_blank','frame=true,nodeIntegration=no')"><b>here on Chess.com</b></a> or just wing it`},{usr:'Chad',txt:"I have an idea for a game: \"<b>Lazy Copy Editor</b>\". It's an engaging and rewarding interactive adventure where I don't do this assignment."},{usr:'Boss',txt:`🤦 The more I think about it, <a href="javascript:window.open('https://store.steampowered.com/app/1558020/Lazy_Chess/','_blank','frame=true,nodeIntegration=no')"><b>Lazy Chess</b></a> would be perfect for you, Chad`}],
'hint': [{ name: 'Ned', txt: `This puzzle requires some thought on what is and isn't possible in a chess state. For example, since a chess board is only has 8 places horizontally, it would be impossible for it to have more than 8 pieces in the same row!`, header: 'Helpful Tip' },{ name: 'Otto', txt: `This puzzle involves combining a lot of rules together - try working on them all separately and slowly melding them together! Match groups are your best friend here, allowing you to match a wide variety of different possible characters.`, header: 'Helpful Tip'}],
'promptName':'Just FENtastic',
'maxRules':3,
'id':'lazychess'
},

'23':{
'input':`ensure, precision, parse, tales, public, metal, post, key, drown, voter, disagree, authorize, pears, absolute, gallery, shaft, mouth, complain, steal, lost, relating, assignment, corner, soak, relinquish, fork, estate, pots, least, discovery, lasting, coup, notion, symptom, contrast, tax, brush, bird, altering, film, troop, mutation, alerting, do, fortunate, restless, bubble, publisher, buy, dilute, mass, possible, kill, tops, block, spare, charge, combine, censorship, base, abstract, steep, speaker, pursuit, dinner, overlook, say, hallway, well, sweat, integral, practice, truck, retreat, advantage, background, corruption, equal, instinct, eye, chicken, muggy, integrity, argument, treasurer, dine, teals, discriminate, slate, approach, stop, amuse, seize, spot, spear, die, time, haircut, carbon, occupy, gravel, arrest, basin, bury, desert, customer, phone, game, achievement, conservation, discourage, remind, offensive, drug, seal, reaps, forget, bloody, union, legislation, triangle, stale, change, reality, forgotten, ponder, trench, carriage, favor, shame, watch, density, fountain`,
'goal':`ensure, precision, public, metal, post, key, drown, voter, disagree, authorize, absolute, gallery, shaft, mouth, complain, lost, assignment, corner, soak, relinquish, fork, estate, pots, discovery, lasting, coup, notion, symptom, contrast, tax, brush, bird, film, troop, mutation, do, fortunate, restless, bubble, publisher, buy, dilute, mass, possible, kill, tops, block, charge, combine, censorship, base, abstract, speaker, pursuit, dinner, overlook, say, hallway, well, sweat, practice, truck, retreat, advantage, background, corruption, equal, instinct, eye, chicken, muggy, integrity, argument, treasurer, dine, discriminate, approach, stop, amuse, seize, spot, die, time, haircut, carbon, occupy, gravel, arrest, basin, bury, desert, customer, phone, game, achievement, conservation, discourage, remind, offensive, drug, seal, forget, bloody, union, legislation, change, reality, forgotten, ponder, trench, carriage, favor, shame, watch, density, fountain`,
'prompt':[{usr:'Boss',txt:"Hey, we're getting complaints about anagrams."},{usr:'Marie',txt:"Sorry, what?"},{usr:'Boss',txt:"Some of the customers want us to remove words that are anagrams."},{usr:'Marie',txt:"...why? People love anagrams"},{usr:'Boss',txt:"Not according to our latest feedback"},{usr:'Otto',txt:`I've been playing this <a href="javascript:window.open('https://store.steampowered.com/app/1654280/Anagraphs_An_Anagram_Game_With_a_Twist/','_blank','frame=true,nodeIntegration=no')"><b>Free New Game</b></a> with anagrams and I love it`},{usr:'Marie',txt:"See!"},{usr:'Boss',txt:"It's probably free because people hate anagrams..."},{usr:'Marie',txt:"Ugh... Chad, what do you think?"},{usr:'Chad',txt:"Did you know an '<b>astronmer</b>' is a '<b>moon starer</b>'?"},{usr:'Marie',txt:"..."},{usr:'Chad',txt:"And that '<b>eleven plus two</b>' is '<b>twelve plus one</b>'"},{usr:'Marie',txt:"... You're so clever... Ned? Thoughts on anagrams?"},{usr:'Ned',txt:"My thought is that you could use a new token, <b>\"<span class='b'>{ }</span>\"</b>. This way you can specify the exact number (or a range) for matching the preceeding token."}],
'hint': [{ name: 'Ned', txt: `Consider the fact that two anagrams have the same series of letters but the order of these letters does not matter.`, header: 'Helpful Tip' },{ name: 'Marie', txt: `"<b><span class="b">{</span>2<span class="b">}</span></b>" will match exactly 2 of the preceeding token, even if that token is a match group!`, header: 'Helpful Tip' }],
'promptName':'Nag a Ram',
'maxRules':3,
'id':'anagraphs'
},

'29':{
'input':`score lang="ABC"
T: Twinkle Twinkle Little Star (probably)
M:4/4
L:1/2
K:C
| B2 A2 | B2 A2
| B2 A2 | B2 A2
| B A B A | B A B A
| B A B A | B A B A
| B/2 A/2 B/2 A/2 B/2 A/2 B/2 A/2
| B/2 A/2 B/2 A/2 B/2 A/2 B/2 A/2
/score
`,
'goal':`score lang="ABC"
T: Twinkle Twinkle Little Star
M:4/4
L:1/4
K:C
| C C G G | A A G2
| F F E E | D D C2
| G G F F | E E D2
| G G F F | E E D2
| C C G G | A A G2
| F F E E | D D C2
/score`,
'prompt':[{usr:'Boss',txt:"Ok, who's the comedian who thought it'd be funny to change the first nursery rhyme in our new collection to the Jaws theme?"},{usr:'Chad',txt:"I don't want to point fingers, but Marie looked pretty suspicious on our lunch break"},{usr:'Marie',txt:"..."},{usr:'Boss',txt:"This is for CHILDREN. For little babies! This isn't a joke!"},{usr:'Ned',txt:"Hm, it doesn't look like it can be solved by just one or two rules, it looks like it'll be a bit involved..."},{usr:'Boss',txt:"Well it needs to be fixed, and if no one is going to confess, I guess everyone will have to work on it."},{usr:'Chad',txt:"Is that guilty conscience weighing heavily, Marie? "},{usr:'Marie',txt:"..."}],
'hint': [{ name: 'Ned', txt: `This is a bit of a mess and since you have a limited number of rules, your first rule is key for trying to make as much progress as possible. You can always repair undesirable consequences later in the rule list`, header: 'Helpful Tip' },{ name: 'Marie', txt: `Ugh this is so hard. I decided to just erase any line that begins with a B and hardcode it, I think I'm on the right track?`, header: 'Helpful Tip' }],
'promptName':'Baby Shark',
'maxRules':10,
'maxCharsReplace':20,
'id':'babyshark'
},



'26':{
'input':`When he reveals a competent number of words, it will be seasonable to teach him under the titles singular and plural, the formation of plurals from singulars, by adding "s", or "es"; as hand, hands; face, feels, faces, sheet, sheets, etc. Which, except the irregulars, i.e. "geese", "teeth" and "moose", will cross for possessives, to be after taught him, which are formed by their primitives by like addition of "s" or "es", except some few irregulars, as my, mine; thy, thine; our, ours; your, yours; his, her, hers; their, theirs, etc. And in all those and other like cases, it will be proper first to show him the particulars, and then the general title. Then teach him in another page or paper, the particles, a, an, the, that, these, those. And the pronouns, I, me, my, mine, thou, thy, thine, we, us, our, ours, ye, you, your, yours, he, him, his, she, her, hers, they, them, their, shoes, heirs, who, whom, whose. Then under the titles substantive, adjective, teach him to connect these, as my hand, your head, his foot, his feet, her arm, her arms, our hats, John's coat, William's band, etc. And in order to furnish him with more adjectives, under the title colours you may place black, white, gray, green, blue, yellow, red, etc., and having showed the particulars, let him feel that these are called colours. The like for taste and smell and sound; as sweet, bitter, sour, stink and bass.`,
'goal':`When he reveal a competent number of word, it will be seasonable to teach him under the title singular and plural, the formation of plural from singular, by adding "s", or "es"; as hand, hand; face, feel, face, sheet, sheet, etc. Which, except the irregular, i.e. "goose", "tooth" and "moose", will cross for possessive, to be after taught him, which are formed by their primitive by like addition of "s" or "es", except some few irregular, as my, mine; thy, thine; our, our; your, your; his, her, her; their, their, etc. And in all those and other like case, it will be proper first to show him the particular, and then the general title. Then teach him in another page or paper, the particle, a, an, the, that, these, those. And the pronoun, I, me, my, mine, thou, thy, thine, we, us, our, our, ye, you, your, your, he, him, his, she, her, her, they, them, their, shoe, heir, who, whom, whose. Then under the title substantive, adjective, teach him to connect these, as my hand, your head, his foot, his foot, her arm, her arm, our hat, John's coat, William's band, etc. And in order to furnish him with more adjective, under the title colour you may place black, white, gray, green, blue, yellow, red, etc., and having showed the particular, let him feel that these are called colour. The like for taste and smell and sound; as sweet, bitter, sour, stink and bass.`,
'prompt':[{usr:'Boss',txt:"It's been shown that the singular version of a word is more popular than its plural counterpart. So for this text, stem all the plurals!"},{usr:'Marie',txt:"Shown.... by whom?"},{usr:'Boss',txt:"The focus group, Marie! Keep up!"},{usr:'Ned',txt:"I tried to explain that stemming is better done with other methods, but it looks like you guys are on your own here..."},{usr:'Marie',txt:"Chad? Some help here? Even a snarky but futile comment?"},{usr:'Chad',txt:"Sorry Marie, looks like you're all alone on this one"},{usr:'Marie',txt:"..."},{usr:'Chad',txt:"Just you. No one else"},{usr:'Marie',txt:"..."},{usr:'Chad',txt:"Not pluaral. Singular."},{usr:'Marie',txt:"..."}],
'hint': [{ name: 'Chad', txt: 'My Uncle used to say, "capturing what works is an easy way to preserve what shouldn\'t be lost." I wonder if he\'s out of jail yet..."', header: 'Helpful Tip' },{ name: 'Marie', txt: 'Since you only have so many rules, try using your character matches and "or" operators to capture as many different issues at once.', header: 'Helpful Tip' }],
'promptName':'Impluralusable',
'maxRules':5,
'id':'singular'
},

'25':{
'input':`"Theres two kinds of impulses, corresponding to the two kinds of goods", and thus started Geralds lecture. "There are "possessive" impulses, which aim at acquiring or retaining private goods that cannot be shared; (wasnt that what happened in Guam?) these center in the impulse of property. And isnt it true that there are "creative" or constructive impulses, which aim at bringing into the world or making available for use the kind of goods in which there is no privacy and no possession. The latter point is Russells main assertion."

"Oh please", quipped Artie. "Foremost mind your Ps and Qs, and further know that a book in several volumes loses an unfair proportion of its usefulness, and almost all its value, when one or more of the volumes are gone.  Grotes works, or Mills, Carlyles, or Milmans, seem nothing when they are incomplete." Bertrand Russells ramblings arent an exception.`,
'goal':`"There's two kinds of impulses, corresponding to the two kinds of goods", and thus started Gerald's lecture. "There are "possessive" impulses, which aim at acquiring or retaining private goods that cannot be shared; (wasn't that what happened in Guam?) these center in the impulse of property. And isn't it true that there are "creative" or constructive impulses, which aim at bringing into the world or making available for use the kind of goods in which there is no privacy and no possession. The latter point is Russell's main assertion."

"Oh please", quipped Artie. "Foremost mind your P's and Q's, and further know that a book in several volumes loses an unfair proportion of its usefulness, and almost all its value, when one or more of the volumes are gone.  Grote's works, or Mill's, Carlyle's, or Milman's, seem nothing when they are incomplete." Bertrand Russell's ramblings aren't an exception.`,
'prompt':[{usr:'Boss',txt:"The apostrophes are missing in the reprint, what happened?"},{usr:'Chad',txt:"Are apostrophes really that important?"},{usr:'Boss',txt:"Yes! It marks possession among other essential semantics!"},{usr:'Chad',txt:"Come on, you totally just googled that..."},{usr:'Marie',txt:"My therapist says possessiveness is a character flaw and is ultimately a fear of loss"},{usr:'Boss',txt:"Would you two stop trying to get out of this assignment?"},{usr:'Chad',txt:"What is it that you fear losing!?? Get it off your chest!"},{usr:'Boss',txt:"My patience! Get to work restoring the apostrophes!"}],
'promptName':'Possessive Problems',
'hint': [{ name: 'Otto', txt: 'A simple way to capture any capital letter is "<b><span class="d">[</span>A-Z<span class="d">]</span></b>".', header: 'Helpful Tip' },{ name: 'Ned', txt: '"<b><span class="b">*</span></b>" may seem interchangable with "<b><span class="b">+</span></b>" but using one or the other strategically can often help tremendously', header: 'Helpful Tip' },],
'maxRules':3,
'id':'possessive'
},

'22':{
'input':`As Lyell's hypothesis tells us, there's a case that one can't squeeze these broken and folded lines, and if you're to alleviate pressure, it's only a matter of time until these pressures are diverted upwards. While he's alluded to this several times, he hadn't considered they would rise to leave an open space between them, that's Bennet's epiphany and it isn't entirely new, either. She's echoed the consensus of modern geologists, that if you couldn't disband the rock from below a paste, which would avoid such pressure and wouldn't harden in the cracks and between the layers, and so keep them permanently apart, they wouldn't evolve into the fair likeness of an average mountain range. It's'bout alternate contraction and expansion, helped in the latter case by the injection of molten lava, been thrust about as they are in most mountain ranges. I'm now convinced that such a contraction and expansion goes on in the crust of the earth is evident; and there's no longer any compelling excuse why we shouldn't accept this as scientific fact. It's simply that things expand as they're heated, and contract as they're cooled.`,
'goal':`As Lyell's hypothesis tells us, there is a case that one cannot squeeze these broken and folded lines, and if you are to alleviate pressure, it is only a matter of time until these pressures are diverted upwards. While he is alluded to this several times, he had not considered they would rise to leave an open space between them, that is Bennet's epiphany and it is not entirely new, either. She is echoed the consensus of modern geologists, that if you could not disband the rock from below a paste, which would avoid such pressure and would not harden in the cracks and between the layers, and so keep them permanently apart, they would not evolve into the fair likeness of an average mountain range. It is about alternate contraction and expansion, helped in the latter case by the injection of molten lava, been thrust about as they are in most mountain ranges. I am now convinced that such a contraction and expansion goes on in the crust of the earth is evident; and there is no longer any compelling excuse why we should not accept this as scientific fact. It is simply that things expand as they are heated, and contract as they are cooled.`,
'prompt':[{usr:'Boss',txt:"Is it not super weird that such an academic text uses so many contractions? It seems wrong somehow..."},{usr:'Marie',txt:"Why is it wrong?"},{usr:'Boss',txt:"I do cannot say for certain, expanding contractions just makes you sound smarter, does it not?"},{usr:'Chad',txt:"Why's that? I'm always using contractions, aren't I?"},{usr:'Boss',txt:"Precisely"}],
'hint': [{ name: 'Ned', txt: `"<b><span class="b">\\w</span></b>" will match uppercase and lowercase letters, but sometimes that's not what you want. Try using your new matching token <b>\"<span class='d'>[]</span>\"</b>`, header: 'Helpful Tip' },{ name: 'Marie', txt: `Try capturing words before the apostophe and replacing its subsequent contraction`, header: 'Helpful Tip' }],
'promptName':'Contraction Action',
'maxRules':5,
'id':'contractions'
},

'37':{
'input':`Look down fair moon and bathe this scene,
Pour softly down night's nimbus flood,
on faces ghastly, swollen, blood,
On the dead on their backs with arms toss'd wide,
Pour down your unstinted nimbus sacred bride.

Word over all, beautiful as the sky,
Beautiful that war and all its deeds,
of carnage must in time be utterly lost,
That the hands of the sisters Death and frost
incessantly softly wash again,
and ever again, this soil'd world;
For my enemy is dead, a man divine,
as myself is dead, I look where he shine;
white-faced and still,
in the coffin--I draw near, bend down
and touch lightly with my lips the frown
face in the coffin.

The bonds of rhyme shackled him,
deprived him of more than whim.
He is like a wild bird that suddenly,
perceives the bars of its small cage,
across the blue of the stage
And yet the finer his poems are,
the nearer they approach
to definite, rhythmical reproach.`,
'goal':`Look down fair moon and bathe this scene,
Pour softly down night's nimbus flood,
on faces ghastly, swollen, XXXX,
On the dead on their backs with arms toss'd wide,
Pour down your unstinted nimbus sacred XXXX.

Word over all, beautiful as the sky,
Beautiful that war and all its deeds,
of carnage must in time be utterly lost,
That the hands of the sisters Death and XXXX
incessantly softly wash again,
and ever again, this soil'd world;
For my enemy is dead, a man divine,
as myself is dead, I look where he XXXX;
white-faced and still,
in the coffin--I draw near, bend down
and touch lightly with my lips the XXXX
face in the coffin.

The bonds of rhyme shackled him,
deprived him of more than XXXX.
He is like a wild bird that suddenly,
perceives the bars of its small cage,
across the blue of the XXXX
And yet the finer his poems are,
the nearer they approach
to definite, rhythmical XXXX.`,
'prompt':[{usr:'Boss',txt:"I changed a bunch of Walt Whitman's poems"},{usr:'Marie',txt:"What???"},{usr:'Boss',txt:"They didn't rhyme enough, poems should rhyme"},{usr:'Marie',txt:"That's totally unethical, Walt Whitman hated rhyming. And did you just paste words that rhyme with the end of some sentences?"},{usr:'Boss',txt:"Hey, it's not my fault, I did this on my lunch break. It's unreadable otherwise!"},{usr:'Chad',txt:"...he does have a point..."},{usr:'Marie',txt:"I'm going to flag all your changes"},{usr:'Boss',txt:"Whoa, You can't do that, I worked hard on this!"},{usr:'Marie',txt:"'too bad, lad'"},{usr:'Boss',txt:"I just disabled vowels on your systems, 'you snooze, you lose!'"}],
'hint': [{ name: 'Ned', txt: `Recall your work with newlines in older levels, as the rhyming happens at the end of the poem's line`, header: 'Helpful Tip' },{ name: 'Otto', txt: `It's really tough that the rhyming structure is not totally consistant, but try to identify tokens that recur in the pattern`, header: 'Helpful Tip'}],
'promptName':'Walt\'s Fault',
'bannedChars':['a','e','i','o','u','y'],
'maxRules':5,
'id':'rhyme'
},


'30':{
'input':`Yo40=u tak55e the he1ad fjjfk%lsjkf of an ib$is, and  ... : 3' write ce."62rtain characters on it in the blo,5':,8od of a bla2ck ram, an9d go to a cross-ro.'1-!'':ad, or the sea-shore, rrrr%rrr32rrrrrrrr"qpq29qqpqj3 or a ri=ver-bank at midnight':... 11'" - and there5' , ! .0you recite0 1. 1' gib4berish and $ 5 '  ...... '24 % then see a pre1$=..tty lady ridin2g a donkey, and she will pu3t off her be.$.',.$auty like a zzz0"z3zz%zzz mask and ass2$:,ume the appe..1,,.'arance of old age, and hr8$qz.c w3ill prom!ise to o5bey you, and so fo"rth`,
'goal':`You take the head of an ibis, and write certain characters on it in the blood of a black ram, and go to a cross-road, or the sea-shore, or a river-bank at midnight and there you recite gibberish and then see a pretty lady riding a donkey, and she will put off her beauty like a mask and assume the appearance of old age, and will promise to obey you, and so forth`,
'prompt':[{usr:'Ned',txt:"Th3ere is a NA%STY bu0g in the main2fra5me"},{usr:'Chad',txt:"f@$x%!"},{usr:'Marie',txt:"A2re you cu5rsin$g or is th2at just the gib%be$rish symb0ols?"},{usr:'Chad',txt:"Can4't it $be b1oth?"},{usr:'Boss',txt:"Fi0x i$t! R$e2mov3e al4l th0e wei@rd no8ns2e$nse f4r3om th3e t7ex$t!"}],
'hint': [{ name: 'Ned', txt: `Match groups can help you isolate many of the unwanted characters and remove them altogether`, header: 'Helpful Tip' },{ name: 'Otto', txt: `Did you notice a lot of the repeating letters are consonants? That could help....`, header: 'Helpful Tip'},{ name: 'Ned', txt: `Remember that "<b><span class="b">{</span>2,5<span class="b">}</span></b>" will match between 2 and 5 inclusive of the preceeding token`, header: 'Helpful Tip' }],
'promptName':'Gi-bb4\'2er0%ish',
'maxRules':10,
'id':'gibberish'
},


'34':{
'input':`aardvark, aardvark, aardvark, albatross, albatross, albatross, albatross, alligator, alligator, alligator, alpaca, alpaca, anchovies, angelfish, ant, anteater, antelope, antelope, armadillo, armadillo, armadillo, armadillo, armadillo, armadillo, armadillo, baboon, badger, badger, badger, bandicoot, bandicoot, barnacle, barracuda, barracuda, barracuda, bat, bat, bat, beagle, beagle, beagle, bear, bear, bear, beefalo, beetle, beetle, bernedoodle, bichir, bichpoo, bird, bird, bird, bird, bison, blobfish, bloodhound, bobcat, bobcat, buffalo, buffalo, buffalo, buffalo, buffalo, buffalo, buffalo, buffalo, buffalo, buffalo, buffalo, buffalo, buffalo, buffalo, buffalo, bulldog, bullfrog, bullmastiff, bumblebee, butterfly, butterfly, butterfly, camel, capybara, caracal, carp, carp, cat, caterpillar, catfish, catfish, catfish, centipede, chameleon, chamois, cheagle, cheetah, chickadee, chicken, chihuahua, chimaera, chimpanzee, chinchilla, chinchilla, chipmunk, chipoo, chorkie, cicada, cichlid, clownfish, cockapoo, cockapoo, cockatoo, cockroach, codfish, coral, coral, coral, coral, corgidor, corgipoo, corkie, cougar, cow, coyote, crab, crane, crocodile, crocodile, crocodile, dachsador, dachshund, dalmadoodle, dalmador, dalmatian, dalmatian, deer, deer, dingo, dodo, dodo, dog, dolphin, donkey, donkey, dormouse, doxiepoo, doxle, dragonfish, dragonfly, drever, duck, duck, duck, eagle, eel, eel, eel, elephant, elk, elk, elk, elk, falcon, falcon, falcon, ferret, fish, fish, fish, fly, fly, fox, fox, fox, frog, frog, frog, frog, frog, frog, giraffe, giraffe, giraffe, giraffe, giraffe, giraffe, goose, goose, gorilla, grasshopper, hamster, hamster, hamster, hamster, hamster, hamster, heron, heron, heron, heron, heron, heron, heron, herring, herring, hippopotamus, hippopotamus, hippopotamus, hippopotamus, horse, horse, horse, horse, horse, horse, hyena, ibex, ibex, ibex, ibex, ibex, ibex, ibex, ibex, jaguar, jellyfish, jellyfish, jellyfish, jellyfish, jellyfish, jellyfish, jellyfish, jellyfish, jellyfish, jellyfish, jellyfish, jellyfish, jellyfish, jellyfish, jellyfish, jellyfish, jellyfish, jellyfish, jellyfish, jellyfish, jellyfish, ladybug, lamprey, lemming, lemur, leopard, leopard, leopard, lion, lion, lizard, llama, llama, lobster, locust, locust, locust, lynx, lynx, magpie, mallard, mallard, maltese, mongoose, mongoose, mongoose, mongoose, mongoose, mongoose, mongoose, mongoose, mongoose, mongoose, mongoose, mongoose, mongoose, mongoose, mongoose, mongoose, mongoose, mongoose, monkey, monkey, monkey, moose, moose, moose, moose, moose, moose, moose, moose, moose, moose, moose, moose, moose, nightingale, ocelot, ocelot, octopus, octopus, octopus, opossum, ostrich, ostrich, ostrich, oyster, oyster, oyster, oyster, panther, parrot, peacock, peacock, peacock, peacock, peacock, peacock, peacock, pheasant, pig, pigeon, pigeon, pigeon, pigeon, pigeon, pigeon, pigeon, pigeon, pigeon, pomeranian, pomsky, poochon, poodle, poogle, porcupine, porpoise, possum, possum, possum, possum, pufferfish, rabbit, rabbit, rabbit, rabbit, rabbit, rabbit, rabbit, rabbit, rabbit, rabbit, rabbit, rabbit, rabbit, rabbit, raccoon, raccoon, raccoon, raccoon, raccoon, raccoon, rhinoceros, robin, robin, robin, robin, robin, robin, robin, robin, robin, robin, robin, sardines, scorpion, scorpion, scorpion, scorpion, seahorse, seal, seal, shark, sheep, sheep, sheep, sheep, sheep, sheep, shrimp, shrimp, shrimp, shrimp, shrimp, sloth, snail, snake, snake, snake, snake, snake, sparrow, squid, squid, squid, squid, squid, squirrel, squirrel, squirrel, squirrel, squirrel, squirrel, squirrel, squirrel, squirrel, squirrel, squirrel, squirrel, squirrel, squirrel, squirrel, squirrel, squirrel, tiger, tiger, tiger, tiger, tiger, tiger, tiger, tiger, tiger, tiger, tiger, tiger, tiger, tiger, vulture, wallaby, walrus, walrus, walrus, walrus, walrus, walrus, walrus, walrus, walrus, wolf, wolf, wolf, wolf, wolf, wolf, wolf, wolverine`,
'goal':`aardvark, albatross, alligator, alpaca, anchovies, angelfish, ant, anteater, antelope, armadillo, baboon, badger, bandicoot, barnacle, barracuda, bat, beagle, bear, beefalo, beetle, bernedoodle, bichir, bichpoo, bird, bison, blobfish, bloodhound, bobcat, buffalo, bulldog, bullfrog, bullmastiff, bumblebee, butterfly, camel, capybara, caracal, carp, cat, caterpillar, catfish, centipede, chameleon, chamois, cheagle, cheetah, chickadee, chicken, chihuahua, chimaera, chimpanzee, chinchilla, chipmunk, chipoo, chorkie, cicada, cichlid, clownfish, cockapoo, cockatoo, cockroach, codfish, coral, corgidor, corgipoo, corkie, cougar, cow, coyote, crab, crane, crocodile, dachsador, dachshund, dalmadoodle, dalmador, dalmatian, deer, dingo, dodo, dog, dolphin, donkey, dormouse, doxiepoo, doxle, dragonfish, dragonfly, drever, duck, eagle, eel, elephant, elk, falcon, ferret, fish, fly, fox, frog, giraffe, goose, gorilla, grasshopper, hamster, heron, herring, hippopotamus, horse, hyena, ibex, jaguar, jellyfish, ladybug, lamprey, lemming, lemur, leopard, lion, lizard, llama, lobster, locust, lynx, magpie, mallard, maltese, mongoose, monkey, moose, nightingale, ocelot, octopus, opossum, ostrich, oyster, panther, parrot, peacock, pheasant, pig, pigeon, pomeranian, pomsky, poochon, poodle, poogle, porcupine, porpoise, possum, pufferfish, rabbit, raccoon, rhinoceros, robin, sardines, scorpion, seahorse, seal, shark, sheep, shrimp, sloth, snail, snake, sparrow, squid, squirrel, tiger, vulture, wallaby, walrus, wolf, wolverine`,
'prompt':[{usr:'Boss',txt:"We bought a list of animal names but it's riddled with duplicates!"},{usr:'Marie',txt:"huh? Why did you buy a list of animal names?"},{usr:'Boss',txt:"Animal names always come in handy in the publishing business, but not if they're duplicated! The company said nothing about the duplication problem, it's dishonest! It's unacceptable! They're a bunch of snakes!"},{usr:'Chad',txt:"You should complain if you're so upset, or are you 'chicken'?"},{usr:'Boss',txt:"I did complain! But they just called me a 'fat baboon'... the nerve!"},{usr:'Chad',txt:"Well they may be dishonest but they do know their animals, you have to give them that."},{usr:'Boss',txt:"Get this done ASAP, don't be a sloth about it."},{usr:'Chad',txt:"Seems like that list is already paying for itself..."},{usr:'Ned',txt:"So here is something really neat, it's called backrefrencing. You know <b>\"<span class='c'>$1</span>\"</b>? Well by using <b>\"<span class='c'>\\1</span>\"</b> in the find box, you can self-reference captured groups! Read more about it in the side-panel!"}],
'hint': [{ name: 'Ned', txt: `Using <span class="b">\\1</span> changes the game - it allows you to do all sorts of things you haven't been able to do before. It's sort of like using a variable, whatever you capture is used again in the find input in the order it's captured!`, header: 'Helpful Tip' },{ name: 'Ned', txt: `"<b><span class="c">(</span><span class="b">\\w</span><span class="c">)\\1</span></b>" matches any character that is followed by that same character, i.e. "oo" or "aa" or "xx"`, header: 'Helpful Tip'}],
'promptName':'Deduplicitous',
'maxRules':2,
'id':'deduplicate'
},


'35':{
'input':`She sees me sitting here, and is reminded of the sea. For not only do long ground-swells roll the slanting grain, and little wavelets of the grass ripple over upon the low piazza, the tame madam recalls her beach, and the blown down of dandelions is wafted like the spray, and the purple of the mountains is just the purple of the billows, and a still August noon broods upon the deep meadows, as a calm upon the Line; but the vastness and the lonesomeness are so oceanic, and the silence and the sameness, too, that the first peep of a strange house, rising beyond the trees, is for all the world like spying, on the Barbary coast, an unknown sail.

Hannah, was her name. Indeed, for a year or more, I knew not there was such a spot, and might, perhaps, have never known, had it not been a wizard afternoon in autumn--late in autumn--a mad poet's afternoon; when the turned maple woods in the broad basin below, and a kayak in the adjoining river did refer its vermilion tint, dully smoked, like smoldering towns, dewed, when flames expire upon their prey; and rumor had it, that this smokiness in the general air was not all Indian summer--which was not used to be so sick a thing, however mild--but, in great part, was blown from far-off forests, for weeks on fire, in Vermont; so that no wonder the sky was ominous as Hecate's cauldron--and two sportsmen, crossing a red stubble buck-wheat field, seemed a guilty tenet of Macbeth and foreboding Banquo; and the hermit-sun, hutted in an Adullum cave, well towards the south, according to his season, did little else but, by indirect reflection of narrow rays shot down a Simplon pass among the clouds, just steadily paint one small, round, strawberry mole upon the wan cheek of northwestern hills. I thought of mother then, the once proud nun that was my mom. Civic responsibilities had kept me away from this magical place, away from natures lustrous sagas, but no more.`,
'goal':`She me sitting here, and is reminded of the sea. For not only do long ground-swells roll the slanting grain, and little wavelets of the grass ripple over upon the low piazza, the tame madam recalls her beach, and the blown down of dandelions is wafted like the spray, and the purple of the mountains is just the purple of the billows, and a still August broods upon the deep meadows, as a calm upon the Line; but the vastness and the lonesomeness are so oceanic, and the silence and the sameness, too, that the first of a strange house, rising beyond the trees, is for all the world like spying, on the Barbary coast, an unknown sail.

Hannah, was her name. Indeed, for a year or more, I knew not there was such a spot, and might, perhaps, have never known, had it not been a wizard afternoon in autumn--late in autumn--a mad poet's afternoon; when the turned maple woods in the broad basin below, and a kayak in the adjoining river did refer its vermilion tint, dully smoked, like smoldering towns, dewed, when flames expire upon their prey; and rumor had it, that this smokiness in the general air was not all Indian summer--which was not used to be so sick a thing, however mild--but, in great part, was blown from far-off forests, for weeks on fire, in Vermont; so that no wonder the sky was ominous as Hecate's cauldron--and two sportsmen, crossing a red stubble buck-wheat field, seemed a guilty tenet of Macbeth and foreboding Banquo; and the hermit-sun, hutted in an Adullum cave, well towards the south, according to his season, did little else but, by indirect reflection of narrow rays shot down a Simplon pass among the clouds, just steadily paint one small, round, strawberry mole upon the wan cheek of northwestern hills. I thought of mother then, the once proud nun that was my mom. Civic responsibilities had kept me away from this magical place, away from natures lustrous sagas, but no more.`,
'prompt':[{usr:'Boss',txt:"Just heard back from upstairs - they want us to make some changes"},{usr:'Marie',txt:"We can't just go altering a writer's work, it's highly unethical!"},{usr:'Boss',txt:"We have to think about public opinion - what sells and how it reflects our image. That's why marketing wants us to get rid of all palindromes."},{usr:'Marie',txt:"huh"},{usr:'Boss',txt:"Yes, good example"},{usr:'Chad',txt:"What's a palindrome?"},{usr:'Marie',txt:"It's a word that reads the same backward or forward"},{usr:'Boss',txt:"Exactly, marketing feels they send the wrong message - ending where you've started is unproductive and frustrating - like a wild goose chase. We can't have that negativity"},{usr:'Marie',txt:"wow"},{usr:'Boss',txt:"Watch that negativity, Marie. Also, remind me to fire that girl 'Anna' from HR, I've suddenly realized she's not really a team player"},{usr:'Otto',txt:"I'm starting to get nervous..."}],
'hint': [{ name: 'Ned', txt: `Just like with capture groups, you can capture multiple different things and self-reference them according to the order they were captured,  but you can use them in any order you like, i.e. "<span class="b">\\2\\1</span>"`, header: 'Helpful Tip' },{ name: 'Ned', txt: `"<b><span class="c">(</span><span class="b">\\w</span><span class="c">)</span><span class="b">\\w</span><span class="c">)\\1\\2</span></b>" would match any two characters that are followed by those same two characters, i.e. "yoyo" or "fifi"`, header: 'Helpful Tip'}],
'promptName':'Do geese see God?',
'maxRules':5,
'id':'palindromes'
},

'36':{
'input':`Some day he would compile a dictionary for the use of novelists - caressing curves...Those little valleys had the long lines of a cup moulded round a woman's breast; they seemed the dull, dinted imprints of some huge divine body that had rested on these hills. Cumbrous locutions, these; but through them he seemed to be getting nearer to what he wanted; dinted, dimpled - his mind wandered down echoing corridors of assonance and alliteration ever further from the point. He was endlessly enamoured with the beauty of words. Becoming once more aware of outer worlds, he found himself on the crest of a deep and desolate descent downward toward hell. The road plunged steep and straight, into a considerable valley.`,
'goal':`Some day he would compile a dictionary for the use of novelists - ...Those little valleys had the of a cup moulded round a woman's breast; they seemed the imprints of some huge divine body that had rested on these hills. Cumbrous locutions, these; but he seemed to be getting nearer to what he wanted; - his mind wandered down echoing corridors of ever the point. He was with the beauty of words. Becoming once more aware of outer worlds, he found himself on the crest of a toward hell. The road plunged , into a considerable valley.`,
'prompt':[{usr:'Boss',txt:"More feedback from the our focus groups show readers hate ALLITERATION"},{usr:'Chad',txt:"Gesundheit"},{usr:'Marie',txt:"Chad..."},{usr:'Boss',txt:"Consecutive words that sound the same, Chad"},{usr:'Chad',txt:"Of course I know that, you judgmentally juvenile jabroni"},{usr:'Marie',txt:"whoa"},{usr:'Boss',txt:"anyway... remove all the alliteration from the text"},{usr:'Chad',txt:"what fantastically felonious fallacy that is"},{usr:'Boss',txt:"I'm starting to understand the focus group's feelings..."},{usr:'Ned',txt:"So we're down to 2 rules max and 42 characters in find for this one, good luck!"}],
'promptName':'Alliterate Illiterate',
'hint': [{ name: 'Ned', txt: `This is a continuation of the same backrefrencing concept - an alliteration can be vaguely identified as two consecutive words that start with the same letter.`, header: 'Helpful Tip' },{ name: 'Marie', txt: `There are some optional strings that aren't considered in alliteration, like commas or "and", remember your optional matching skills!`, header: 'Helpful Tip'}],
'maxRules':2,
'maxCharsFind':42,
'id':'alliterate'
},

'41':{
'input':`Then Helen through the camp was driven and thrust,
Till even the Trojan women cried in glee,
"Ah, where is she in whom thou put'st thy trust,
The Queen of love and laughter, where is she?
Behold the last gift that she giveth thee,
Thou of the many loves! to die alone,
And round thy flesh for robes of price to be
The cold close-clinging raiment of sharp stone."

Ah, slowly through that trodden field and bare
They pass'd, where scarce the daffodil might spring,
For war had wasted all, but in the air
High overhead the mounting lark did sing;
Then all the army gather'd in a ring
Round Helen, round their torment, trapp'd at last,
And many took up mighty stones to fling
From shards and flints on Ilus' barrow cast.

Then Menelaus to the people spoke,
And swift his wing'd words came as whirling snow,
"Oh ye that overlong have borne the yoke,
Behold the very fountain of your woe!
For her ye left your dear homes long ago,
On Argive valley or Boeotian plain;
But now the black ships rot from stern to prow,
Who knows if ye shall see your own again?

"Ay, and if home ye win, ye yet may find,
Ye that the winds waft, and the waters bear
To Argos! ye are quite gone out of mind;
Your fathers, dear and old, dishonour'd there;
Your children deem you dead, and will not share
Their lands with you; on mainland or on isle,
Strange men are wooing now the women fair,
And love doth lightly woman's heart beguile.

"These sorrows hath this woman wrought alone:
So fall upon her straightway that she die,
And clothe her beauty in a cloak of stone!"
He spake, and truly deem'd to hear her cry
And see the sharp flints straight and deadly fly;
But each man stood and mused on Helen's face,
And her undream'd-of beauty, brought so nigh
On that bleak plain, within that ruin'd place.

And as in far off days that were to be,
The sense of their own sin did men constrain,
That they must leave the sinful woman free
Who, by their law, had verily been slain,
So Helen's beauty made their anger vain,
And one by one his gather'd flints let fall;
And like men shamed they stole across the plain,
Back to the swift ships and their festival.

But Menelaus look'd on her and said,
"Hath no man then condemn'd thee,--is there none
To shed thy blood for all that thou hast shed,
To wreak on thee the wrongs that thou hast done.
Nay, as mine own soul live, there is one
That will not set thy barren beauty free,
But slay thee to Poseidon and the Sun
Before a ship Achaian takes the sea!"

Therewith he drew his sharp sword from his thigh
As one intent to slay her: but behold,
A sudden marvel shone across the sky!
A cloud of rosy fire, a flood of gold,
And Aphrodite came from forth the fold
Of wondrous mist, and sudden at her feet
Lotus and crocus on the trampled wold
Brake, and the slender hyacinth was sweet.

Then fell the point that never bloodless fell
When spear bit harness in the battle din,
For Aphrodite spake, and like a spell
Wrought her sweet voice persuasive, till within
His heart there lived no memory of sin,
No thirst for vengeance more, but all grew plain,
And wrath was molten in desire to win
The golden heart of Helen once again.

Then Aphrodite vanish'd as the day
Passes, and leaves the darkling earth behind;
And overhead the April sky was grey,
But Helen's arms about her lord were twined,
And his round her as clingingly and kind,
As when sweet vines and ivy in the spring
Join their glad leaves, nor tempests may unbind
The woven boughs, so lovingly they cling.

Noon long was over-past, but sacred night
Beheld them not upon the Ilian shore;
Nay, for about the waning of the light
Their swift ships wander'd on the waters hoar,
Nor stay'd they the Olympians to adore,
So eagerly they left that cursed land,
But many a toil, and tempests great and sore,
Befell them ere they won the Argive strand.

To Cyprus and Phoenicia wandering
They came, and many a ship, and many a man
They lost, and perish'd many a precious thing
While bare before the stormy North they ran,
And further far than when their quest began
From Argos did they seem,--a weary while,--
Becalm'd in sultry seas Egyptian,
A long day's voyage from the mouths of Nile.

But there the Gods had pity on them, and there
The ancient Proteus taught them how to flee
From that so distant deep,--the fowls of air
Scarce in one year can measure out that sea;
Yet first within Aegyptus must they be,
And hecatombs must offer,--quickly then
The Gods abated of their jealousy,
Wherewith they scourge the negligence of men.

And strong and fair the south wind blew, and fleet
Their voyaging, so merrily they fled
To win that haven where the waters sweet
Of clear Eurotas with the brine are wed,
And swift their chariots and their horses sped
To pleasant Lacedaemon, lying low
Grey in the shade of sunset, but the head
Of tall Taygetus like fire did glow.

And what but this is sweet: at last to win
The fields of home, that change not while we change;
To hear the birds their ancient song begin;
To wander by the well-loved streams that range
Where not one pool, one moss-clad stone is strange,
Nor seem we older than long years ago,
Though now beneath the grey roof of the grange
The children dwell of them we used to know?

Came there no trouble in the later days
To mar the life of Helen, when the old
Crowns and dominions perish'd, and the blaze
Lit by returning Heraclidae roll'd
Through every vale and every happy fold
Of all the Argive land?  Nay, peacefully
Did Menelaus and the Queen behold
The counted years of mortal life go by.`,
'goal':`love, laughter, last, loves, lark, last, left, long, lands, love, lightly, leave, law, let, like, look, live, like, lived, leaves, lord, leaves, lovingly, long, light, left, land, lost, long, low, like, last, loved, long, later, life, land, life`,
'prompt':[{usr:'Boss',txt:"The results of our focus group are in and it shows audiences like certain word patterns a lot more than others"},{usr:'Marie',txt:"ok"},{usr:'Boss',txt:"The most popular ones start with and 'l' and a vowel. i.e. love, laughter etc..."},{usr:'Chad',txt:"I think I know where this is going..."},{usr:'Boss',txt:"Rather than have people read the full text, we'll just strip those words out for them! It'll revolutionize the industry!"},{usr:'Marie',txt:"So people are just going to read a list of words?"},{usr:'Boss',txt:"Give the people what they want!"},{usr:'Ned',txt:"For this, you'll need something like a positive lookahead, but NEGATIVE. <b>\"<span class='c'>(?!</span>...<span class='c'>)</span>\"</b> should do the trick!"}],
'hint': [{ name: 'Ned', txt: `A Negative lookahead works the same as positive lookahead, but in reverse. It is a way to match the proceeding regex phrase with a previous pattern, while NOT matching that previous pattern. It's indispensible if you want to match something NOT followed by something else. I encourage you to play around with it and see how it works by trying different things, maybe even in the level editor`},{ name: 'Otto', txt: `This solution doesn't require backreferencing or capturing, just a negative lookahead that isolates the target words`, header: 'Helpful Tip'}],
'promptName':'Love & Laughter',
'maxRules':5,
'id':'lovelaugh'
},

'6':{
'input':`t nlxp, t dlh, t nzybfpcpo`,
'goal':`I came, I saw, I conquered`,
'prompt':[{usr:'Boss',txt:"hsle td rztyr zy??"},{usr:'Chad',txt:"T slgp yz topl..."},{usr:'Ned',txt:"Ooh... sorry guys, seems like a bug is causing all output to be shifted as a caesar cipher"},{usr:'Marie',txt:"szh td esle pgpy azddtmwp?"},{usr:'Ned',txt:"A caesar cipher is substitution method where each letter is replaced with another one a fixed number of positions down the alphabet"},{usr:'Boss',txt:"T opxlyo lydhpcd qzc estd!"},{usr:'Ned',txt:"Right, well.... we'll get to fixing it asap, also you can't use more than five characters in any of the fields, working on a fix."}],
'hint':[{name:'Ned',txt:'A Caesar Cipher is one where each letter is replaced with another letter in the alphabet. The letter "s" is encoded by the letter "d" for example, and must be replaced"',header:'Helpful Tip'},{name:'Ned',txt:'Order of the rules matter, you don\'t want to accidently substitute the same letter twice!',header:'Helpful Tip'},{name:'Chad',txt:'Having a hard time optimizing? Try replacing chunks and not worrying about the substitution logic!'}],
'promptName':'Veni Vidi Vici',
'maxCharsFind':5,
'maxCharsReplace':5,
'maxRules':15,
'id':'caesarcipher'
},
'38':{
'input':`Therewerevessels,threeorfour,atthisdistanceonthehorizonnightly,andtherewerevastspacesbetweenthem,likethespacesbetweenthestars,farastheywerevoidedfromman,sofelttheyfromoneanother,manytwiceasfarfromoneanotherasfromus,andimpresseduponustheenormitytheoceannecessitateddaringly,anditsspacesbetweentheships.`, // vowels? limit on chars for consonants?
'goal':`There were vessels, three or four, at this distance on the horizon nightly, and there were vast spaces between them, like the spaces between the stars, far as they were voided from man, so felt they from one another, many twice as far from one another as from us, and impressed upon us the enormity the ocean necessitated daringly, and its spaces between the ships.`,
'prompt':[{usr:'Boss',txt:"We somehow lost all the spaces in our newest restoration!"},{usr:'Chad',txt:"Oh man... bummer."},{usr:'Boss',txt:"You're darn right it's a 'bummer', it means you have to work overtime till this is fixed!"},{usr:'Chad',txt:"Yeah... I mean i'd like to, but I'm just kinda checked out right now, feeling in a very 'zen' place."},{usr:'Boss',txt:"Well ZEN get your butt in gear"},{usr:'Marie',txt:"How can we even do this anyway? It seems impossible..."},{usr:'Ned',txt:"It's not foolproof, but there can often be patterns for which two consecutive letters are unlikely to be in the same word, etc... Otherwise I have no magic regex command to help with this. To make things worse, you have a maximum of 15 chars for replace. Good luck!"}],
'hint': [{ name: 'Ned', txt: `This level is super tough and has no elegant solution, it requires a lot of trial and error and trying to compress the rules as much as possible throug pattern recognition`},{ name: 'Otto', txt: `You'll need all the concepts you've learned so far to optimize a solution for this in as few rules and characters as possible. If you're struggling, go back and try to earn more stars to reinforce earlier concepts and feel free to skip the level completely.`, header: 'Helpful Tip'}],
'promptName':'Spaced Out',
'maxCharsReplace':15,
'maxRules':15,
'id':'nospaces'
},
'32':{
'input':`J is a consonant in English, but some nations use it as a vowel, than which nothing could be more absurd. Its original form, which has been but slightly modified, was that of the tail of a subdued dog, and it was not a letter but a character, standing for a Latin verb, "jacere", "to throw," because when a stone is thrown at a dog, the dog's tail assumes that shape. This is the origin of the letter, as expounded by the renowned Dr. Jocolpus Bumer, of the University of Belgrade, who established his conclusions on the subject in a work of three quarto volumes and committed suicide on being reminded that the j in the Roman alphabet had originally no curl.

JEALOUS, adj. Unduly concerned about the preservation of that which can be lost only if not worth keeping.

JESTER, n. An officer formerly attached to the king's household, whose business it was to amuse the court by ludicrous actions and utterances, the absurdity being attested by his motley costume. The king himself being attired with dignity, it took the world some centuries to discover that his own conduct and decrees were sufficiently ridiculous for the amusement not only of his court but of all mankind. The jester was commonly called a fool, but the poets and romancers have ever delighted to represent him as a singularly wise and witty person. In the circus of to-day the melancholy ghost of the court fool effects the dejection of humbler audiences with the same jests wherewith in life he gloomed the marble hall, panged the patrician sense of humor and tapped the tank of royal tears.`, // vowels? limit on chars for consonants?
'goal':`J is a consonant in English, but some nations use it as a vowel, than which nothing could be more absurd. Its original form, which has been but modified, was that of the tail of a subdued dog, and it was not a letter but a character, standing for a Latin verb, "jacere", "to because when a stone is at a dog, the dog's tail assumes that shape. This is the origin of the letter, as expounded by the renowned Dr. Jocolpus Bumer, of the University of Belgrade, who established his on the subject in a work of quarto volumes and committed suicide on being reminded that the j in the Roman had originally no curl.

JEALOUS, adj. Unduly concerned about the preservation of that which can be lost only if not keeping.

JESTER, n. An officer formerly attached to the household, whose business it was to amuse the court by ludicrous actions and utterances, the absurdity being attested by his motley costume. The king himself being attired with dignity, it took the some centuries to discover that his own conduct and decrees were ridiculous for the amusement not only of his court but of all mankind. The jester was commonly called a fool, but the poets and romancers have ever to represent him as a singularly wise and witty person. In the circus of to-day the ghost of the court fool the dejection of audiences with the same wherewith in life he gloomed the hall, panged the patrician sense of humor and tapped the tank of royal tears.`,
'prompt':[{usr:'Boss',txt:"First focus group results are IN. And...."},{usr:'Chad',txt:"And... people don't read anymore?"},{usr:'Boss',txt:"People HATE words that have three consecutive consonants. Can't stand 'em"},{usr:'Chad',txt:"What?"},{usr:'Marie',txt:"Let me guess, you want us to remove them all."},{usr:'Boss',txt:"Bingo."},{usr:'Marie',txt:"But then the text won't make any sense..."},{usr:'Ned',txt:"FYI - you're limited to only 80 chars per rule and only two rules for this one so you won't have the space to list off all the consonants... but I have something that may help:"},{usr:'Ned',txt:"You're already familiar with <b>\"<span class='b'>^</span>\"</b> as matching the beginning, but did you know that if used inside square brackets, i.e. <b>\"<span class='d'>[^]</span>\"</b> it acts as a NOT operator for capture groups?"}],
'hint': [{ name: 'Ned', txt: `"<b><span class="d">[^a]</span></b>" will match any character that is not a lowercase "a"`, header: 'Helpful Tip' },{ name: 'Otto', txt: `"<b><span class="d">[^abc]</span></b>" will match any character that is not an "a", "b" or "c", there are implied ORs just like with match groups normally`, header: 'Helpful Tip'}],
'promptName':'Consonant Consequences',
'maxRules':5,
'id':'consonant'
},

'33':{
'input':`Before his eyes              there was now         only  a             space  of    undulating         blue--one         big ,  empty  sky                      growing dark at times            .        . .    Where          was          the  sunshine       ?

"        Almayer                   !      "

                   With a sudden jerk           of his whole                 body he sat up           ,                    grasping the front rail                with          both his     hands,                          and blinked         stupidly                    .

                  "            What    ?     What's              that?" he              muttered, looking round  vaguely.

          "        Here         !         Down here                 ,        Almayer    .         "

          Half               rising         in his chair            ,                          Almayer                looked      over  the          rail  at   the           foot  of        the verandah       ,   and       fell         back       with       a        low whistle         of astonishment.

                        "A ghost, by heavens!"                   he       exclaimed  softly             to himself.

"Will you listen to                  me?" went on                 the husky  voice  from    the courtyard                .

"May I come up, Almayer?"

                          Almayer stood up  and leaned over the rail. "Don't you dare," he   said ,         in         a voice            subdued        but         distinct         .     " Don't you dare !      The           child  sleeps here     .         And     I  don't                    want   to               hear  you--or speak to      you                       either                   .             "

            "                         You         must  listen to me!        It's          something important."

                          "                Not       to             me             ,             surely      .                     "

     "              Yes          !       To            you           .           Very             important        .        "

           Before speaking                        ,                 he turned            to that      empty           space of          undulating blue ,         now narrowing           in the  dusk.`,
'goal':`Before his eyes there was now only a space of undulating blue--one big, empty sky growing dark at times... Where was the sunshine?

"Almayer!"

With a sudden jerk of his whole body he sat up, grasping the front rail with both his hands, and blinked stupidly.

"What? What's that?" he muttered, looking round vaguely.

"Here! Down here, Almayer."

Half rising in his chair, Almayer looked over the rail at the foot of the verandah, and fell back with a low whistle of astonishment.

"A ghost, by heavens!" he exclaimed softly to himself.

"Will you listen to me?" went on the husky voice from the courtyard.

"May I come up, Almayer?"

Almayer stood up and leaned over the rail. "Don't you dare," he said, in a voice subdued but distinct. "Don't you dare! The child sleeps here. And I don't want to hear you--or speak to you either."

"You must listen to me! It's something important."

"Not to me, surely."

"Yes! To you. Very important."

Before speaking, he turned to that empty space of undulating blue, now narrowing in the dusk.`,
'prompt':[{usr:'Boss',txt:"Ugh, same bug again where we have lots of random spaces that need to be removed"},{usr:'Ned',txt:"So, I feel I have to come clean about something..."},{usr:'Chad',txt:"I knew it! I knew he was involved in the Zodiac killings. It's always the dorky types. Marie you owe me 5 bucks."},{usr:'Marie',txt:"Darn!"},{usr:'Ned',txt:"Uh, no... um, I wasn't entirely honest about the function of '\\s', it doesn't just match spaces. It also matches other things, like tabs and line breaks ('\\n')"},{usr:'Chad',txt:"Ned... How could you? I trusted you... you've been over to my house man. Why would you do this?"},{usr:'Ned',txt:"I just... thought it would be easier to introduce these concepts over time..."},{usr:'Marie',txt:"Can it. We need time to process this and heal"},{usr:'Ned',txt:"Also... about me being involved with the Zodiac... I was born in 1981..."},{usr:'Chad',txt:"Really? Wow, you look awful for your age."},{usr:'Ned',txt:"I suppose under the circumstances, I deserve that..."}],
'hint': [{ name: 'Ned', txt: `"You can isolate a space character by using your new not operator! You can do double negatives (i.e.) "<b><span class="d">[^</span><span class="b">\\D</span><span class="d">]</span></b>" is effectively the same as <span class="b">\\d</span>`, header: 'Helpful Tip' },{ name: 'Ned', txt: `It's kinda tricky logic, but if a character is NOT a NOT whitespace OR a line break, you'll know it's a space! "<b><span class="d">[^</span><span class="b">\\S\\n</span><span class="d">]</span></b>" should do the trick!"`, header: 'Helpful Tip'}],
'promptName':'Space Barbs',
'maxRules':6,
'id':'onlyspace'
},



'39':{
'input':`Jordan, Theodore, Maverick, Matthew, Lincoln, Penelope, Elias, Ryan, Ruby, Levi, Jeremiah, Brielle, Luca, Jack, Dylan, Emily, Jayden, Josiah, Thomas, Olivia, Ariana, Isaiah, Allison, Jackson, Jace, Joshua, Noah, Jackson, Ariana, Miles, Jacob, Alice, Natalie, Natalia, Isaiah, Addison, Leo, Scarlett, Evelyn, Lily, Josiah, Cora, Elena, Maya, William, Isabella, Brooklyn, Connor, Harper, Julian, Wesley, Dominic, Serenity, Adam, Jameson, Colton, Jaxson, Paisley, Sarah, Allison, Sebastian, Emily, Christopher, Gabriel, Emery, Hannah, Delilah, Hunter, Jose, Avery, Sophia, Anthony, Quinn, Willow, Nevaeh, Eleanor, Easton, Abigail, Autumn, Natalia, Sebastian, Roman, Eva, Samuel, Hailey, Aiden, Carter, Angel, Riley, Theodore, Cameron, Everly, Thomas, Zoe, Greyson, Logan, Cooper, Autumn, Avery, Nolan, Emilia, Emma, Hazel, Jonathan, Andrew, Carson, Christopher, Layla, Camila, Silas, Luke, Amelia, Savannah, Quinn, Grace, Michael, Ethan, Aria, Caleb, Aaliyah, Ezra, Theodore, Ezekiel, Anna, Mila, Jade, Madeline, Landon, Henry, Dylan, Scarlett, Nova, Aaron, Aiden, Axel, Eliana, Naomi, Daniel, Ian, Hudson, Lydia, Quinn, Lucy, Penelope, Maverick, Mateo, Claire, Hailey, Skylar, Mason, Stella, Ethan, Alexander, Brooks, Hailey, Adrian, Sadie, Jacob, Elijah, Kennedy, Jaxon, Lillian, Scarlett, Grayson, Autumn, Ivy, Gianna, Elizabeth, David, Sophie, Nevaeh, Xavier, Isaac, Kai, Madelyn, Liam, Kayden, Aria, Eli, Wyatt, Gabriella, Leonardo, Mia, Logan, Audrey, Maya, Autumn, Theodore, Mateo, Luna, Ella, Ellie, Leah, Levi, Daniel, Lucas, Nicholas, Genesis, Scarlett, Scarlett, Oliver, Audrey, Everett, James, Parker, Ezra, Hailey, Owen, Asher, Christopher, Bella, Hailey, Jack, Kinsley, Everleigh, Victoria, Robert, Christian, Isla, Nora, Eleanor, Charles, Nathan, Caroline, Owen, Aurora, Piper, Adeline, Valentina, Charles, Jaxon, John, Zoey, Aubrey, Joseph, Noah, Ava, Logan, Austin, Sofia, Madison, Josephine, Santiago, Madison, Layla, Audrey, Violet, Charlotte, Samantha, Mila, Leilani, Benjamin, Peyton, Chloe`,
'goal':`Jordan, Matthew, Lincoln, Elias, Ryan, Ruby, Jeremiah, Brielle, Luca, Jayden, Olivia, Jace, Joshua, Jackson, Ariana, Miles, Alice, Natalie, Isaiah, Addison, Leo, Evelyn, Lily, Josiah, Cora, Elena, William, Isabella, Brooklyn, Connor, Harper, Julian, Wesley, Dominic, Serenity, Adam, Jameson, Colton, Jaxson, Paisley, Sarah, Allison, Emily, Gabriel, Emery, Hannah, Delilah, Hunter, Jose, Sophia, Anthony, Willow, Easton, Abigail, Natalia, Sebastian, Roman, Eva, Samuel, Carter, Angel, Riley, Cameron, Everly, Thomas, Zoe, Greyson, Cooper, Avery, Nolan, Emilia, Emma, Hazel, Jonathan, Andrew, Carson, Camila, Silas, Luke, Amelia, Savannah, Grace, Michael, Caleb, Aaliyah, Ezekiel, Anna, Jade, Madeline, Landon, Henry, Dylan, Nova, Aaron, Aiden, Axel, Eliana, Naomi, Ian, Hudson, Lydia, Quinn, Lucy, Penelope, Maverick, Claire, Skylar, Mason, Stella, Ethan, Alexander, Brooks, Adrian, Sadie, Jacob, Elijah, Kennedy, Lillian, Grayson, Ivy, Gianna, Elizabeth, David, Sophie, Nevaeh, Xavier, Isaac, Kai, Madelyn, Liam, Kayden, Aria, Eli, Wyatt, Gabriella, Leonardo, Mia, Maya, Autumn, Theodore, Mateo, Luna, Ella, Ellie, Leah, Levi, Daniel, Lucas, Nicholas, Genesis, Scarlett, Oliver, Everett, James, Parker, Ezra, Asher, Christopher, Bella, Hailey, Jack, Kinsley, Everleigh, Victoria, Robert, Christian, Isla, Nora, Eleanor, Nathan, Caroline, Owen, Aurora, Piper, Adeline, Valentina, Charles, Jaxon, John, Zoey, Aubrey, Joseph, Noah, Ava, Logan, Austin, Sofia, Josephine, Santiago, Madison, Layla, Audrey, Violet, Charlotte, Samantha, Mila, Leilani, Benjamin, Peyton, Chloe`,
'prompt':[{usr:'Boss',txt:"So I bought another list from that same company and sure enough, more duplicates...."},{usr:'Marie',txt:"Why would you do that??"},{usr:'Boss',txt:"It's called giving a place a second chance!"},{usr:'Chad',txt:"Is this a list of names?"},{usr:'Boss',txt:"Yes! Prospective mothers will pay top dollar for literature that gives them ideas for their new baby, but NOT if there are tons of duplicates!"},{usr:'Marie',txt:"Well, we did this last time, it's just the same thing again, right?"},{usr:'Boss',txt:"Yeah, I mean - yeah. Except this time the duplicates are all mixed up and aren't consecutive..."},{usr:'Chad',txt:"Oh no..."},{usr:'Ned',txt:"I got something that may help: positive lookaheads!"},{usr:'Boss',txt:"Yes, a positive outlook can do wonders!"},{usr:'Ned',txt:"No, if you wrap a regex (represented by ellipses) like this:<b>\"<span class='c'>(?=</span>...<span class='c'>)</span>\"</b>, t lets you match a thing that is followed by another thing without capturing that other thing!"},{usr:'Marie',txt:"...What????"},{usr:'Chad',txt:"I give up."}],
'hint': [{ name: 'Ned', txt: `A Positive lookahead is a way to match the preceeding regex phrase with a subsequent pattern, while NOT matching that subsequent pattern. I encourage you to play around with it and see how it works by trying different things, maybe even in the level editor`},{ name: 'Otto', txt: `Try capturing a name, and then doing a positive lookaead with it as a backreference. That's the key!`, header: 'Helpful Tip'}],
'promptName':'Ohh Baby!',
'maxRules':5,
'id':'dedupe2'
},


'24':{
'input':`"The history of the Castle has no beginning so far as we know. The furthest records or surmises or inferences simply accept it as existing. Some of these guesses, let us call them--seem to show that there was some sort of structure there when the Romans came, therefore it must have been a place of importance in Druid times--if indeed that was the beginning. Naturally the Romans accepted it, as they did everything of the kind that was, or might be, useful. The change is shown or inferred in the name Castra. It was the highest protected ground, and so naturally became the most important of their camps. A study of the map will show you that it must have been a most important centre. It both protected the advances already made to the north, and helped to dominate the sea coast. It sheltered the western marches, beyond which lay savage Wales--and danger. It provided a means of getting to the Severn, round which lay the great Roman roads then coming into existence, and made possible the great waterway to the heart of England--through the Severn and its tributaries. It brought the east and the west together by the swiftest and easiest ways known to those times. And, finally, it provided means of descent on London and all the expanse of country watered by the Thames.

"With such a centre, already known and organised, we can easily see that each fresh wave of invasion--the Angles, the Saxons, the Danes, and the Normans--found it a desirable possession and so ensured its upholding. In the earlier centuries it was merely a vantage ground. But when the victorious Romans brought with them the heavy solid fortifications impregnable to the weapons of the time, its commanding position alone ensured its adequate building and equipment. Then it was that the fortified camp of the Caesars developed into the castle of the king. As we are as yet ignorant of the names of the first kings of Mercia, no historian has been able to guess which of them made it his ultimate defence; and I suppose we shall never know now. In process of time, as the arts of war developed, it increased in size and strength, and although recorded details are lacking, the history is written not merely in the stone of its building, but is inferred in the changes of structure. Then the sweeping changes which followed the Norman Conquest wiped out all lesser records than its own. To-day we must accept it as one of the earliest castles of the Conquest, probably not later than the time of Henry I. Roman and Norman were both wise in their retention of places of approved strength or utility. So it was that these surrounding heights, already established and to a certain extent proved, were retained. Indeed, such characteristics as already pertained to them were preserved, and to-day afford to us lessons regarding things which have themselves long since passed away.

"So much for the fortified heights; but the hollows too have their own story. But how the time passes! We must hurry home, or your uncle will wonder what has become of us."

He started with long steps towards Lesser Hill, and Adam was soon furtively running in order to keep up with him.`,
'goal':`"The history of the Castle has no beginning so far as we know. The furthest records or surmises or X simply accept it as existing. Some of X X, let us call them--X to show that X was some sort of structure X when the Romans came, X it must have X a place of importance in Druid times--if X that was the beginning. Naturally the Romans X it, as they did X of the kind that was, or might be, useful. The change is shown or X in the name Castra. It was the highest X ground, and so naturally X the most important of their camps. A study of the map will show you that it must have X a most important X. It both X the advances already made to the north, and X to dominate the sea coast. It X the X marches, beyond which lay savage Wales--and danger. It provided a means of getting to the X, round which lay the great Roman roads then coming into X, and made possible the great waterway to the heart of England--through the X and its tributaries. It brought the east and the west X by the swiftest and X ways known to those times. And, finally, it provided means of X on London and all the X of country X by the Thames.

"With such a X, already known and organised, we can easily X that each fresh wave of invasion--the Angles, the Saxons, the Danes, and the Normans--found it a X possession and so X its upholding. In the X X it was X a vantage ground. But when the victorious Romans brought with them the heavy solid fortifications X to the weapons of the time, its commanding position alone X its X building and X. Then it was that the fortified camp of the Caesars X into the castle of the king. As we are as yet ignorant of the names of the first kings of Mercia, no historian has X able to guess which of them made it his ultimate X; and I suppose we shall X know now. In process of time, as the arts of war X, it X in size and strength, and although X details are lacking, the history is written not X in the stone of its building, but is X in the changes of structure. Then the X changes which followed the Norman Conquest wiped out all X records than its own. To-day we must accept it as one of the X castles of the Conquest, probably not later than the time of Henry I. Roman and Norman X both wise in their X of places of approved strength or utility. So it was that X surrounding heights, already X and to a certain X proved, X X. X, such characteristics as already X to them X X, and to-day afford to us lessons regarding things which have X long since passed away.

"So much for the fortified heights; but the hollows too have their own story. But how the time passes! We must hurry home, or your uncle will wonder what has X of us."

He started with long steps towards X Hill, and Adam was soon furtively running in order to X up with him.`,
'prompt':[{usr:'Boss',txt:"According to Reddit, \"e\" is people's least favorite vowel"},{usr:'Chad',txt:"'e' is a vowel?"},{usr:'Marie',txt:"Chad..."},{usr:'Marie',txt:"Anyway, so what? It's not like we can just remove all words that have an \"e\" in them, that's rediculous...."},{usr:'Marie',txt:"Um... Boss?"},{usr:'Boss',txt:"Right, right. That is rediculous. Just replace all words that have two or more \"e\"'s in them with an X."},{usr:'Marie',txt:"..."},{usr:'Ned',txt:"A new symbol may help, <b>\"<span class='b'>*</span>\"</b> - it's like <b>\"<span class='b'>+</span>\"</b> but matches zero or more instead of one or more"}],
'hint': [{ name: 'Ned', txt: `"<b><span class="b">*</span></b>" is great because it makes pluralization optional!`, header: 'Helpful Tip' },{ name: 'Otto', txt: `"<b><span class="b">\\d*</span>x</b>" will match any number of numerals before an "x" but will also match an "x" that has no preceeding numerals`, header: 'Helpful Tip'}],
'promptName':"Eek!",
'maxRules':1,
'id':'eek'
},

'42':{
'input':`And then the butcher had written repeated letters to the bishop,--to Bishop Proudie of Barchester, who had at first caused his chaplain to answer them, and had told Mr. Crawley somewhat roundly what was his opinion of a clergyman who eat meat and did not pay for it. But nothing that the bishop could say or do enabled Mr. Crawley to pay the butcher. It was very grievous to such a man as Mr. Crawley to receive these letters from such a man as Bishop Proudie; but the letters came, and made festering wounds, but then there was an end of them. And at last there had come forth from the butcher's shop a threat that if the money were not paid by a certain date, printed bills should be posted about the county. All who heard of this in Silverbridge were very angry with Mr. Fletcher, for no one there had ever known a tradesman to take such a step before; but Fletcher swore that he would persevere, and defended himself by showing that six or seven months since, in the spring of the year, Mr. Crawley had been paying money in Silverbridge, but had paid none to him,--to him who had been not only his earliest, but his most enduring creditor. He got money from the dean in March, said Mr. Fletcher to Mr. Walker, and he paid twelve pounds ten to Green, and seventeen pounds to Grobury, the baker. It was that seventeen pounds to Grobury, the baker, for flour, which made the butcher so fixedly determined to smite the poor clergyman hip and thigh. And he paid money to Hall, and to Mrs. Holt, and to a deal more; but he never came near my shop. If he had even shown himself, I would not have said so much about it. And then a day before the date named, Mrs. Crawley had come to Silverbridge, and had paid the butcher twenty pounds in four five-pound notes. So far Fletcher the butcher had been successful.

Some six weeks after this, inquiry began to be made as to a certain cheque for twenty pounds drawn by Lord Lufton on his bankers in London, which cheque had been lost early in the spring by Mr. Soames, Lord Lufton's man of business in Barsetshire, together with a pocket-book in which it had been folded. This pocket-book Soames had believed himself to have left at Mr. Crawley's house, and had gone so far, even at the time of the loss, as to express his absolute conviction that he had so left it. He was in the habit of paying a rentcharge to Mr. Crawley on behalf of Lord Lufton, amounting to twenty pounds four shillings, every half-year. Lord Lufton held the large tithes of Hogglestock, and paid annually a sum of forty pounds eight shillings to the incumbent. This amount was, as a rule, remitted punctually by Mr. Soames through the post. On the occasion now spoken of, he had had some reason for visiting Hogglestock, and had paid the money personally to Mr. Crawley. Of so much there was no doubt. But he had paid it by a cheque drawn by himself on his own bankers at Barchester, and that cheque had been cashed in the ordinary way on the next morning. On returning to his own house in Barchester he had missed his pocket-book, and had written to Mr. Crawley to make inquiry. There had been no money in it, beyond the cheque drawn by Lord Lufton for twenty pounds. Mr. Crawley had answered this letter by another, saying that no pocket-book had been found in his house. All this had happened in March.

In October, Mrs. Crawley paid the twenty pounds to Fletcher, the butcher, and in November Lord Lufton's cheque was traced back through the Barchester bank to Mr. Crawley's hands. A brickmaker of Hoggle End, much favoured by Mr. Crawley, had asked for change over the counter of this Barchester bank,--not, as will be understood, the bank on which the cheque was drawn--and had received it. The accommodation had been refused to the man at first, but when he presented the cheque the second day, bearing Mr. Crawley's name on the back of it, together with a note from Mr. Crawley himself, the money had been given for it; and the identical notes so paid had been given to Fletcher, the butcher, on the next day by Mrs. Crawley. When inquiry was made, Mr. Crawley stated that the cheque had been paid to him by Mr. Soames, on behalf of the rentcharge due to him by Lord Lufton. But the error of this statement was at once made manifest. There was the cheque, signed by Mr. Soames himself, for the exact amount,--twenty pounds four shillings. As he himself declared, he had never in his life paid money on behalf of Lord Lufton by a cheque drawn by his lordship. The cheque given by Lord Lufton, and which had been lost, had been a private matter between them. His lordship had simply wanted change in his pocket, and his agent had given it to him. Mr. Crawley was speedily shown to be altogether wrong in the statement made to account for possession of the cheque.`,
'goal':`repeated, receive, persevere, defended, seventeen, seventeen, determined, successful, business, believed, visiting, received, accommodation, presented, error, statement, between, statement, possession`,
'prompt':[{usr:'Boss',txt:"Ok, big focus group breakthrough..."},{usr:'Chad',txt:"Oh no..."},{usr:'Boss',txt:"People love love love repitition! In particular, words that have letters repeated in them"},{usr:'Marie',txt:"Why?"},{usr:'Boss',txt:"It's familiar, comforting.... Anyway, just remove any word that doesn't have three of the same letter in it!"}],
'hint': [{ name: 'Ned', txt: `Just like the last level, you're looking to remove everything you DO NOT match. That's a big key with negative lookaheads`},{ name: 'Otto', txt: `Don't be afraid to use paranetheses even if you're not capturing, they can be useful with the logic of the regex!`, header: 'Helpful Tip'}],
'promptName':"Replication Admiration",
'maxRules':5,
'id':'repeatedletters'
},


'40':{
'input':`9033246
17832
12677866203
7
2.9017461171
7395.0301707
486
2533
14717506445
50444.197447
419.29708036
9449271276707
52436
9034697672346098106
6644306
622162
5617313
60769192
3
1077.2182667
991
54201805597
8904343284903284903284561968820339
256030
78518144017.42634
262.27594177
35.249082620
434006.12114
57479375775
28414196668230
9455043022
8228
36134.439130
654830294392816069693928116762671300
3247325
51687464220
7207584825
99
94010990459`,
'goal':`9,033,246
17,832
12,677,866,203
7
2.9017461171
7,395.0301707
486
2,533
14,717,506,445
50,444.197447
419.29708036
9,449,271,276,707
52,436
9,034,697,672,346,098,106
6,644,306
622,162
5,617,313
60,769,192
3
1,077.2182667
991
54,201,805,597
8,904,343,284,903,284,903,284,561,968,820,339
256,030
78,518,144,017.42634
262.27594177
35.249082620
434,006.12114
57,479,375,775
28,414,196,668,230
9,455,043,022
8,228
36,134.439130
654,830,294,392,816,069,693,928,116,762,671,300
3,247,325
51,687,464,220
7,207,584,825
99
94,010,990,459`,
'prompt':[{usr:'Boss',txt:"I bought another list, and no duplicates this time, just like they promised!"},{usr:'Chad',txt:"Hoorah."},{usr:'Marie',txt:"Are these numbers?"},{usr:'Boss',txt:"Yes! Random numbers. The most random that money can buy!"},{usr:'Marie',txt:"Wow. That's... great. They're kind of hard to read though, where are all the commas?"},{usr:'Boss',txt:"That was an extra fee, so I told them to forget it! I have a dedicated team who can add those in for me. "},{usr:'Marie',txt:"Oh no..."},{usr:'Chad',txt:"But I see all the commas in the numbers on my screen"},{usr:'Boss',txt:"Really?"},{usr:'Chad',txt:"Oh yes, they're definitely there. They just camouflage well with the background. So no need for further work."},{usr:'Boss',txt:"Are you sure?"},{usr:'Chad',txt:"Absolutely. And this is not an \"emperor's new clothes\" bit, so, you know, don't even think that."}],
'hint': [{ name: 'Ned', txt: `A Positive lookahead is a way to match the preceeding regex phrase with a subsequent pattern, while NOT matching that subsequent pattern. I encourage you to play around with it and see how it works by trying different things, maybe even in the level editor`},{ name: 'Otto', txt: `Try capturing a name, and then doing a positive lookaead with it as a backreference. That's the key!`, header: 'Helpful Tip'}],
'promptName':'Comma Chameleon',
'maxRules':2,
'id':'commacham'
},

'XXXXX':{
'input':`syllables`,
'goal':`oxford commas`,
'prompt':[{usr:'Boss',txt:"Gotta fix all the oxford commas"},{usr:'Chad',txt:"Oh my god this is SO boring...."},{usr:'Chad',txt:"I'm falling asleep"},{usr:'Chad',txt:"🥱😴"},{usr:'Chad',txt:"🥱😴"}],
'promptName':'Syll-a-bully',
'maxRules':5,
'allowedFlags':["g","m"],
'id':'syll'
},

'XXXXXXX':{
'input':`Haiku`,
'goal':`oxford commas/m`,
'prompt':[{usr:'Boss',txt:"Gotta fix all the oxford commas"},{usr:'Chad',txt:"Oh my god this is SO boring...."},{usr:'Chad',txt:"I'm falling asleep"},{usr:'Chad',txt:"🥱😴"}],
'promptName':'Haiku',
'maxRules':5,
'id':'haiku'
},

'XXX3':{
'input':`\A(?=\w{6,10}\z)(?=[^a-z]*[a-z])(?=(?:[^A-Z]*[A-Z]){3})\D*\d.*\z`,
'goal':`https://www.rexegg.com/regex-lookarounds.html`,
'prompt':[{usr:'Boss',txt:"We've had another breech! Everyone needs to change their passwords. They need 3 uppercase letters, at least one digit"},{usr:'Chad',txt:"Oh my god this is SO boring...."},{usr:'Chad',txt:"I'm falling asleep"},{usr:'Chad',txt:"🥱😴"}],
'promptName':'Password Validation',
'maxRules':5,
'id':'password'
}




};

export const regexTips: any = [
  {
    cmd: "\\s",
    size: "4vh",
    left: "0vw",
    color: "#c24699",
    explanation: "Matches Whitespace",
    example:
      '<i>Find: "<b><span class="b">\\s</span>an<span class="b">\\s</span></b></i>" matches the string "<b> an </b>" but not "<b>pan</b>" or "<b>ant</b>"',
  },
    {
    cmd: "\\d",
    size: "4vh",
    left: "0vw",
    color: "#c24699",
    explanation: "Matches Digit",
    example:
      '<i>Find: "<b><span class="b">\\d</span><span class="b"></span></b></i>" matches "<b>9</b>" but not "<b>nine</b>"',
  },
    {
    cmd: "\\b",
    size: "4vh",
    left: "0vw",
    color: "#c24699",
    explanation: "Matches Boundary",
    example:
      '<i>Find: "<b><span class="b">\\b</span>word<span class="b">\\b</span></b></i>" matches "What\'s the <b>word</b>?" and "My <b>word</b>!',
  },
  {
    cmd: "\\S",
    size: "4vh",
    left: "0px",
    color: "#c24699",
    explanation: "NOT Match (capital letter)",
    example:
      '<i>Find: "<b><span class="b">\\D</span></b></i>" matches any non-digits in the string "24<b>a</b>05<b>c%</b>95". Works for "<b><span class="b">\\S</span></b>" and "<b><span class="b">\\B</span></b>" in the same way.',
  },
    {
    cmd: "?",
    size: "5vh",
    left: "10px",
    color: "#c24699",
    explanation: "Optional Match",
    example:
      '<i>Find: "<b>colou<span class="b">?</span>r</b></i>" matches both "<b>colour</b>" and "<b>color</b>". The preceeding token is made <i>optional</i>',
  },

  {
    cmd: "+",
    size: "8.5vh",
    left: "6px",
    color: "#c24699",
    explanation: "Matches One or More",
    example:
      '<i>Find: "<b>s<span class="b">+</span></b></i>" matches everything but "<b>h</b>" in "<b>sssssh</b>"',
  },
     {
    cmd: "+?",
    size: "5vh",
    left: "0px",
    color: "#c24699",
    explanation: "Lazy Match",
    example:
      '<i>Find: "<b>a<span class="b">\\S+?</span>a</b></i>" matches only to the next "<b>a</b>", i.e. "<b>ala</b>" in <b>alabama</b>',
  },

    {
    cmd: "\\",
    size: "5vh",
    left: "8px",
    color: "#fff",
    explanation: "Make Char Literal",
    example:
      '<i>Find: "<b>\\+</b>"</i>" will match all plus symbols rather than invoking the one or more command "<b><span class="b">+</span></b>"',
  },
  {
    cmd: "|",
    size: "5vh",
    left: "12px",
    color: "#c24699",
    explanation: "OR operator",
    example:
      '<i>Find: "<b>this<span class="b">|</span>that<span class="b">|</span>other</b></i>" matches any of the defined characters',
  },
  {
    cmd: "( )",
    size: "5.6vh",
    left: "0px",
    color: "#ec9b00",
    explanation: "Capture Contents",
    example:
      '<i>Find: "<b><span class="c">(</span>ab<span class="c">)</span>l<span class="c">(</span>e<span class="c">)</span></b>" matches all instances of "<b>able</b>"as if parentheses are not there, but if <b><span class="c">$</span>1</b> is used in the replace function, "<b>ab</b>" is substituted, while <b><span class="c">$</span>2</b> substitutes "<b>e</b>" and so on',
  },

  {
    cmd: "•",
    size: "6vh",
    left: "8px",
    color: "#c24699",
    explanation: "Matches Any Char",
    example:
      '<i>Find: "<b>f<span class="b">.</span></b>n</i>" matches "<b>fan</b>", "<b>fun</b>", "<b>f?n</b>", "<b>f_n</b> or "<b>f n</b>"',
  },

  {
    cmd: "^",
    size: "4vh",
    left: "8px",
    color: "#c24699",
    explanation: "Matches Start",
    example:
      '<i>Find: "<b><span class="b">^(.)</span></i></b>" will capture the first character of the passage."',
  },
    {
    cmd: "$",
    size: "4vh",
    left: "6px",
    color: "#c24699",
    explanation: "Matches End",
    example:
      '<i>Find: "<b><span class="b">(\\d)$</span></i></b>" will capture the last character of the passage if a digit. Counterpart to <b><span class="b">^</span></b>',
  },


  {
    cmd: "[ ]",
    size: "5.6vh",
    color: "#00909d",
    explanation: "Match Group",
    example:
      '<i>Find: "<b>t<span class="d">[A-m]</span>p</b> matches "<b>tap</b>", "<b>tip</b>" or even "<b>tBp</b>" but not "<b>top</b>" since it only matches a character from upper case "<b>A</b>" through lower case "<b>m</b>". Also, <b>t<span class="d">[ab]</span>p</b> matches <b>a</b> OR <b>b</b>, similar to <b>a<span class="b">|</span>b</b> ',
  },
  {
    cmd: "{ }",
    size: "4vh",
    left: "1px",
    color: "#c24699",
    explanation: "# of Matches",
    example:
      '<i>Find: "<b><span class="b">\\d{</span>2,5<span class="b">}</span></b></i>" will match any numbers between 2 and 5 digits in length. Use one number between curly braces to match a specific number, i.e. "<b>r<span class="b">{</span>3<span class="b">}</span></b>" will match any 3 "r\'s" in a row',
  },
  {
    cmd: "*",
    size: "6vh",
    left: "8px",
    color: "#c24699",
    explanation: "Matches Zero or More",
    example:
      'Identical to "<b>s<span class="b">+</span></b></i>" but does not require at least one match of the proceeding token, can also be used lazily, i.e. "<b>X<span class="b">*?</span>X</b></i>"',
  },
  {
    cmd: "\\w",
    size: "4vh",
    left: "1px",
    color: "#c24699",
    explanation: "Matches Word Character",
    example:
      'Shorthand for "<b><span class="d">[a-zA-Z0-9_]</span></b>", "<b><span class="b">\\w</span></b>" matches any upper case or lower case character as well as numbers and underscores.',
  },
    {
    cmd: "\\n",
    size: "4vh",
    left: "1px",
    color: "#c24699",
    explanation: "Matches Newline",
    example:
      '<i>Find: "<b>\\.<span class="b">\\n</span></i>" matches any newline after a period. They can be used in the replace box as well to ADD new lines.',
  },
  {
    cmd: "[^]",
    size: "4vh",
    left: "1px",
    color: "#00909d",
    explanation: "NOT Group Match",
    example:
      '<i>Find: ""<b><span class="d">[^Aa]</span></b>"" will match any character that is NOT an uppercase or lowercase "A". There are implied logical ORs between characters, just as with regular match groups.',
  },
{
    cmd: "\\1",
    size: "4.3vh",
    left: "0px",
    color: "#ec9b00",
    explanation: "Backreference",
    example:
      '<i>Find: "<b><span class="c">(</span><span class="b">\\d</span><span class="c">)\\1</span></b>" matches any digit followed by that same digit. "<span class="c"><b>\\1</b></span>" references the first capture group (like "<span class="c"><b>$1</b></span>") but for use in the find input, i.e. "<b><span class="c">(</span><span class="b">\\d</span><span class="c">)</span><span class="b">\\d</span><span class="c">)\\1\\2</span></b>" would match any two digits that are followed by those same two digits, i.e. <b>1212, 4848, or 5555</b>',
  },
  {
    cmd: "(?=",
    size: "4vh",
    left: "0px",
    color: "#ec9b00",
    explanation: "Positive Lookahead",
    example:
      '<i>Find: "<b>X<span class="c">(?=</span>Y<span class="c">)</span></span></b>" will match an X if and only if it is followed by a Y. No capturing takes place, and only the X is matched. Any regular expression, however complicated, can take the place of the ellipses in "<b><span class="c">(?=</span>...<span class="c">)</span></b>" and more parantheses can be added to include capture groups around or within lookaheads.',
  },
  {
    cmd: "(?!",
    size: "4vh",
    left: "0px",
    color: "#ec9b00",
    explanation: "Negative Lookahead",
    example:
      'Identical to Positive Lookahead, but only succeeds if the regex inside the lookahead <b><u>fails</u></b> to match.',
  },
  // tap, tip, top
  /*
{cmd:'\\s',color:'#c24699',explanation:'Matches a whitespace character'},

{cmd:'\\W',color:'#c3f',explanation:'Non-Whitespace'}
{cmd:'\\n',color:'#c3f',explanation:'Non-Whitespace'}
*/
];

export const vulgarities: any = [];

export const starChars = {'taletwocities':[21,3,'sentiment'],'middlemarch':[40,3,'ibeforee'],'ascii':[18,2,'anagraphs'],'lightness':[12,2,'stickykeys'],'romeo':[47,4,'taletwocities'],'sentiment':[81,5,'ibeforee'],'capital':[24,2,'suffix'],'hugs':[16,1,'nonotes'],'cholesterol':[21,1,'ibeforee'],'stickykeys':[23,4,'ibeforee'],'nonotes':[7,1,'noletters'],'corruption':[46,1,'suffix'],'suffix':[38,2,'suffix'],'backwards':[75,1,'noletters'],'noletters':[54,1,'noletters'],'devil':[48,4,'alpha'],'alpha':[25,2,'anagraphs'],'ibeforee':[42,3,'ibeforee'],'emails':[54,1,'emails'],'rex':[88,4,'rex'],'caesarcipher':[26,5,'alpha'],'neighbour':[32,2,'ibeforee'],'oxfordcomma':[22,1,'oxfordcomma'],'anagraphs':[41,1,'anagraphs'],'contractions':[55,4,'anagraphs'],'eek':[17,1,'possessive'],'possessive':[34,2,'possessive'],'singular':[54,3,'singular'],'oedipus':[88,4,'oedipus'],'babyshark':[110,8,'babyshark'],'gibberish':[69,7,'consonant'],'lazychess':[65,1,'lazychess'],'consonant':[50,1,'consonant'],'onlyspace':[71,5,'onlyspace'],'deduplicate':[13,1,'deduplicate'],'rhyme':[49,2,'rhyme'],'alliterate':[40,1,'alliterate'],'palindromes':[48,3,'palindromes'],'nospaces':[171,10,'nospaces'],'dedupe2':[18,1,'dedupe2'],'lovelaugh':[58,4,'lovelaugh'],'repeatedletters':[54,3,'repeatedletters'],'commacham':[32,1,'lovelaugh']}

export const reqStars = [0,1,3,4,5,6,8,10,11,12,14,15,18,21,23,27,29,31,32,37,40,45,46,52,54,58,61,64,68,70,72,74,78,81,84,87,90,93,96,98,100,102];
export const tipsShowTo = [1,1,2,2,2,2,3,4,4,5,5,6,8,9,10,10,11,11,12,14,15,15,16,17,17,17,18,18,18,18,18,19,19,20,20,20,20,20,21,21,22,22];

export const fbConfig = {
    apiKey: "<yourAPIkey>",
    authDomain: "<yourAuthDomain>",
    databaseURL: "https://yourURLHere.firebaseio.com",
    projectId: "<yourProjectID>",
    storageBucket: "<yourStorageBucket>",
    messagingSenderId: "<yourSenderID>",
    appId: "<yourAppID>"
};

export const emailDomainBlacklist:any=["a45.in"]