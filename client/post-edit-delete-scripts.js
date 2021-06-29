/* *************************
 *** POST JOURNAL ***
************************** */
function postJournal() {
     console.log('postJournal Function Called')
    const accessToken = localStorage.getItem('sessionToken')
    let title = document.getElementById('title').value;
    let date = document.getElementByid('date').value;
    let entry = document.getElementById('entry').value
    
    let newEntry = {
        journal: {
            title: title,
            date: date,
            entry: entry
        }
    }

}
    
    
    /* *************************
     *** UPDATE JOURNAL ***
    ************************** */
    function editJournal(postId) {
     console.log('editJournal Function Called')
    }
    
    
    /* *************************
     *** DELETE JOURNAL ***
    ************************** */
    function deleteJournal(postId) {
     console.log('deleteJournal Function Called')
    }