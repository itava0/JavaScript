//Async Await

async function playerStart() {
  await movePlayer(100, "Left");
}

async function fetchUsers() {
  const resp = await fetch("hahdhhd");
  const data = await resp.json();
}

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => {
        fetch(url).then((resp) => resp.json());
      })
    );
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch (err) {
    console.log("ooops", err);
  }
};

const getData2 = async function () {
  const arrayOfPromises = urls.map((url) => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};
