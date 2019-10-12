const petsByCity = {
    Toronto: {
        cat: 6,
        dog: 3,
        either: '3 dogs and 6 cats',
        bylaw: '<a href="https://www.toronto.ca/311/knowledgebase/kb/docs/articles/municipal-licensing-and-standards/toronto-animal-services/maximum-number-of-pets-dogs-cats-allowed-in-a-home.html" target="_blank">City of Toronto Municipal Code, Chapter 349</a>'
    },
    Vaughan: {
        cat: 3,
        dog: 3,
        either: '3 dogs and 3 cats',
        bylaw: '<a href="https://www.vaughan.ca/services/residential/animal_services/Pages/animal_bylaws.aspx" target="_blank">Animal Control By-law 53-2002</a>'
    },
    RichmondHill: {
        cat: 6,
        dog: 4,
        either: '4 dogs and 6 cats',
        bylaw: '<a href="https://www.richmondhill.ca/en/our-services/Animal-Services.aspx" target="_blank">Richmond Hill By-law Chapter 309 and Chapter 314</a>'
    },
    Markham: {
        cat: 4,
        dog: 2,
        either: '4 pets in any of the following ways: 2 dogs and 2 cats, 1 dog and 3 cats, or 4 cats',
        bylaw: '<a href="https://www.markham.ca/wps/portal/home/about/city-hall/bylaws/bylaw-guide-for-homeowners/animal-control" target="_blank">Animal Control By-law 2018-91</a>'
    },
    Brampton: {
        cat: 6,
        dog: 3,
        either: '3 dogs and 6 cats',
        bylaw: '<a href="http://www.brampton.ca/en/City-Hall/Bylaws/Pages/Animal-By-laws.aspx" target="_blank">Animal by-laws 250-2005 and 261-93</a>'
    },
    Newmarket: {
        cat: 4,
        dog: 3,
        either: '3 dogs and 4 cats',
        bylaw: '<a href="https://www.newmarket.ca/TownGovernment/Documents/2016-53%20Animal%20Control.pdf" target="_blank" aria-label="Open bylaw PDF document.">By-law Number 2016-53 Sections 4.13 and 3.16</a>'
    },
    Ajax: {
        cat: 3,
        dog: 3,
        either: '3 dogs and 3 cats',
        bylaw: '<a href="https://www.ajax.ca/Modules/bylaws/Bylaw/Details/69264dc4-8714-4b08-a0c2-7df8cc809bbc" target="_blank" aria-label="Go to website where PDF of bylaw can be downloaded for review.">By-law Number 48-2017 Sections 7.7 and 7.8</a>'
    },
    Aurora: {
        cat: '2 or 3 (review Section 22)',
        dog: '2 or 3 (review Section 10)',
        either: '2 or 3 cats, or dogs',
        bylaw: '<a href="https://www.aurora.ca/TownHall/Documents/Bylaws/6027-17%20Animal%20Control%20By-law.pdf" target="_blank" aria-label="Go to bylaw\'s PDF.">By-law Number 6027-17 Sections 10 and 22</a>'
    }
}


$(function () {
    // creating an event for when user choices are made
    $(`form`).on(`submit`, function (e) {
        e.preventDefault();
        // gets user choice
        const animal = $(`#pet option:selected`).val();
        const city = $(`#city option:selected`).val();
        $('html, body').animate({
            scrollTop: $("#results").offset().top
        }, 1000)
        const law = petsByCity[city].bylaw;
        const cityInfo = petsByCity[city];
        const answer = cityInfo[animal];

        if (animal === `cat`) {
            $(`.results`).html(`<h3>Based on your answer...you can have a maximum of ${answer} ${animal}s per household based on ${law}! </h3> <img src="assets/joe.jpg" alt="Cat with white undercoat sitting."><p>Disclaimer: Please verify actual number of pets you can own with your local regional authority.</p>`);
        } else if (animal === `dog`) {
            $(`.results`).html(`<h3>Based on your answer...you can have a maximum of ${answer} ${animal}s per household based on ${law}! </h3> <img src="assets/buddy.jpg" alt="Large-sized dog sitting and smiling."><p>Disclaimer: Please verify actual number of pets you can own with your local regional authority.</p>`);
        } else {
            $(`.results`).html(`<h3>Based on your answer...you can have a maximum of ${answer} per household based on ${law}!</h3> 
            <img src="assets/buddy.jpg" alt="Large-sized dog sitting and smiling.">
            <h3> + </h3>
            <img src="assets/joe.jpg" alt="Cat with white undercoat sitting."><p>Disclaimer: Please verify actual number of pets you can own with your local regional authority.</p>`);
        }
    });

    // reset button empties .results and removes choices
    $(`.reset`).click(function () {
        $(`.results`).empty();
        $(`form`).trigger(`reset`);
    });
});

