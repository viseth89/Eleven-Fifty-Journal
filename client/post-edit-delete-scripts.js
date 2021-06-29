/* *************************
 *** POST JOURNAL ***
************************** */
function postJournal() {

    
     console.log('postJournal Function Called')
    const accessToken = localStorage.getItem('sessionToken')
    let title = document.getElementById('title').value;
    let date = document.getElementById('date').value;
    let entry = document.getElementById('entry').value
    
    let newEntry = {
        journal: {
            title: title,
            date: date,
            entry: entry
        }
    }

    fetch(`http://localhost:3000/journal/create`, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }),
        body: JSON.stringify(newEntry)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        displayMine()
    })
    .catch(err => {
        console.error(err)
    })

}
    
    
    /* *************************
     *** UPDATE JOURNAL ***
    ************************** */
    function editJournal(postId) {
     console.log('editJournal Function Called')
    const fetch_url = `http://localhost:3000/journal/update/${postId}`;
    const accessToken = localStorage.getItem('sessionToken')

    let card = document.getElementById('postId');
    let input = document.createElement('input');

    if (card.childNodes.length < 2) {
        card.appendChild(input);
        input.setAttribute('type', "text");
        input.setAttribute('id', "updatedEntry");
        input.setAttribute('placeholder', "Edit your journal entry");
    } else {
        
    }
    }
    
    
    /* *************************
     *** DELETE JOURNAL ***
    ************************** */
    function deleteJournal(postId) {
     console.log('deleteJournal Function Called')
    }