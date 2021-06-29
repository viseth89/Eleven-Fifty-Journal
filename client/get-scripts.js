/* *************************
 *** DISPLAY BY USER ***
************************** */
function displayMine() {
     console.log('displayMine Function Called')
    const accessToken = localStorage.getItem('sessionToken');

    fetch(`http://localhost:3000/journal/mine`, {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
        let display = document.getElementById('journals');
        for(i = 0; i=display.childNodes.length; i++) {
            display.removeChild(display.firstChild)
        }

        if (data.length === 0) {
            let display = document.getElementById('journals');
            let header = document.createElement('h5');

            display.appendChild(header);
            header.textContent = "You haven't made any posts yet!";
            header.setAttribute("class", "noPosts")
        } else {

        }



    })
    .catch(err => {
        console.error(err)
    })
    }
    
    
    /* *************************
     *** DISPLAY ALL ***
    ************************** */
    function displayAll() {
     console.log('displayAll Function Called')
    }
    
    
    /* *************************
     *** DISPLAY BY TITLE ***
    ************************** */
    function displayByTitle() {
     console.log('displayByTitle Function Called')
    }
    