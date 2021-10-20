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


middles = [
"the mere idea of you ",
"your soul ",
"your hair today ",
"everything you do ",
"your personal style ",
"every thought you have ",
"that sparkle in your eye ",
"your presence here ",
"what you got going on ",
"the essential you ",
"your life's journey ",
"that saucy personality ",
"your DNA ",
"that brain of yours ",
"your choice of attire ",
"the way you roll ",
"whatever your secret is ",
"all of y'all ",
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

start = starts[getRandomInt(18)]
middle = middles[getRandomInt(18)]

sentence = start + middle 
$('#peptalk').text(sentence)