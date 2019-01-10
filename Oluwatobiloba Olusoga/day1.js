function alphabetCounter(speech) {
    counterObject = {};
    let count = 0;
    speech = speech.replace(/\d/g, '').toLowerCase();
    alphabets =  "abcdefghijklmnopqrstuvwxyz".split("");

    for (i = 0; i < 26; i++){
        if (speech.includes(alphabets[i])){            
            let regex = new RegExp( alphabets[i], 'g' );
            count = speech.match(regex).length;
            counterObject[alphabets[i]] = count;
        }
    }
    console.log(counterObject);
};

const speech = "We will continue to support initiatives aimed at addressing the challenges of our times: global and regional crises and conflicts, terrorism, trans-border crime, climate change, human rights, gender equality, development, poverty and inequality within and between nations, etc. In this context, we are working hard to achieve both the AU 2063 Agenda for socio-economic transformation of our continent; and the UN 2030 Agenda for sustainable development, which together aim at addressing these challenges"
window.onload = alphabetCounter(speech);