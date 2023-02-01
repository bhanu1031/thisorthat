function getValue() {
    const randomQuestion = this_or_that[Math.floor(Math.random() * this_or_that.length)];

    var this_question = randomQuestion.split(" or ")[0];
    var that_question = randomQuestion.split(" or ")[1];

    document.getElementById("this_btn_value").innerText = this_question;
    document.getElementById("that_btn_value").innerText = that_question;
};

document.getElementById("close").addEventListener("click", function () {
  window.close();
});

document.getElementById("this_btn").addEventListener("click", getValue);
document.getElementById("that_btn").addEventListener("click", getValue);