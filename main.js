function generateRandomNumber() {
    return Math.floor(Math.random() * 30) + 1; // 1 dan 30 gacha bo'lgan tasodifiy son
}
for (var i = 1; i <= 10; i++) {
    var randomSon = generateRandomNumber();
    var userSon = prompt("Sonni toping (1 dan 30 gacha):");
    if (userSon == randomSon) {
        console.log("Siz " + i + "-urinishda topdingiz!");
        break; 
    } else {
        console.log("Topa olmadingiz. Yana urinib ko'ring.");
    }
}
if (i > 10) {
    console.log("Siz 10 urinishda ham topolmadingiz. To'g'ri javob: " + randomSon);
}
