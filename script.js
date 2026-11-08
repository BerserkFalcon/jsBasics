console.log("Hello from script.js");
//make these dictionaries of book to chapter pairs? Chapters will also have verses, can that be triple mapped?
const OldTestament = ["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalms","Proverbs","Ecclesiastes","Song of Solomon","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi"];
const NewTestament = ["Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"];
//OldTestament verses, then New Testament verses need implementation
50, 40, 27, 36, 34, 24, 21, 4, 31, 24, 22, 25, 29, 36, 10, 13, 10, 42, 150, 31, 12, 8, 66, 52, 5, 48, 12, 14, 3, 9, 1, 4, 7, 3, 3, 3, 2, 14, 4
28, 16, 24, 21, 28, 16, 16, 13, 6, 6, 4, 4, 5, 3, 6, 4, 3, 1, 13, 5, 5, 3, 5, 1, 1, 1, 22
function randOldBook(){let book = Math.floor(Math.random()*OldTestament.length);console.log(OldTestament[book]);};
function randNewBook(){let book = Math.floor(Math.random()*NewTestament.length);console.log(NewTestament[book]);};
//buttons
const generateRolls =document.getElementById("buttonGenerates");
const buttonRolls = document.getElementById("buttonRolls");
const hourlyRolls = document.getElementById("hourlyRolls");

var availableRolls = 0;
var hourOfLastRoll;
const time = new Date();
var hourCheck = time.getHours();


function updateRolls(){
    availableRolls++;
};
generateRolls.addEventListener('click',()=>{
    updateRolls();
    console.log(availableRolls + " rolls left.");
});
buttonRolls.addEventListener('click',()=>{
    if (availableRolls>0){
        roll(1);
        availableRolls--;
        console.log(availableRolls + " rolls left.")
    }else(console.log("Out of rolls."));
    });
hourlyRolls.addEventListener('click',()=>{
    if(hourOfLastRoll != hourCheck){
        availableRolls++;
        hourOfLastRoll = hourCheck;
        console.log(availableRolls + " rolls now available.")
    }else{console.log("Hourly roll used.")};
});

//randOldBook();
//randNewBook();

//whole thing is overtuned, maybe dif functions for each tier, then combine via a seperate function
function rollPoke(){
        //total pokemon is 1025, split amonng 5 even tiers would be 205 each
        //this seem overtuned, maybe just take the rarityOnePoke and just add the min/max depending on tier
        var rarityOnePoke = Math.floor(Math.random()*205);
        var rarityTwoPoke = Math.floor(Math.random()*(rare2max-rare2min+1)+rare2min);
        var rarityThreePoke = Math.floor(Math.random()*(rare3max-rare3min+1)+rare3min);
        var rarityFourPoke = Math.floor(Math.random()*(rare4max-rare4min+1)+rare4min);
        var rarityFivePoke = Math.floor(Math.random()*(rare5max-rare5min+1)+rare5min);

        var rare2max = 410;
        var rare2min = 206;

        var rare3max = 615;
        var rare3min = 411;

        var rare4max = 820;
        var rare4min = 616;

        var rare5max = 1025;
        var rare5min = 821;

        var rarityCheck1 = Math.floor(Math.random()*100);    //consider combining the 2 checks into 1 loop
        var rarityCheck2 = Math.floor(Math.random()*100);

        var rarityOneOdds = 91;
        var rarityTwoOdds = 20;
        var raritThreeyOdds = 10;
        var rarityFourOdds = 5;
        var rarityFiveOdds = 1;



            if(rarityCheck1<=rarityOneOdds && rarityCheck2<=rarityOneOdds){
                console.log("congratulations you won a "+ rarityOnePoke)
                return;
            }else{
                console.log("better luck next time.");
                return;
            }
            
        };
//switch to a decrement scheme? by setting i to num1, i>0 and i-- instead?
 function roll(num1){for(i=0;i<num1;i++){
    var numberOfRolls = num1;
    if(numberOfRolls>0){
        rollPoke();
        numberOfRolls--;
    }else{console.log("no available rolls")}; //will this always print at the end?
}};