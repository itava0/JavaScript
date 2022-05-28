//Async Await

async function playerStart() {
  await movePlayer(100, 'Left');
}

async function fetchUsers() {
  const resp = await fetch('hahdhhd')
  const data = await resp.json();
}