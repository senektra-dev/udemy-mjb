// Section 14 - NBA Scores Chart - Lesson 150
// NBA Scores Chart Pt1.

const ulParent = document.createElement('ul');
for (let game of warriorsGames) {
  const {team:hTeam, points: hPoints} = game.homeTeam;
  const {team:aTeam, points: aPoints} = game.awayTeam;
  
  const gameLi = document.createElement('li');
  const scoreLine = aPoints > hPoints ? `<b>${aPoints}</b> - ${hPoints}` : `${aPoints} - <b>${hPoints}</b>`;
  gameLi.innerHTML = `${aTeam} @ ${hTeam} ${scoreLine}`;
  
  const warriors = hTeam === 'Golden State' ? game.homeTeam : game.awayTeam;
  gameLi.classList.add(warriors.isWinner ? 'win' : 'loss');
  ulParent.append(gameLi);
}

document.body.prepend(ulParent);


