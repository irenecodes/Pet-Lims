// Brent advised and Asaf approved to take different approach from running loops as described in pseudo code

const petsByCity = {
    // remember to add either option
    Toronto: {
        cat: 6,
        dog: 3
    },
    Vaughan: {
        cat: 3,
        dog: 3
    },
    RichmondHill: {
        cat:6,
        dog:4
    },
    Markham: {
        cat: 2, 
        // cat can be up to 4 but based on total # of pets =4
        dog: 2
    },
    Brampton: {
        cat: 6,
        dog: 3
    }
}

$(function () {
    // creating an event
    $(`form`).on(`submit`, function (e) {
        e.preventDefault();

        // get choices user made

        // gets user array
        const animalInput = $(`input[name=pet]:checked`);
        // console.log(`You choice is `, animalInput);

        // gets user choice
        const animal = animalInput.val();
        // console.log(`chosen pet`, animal);

        const cityInput = $(`input[name=city]:checked`);
        // console.log(`Your city is`, cityInput);

        const city = cityInput.val();
        console.log(`the city is`, city);

        // look up answer based on choices
        const cityInfo = petsByCity[city];
        // console.log(city);

        // gets answer of pet amount based on city
        const answer = cityInfo[animal];

        // bracket notation w/ variable to grab the value


        //display answer for user 
  

        $(`.results`).html(`<h3>Based on your choice...you can get a maximum of ${answer} ${animal}s! </h3>`);
        // using as opposed to append?
    


    });
    

    $(`.refresh`).click(function(){
        $(`.results`).empty();
    });

    

});

