let morning = document.querySelector('.sun_sky .morning')
morning.innerHTML= morning.textContent.split('').map((char,i)=>
    `<span style='animation-delay: calc(0.2s*${i+1}),0s;'>${char}</span>`
 ).join('')

 let night = document.querySelector('.moon_sky .night')
 night.innerHTML= night.textContent.split('').map((char,i)=>
     `<span style='animation-delay: calc(0.2s*${-i-1}),0s;'>${char}</span>`
  ).join('')