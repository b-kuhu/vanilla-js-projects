let clickedRatingVal;

document.addEventListener('DOMContentLoaded',  () => {
    // Get all the rating buttons
    const ratingButtons = document.querySelectorAll('li');
  
    // Add click event listeners to each button using forEach
    ratingButtons.forEach((button,index,buttonsArray) => {
      button.addEventListener('click', () =>{
        // Reset the color for all buttons using forEach
        ratingButtons.forEach(function (btn) {
          btn.style.backgroundColor = '';
        });
  
        //change the color of the button before clicked button
        if(index>0){
           buttonsArray[index-1].style.backgroundColor = 'hsl(216, 12%, 54%)';
           buttonsArray[index-1].style.color = 'white';
        }
        // Change the color of the clicked button
        button.style.backgroundColor = 'hsl(25, 97%, 53%)';
        button.style.color = 'white';
        clickedRatingVal = button.innerHTML;
      });
    });
    //on clicking the submit button, the thank you card will appear
    const submitBtn = document.querySelector('.submit');
    const ratingState = document.querySelector('.rating-state');
    const thankState = document.querySelector('.thanks-state');
    const ratingMsg = document.querySelector('#rating-message');
    //adding click event lister for submit button
    submitBtn.addEventListener('click',()=>{
        if(ratingState.style.display != 'block'){
            console.log(clickedRatingVal);
            //rating card will not display and thank you card will display
            ratingState.style.display = 'none';
            thankState.style.display = 'block';
            //shows the rating selected by the user
            ratingMsg.innerHTML = `You selected ${clickedRatingVal} out of 5`; 
        }
    })

  });
  