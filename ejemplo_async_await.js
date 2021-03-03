async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(['Carlos','Marcos', 'Anonimo']), 1000)
  });

  let result = await promise;
  console.log(result);
  }

f();