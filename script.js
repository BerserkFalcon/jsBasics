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
const generateRolls =document.getElementById("buttonGenerates"); //generates 1 free roll, no timegate
const buttonRolls = document.getElementById("buttonRolls"); //rolls
const hourlyRolls = document.getElementById("hourlyRolls"); //timegated roll

var availableRolls = 0;
var hourOfLastRoll;
const time = new Date();
var hourCheck = time.getHours();

function updateRolls(){
    availableRolls++;
};

function rollsMessage(){
    if (availableRolls == 1){
        console.log("1 roll available.")
    }else{console.log(`${availableRolls} rolls available.`)}
}

generateRolls.addEventListener('click',()=>{
    updateRolls();
    rollsMessage();
});

buttonRolls.addEventListener('click',()=>{
    if (availableRolls>0){
        roll(1);
        availableRolls--;
        rollsMessage();
    }else(console.log("Sorry, you are out of rolls."));
    });

hourlyRolls.addEventListener('click',()=>{
    if(hourOfLastRoll != hourCheck){
        availableRolls++;
        hourOfLastRoll = hourCheck;
        rollsMessage();
    }else{console.log("Hourly roll used.")};
});

function rollPoke(){
        //create array of no pokemon but not undefined, then array of the odds
        var receivedPokes = [0,0,0,0,0];
        var rarityTiers = [91,20,10,5,1];

        //set offset for each tier, 1025 total pokemon, so each seperated by 205, then populate array with potential winners
        //need to understand how arrow function works better, copy pasted format
        const tierSize = 205;
        const baseTier = () => Math.floor(Math.random()*tierSize) + 1;
        var rarityPoke = [
            baseTier(),
            baseTier() + tierSize,
            baseTier() + tierSize *2,
            baseTier() + tierSize *3,
            baseTier() + tierSize *4,
        ];


        //set value to beat for success, then generate 2 random nums, set bool answer to indexes based on success
        //if BOTH true, that tier succeeds and is added to received array
        function rarityRoll(){
            for(let i=0;i<5;i++){
                let currentChance = rarityTiers[i];
                let rarityCheck = Math.floor(Math.random()*100);
                var oddsArray = [];
                for(let j=0;j<2;j++){
                    if (rarityCheck<=currentChance){
                        oddsArray[j]=1;                      
                    };
                    };
                if (oddsArray[0] && oddsArray[1]){
                        receivedPokes[i]=rarityPoke[i];
                };
            };
        };
        //run above function and post sucess/failures to log
        rarityRoll();
        for(let i=0;i<5;i++){
            if(receivedPokes[i]!==0){
                console.log(`Congrats you won a ${receivedPokes[i]}`);
            }else{console.log("Sorry try again.")};
        };
    };
//switch to a decrement scheme? by setting i to num1, i>0 and i-- instead?
 function roll(num1){for(let i=0;i<num1;i++){
    var numberOfRolls = num1;
    if(numberOfRolls>0){
        rollPoke();
        numberOfRolls--;
    }else{console.log("no available rolls")}; //will this always print at the end?
}};