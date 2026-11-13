//make these dictionaries of book to chapter pairs? Chapters will also have verses, can that be triple mapped?
function bibleRolls(){
const OldTestament = ["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalms","Proverbs","Ecclesiastes","Song of Solomon","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi"];
const NewTestament = ["Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"];
//OldTestament verses, then New Testament verses need implementation
50, 40, 27, 36, 34, 24, 21, 4, 31, 24, 22, 25, 29, 36, 10, 13, 10, 42, 150, 31, 12, 8, 66, 52, 5, 48, 12, 14, 3, 9, 1, 4, 7, 3, 3, 3, 2, 14, 4
28, 16, 24, 21, 28, 16, 16, 13, 6, 6, 4, 4, 5, 3, 6, 4, 3, 1, 13, 5, 5, 3, 5, 1, 1, 1, 22
function randOldBook(){let book = Math.floor(Math.random()*OldTestament.length);console.log(OldTestament[book]);};
function randNewBook(){let book = Math.floor(Math.random()*NewTestament.length);console.log(NewTestament[book]);};
};

//html buttons and forms
const generateRolls =document.getElementById("buttonGenerates"); //generates 1 free roll, no timegate
const buttonRolls = document.getElementById("buttonRolls"); //rolls
const hourlyRolls = document.getElementById("hourlyRolls"); //timegated roll
const resetSession = document.getElementById("resetSessionStorage");
var formRolls = document.getElementById("fieldGenerates");
var rolledPokeTable = document.getElementById('placeholder');

//init base/empty values
        var receivedPokes = [0,0,0,0,0];
var availableRolls = 10;
var hourOfLastRoll;
const time = new Date();
var hourCheck = time.getHours();
var pokeCollection = [];

/*
below line WIP, push any pokes received from rolling
into the array pokecollection
intent is to save the "poke"(number generated)
as the key, then it's value to 1 or name?
*/
//pokeCollection.push(pokefromroll)



//button and form events
generateRolls.addEventListener('click',()=>{
    updateRolls(1);
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

resetSession.addEventListener('click', ()=>{
    sessionStorage.clear();
});

formRolls.addEventListener('keydown',(event)=>{
    if (event.key==="Enter"){
        event.preventDefault();
        let formNum = Number(formRolls.value);
        updateRolls(formNum);
    };
});

//start of functions
function rollsMessage(){
    if (availableRolls == 1){
        console.log("1 roll available.")
    }
    else if(availableRolls == 0){
        console.log("No rolls available.");
    }
    else{console.log(`${availableRolls} rolls available.`)}
};

function updateRolls(rollVal){
    if(rollVal==0){
        rollsMessage();
    }
    else if(rollVal==1){
        availableRolls++;
        rollsMessage();
    }
    else if(rollVal<1000000){
        availableRolls+=rollVal;
        console.log(`${rollVal} rolls added.`)
        rollsMessage(); 
    }else {
        console.log("Failed to add rolls.")
    }
};

function rollPoke(){
        var rarityTiers = [91,20,10,5,1];
        const tierSize = 205;
        const baseTier = () => Math.floor(Math.random()*tierSize)+1; //function baseTier(){return Math.floor(Math.random()*tierSize)+1;} 
        var rarityPoke = [
            baseTier(),
            baseTier() + tierSize,
            baseTier() + tierSize *2,
            baseTier() + tierSize *3,
            baseTier() + tierSize *4,
        ];
        //reset table vals per roll
        for(let i=0;i<5;i++){
            receivedPokes[i]=0;
        }
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
        rarityRoll();
        createPokeTable();
        
        //todo: instead of logging, td.textContent
        //0 should be rolled number
        //1 should should be congrats or sorry msg

        for(let i=0;i<5;i++){
            if(receivedPokes[i]!==0){
                console.log(`Congrats you won a ${receivedPokes[i]}`);
            }else{console.log("Sorry try again.")};
        };
        populatePokeTable();
    };

function roll(num1){
    for(let i=0;i<num1;i++){
    var numberOfRolls = num1;
    if(numberOfRolls>0){
        rollPoke();
        numberOfRolls--;
    }else{console.log("no available rolls")};
}};

function createPokeTable(){
    //remove old table first, then create new one
    document.querySelectorAll(".pokeRow").forEach(element =>{element.remove();})
    for(let i=0;i<5;i++){
        var pokeRow = document.createElement('tr');
        pokeRow.classList.add(`pokeRow`);
        rolledPokeTable.append(pokeRow)
        for(let j=0;j<2;j++){
            var pokeData = document.createElement('td');
            pokeData.classList.add(`pokeData${j}`);
            pokeRow.append(pokeData)
        };
    };
};
//todo: convert manual children calls variable name calls
function populatePokeTable(){
    for (let rows of rolledPokeTable.children) {
        for (let data of rows.children) {
            data.textContent = "";
        };
    };
    for (let i=0;i<5;i++){
    //where pokemon from most recent roll populate the pokeTable  
    //\u2611 is check-mark, 2612 is x 
    let rows = rolledPokeTable.children[i];
        for (let data of rows.children){
                if(data.className == "pokeData0"){
                    data.textContent = receivedPokes[i]
                }else if(data.className=="pokeData1" && receivedPokes[i]!=0){
                    data.textContent ="\u2611"
                }else (data.textContent="\u2612");
            };
        };
    };