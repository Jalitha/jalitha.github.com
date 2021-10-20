starts = [
    "Champ, ",
"Fact: ",
"Everybody says ",
"Dang… ",
"Check it: ",
"Just saying… ",
"Superstar, ",
"Tiger, ",
"Self, ",
"Know this: ",
"News alert: ",
"Girl, ",
"Ace, ",
"Excuse me but ",
"Experts agree: ",
"In my opinion, ",
"Hear ye, hear ye: ",
"Okay, listen up: "
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

start = starts[getRandomInt(18)]

$('#peptalk').text(start)