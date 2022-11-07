const input = document.getElementById('button');


function addingEventListener() {
    input.addEventListener('click', function() {
        console.log("cliqqqued")
        return "clicked"
    });
}

addingEventListener()
