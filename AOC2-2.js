const wins = {
  'A':'Z',
  'X':'C',
  'B':'X',
  'Y':'A',
  'C':'Y',
  'Z':'B'
}

let input = `B Y
A Z
C Z
A Y
A Y
B Y
C Y
A Y
B Y
B Y
A Y
B Z
B Y
A Y
C Y
B X
B Y
B Y
B Y
C Y
B Y
A Y
B Y
A Y
B Y
C Y
A Y
B X
B Y
B Y
B X
B Y
C Y
B Y
C Z
A X
B Y
B Y
A Z
B X
C Y
C Z
B Y
B Y
A Y
B X
B Y
B Y
B X
B Y
C Y
A Y
B Y
C Y
C X
B X
B X
A Z
C Y
B Y
C Z
B X
B Y
B Y
B X
B Y
B Z
B Y
B Y
B X
B Y
B X
C X
B Y
B X
A Y
B Y
B X
B Y
A Y
B X
B X
B Y
A Y
B Y
B Y
B Y
C Z
B X
B Y
B X
B X
B Y
B X
C Z
B Y
B Y
B Y
B Y
B Y
B X
A Y
B Y
C Y
C Z
A Y
B Y
A Y
C Z
B Y
B X
B Y
C X
A Y
B X
B Y
B X
B X
B X
A Y
C Z
B Y
A Y
B X
A Y
B Y
A Y
B X
B Y
B Y
B Y
B X
B X
C Z
B Z
B Y
B X
C Y
C Y
C Z
C X
C Y
B Y
B X
A Y
A Y
B X
C Z
B X
C X
B X
B Y
B Y
A Z
B Z
C Y
C Y
B Y
B Y
C Y
C Y
C Z
B Y
B X
B Y
B Y
C Y
B Y
B Y
B Y
B Y
B Y
C Y
A Z
B X
B Y
C Z
B Y
C Y
B Y
B X
C Y
B Y
B X
C Y
B Y
B Y
B Y
A Y
B X
B X
B Y
B Y
B X
C Z
B Y
A Y
A Y
B X
C X
A Y
B X
B X
B Y
B Y
A Y
C Y
C Z
C Y
B Y
B Y
A Y
A Y
A Y
B Y
B Y
A X
B Y
B Y
B X
B X
C Z
B X
B X
A Y
A Y
A Y
B Y
B Y
C Y
B X
A Y
B Y
C Z
B X
A Y
C Z
A Y
B X
C Y
B Y
B Y
C Y
B X
B X
B Y
B Y
B Y
B Y
A Y
B X
B X
B Y
A Y
B Z
A Y
B Y
C Y
B Y
B Y
B X
C Z
B Y
B Y
B X
B X
C Z
B Y
A Y
B Y
B X
C Y
A Z
C Z
B Y
B Y
B X
C Y
C X
B X
C Y
C Z
B X
B Y
B Y
C Z
B X
C X
A Z
A Y
B X
C X
B Y
A Z
A Z
A Y
B X
A Y
B Y
B Y
C Z
B X
A Z
B Y
B X
A Y
B Y
C Y
B Y
B X
B X
A Z
B Y
B Y
C Z
B X
B X
B Y
C Z
B X
B X
C Z
B X
A Y
B X
C Z
A Y
C X
B Y
B X
B Y
B Y
C Y
B X
A Z
A Y
B X
A Z
B X
B Y
B Y
A Z
C X
B Y
B Y
B Y
A Z
B Y
B X
C Y
C Z
B X
B Y
B Y
B Y
C Y
A Z
B Y
C Z
C X
B Y
C Y
B Y
B X
B Y
B Y
A Y
B Y
B Y
C Z
A Z
B X
C Y
B Y
B Y
B Y
A Y
A Y
B Y
A Y
B Y
A Y
B X
C Y
B Y
C X
A X
B X
A Y
C Y
B Y
A X
B X
A Z
B X
B Y
B Y
B X
B Y
B Y
B X
A Y
A Z
C Z
B Y
B Y
B X
C Z
C Z
B Y
A Y
B X
C Z
A Y
B X
B Z
B Y
B Y
B Y
B X
B Y
B X
B X
B Y
C Y
B Y
B Y
B Y
B Y
B Y
C Z
B X
B Y
B Y
B Y
B X
B X
C Y
B X
B X
C Z
B Y
B Y
B Y
B Y
B Y
C Y
B Y
B Y
B Y
B X
B Y
B X
B Y
B Y
C X
B Y
C X
B X
C Z
C X
B Y
A Y
A Z
A Y
C Y
B X
B Y
B Y
C Z
A Z
B Y
B Y
B Y
B Y
B Y
B Y
B Y
C Y
B Y
C Y
C X
B X
B X
C Z
A X
B X
B Y
A Y
B X
B Y
A Z
B Y
C Y
B X
B Y
B Y
C Y
C Y
B Y
B X
B X
B Y
B Y
B Y
B Y
C Z
B X
B Y
B Y
B X
B Y
B X
B X
B Y
B X
B Y
B Y
C Y
B X
B Y
B Y
B Y
A Y
B Y
A Z
B Y
C Y
C Y
B Y
B X
A X
B Y
A Y
B X
B Y
B Y
B X
C Y
C Z
B X
B Y
A Y
C Y
A Z
C Y
B Y
B Y
B Y
B X
C Y
B Y
B Y
A Y
A X
B Y
B X
B Y
B Y
A Y
B X
C X
B Y
A Y
C Y
B Y
B Y
A Y
C Y
A Y
C Y
B Y
B X
C Y
C Y
B Y
B Y
A Y
B Y
B Y
B Y
C Z
B X
B Y
B X
B X
A X
A Y
B Y
B X
A Z
B X
A Y
B Y
C Y
C Y
C Y
B Y
A Y
A Y
B Y
B Y
B Z
B Y
B X
A Y
B X
A Z
B Y
B Y
B X
B Y
C Y
A Z
B Y
C X
C Y
B Y
B Y
C X
B Y
A Y
A Y
C Z
B X
B X
B X
B X
B Y
C Z
B X
C Y
A Y
B Y
A Y
B Y
A Y
B Y
B Y
C Y
B Y
B Y
B X
B Y
B X
B Y
B X
B Y
A Z
C X
B X
C X
B X
A Y
C Y
B X
C Y
B X
B X
C Z
C Y
B X
B X
B X
B Y
C Y
B X
B X
A Z
B Y
B Y
C Y
B X
C Z
C Y
A Y
B X
C Y
C X
B Y
B Y
A X
B Y
B X
B Y
B X
C Y
B X
A Y
B Y
B X
B Y
B Y
B Y
C Y
C Y
C Y
C Y
B X
B Y
A Z
B X
B X
B Y
B Y
C Z
B Y
B X
B Y
B X
C Y
B Y
C Z
A X
B X
B Y
C Y
C X
B X
B X
B Y
B Y
B Y
B X
B Y
B Y
B X
C Z
B Y
B Y
B X
B X
B Y
B X
C Z
A Z
C X
C X
B Y
B X
A Y
B Y
B X
C Z
A X
B X
B Y
B X
B X
B Y
B Y
A Z
B X
A Y
A Y
B Y
B X
B Y
C Y
A Y
A Y
B X
B Z
C Y
C Y
B Y
C X
B X
C Z
C Z
B Y
C X
A Y
B Y
B X
A Y
B Y
C X
B Y
B X
B Y
C Z
A X
A Z
B Y
B Y
B X
B X
A Y
B Y
B X
B Y
C Y
B Y
B X
C Z
C X
C Y
A Y
B Y
A Y
B Y
B Y
B X
B X
A Y
A Y
B Y
B Y
B Y
A Y
B Y
B Y
B Y
C Z
A Z
C Y
B Y
B X
C Y
A Z
B X
B Y
A Z
C Y
B Y
B X
B Y
B Y
A Y
B X
B Z
B X
B X
B X
B X
B Y
B Y
B X
B Y
C Y
C X
C Z
B Y
B Y
C Y
A Y
B X
B X
B Y
B X
B Y
B Y
A Y
B Y
B Y
B Y
B Y
A Y
B X
C Z
B Y
B Y
B Y
B X
B Y
C Y
B X
B X
A Y
A X
A Y
C X
C Y
B Y
B Y
C Y
B X
B Y
B Y
C Y
B X
C X
B X
C Y
B Y
B X
B X
B Y
C X
B X
B Y
B X
B X
B Y
B X
B Y
B Y
B Y
C Y
B Y
B Y
C Z
B Y
B X
C Y
B Y
B Y
B X
B Y
A Y
B Y
A Y
B Y
B Y
A Z
B X
B Y
B Y
C Z
B X
B X
B Y
B Y
B Y
B X
C Y
C Y
B X
B Z
A X
B Z
C Y
B X
B X
A X
B Y
B X
C Z
C Y
B X
B Y
B Y
B Y
C Z
B Y
C Y
C Y
A Y
B X
B Y
B Y
B Y
A X
B Y
B Y
B X
B X
A Y
B X
B Y
A Z
B Y
C Z
B X
B Y
B Y
A Y
A Y
B Y
B Y
B Y
B Y
C Y
C Z
B X
B X
B Y
B Y
B X
B X
A X
A Y
B Y
B Y
B X
B Y
A Y
B Z
B X
C Z
B Y
B X
B X
B Y
B Y
B Y
C Y
C X
B X
C Z
B Z
B X
B X
C Z
C Y
B X
A Z
C Y
A Y
B X
B Y
C Z
B Y
B Y
B X
B Y
C Z
B Y
A Y
B X
B X
B X
C Y
B X
B Y
B X
B Y
B Y
A X
C Y
A Y
C Y
B X
B Y
B X
B X
B Y
B Y
B Y
B Y
B Y
B Z
B Y
A X
C Z
B X
A Y
C Z
B Y
C X
A Y
C Y
C X
B Y
B X
B X
C Z
C Y
A Z
C Y
A Y
B Z
A Y
B X
C X
A Z
C X
B Y
C X
B Y
A Y
A X
B X
B Y
B X
B X
B X
A Y
B Y
B X
B Y
A X
B Y
C X
B Y
B X
B Y
A Y
B X
B Y
B X
B Y
B X
B Y
B Y
A Z
A X
B Y
C Z
B Y
B Y
B Y
B Y
C Y
B Y
A Y
A Y
C Z
C Y
B Y
A Y
B Y
B X
A Y
C Y
B Y
B Y
A Y
B Y
A X
C X
B Y
B Y
C X
B Y
B X
A X
B Y
B Y
B Y
B X
B X
A Z
B Y
A X
B X
A Z
B X
C Z
B Y
B Y
B Y
B X
B Y
B Y
C Y
B Y
B X
A Y
C Z
B Y
B X
A Y
C Y
B X
B Y
B Y
C Z
A Y
B X
B Y
B X
B X
C X
B Z
C Y
B Y
B Y
B X
B Y
C Y
C Y
C Y
B Y
A Y
C Z
B Y
C X
C Y
B Y
B Y
A Z
B X
A Y
A Y
A Z
B X
A Y
C Z
B Y
B Y
A X
B X
B Y
C Z
B Y
B Y
B X
B Y
B X
B X
A X
C Y
C Y
C Y
B Y
B Y
C Z
B Y
B X
C X
B Y
C Z
B X
B Y
B Y
B Y
B X
B Y
B X
B X
B Y
B Y
B Y
B Y
B X
B Y
B Y
C Z
B X
B Y
C Y
B X
B Z
B Y
C Z
C Y
B Y
A Z
A Y
B X
B Y
C Y
A X
A Y
B X
B Y
C Z
B Y
C X
A Y
C Y
B Y
B X
B Y
B Y
B Y
B X
B Y
C X
A Z
B X
C Y
A Y
B X
B Y
B X
B Y
C X
A Y
A Y
C Z
B Y
C Y
B Y
B Y
B Y
B Y
B Y
C Y
A Y
B Y
B X
C Y
B Y
B Y
A Z
B Y
B Y
B X
B Y
B Y
B X
A Y
A Z
B X
B X
C Y
B Y
B X
C Y
B Y
A X
B X
B Y
A Z
B Y
B Y
B Y
B Y
B X
A X
B X
C Y
B Y
B Y
B X
C Y
B Y
B X
B Y
B X
A X
B Y
A Y
B X
C X
B Y
C Z
B Y
B Y
C Y
B Y
C X
B Y
B X
A Z
B Y
B X
B Y
A Y
B Y
B X
B X
B X
B Y
B Y
B Y
A Y
C X
B X
B X
C Z
B Y
A Y
A Z
A Y
B Y
B Y
B X
C X
C Y
C Z
B Y
B Y
B Y
B Y
B Y
B X
C Y
B Y
B Y
B X
B X
B Y
B Y
A Y
A Y
A Y
B X
B X
C Y
B Y
A Z
B X
C Y
B Y
B X
B Y
B Y
A Y
A Y
B Y
B Y
B X
B X
A Y
A X
A Z
C X
A Z
B X
B Y
C Y
A X
B X
C Z
B Y
C Y
A Y
C X
B Y
C X
A Y
B Y
B X
B Y
A X
B X
B X
B Y
B Y
B Y
B X
B Y
B X
B Y
A X
B Y
B X
B Y
B Y
B Y
B X
B X
A Y
B Y
A Z
B Y
B X
C Z
B X
B Y
B Y
B Y
B X
C Y
B Y
B Y
A Y
B X
B X
B Y
B Y
A Y
B Y
B X
B Y
B X
B Y
C X
C Y
B X
B X
B X
C Z
B Y
B Y
B X
B X
B Y
A Y
B Y
C X
A Y
B Y
B Y
C X
B X
A Y
C X
B Y
B X
C Z
B X
B Y
A Y
B Y
B X
C Y
A Y
B Y
A X
B Y
C Y
C X
B Y
B X
A Z
B Y
B Y
B X
B Y
B Y
B X
B Y
C Y
B X
B Y
B X
B X
C Y
B X
B X
A Y
B X
B Y
B Y
B Y
B Y
B Y
B Y
B Y
C X
B X
B X
A Y
B Y
A Y
B X
B Y
A Y
B Y
A Z
B X
A Y
C Z
A Y
A Z
B X
B Y
A Y
B X
B X
B Y
B Y
A Z
A Y
B X
C Y
B Y
B Z
C X
C X
B X
A Y
B X
B Y
B Y
A X
B Y
A X
B Y
A Y
B X
B X
A Z
A Y
A Y
C Z
B Y
B Y
C Z
B Y
B X
C Y
B Y
B X
A Y
B Y
B X
C X
C X
B Y
A Y
B Y
B Y
B Y
B X
A Y
B Y
B Y
A Y
B Y
B X
B X
C Y
C X
B Y
C X
B Y
C Y
B X
B Y
B X
B Y
B Y
B X
B Y
B Y
C Y
B X
B Y
B X
B Y
A Y
B X
A Y
B X
B Y
B X
C X
C Y
B Y
B X
B Y
B Y
B X
B Y
B Y
A Y
B Y
B X
B Y
B X
C Y
A Y
B Y
B X
B Z
B Y
B X
C Y
B Y
C Y
C Y
B X
C Z
B X
C Y
B Y
A Y
B Y
A X
B Y
B Y
B Y
B Y
A Z
B Y
B Y
A Y
C Y
B Y
B X
B Y
B X
B Y
B Z
B X
B X
B Y
B Y
B Y
B X
B Y
B X
B Y
B Y
A Y
C Z
B Y
B Y
B X
B X
B X
B Y
A Y
A Y
B X
B Y
B X
A X
B Y
B Y
C Y
A Y
C Z
A Z
A Y
B Y
B Y
B Y
B Y
B Y
C X
B Y
A Y
C X
C Y
B X
A Z
C Z
A Z
C Y
B X
B Y
B Y
B X
B Y
A Z
C Z
C X
B X
B Z
A Y
C Y
C Y
C Y
A Y
C X
B X
C Y
C Y
B Y
B Y
A Y
B Y
A Y
A Y
B X
B X
C Y
B Y
C Y
B Y
B Z
B Y
A Y
B X
B Y
A X
B X
B Y
B Y
C Y
B Y
C Z
B Z
A Y
A Y
A Y
B Y
B X
B Y
A Y
C X
B X
B Y
B X
C X
B Y
B X
B Y
B Y
B X
A Y
A Y
B Y
B Y
B Y
A Z
B Y
B Y
B Y
B Y
B Y
B X
B Y
B Y
B Y
B Y
B Y
B X
B X
B X
A X
C Y
C X
C Z
C Y
B X
B Y
A Z
B Y
C Y
B Y
B X
B Y
A Y
B X
B X
B X
C Y
B Y
B Y
B Y
B X
B Y
B Y
B Y
B Y
B Y
B Y
C X
B Y
A X
B X
C Z
B X
B Y
B X
B Y
C Y
B Y
B Y
B X
A Z
B Y
A X
B Y
C Z
C Y
B Y
B Y
B Y
C X
B Y
B Y
B X
A Y
C Z
B Y
B X
B Y
B Y
B Y
B X
B Y
B Y
B Y
C X
B X
B X
C Z
B Y
B Y
B X
A Z
B Y
B Y
C Y
C Y
A Y
C Y
A Y
B Y
B X
B Y
B X
C Y
B Y
B Y
B Y
B Y
B Y
C X
B X
B X
B Y
C X
C Z
B X
A Y
C Z
B X
B X
C Y
C Y
A Y
B Y
B X
B Y
B Y
A Z
A Z
B Y
B Y
B Y
B Y
B Y
B Y
B Y
B X
B Y
C Y
B Y
B X
A X
B Y
A Y
A Y
B Y
B Y
B X
B Y
B Y
C Y
A Y
B X
B X
B X
B Y
B Y
B Y
B Y
B X
B X
A Y
B X
B X
B X
B X
B Y
B X
A X
C Y
B Y
B Y
A Y
B Y
B X
C X
C Y
A Y
B Y
A Z
C Y
B Y
B Y
B Y
B X
B X
B Y
C X
B X
B Y
C X
B X
A Y
B Y
B X
B Y
B Y
B X
B Y
B Y
C Y
B X
B X
B X
A Y
B Y
B X
C Y
C Y
B X
A Y
B Y
C Y
B X
B Y
B X
B X
B Y
C Y
A Y
C Y
B X
C X
B Y
B X
A Y
C Y
B Y
B Y
B Y
C Z
C Y
A Z
A Y
B Y
B Y
B Y
B Y
A Y
B X
B Y
B Y
C Y
C X
B Y
B Y
B Y
B Y
B X
B X
B X
C Z
B Y
B Y
C Y
B X
B Y
B Y
A Z
B Y
C Z
B X
A Y
B X
B Y
A Y
A Z
A Z
B Z
B Y
B Y
A Y
C Z
B Y
C Z
B X
B Y
B Y
B Y
B Y
C Y
B X
B X
B X
B X
B X
B Y
A Z
A Y
B Y
B Y
B Y
C X
B Y
A Y
B Y
B Y
B X
B Y
C Y
A Z
A Y
C Y
C Z
B X
A Z
B X
B X
B Z
B Y
C Y
A Y
B Y
B Y
B X
C Z
B Y
B Y
A Z
A X
B Y
B X
B Y
B X
B X
B X
B X
A Y
B Y
A X
B X
B X
B Y
B X
B Y
B Y
A Y
B Y
C Y
A Z
A Y
B X
B Y
A Y
C X
B Y
C Y
B X
B Y
A Y
B Y
A Z
B Y
B Y
A Y
B X
C Y
B Y
B Y
C Z
B X
B Z
B Y
A Y
B Y
C X
B Y
B Y
B Y
B Y
B Y
C Z
C Z
B Y
C Y
C Z
A X
B Y
A Y
B X
B X
B Z
B X
A Y
B Y
B Y
B Y
A Z
C Y
B Y
B Y
C Y
C Z
C X
B Y
A X
B Y
A Y
C X
B Y
B Y
B Y
B Z
B X
B X
C Y
B X
B X
C Z
B Y
B X
B X
B Y
B Y
B X
C X
B Y
B Y
B X
A Y
B Y
C Y
B Y
A X
B Y
A Y
A Y
B Y
B X
B X
C X
B Y
B X
A Y
C X
A Y
B X
B Y
B Y
C Z
B X
B Y
B X
B Y
B Y
A Z
B Z
B Y
B Y
C Y
C X
C Y
C Y
B Y
B Y
B Y
C Y
A Z
A Z
B Y
B X
A Y
B X
B Y
A Y
B X
B Y
B X
C X
B Y
B Y
B X
B X
A Z
A Y
B Y
A Y
B Y
B X
B X
A Y
B X
B Y
B Y
B X
C X
C X
B Y
B Y
A Y
B X
B Y
B Y
B Y
B Y
C Y
B Y
C Z
B Y
B Y
C X
B X
B Y
B Y
B X
B X
B Y
B Y
B Y
B X
A Z
B Y
B X
C Z
B X
B Y
A Z
C Z
A Z
B X
B Y
B Y
B Y
B X
B Y
C Y
C X
C Y
A X
B Y
B Z
B Y
B Y
B Y
A Y
B X
B Y
C Y
B Y
B X
B X
B Y
B Y
B Y
C Z
B Y
B X
B Z
B X
B Y
B Y
B X
B X
A Y
B X
B X
B X
A Y
B X
B X
B Y
B X
A X
B Y
B Y
C Y
B X
B Y
B X
B X
C Y
B Y
B Y
B X
A X
C Y
C X
A Y
B X
B Y
B Y
B Y
B Y
B X
B Y
B Y
B Y
B Y
C Y
C Z
B Y
C X
B X
B Y
A Z
C X
B X
B Y
B Y
B X
B Y
B Y
B Y
B Y
B Y
B Y
B Y
C Y
B Y
C Y
B X
A Z
B Y
B X
A Y
B Y
B X
A Y
B X
B X
B X
B Y
B Y
B X
B Y
A Z
B Y
B Y
B Y
B Y
B Y
B Y
B Y
B Y
B X
B Y
B Y
A Y
B Y
B X
B X
C Y
C X
B Y
A Y
C Z
B X
B X
B Y
C Y
A Y
B Y
B Y
B X
B Y
B X
C Y
C Y
B Y
B X
B X
B Y
C Y
B Y
C Y
B Y
B Y
C Y
A Y
B Y
A Z
C X
B Y
B Y
B X
B X
C Z
B Y
B Y
B Y
B X
B X
A X
B X
B Z
B Y
B X
B X
B Y
B X
B X
B Y
B Y
B Y
B Y
A Y
B Y
B X
B Z
B Y
A X
A X
A Y
B Y
B Y
C Y
A Y
C Y
B Y
B X
B Y
B Y
B X
B Y
A Y
B Y
B Y
B X
B Y
A Y
B X
B Y`.split('\n');

let score = 0;
for (let row of input){
  row = row.split(' ')
  switch (row[1]){
    case 'X':
      score += 0;
      if (row[0]=='A') score += 3;
      if (row[0]=='B') score += 1;
      if (row[0]=='C') score += 2;
      break;
    case 'Y':
      if (row[0]=='A') score += 1;
      if (row[0]=='B') score += 2;
      if (row[0]=='C') score += 3;
      score += 3;
      break;
    case 'Z':
      if (row[0]=='A') score += 2;
      if (row[0]=='B') score += 3;
      if (row[0]=='C') score += 1;
      score+=6;
      break;
  }
}
console.log(score)