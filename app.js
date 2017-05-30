var name = "rachael adams".toUpperCase();
var job = "Full Stack Student";
var bio = "Lover of donuts";
var interests = ["* Cooking", "* Reading", "* Traveling"];

console.log("Name: " + name);
console.log("Career: " + job);
console.log("Description: " + bio);
console.log(" ");
console.log("My interests: ");
console.log(interests[0]);
console.log(interests[1]);
console.log(interests[2]);
console.log(" ");
console.log("My Previous Experience: ");

function displayPosition(jobTitle, companyName, desc){
    console.log("* " + jobTitle + "at " + companyName + "- " + desc);
};

displayPosition("Stockroom Manager ", "T.J Maxx", "Assigning work and training receiving/staging employees");
displayPosition("Marketing Assistant ", "Chatt State Community College", "Campus Tours, Billboards, and college rep at events");
displayPosition("Volunteer ", "McKamey Animal Center", "Social Media Photographer");

console.log(" ");
console.log("My Skills: ");

function displaySkill(skillName, boolValue){
    if(boolValue === false){
        console.log("*" + skillName);
    } else {
         console.log("* BAM: " + skillName);
    }
};

displaySkill(" Painting", false);
displaySkill(" Cat Trainer", true);
displaySkill(" Gift Buying", false);
displaySkill(" Master Wife", true);

console.log("-----References Available Upon Request-----");