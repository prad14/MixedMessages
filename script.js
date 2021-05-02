let generateRandomNumber = num => {
   return Math.floor(Math.random()*num);
}


let MotivationalWords = {
    youshouldalways: ['love yourself.', 'love what you are doing.', 'fight for your dreams.', 'push forward.', 'dream big.','staying true to yourself.'],
    thereare: ['bright days ahead.', 'more opportunities coming your way.', 'good people about to enter your life.'],
    keepon: ['pushing yoursef.',"living every day to it's fullest.", 'helping others.', 'making your dreams a reality.']
};

let finalStatements = [];

for (let word in MotivationalWords) {
    let randomIndex = generateRandomNumber(MotivationalWords[word].length);

    switch (word) {
        case 'youshouldalways':
            finalStatements.push(`- You should always ${MotivationalWords[word][randomIndex]}`);
            break;
        case 'thereare':
        finalStatements.push(`- There are ${MotivationalWords[word][randomIndex]}`);
        break; 
        case 'keepon':
        finalStatements.push(`- Keep on ${MotivationalWords[word][randomIndex]}`);
        break; 
    }
}

let formatStatements = arr => {
    const statements = arr.join('\n');
    console.log(statements)
}

formatStatements(finalStatements);