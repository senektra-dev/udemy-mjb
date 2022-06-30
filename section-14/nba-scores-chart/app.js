// Section 14 - NBA Scores Chart - Lesson 151
// NBA Scores Chart Refactor 

function createScoreLine(points1, points2) {
  return points1 > points2 ? `<b>${points1}</b> - ${points2}` : `${points1} - <b>${points2}</b>`;
}

function createLiInnerHTML(game) {
  const {team:homeTeamName, points:homeTeamPoints} = game.homeTeam;
  const {team:awayTeamName, points:awayTeamPoints} = game.awayTeam;

  const scoreLine = createScoreLine(homeTeamPoints, awayTeamPoints);
  return `${awayTeamName} @ ${homeTeamName} ${scoreLine}`;
} 

function isWinner({homeTeam, awayTeam}, targetTeam) {
  return homeTeam.team === targetTeam ? homeTeam.isWinner : awayTeam.isWinner;
}

function createTable(games, targetTeamName) {
  const ulParent = document.createElement('ul');
  for (let game of games) {
    const gameLi = document.createElement('li');
    gameLi.innerHTML = createLiInnerHTML(game);
    gameLi.classList.add(isWinner(game, targetTeamName) ? 'win' : 'loss'); 
    ulParent.append(gameLi);
  }

  return ulParent;
}

document.body.prepend(createTable(warriorsGames, 'Golden State'));
document.body.prepend(createTable(warriorsGames, 'Houston'));
