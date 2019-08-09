axios.get('/').then(res => {
  console.log(res);
  console.log('b');
}).catch(err => {
  console.log(err);
});
