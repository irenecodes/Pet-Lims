// Brent advised and Asaf approved to take different approach from running loops as described in pseudo code

const petsByCity = {
    Toronto: {
        cat: 6,
        dog: 3,
        either: `3 dogs and 6 cats`,
        bylaw: `<a href="https://www.toronto.ca/311/knowledgebase/kb/docs/articles/municipal-licensing-and-standards/toronto-animal-services/maximum-number-of-pets-dogs-cats-allowed-in-a-home.html">City of Toronto Municipal Code, Chapter 349</a>`
    },
    Vaughan: {
        cat: 3,
        dog: 3,
        either: `3 dogs and 3 cats`,
        bylaw: `<a href="https://www.vaughan.ca/services/residential/animal_services/Pages/animal_bylaws.aspx">Animal Control By-law 53-2002</a>`
    },
    RichmondHill: {
        cat:6,
        dog:4,
        either: `4 dogs and 6 cats`,
        bylaw: `<a href="https://www.richmondhill.ca/en/our-services/Animal-Services.aspx">Richmond Hill By-law Chapter 309 and Chapter 314</a>`
    },
    Markham: {
        cat: 2, 
        dog: 2,
        either: `4 pets in any of the following ways: 2 dogs and 2 cats, 1 dog and 3 cats, or 4 cats`,
        bylaw: `<a href="https://www.markham.ca/wps/portal/home/about/city-hall/bylaws/bylaw-guide-for-homeowners/animal-control">Animal Control By-law 2018-91</a>`
    },
    Brampton: {
        cat: 6,
        dog: 3,
        either: `3 dogs and 6 cats`,
        bylaw: `<a href="http://www.brampton.ca/en/City-Hall/Bylaws/Pages/Animal-By-laws.aspx">Animal by-laws 250-2005 and 261-93</a>`
    }
}


$(function () {
    //buttons activate once clicked
    $('label').on('click', function () {
        $(this).toggleClass('check');
    });
// allow user to only choose one option per fieldset
    $('label').click(function () {
        $('label').not(this).prop('checked', false);
    });

    

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


        // required for user to fill all fields
        // if (
        //     !$(`input[name=pet]:checked`).val() 
        // ||
        //     !$(`input[name=city]:checked`).val()
        // ) {
        //     alert(`nothing`);
        // }

//works for only city input and needs pet
        // if (!$(`input[type=radio]`).prop(`:checked`)) {
        //     alert(`nothing`);
        // }

        //display answer for user 
        if (animal === `cat`) {
            $(`.results`).html(`<h3>Based on your answer...you can get a maximum of ${answer} ${animal}s per household based on ${law}! </h3> <img src="assets/joe.jpg" alt="Cat sleeping in backpack.">`);
        } else if (animal === `dog`) {
            $(`.results`).html(`<h3>Based on your answer...you can get a maximum of ${answer} ${animal}s per household based on ${law}! </h3> <img src="assets/buddy.jpg" alt="Large-sized dog sitting and smiling.">`);
        } else if (animal === `either`) {
            $(`.results`).html(`<h3>Based on your answer...you can get a maximum of ${answer} per household based on ${law}!</h3> 
            <img src="assets/joe.jpg" alt="Cat sleeping in backpack."> 

            <h3> + </h3>

            <img src="assets/buddy.jpg" alt="Large-sized dog sitting and smiling."> `);
        } else {
            $(`.results`).html(`<h3>Please answer both questions for your result.</h3>`)
        }


    });
// reset button
    $(`.reset`).click(function(){
        $(`.results`).empty();
    });
});

