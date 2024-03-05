const blanks = {
    'blank 1': ['The Whispering Woods', 'The Veiled Vale', 'The Enchanted Glade', 'The Mystic Grove', 'The Shadowed Thicket'],
    'blank 2': ['ancient spirits', 'elusive creatures', 'forgotten guardians', 'mystical beings', 'spectral entities'],
    'blank 3': ['hidden knowledge', 'lost treasures', 'ancient artifacts', 'forbidden secrets', 'sacred relics'],
    'blank 4': ['adventurer', 'wanderer', 'explorer', 'hero', 'seeker'],
    'blank 5': ['Aria', 'Cedric', 'Elysia', 'Finnian', 'Isolde'],
    'blank 6': ['a trusty blade', 'a mystical talisman', 'an enchanted compass', 'a potent potion', 'a sacred amulet'],
    'blank 7': ['whispers of the ancients', 'murmurs of the forest', 'echoes of the past', 'songs of the trees', 'sighs of the wind'],
    'blank 8': ['moonlit glade', 'twilight shadows', 'flickering firelight', 'dappled sunlight', 'ethereal mist'],
    'blank 9': ['shadowy figure', 'spectral guardian', 'ancient sentinel', 'guardian spirit', 'mysterious entity'],
    'blank 10': ['bravery', 'cunning', 'intuition', 'wisdom', 'resilience'],
    'blank 11': ['magic', 'skill', 'strategy', 'determination', 'quick reflexes'],
    'blank 12': ['strike', 'incantation', 'flourish', 'maneuver', 'spell'],
    'blank 13': ['ethereal', 'shimmering', 'radiant', 'golden', 'celestial'],
    'blank 14': ['ancient altar', 'sacred grove', 'mystical fountain', 'enchanted tree', 'ethereal shrine'],
    'blank 15': ['dancing spirits', 'shimmering orbs', 'flickering lights', 'whispering winds', 'elusive sprites'],
    'blank 16': ['hidden power', 'dormant magic', 'ancient enchantment', 'mystical energy', 'forgotten spell'],
    'blank 17': ['guardians of the forest', 'spectral protectors', 'ancient sentinels', 'ethereal wardens', 'mystical defenders'],
    'blank 18': ['determination', 'resolve', 'valor', 'courage', 'fortitude'],
    'blank 19': ['confronted', 'challenged', 'vanquished', 'overcame', 'defeated'],
    'blank 20': ['adulation', 'reverence', 'acclaim', 'recognition', 'celebration'],
    'blank 21': ['heroic', 'valiant', 'daring', 'noble', 'gallant'],
    'blank 22': ['and bravery', 'in the face of danger', 'and selflessness', 'and honor', 'and valor'],
}

const getRandomElement = (array) => {
   return array[Math.floor(Math.random()* array.length)];
}

let story = `Title: The Secret of the Whispering Woods 
    Once upon a time, in a realm shrouded in mystery, there existed a forest known as ${getRandomElement(blanks['blank 1'])}. 
    Legends spoke of ${getRandomElement(blanks['blank 2'])} that lingered within its depths, and rumors whispered of ${getRandomElement(blanks['blank 3'])} concealed beneath its ancient trees. 
    Many dared to enter its shadowed embrace, but few returned with tales to tell.
    One fateful day, a courageous ${getRandomElement(blanks['blank 4'])} named ${getRandomElement(blanks['blank 5'])} decided to embark on a quest to unlock the secrets of the forest. 
    Armed with ${getRandomElement(blanks['blank 6'])}, ${getRandomElement(blanks['blank 5'])} ventured forth into the ${getRandomElement(blanks['blank 1'])}.
    As ${getRandomElement(blanks['blank 5'])} journeyed deeper into the woods, the ${getRandomElement(blanks['blank 7'])} seemed to speak, and shadows danced in the ${getRandomElement(blanks['blank 8'])} as if alive. 
    Suddenly, a ${getRandomElement(blanks['blank 9'])} materialized, blocking ${getRandomElement(blanks['blank 5'])}'s path.
    Thinking quickly, ${getRandomElement(blanks['blank 5'])} relied on ${getRandomElement(blanks['blank 10'])} and ${getRandomElement(blanks['blank 11'])} to overcome the obstacle. 
    With a swift ${getRandomElement(blanks['blank 12'])}, ${getRandomElement(blanks['blank 5'])} vanquished the ${getRandomElement(blanks['blank 9'])} and pressed on.
    After what felt like an eternity, ${getRandomElement(blanks['blank 5'])} stumbled upon a glade bathed in ${getRandomElement(blanks['blank 13'])} light. 
    At its heart stood a majestic ${getRandomElement(blanks['blank 14'])}, surrounded by ${getRandomElement(blanks['blank 15'])}.
    Approaching cautiously, ${getRandomElement(blanks['blank 5'])} discovered the source of the forest's enchantment —a ${getRandomElement(blanks['blank 16'])} guarded by ${getRandomElement(blanks['blank 17'])}. 
    With unwavering ${getRandomElement(blanks['blank 18'])}, ${getRandomElement(blanks['blank 5'])} faced the guardians and ${getRandomElement(blanks['blank 19'])} to liberate the ${getRandomElement(blanks['blank 16'])} from its ancient slumber.
    Emerging triumphant, ${getRandomElement(blanks['blank 20'])} awaited—a hero hailed for ${getRandomElement(blanks['blank 21'])} courage and ${getRandomElement(blanks['blank 22'])}. 
    And so, ${getRandomElement(blanks['blank 5'])} returned home, the mysteries of ${getRandomElement(blanks['blank 1'])} and the power of ${getRandomElement(blanks['blank 16'])} forever woven into the tapestry of legend.`;

console.log(story)