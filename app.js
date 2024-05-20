let quote=document.getElementById('quote');

       function randomQoute ()
       {
       fetch('https://api.quotable.io/random')
       .then(res => res.json())
       .then((res)=>{
       let data=res.content
       quote.innerHTML=data
       })
       .catch((rej)=>{
        console.log(rej)
       })
       }
