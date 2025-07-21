// Animation texte alterné sous le titre
const switchText = document.getElementById('switchText');
const texts = ['Nombres → Lettres', '@HOUNNAHIN'];
let textIndex = 0;
setInterval(() => {
  // Animation fondu
  switchText.style.opacity = 0;
  setTimeout(() => {
    textIndex = (textIndex + 1) % texts.length;
    switchText.textContent = texts[textIndex];
    switchText.style.opacity = 1;
  }, 400);
}, 2000);

// Liste des mots de base
const UNITS = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
const TEENS  = ['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
const TENS   = ['', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'];

// Convertit un nombre entier 0-999
function convertLessThan1000(n) {
  if (n < 10) return UNITS[n];
  if (n < 20) return TEENS[n - 10];
  if (n < 100) {
    let t = Math.floor(n / 10);
    let u = n % 10;
    // Gestion des "et un" (21, 31, 41, 51, 61, 71)
    if ((t === 2 || t === 3 || t === 4 || t === 5 || t === 6) && u === 1) {
      return TENS[t] + ' et un';
    }
    // 71, 81, 91
    if (t === 7 && u === 1) return 'soixante et onze';
    if (t === 9 && u === 1) return 'quatre-vingt-onze';
    // 70-79, 90-99
    if (t === 7) return 'soixante-' + TEENS[u];
    if (t === 9) return 'quatre-vingt-' + TEENS[u];
    // 80
    if (t === 8 && u === 0) return 'quatre-vingts';
    // 81, 91
    if (t === 8 && u === 1) return 'quatre-vingt-un';
    if (t === 8) return 'quatre-vingt-' + UNITS[u];
    return TENS[t] + (u ? '-' + UNITS[u] : '');
  }
  let h = Math.floor(n / 100);
  let rest = n % 100;
  let hundred = '';
  if (h === 1) {
    hundred = 'cent';
  } else {
    hundred = UNITS[h] + ' cent';
  }
  // Accord de "cent" : prend un "s" seulement si pas suivi d'autre nombre
  if (rest === 0 && h > 1) hundred += 's';
  if (rest === 0) return hundred;
  return hundred + ' ' + convertLessThan1000(rest);
}

// Convertit n'importe quel nombre entier
function integerToWords(n) {
  if (n === 0) return 'zéro';
  // Échelles étendues jusqu'à décillion
  const scales = [
    '', 'mille', 'million', 'milliard', 'billion', 'billiard',
    'trillion', 'trilliard', 'quadrillion', 'quadrilliard',
    'quintillion', 'quintilliard', 'sextillion', 'sextilliard',
    'septillion', 'septilliard', 'octillion', 'octilliard',
    'nonillion', 'nonilliard', 'décillion', 'décilliard'
  ];
  let parts = [];
  let scaleIndex = 0;
  while (n > 0) {
    let chunk = n % 1000;
    if (chunk) {
      let chunkWords = convertLessThan1000(chunk);
      // "un mille" -> "mille"
      if (scaleIndex === 1 && chunk === 1) {
        chunkWords = 'mille';
      }
      // Pluriels pour million, milliard, etc.
      if (scaleIndex > 1) {
        chunkWords += ' ' + scales[scaleIndex];
        if (chunk > 1) chunkWords += 's';
      } else if (scaleIndex === 1 && chunk > 1) {
        chunkWords += ' ' + scales[scaleIndex];
      }
      parts.unshift(chunkWords);
    }
    n = Math.floor(n / 1000);
    scaleIndex++;
  }
  return parts.join(' ');
}

// Fonction d'affichage dynamique du résultat
function updateResult() {
  const val = document.getElementById('numberInput').value.trim().replace(',', '.');
  const resultDiv = document.getElementById('result');
  const copyBtn = document.getElementById('copyBtn');
  const speakBtn = document.getElementById('speakBtn');
  // Par défaut, masquer l'icône copie et désactiver le bouton vocal
  copyBtn.classList.add('btn-copy');
  speakBtn.classList.add('btn-speak');
  speakBtn.disabled = true;
  speakBtn.classList.remove('animate-pulse');
  if (!val) {
    resultDiv.textContent = 'Le résultat apparaîtra ici…';
    return;
  }
  if (!/^-?\d+(\.\d{1,2})?$/.test(val)) {
    resultDiv.textContent = 'Veuillez saisir un nombre valide.';
    return;
  }
  const num = parseFloat(val);
  if (num === 0) {
    resultDiv.textContent = 'zéro';
    copyBtn.classList.remove('btn-copy');
    speakBtn.classList.remove('btn-speak');
    speakBtn.disabled = false;
    return;
  }

  const sign = num < 0 ? 'moins ' : '';
  const parts = Math.abs(num).toFixed(2).split('.');
  const intPart = integerToWords(parseInt(parts[0]));
  let result = sign + intPart;
  if (parts[1] && parts[1] !== '00') {
    result += ' virgule ' + parts[1].split('').map(d => UNITS[parseInt(d)]).join(' ');
  }
  resultDiv.textContent = result;
  // Afficher les boutons seulement si un vrai résultat
  copyBtn.classList.remove('btn-copy');
  speakBtn.classList.remove('btn-speak');
  speakBtn.disabled = false;
}

// Affichage dynamique lors de la saisie
document.getElementById('numberInput').addEventListener('input', updateResult);

// Gestion de la copie via l'icône
document.getElementById('copyBtn').addEventListener('click', () => {
  const resultText = document.getElementById('result').textContent;
  if (resultText && resultText.trim() !== '' && resultText !== 'Le résultat apparaîtra ici…') {
    navigator.clipboard.writeText(resultText).then(() => {
      const icon = document.getElementById('copyIcon');
      icon.classList.remove('text-emerald-500');
      icon.classList.add('text-green-600');
      icon.innerHTML = '<path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />';
      setTimeout(() => {
        icon.className = 'h-6 w-6 text-emerald-500';
        icon.innerHTML = '<rect x="9" y="9" width="10" height="12" rx="2" stroke="currentColor" stroke-width="2" fill="none"/><rect x="5" y="3" width="10" height="12" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>';
      }, 1200);
    });
  }
});

// Lecture vocale du résultat
const speakBtn = document.getElementById('speakBtn');
let utterance = null;
let isSpeaking = false;
speakBtn.addEventListener('click', () => {
  const resultText = document.getElementById('result').textContent;
  if (!resultText || resultText.trim() === '' || resultText === 'Le résultat apparaîtra ici…' || speakBtn.disabled) return;
  if (!('speechSynthesis' in window)) {
    alert('La synthèse vocale n\'est pas supportée sur ce navigateur.');
    return;
  }
  speakBtn.disabled = true;
  speakBtn.classList.add('animate-pulse', 'opacity-60');
  isSpeaking = true;
  utterance = new window.SpeechSynthesisUtterance(resultText);
  utterance.lang = 'fr-FR';
  utterance.rate = 1;
  utterance.onend = utterance.onerror = () => {
    speakBtn.disabled = false;
    speakBtn.classList.remove('animate-pulse', 'opacity-60');
    isSpeaking = false;
  };
  window.speechSynthesis.speak(utterance);
});

// --- Tests unitaires simples ---
function runTests() {
  const tests = [
    [0, 'zéro'],
    [1, 'un'],
    [11, 'onze'],
    [21, 'vingt et un'],
    [71, 'soixante et onze'],
    [80, 'quatre-vingts'],
    [81, 'quatre-vingt-un'],
    [100, 'cent'],
    [101, 'cent un'],
    [200, 'deux cents'],
    [201, 'deux cent un'],
    [1000, 'mille'],
    [2000, 'deux mille'],
    [1000000, 'un million'],
    [2000000, 'deux millions'],
    [1000000000, 'un milliard'],
    [2000000000, 'deux milliards'],
    [1000000000000, 'un billion'],
    [2000000000000, 'deux billions'],
    [1000000000000000, 'un billiard'],
    [1000000000000000000, 'un trillion'],
    [1000000000000000000000, 'un trilliard'],
    [1000000000000000000000000, 'un quadrillion'],
    [1000000000000000000000000000, 'un quadrilliard'],
    [1000000000000000000000000000000, 'un quintillion'],
    [1000000000000000000000000000000000, 'un quintilliard'],
  ];
  let ok = 0, fail = 0;
  for (const [input, expected] of tests) {
    const got = integerToWords(input);
    if (got === expected) {
      ok++;
    } else {
      fail++;
      console.error(`Test raté: ${input} → ${got} (attendu: ${expected})`);
    }
  }
  console.log(`Tests passés: ${ok} réussis, ${fail} échecs.`);
}
// Décommentez la ligne suivante pour lancer les tests dans la console:
// runTests();

// PWA Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
