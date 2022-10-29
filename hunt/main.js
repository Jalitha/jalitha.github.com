const hints = {
    "1": { 
        "text": "My <b>wrath</b> is virtual but still one to fear<br>My nemesis shouts \"Get over here!\"",
        "solution": "Answer: Sub-zero!"
    },
    "2": { 
        "text": "On my shiny skin your <b>envy</b> will reflect,<br> until your beauty you accept.",
        "solution": "Answer: Mirror"
    },
    "3": { 
        "text": "I am an award draped around the neck<br>Wear with <b>pride</b> and command respect",
        "solution": "Answer: Medal"
    },
    "4": { 
        "text": "Love and <b>lust</b> often go together<br>Both represented by this Flower",
        "solution": "Answer: Rose"
    },
    "5": { 
        "text": "Control your media from the couch,<br>I enable a <b>sloth</b> to binge and slouc.",
        "solution": "Answer: Remote"
    },
    "7": { 
        "text": "March with <b>pride</b> wearing this flashy pair,<br>Rainbow soles to match anything you wear",
        "solution": "Answer: Shoes"
    },
    "8": { 
        "text": "<b>Envy</b> celebrates the desire to be a celebrity head<br>Find the instrument of the man in red",
        "solution": "Answer: Guitar"
    },
    "9": { 
        "text": "Hanging your clothes is a way to make them dry,<br>When <b>sloth</b> takes over, you'd rather give me a try",
        "solution": "Answer: Dryer"
    },
    "10": {
        "text": "This animal's <b>wrath</b> is hard to bare<br>But in this house I'm a cuddly bear",
        "solution": "Answer: Teddy Bear"
    },
    "11": { 
        "text": "This golden peace sign doubles as a bank.<br> It's largely empty, with <b>greed</b> to thank",
        "solution": "Answer: Piggy bank"
    },
}

divTemplate = `<div id="hint-hintid" class="hint"><div class="clue">hinttext</div><div class="solution"></div></div>`

function loadPage() {
   
    // draw all the divs
    let divs = ""
    for (const hintId in hints) {
        newDiv = divTemplate.replace("hinttext", hints[hintId].text)
        newDiv = newDiv.replace("hintid", hintId)
        divs = divs += newDiv
    }

    $("#hints").html(divs)

    let state = getState()

    // get the divs that are already solved from local storage
    // strike them out
    state.solved.forEach(hintId => {
        console.log("crossing off", hintId)
        markSolved(hintId)
    });
    
    // get the qs to see if we solved a new hint
    // if so Do a celebration
    let params = new URLSearchParams(window.location.search);
    checkId = params.get('hint')
    if (hints[checkId] != undefined && hints[checkId] != null) {
        // we have a match! 
        if (state.solved.includes(checkId)) {
            console.log('already solved')
        }
        else {
            console.log("new solve!", checkId)
            state.solved.push(checkId)
            saveState(state)
            markSolved(checkId)
            // celebrate()
            party.confetti($('body').get(0))
            // if it's the first - we should give welcome message?
            let welcome = "Hello there, and welcome to Jelly's Halloween Scavenger Hunt. Read the hints, then find and scan the QR code associated with them! Scan them all and win a toy! All scavenger hunt items are in plain view, and you won't need to go through any cupboards/drawers."
            $.toast(
                {
                    'text':'You got it - Nice one!', 
                    'icon': 'success',
                    'loader': false    
                })
        }
    }
    
    // cross out the new div

}

function markSolved(hintId) {
    let domId = '#hint-' + hintId
    $(domId).addClass('solved')

    $(domId).children('.solution').html(hints[hintId].solution)
}


function saveState(state) {
    window.localStorage.setItem("state", JSON.stringify(state))
}

function getState() {
    let state = JSON.parse(window.localStorage.getItem("state"))
    if (state ==  null || state == undefined || state.solved == undefined) {

        // initialise state
        state = {
            "solved": []
        }

        console.log(JSON.stringify(state))

        window.localStorage.setItem("state", JSON.stringify(state))
    }
    return state
}

loadPage()