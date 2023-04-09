  function getPic() {
     
    const url = (`https://api.nasa.gov/planetary/apod?&api_key=hiIemCYxZCcVYkNn9Dfh499ozILNEwRKrT54fvVD`)


    fetch (url)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          document.querySelector ('img').src = data.url;
          document.querySelector('h3').textContent = data.explanation;
          document.querySelector('h2').textContent = data.title;
        }) 
        
        .catch(err => {
          console.log('error ${err}')
      })
  }
  document.querySelector('button').addEventListener('click' , getPic);