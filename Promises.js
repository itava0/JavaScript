//Promise 

const promise = new Promise((resolve, reject) => {
  if(true) {
    resolve('stuff worked');
  } else {
    reject('Error, it broke');
  }
});

promise
  .then(result => console.log(result))
  .catch(() => console.log('error!'))

  const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
  ]

  Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json());
  })).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  }).catch(() => console.log('error'));