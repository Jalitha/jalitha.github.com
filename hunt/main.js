const hints = {
    "1": { 
        "text": "This is the <b>first</b> hint and <br>it's really cool"
    },
    "2": { 
        "text": "This is the <b>second</b> hint"
    }
}

divTemplate = `<div id="hint-hintid" class="hint">hinttext</div>`

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
        let domId = '#hint-' + hintId
        $(domId).addClass('solved')
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
            let domId = '#hint-' + checkId
            $(domId).addClass('solved')
            saveState(state)
            // celebrate()
            party.confetti($('body').get(0))
        }
    }
    
    // cross out the new div

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