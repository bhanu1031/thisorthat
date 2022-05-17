const button1 = document.getElementById('b1');
const button2 = document.getElementById('b2');

button1.addEventListener('click', async function button1_function() {

        const random_thisThat = this_or_that[Math.floor(Math.random() * this_or_that.length)];

        var this_question = random_thisThat.split(" or ")[0];
        var that_question = random_thisThat.split(" or ")[1];

        button1.innerHTML = this_question;
        button2.innerHTML = that_question;
});

button2.addEventListener('click', function button2_function() {

    const random_text = this_or_that[Math.floor(Math.random() * this_or_that.length)];
    
    var question1 = random_text.split(" or ")[0];
    var question2 = random_text.split(" or ")[1];

    button1.innerHTML = question1;
    button2.innerHTML = question2;
});