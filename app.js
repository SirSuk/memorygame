//Grab acouple of things

const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives= 8

//Link text
playerLivesCount.textContent = playerLives;

// Generate the object
const getData = () => [
    {imgSrc: './assets/toro.webp', name: 'toro'},
    {imgSrc: './assets/delfin.jpg', name: 'delfin  '},
    {imgSrc: './assets/cerezas.jpg', name: 'cerezas'},
    {imgSrc: './assets/coliflor.jpeg', name: 'coliflor'},
    {imgSrc: './assets/donuts.jpeg', name: 'donuts'},
    {imgSrc: './assets/flor.jpg', name: 'flor  '},
    {imgSrc: './assets/cunao.jpg', name: 'cunao'},
    {imgSrc: './assets/pi.jpg', name: 'pi'},
    {imgSrc: './assets/toro.webp', name: 'toro'},
    {imgSrc: './assets/delfin.jpg', name: 'delfin  '},
    {imgSrc: './assets/cerezas.jpg', name: 'cerezas'},
    {imgSrc: './assets/coliflor.jpeg', name: 'coliflor'},
    {imgSrc: './assets/donuts.jpeg', name: 'donuts'},
    {imgSrc: './assets/flor.jpg', name: 'flor  '},
    {imgSrc: './assets/cunao.jpg', name: 'cunao'},
    {imgSrc: './assets/pi.jpg', name: 'pi'},
    
   
]

//Randomize
const randomize = () => {
   
    const cardData = getData()
    cardData.sort(() => Math.random() - 0.5);
    console.log(cardData)
    return cardData;
    console.log("rad")
}


//Card Generate Function

const cardGenerator= () => {
    const cardData = randomize();
    console.log("randomize")
    // Generate the HTML


    cardData.forEach((item) => {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back =  document.createElement('div');
        card.classList = 'card'
        face.classList = 'face'
        back.classList = 'back';
        //Attach info to cards
        face.src=item.imgSrc;
        card.setAttribute("name", item.name)
        

        //Attach cards to section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle("toggleCard")
            checkCards(e)
        }
        )
    })
    

}

// Check cards

const checkCards = (e) => {
    console.log("cheking")
    const clickedCard = e.target;
    clickedCard.classList.add("flipped")
    const flippedCards= document.querySelectorAll(".flipped")

   // Logic
   if(flippedCards.length === 2) {
    if( flippedCards[0].getAttribute('name') === 
        flippedCards[1].getAttribute('name')
        ) {
        console.log("match")
        flippedCards.forEach((card) => {
            card.classList.remove("flipped");
            card.style.pointerEvents = 'none';
        });
    } else {
        console.log("wrong")
        flippedCards.forEach((card) => {
            card.classList.remove("flipped");
            setTimeout(() => card.classList.remove("toggleCard"), 1000);
        });
        console.log("mal")
        playerLives--;
        playerLivesCount.textContent = playerLives;

        if(playerLives === 0) {
            restart();
      
        }
    }
   }
}

//Restart
const restart = () => {
    let cardData = randomize();
    
    let faces = document.querySelectorAll("face");
    let cards = document.querySelectorAll(".card");
    cardData.forEach((item,index) => {
        cards[index].classList.remove('toggleCard');
        // //Randomize
        cards[index].style.pointerEvents = "all"
        faces[index].src = item.imgSrc;
        cards[index].setAttribute("name", item.name)
        
    })
    playerLives = 8;
    playerLivesCount.textContent = playerLives;
}

cardGenerator()