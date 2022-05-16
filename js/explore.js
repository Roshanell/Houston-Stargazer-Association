
document.querySelector('button').addEventListener('click', getFetch)

function removeIt() {
  const element = document.getElementById("imageSpace");
  element.remove();
}

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)

  const url = `https://api.nasa.gov/planetary/apod?api_key=WZ0RWVnBV9I77tx9tof8SxFGz4qDdygMgvjwLS54&date=${choice}`

  fetch(url)
      .then(res => res.json()) 
      .then(data => {
        console.log(data)
        if (data.media_type === 'image'){
          document.getElementById('imageSpace').src = data.url

      }else if (data.media_type=== 'video'){
        document.querySelector('iframe').src = data.url
      }
        
        document.querySelector('h3').innerText = data.explanation

      })
      .catch(err => {
          console.log(`error ${err}`)
      });

      
}

// gets the fetch