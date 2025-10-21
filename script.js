(function() {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function() {
    //dodanie loading Com2_1.2
    answer.innerHTML = "Loading...";
    //Com2_1.1
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        let html = '';
        posts.forEach(p => {
          html += `<h3>${p.title}</h3><p>${p.body}</p><hr>`;
        });
        answer.innerHTML = html;
      });
  })

  cw2.addEventListener("click", function() {

    //Com2_1.3
    answer.innerHTML = "Loading...";

    fetch('https://jsonplaceholder.typicode.com/posts/5')
      .then(response => response.json())
      .then(post => {
        const html = `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <hr>`;
        answer.innerHTML = html;
      })
  })

  cw3.addEventListener("click", function() {
    //TOD0
  })

  cw4.addEventListener("click", function() {
    //TOD0
  })
})();
