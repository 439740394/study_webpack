axios.get('/').then(res => {
  console.log(res);
  console.log('a');
}).catch(err => {
  console.log(err);
});
