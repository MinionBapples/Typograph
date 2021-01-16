window.addEventListener('load', init);

// Globals

// Available Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1
};

// To change level
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highscoreDisplay = document.querySelector('#highscore');

const words = [
  'abject',
  'aberration',
  'abjure',
  'abnegation',
  'abrogate',
  'abscond',
  'abstruse',
  'accede',
  'accost',
  'accretion',
  'acumen',
  'adament',
  'admonish',
  'adumbrate',
  'adverse',
  'advocate',
  'affluent',
  'aggrandize',
  'alacrity',
  'alias',
  'ambivalent',
  'amenable',
  'amorphous',
  'anachronistic',
  'anathema',
  'annex',
  'antediluvian',
  'antiseptic',
  'apathetic',
  'antithesis',
  'apocryphal',
  'approbation',
  'arbitrary',
  'arboreal',
  'arcane',
  'archetypal',
  'arrogate',
  'ascetic',
  'aspersion',
  'assiduous',
  'atrophy',
  'bane',
  'bashful',
  'beguile',
  'bereft',
  'blandishment',
  'bilk',
  'bombastic',
  'cajole',
  'callous',
  'calumny',
  'camaraderie',
  'candor',
  'capitulate',
  'carouse',
  'carp',
  'caucus',
  'cavort',
  'circumlocution',
  'circumscribe',
  'circumvent',
  'clamor',
  'cleave',
  'cobbler',
  'cogent',
  'cognizant',
  'commensurate',
  'complement',
  'compunction',
  'concomitant',
  'conduit',
  'conflagration',
  'congruity',
  'connive',
  'consign',
  'constituent',
  'construe',
  'contusion',
  'contrite',
  'contentious',
  'contravene',
  'convivial',
  'corpulence',
  'covet',
  'cupidity',
  'dearth',
  'debacle',
  'debauch',
  'debunk',
  'defunct',
  'demagogue',
  'denigrate',
  'derivative',
  'despot',
  'diaphanous',
  'didactic',
  'dirge',
  'disaffected',
  'discomfit',
  'disparate',
  'dispel',
  'disrepute',
  'divisive',
  'dogmatic',
  'dour',
  'duplicity',
  'duress',
  'eclectic',
  'edict',
  'ebullient',
  'egregious',
  'elegy',
  'elicit',
  'embezzlement',
  'emend',
  'emollient',
  'empirical',
  'emulate',
  'enervate',
  'enfranchise',
  'engender',
  'ephemeral',
  'epistolary',
  'equanimity',
  'equivocal',
  'espouse',
  'evanescent',
  'evince',
  'exacerbate',
  'exhort',
  'execrable',
  'exigent',
  'expedient',
  'expiate',
  'expunge',
  'extraneous',
  'extol',
  'extant',
  'expurgate',
  'fallacious',
  'fatuous',
  'fetter',
  'flagrant',
  'foil',
  'forbearance',
  'fortuitous',
  'fractious',
  'garrulous',
  'gourmand',
  'grandiloquent',
  'gratuitous',
  'hapless',
  'hegemony',
  'heterogenous',
  'iconoclast',
  'idiosyncratic',
  'impecunious',
  'impetuous',
  'impinge',
  'impute',
  'inane',
  'inchoate',
  'incontrovertible',
  'incumbent',
  'inexorable',
  'inimical',
  'injunction',
  'inoculate',
  'insidious',
  'instigate',
  'insurgent',
  'interlocutor',
  'intimation',
  'inure',
  'invective',
  'intransigent',
  'inveterate',
  'irreverence',
  'knell',
  'laconic',
  'largesse',
  'legerdemain',
  'libertarian',
  'licentious',
  'linchpin',
  'litigant',
  'maelstrom',
  'maudlin',
  'maverick',
  'mawkish',
  'maxim',
  'mendacious',
  'modicum',
  'morass',
  'mores',
  'munificent',
  'multifarious',
  'nadir',
  'negligent',
  'neophyte',
  'noisome',
  'noxious',
  'obdurate',
  'obfuscate',
  'obstreperous',
  'officious',
  'onerous',
  'ostensible',
  'ostracism',
  'palliate',
  'panacea',
  'paradigm',
  'pariah',
  'partisan',
  'paucity',
  'pejorative',
  'pellucid',
  'penchant',
  'penurious',
  'pert',
  'pernicious',
  'pertinacious',
  'phlegmatic',
  'philanthropic',
  'pithy',
  'platitude',
  'plaudit',
  'plenitude',
  'plethora',
  'portent',
  'potentate',
  'preclude',
  'predilection',
  'preponderance',
  'presage',
  'probity',
  'proclivity',
  'profligate',
  'promulgate',
  'proscribe',
  'protean',
  'prurient',
  'puerile',
  'pugnacious',
  'pulchritude',
  'punctilious',
  'quaint',
  'quixotic',
  'quandary',
  'recalcitrant',
  'redoubtable',
  'relegate',
  'remiss',
  'reprieve',
  'reprobate',
  'rescind',
  'requisition',
  'rife',
  'sanctimonious',
  'sanguine',
  'scurrilous',
  'semaphore',
  'serendipity',
  'sobriety',
  'solicitous',
  'solipsism',
  'spurious',
  'staid',
  'stolid',
  'subjugate',
  'surfeit',
  'surreptitious',
  'swarthy',
  'tangential',
  'tirade',
  'tome',
  'toady',
  'torpid',
  'travesty',
  'trenchant',
  'trite',
  'truculent',
  'turpitude',
  'ubiquitous',
  'umbrage',
  'upbraid',
  'utilitarian',
  'veracity',
  'vestige',
  'vicissitude',
  'vilify',
  'virtuoso',
  'vitriolic',
  'vituperate',
  'vociferous',
  'wanton',
  'wily',
  'winsome',
  'yoke',
  'zephyr'
];

// Initialize Game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  
  // Highscore based on score value for Session Storage
  if (typeof sessionStorage['highscore'] === 'undefined' || score > sessionStorage['highscore']) {
    sessionStorage['highscore'] = score;
  } else {
    sessionStorage['highscore'] = sessionStorage['highscore'];
  }

  // Prevent display of High Score: -1
  if (sessionStorage['highscore'] >= 0) {
  highscoreDisplay.innerHTML = sessionStorage['highscore'];
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}
