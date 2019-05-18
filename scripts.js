// Brent advised and Asaf approved to take different approach from running loops as described in pseudo code

const petsByCity = {
    Toronto: {
        cat: 6,
        dog: 3,
        either: `3 dogs and 6 cats`,
        bylaw: `City of Toronto Municipal Code, Chapter 349`
    },
    Vaughan: {
        cat: 3,
        dog: 3,
        either: `3 dogs and 3 cats`,
        bylaw: `Animal Control By-law 53-2002`
    },
    RichmondHill: {
        cat:6,
        dog:4,
        either: `4 dogs and 6 cats`,
        bylaw: `Richmond Hill By-law Chapter 309, Cat Keeping and Chapter 314, Dog Licensing`
    },
    Markham: {
        cat: 2, 
        dog: 2,
        either: `4 pets in any of the following ways: 2 dogs and 2 cats, 1 dog and 3 cats, or 4 cats`,
        bylaw: `Animal Control By-law 2018-91`
    },
    Brampton: {
        cat: 6,
        dog: 3,
        either: `3 dogs and 6 cats`,
        bylaw: `Animal by-laws 250-2005 and 261-93`
    }
}


$(function () {
    // creating an event
    $(`form`).on(`submit`, function (e) {
        e.preventDefault();

        // get choices user made
//can clean this input area - says Adam
        // gets user array
        const animalInput = $(`input[name=pet]:checked`);

        // gets user choice
        const animal = animalInput.val();

        const cityInput = $(`input[name=city]:checked`);

        const city = cityInput.val();
// yields string of city name
        
        const law = petsByCity[city].bylaw;


        // look up answer based on choices
        const cityInfo = petsByCity[city];

        // gets answer of pet amount based on city
        const answer = cityInfo[animal];
// bracket notation w/ variable to grab the value


        //display answer for user 
        if (animal === `cat`) {
            $(`.results`).html(`<h3>Based on your choice...you can get a maximum of ${answer} ${animal}s per household based on ${law}! </h3> <img src="assets/joe.jpg" alt="Cat sleeping in backpack.">`);
        } else if (animal === `dog`) {
            $(`.results`).html(`<h3>Based on your choice...you can get a maximum of ${answer} ${animal}s per household based on ${law}! </h3> <img src="assets/buddy.jpg" alt="Large-sized dog sitting and smiling.">`);
        } else {
            $(`.results`).html(`<h3>Based on your choice...you can get a maximum of ${answer} per household based on ${law}!</h3> 
            <img src="assets/joe.jpg" alt="Cat sleeping in backpack."> 

            <h3> + </h3>

            <img src="assets/buddy.jpg" alt="Large-sized dog sitting and smiling."> `);
        }
    });
// reset button
    $(`.reset`).click(function(){
        $(`.results`).empty();
    });
});

