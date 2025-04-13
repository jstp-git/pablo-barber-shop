
// async function fetchdata(){
//     try{
// const response= await fetch("http://localhost:5000/reviews")
// if (!response.ok){
//     throw new Error("could not find")

    
// }
// console.log(response)
// const reviews = await response.json();
// console.log(data)
//     }

//     catch(error){
// console.error(error)
//     }
// }



fetch("http://localhost:3000/reviews")
.then(response => {
    console.log(response)
    return response.json();
})
.then(data =>{
    // console.log(data)
    // data.forEach(  reviews =>{
    //     const markup = `<p>${reviews.text}</p>`;

    //    document.getElementById("review-text").insertAdjacentHTML(`beforeend`,markup);
       
        
       
    //     // data.forEach(reviews =>{
    //         const markup2 = `<p>${reviews.stars}</p>`;
    //  document.getElementById("review-stars").insertAdjacentHTML(`beforeend`,markup);
    //     })
    // } );

// });
const container= document.getElementById("reviews-container");
data.forEach( reviews=> {
    const card = document.getElementById("div")
    card.classList.add(reviews-card);

    const text = document.createElement("p")
    text.textContent="review-text";
    card.appendChild(text);
    container.appendChild(card)
})
})




//got them to display but now need to render only 
//one at a time to make it like a review card 