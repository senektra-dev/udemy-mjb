function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const movement = {
  down: [30, 'top'],
  up: [-30, 'top'],
  right: [30, 'left'],
  left: [-30, 'left']
}

const player = document.querySelector('#player');
const coin = document.querySelector('#coin');

window.addEventListener('keydown', function(e) {
  const action = e.key.toLowerCase().match(/(up|down|left|right)/)[0];
  const [moveAmount, direction] = [movement[action][0], movement[action][1]];

  const currentPos = extractPos(getComputedStyle(player)[direction]);

  if (action === 'left') player.style.transform = 'scaleX(-1)';
  if (action === 'right') player.style.transform = 'scaleX(1)';

  player.style[direction] = `${currentPos + moveAmount}px`;
  if (isTouching(player, coin)) moveCoin();
})

const extractPos = (pos) => {
  if (!pos) return 0;
  return parseInt(pos.slice(0, -2))
}

const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
}

moveCoin();
