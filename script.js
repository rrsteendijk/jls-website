let currentQuestionIndex = 0;
const questions = [
    { question: "Wat is de traditionele kleur van de kerstman zijn pak?", answers: ["A) Rood", "B) Groen", "C) Blauw", "D) Geel"], correct: 0 },
    { question: "Welke rendier van de kerstman heeft een rode neus?", answers: ["A) Dancer", "B) Rudolph", "C) Comet", "D) Blitzen"], correct: 1 },
    { question: "Waar werd Jezus volgens de Bijbel geboren?", answers: ["A) Jeruzalem", "B) Nazareth", "C) Bethlehem", "D) Damascus"], correct: 2 },
    { question: "Wat hangen mensen vaak aan hun voordeur met Kerstmis?", answers: ["A) Een kaars", "B) Een krans", "C) Een sok", "D) Een bel"], correct: 1 },
    { question: "Welk liedje is bekend als het best verkochte kerstliedje aller tijden?", answers: ["A) Jingle Bells", "B) Silent Night", "C) White Christmas", "D) All I Want for Christmas Is You"], correct: 2 },
    { question: "Wat is een ander woord voor kerststal?", answers: ["A) Kerstboom", "B) Kerstkrans", "C) Kerstmarkt", "D) Kerstkribbe"], correct: 3 },
    { question: "Welk land begon met de traditie van het opzetten van een kerstboom?", answers: ["A) Duitsland", "B) Verenigde Staten", "C) Engeland", "D) Frankrijk"], correct: 0 },
    { question: "Op welke datum wordt Tweede Kerstdag gevierd?", answers: ["A) 25 december", "B) 26 december", "C) 27 december", "D) 24 december"], correct: 1 },
    { question: "Hoe noemen de Engelsen de kerstman?", answers: ["A) Saint Nick", "B) Father Christmas", "C) Kris Kringle", "D) Santa Claus"], correct: 1 },
    { question: "Welke kleur kerstballen zijn traditioneel?", answers: ["A) Rood en groen", "B) Blauw en wit", "C) Goud en zilver", "D) Paars en roze"], correct: 0 },
    { question: "Welk dier wordt traditioneel gegeten met kerst in Engeland?", answers: ["A) Kalkoen", "B) Kip", "C) Varkensvlees", "D) Rundvlees"], correct: 0 },
    { question: "Wie schreef 'A Christmas Carol'?", answers: ["A) Charles Dickens", "B) William Shakespeare", "C) Jane Austen", "D) Mark Twain"], correct: 0 },
    { question: "Welke plant staat bekend als kerstplant en wordt vaak gekust onder gehangen?", answers: ["A) Holly", "B) Ivy", "C) Mistletoe", "D) Poinsettia"], correct: 2 },
    { question: "Wat zijn de traditionele kleuren van kerst?", answers: ["A) Rood en wit", "B) Goud en zilver", "C) Rood en groen", "D) Blauw en wit"], correct: 2 },
    { question: "Hoeveel deuren heeft een adventskalender?", answers: ["A) 24", "B) 25", "C) 31", "D) 12"], correct: 0 },
    { question: "Welk populaire kerstliedje werd eigenlijk geschreven voor Thanksgiving?", answers: ["A) Jingle Bells", "B) Let It Snow", "C) Winter Wonderland", "D) Frosty the Snowman"], correct: 0 },
    { question: "In welk land is het een traditie om op kerstavond KFC te eten?", answers: ["A) Verenigde Staten", "B) Australië", "C) Japan", "D) Canada"], correct: 2 },
    { question: "Welke drie cadeaus brachten de wijzen naar Jezus volgens het Bijbelse verhaal?", answers: ["A) Goud, Wierook, Mirre", "B) Zilver, Saffraan, Zijde", "C) Robijnen, Diamanten, Saffieren", "D) Brood, Wijn, Honing"], correct: 0 },
    { question: "Welke bekende kerstfilm speelt zich af in New York?", answers: ["A) Elf", "B) Home Alone", "C) The Polar Express", "D) Miracle on 34th Street"], correct: 1 },
    { question: "Wat is de traditionele naam van de cake die vaak met Kerstmis wordt gegeten?", answers: ["A) Kerststol", "B) Kerstpudding", "C) Yule Log", "D) Panettone"], correct: 1 }
];


function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;
    let answersHtml = "";
    question.answers.forEach((answer, index) => {
        answersHtml += `<button onclick="checkAnswer(${index})">${answer}</button>`;
    });
    document.getElementById("answer-options").innerHTML = answersHtml;
}

function checkAnswer(selectedIndex) {
    if (questions[currentQuestionIndex].correct === selectedIndex) {
        alert("Correct!");
        nextQuestion();
    } else {
        alert("Helaas, probeer het opnieuw.");
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        document.getElementById("quiz-container").innerHTML = "<h1>Gefeliciteerd! Je hebt de quiz voltooid.</h1>";
    }
}

displayQuestion();

