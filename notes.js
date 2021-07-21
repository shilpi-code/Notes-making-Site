console.log("Welcome to the notes");
shownotes();

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {
    let addtext = document.getElementById('addtext');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtext.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addtext.value = '';

    shownotes();
});

function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = '';
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard card mx-2 my-2" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text"> ${element}</p>                  
                <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>
        `
    });

    let notesElement= document.getElementById('notes');
    if(notesObj.length!=0){
        notesElement.innerHTML= html;
    }
    else{
        notesElement.innerHTML= `Nothing to show! Use 'Add a Note" section above to add notes.`;
    }

}

// Function to delete a note
function deleteNote(index) {
    
      let notes = localStorage.getItem("notes");
      if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
    
      notesObj.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      shownotes();
    }
    
    
    let search = document.getElementById('searchText');
    search.addEventListener("input", function(){
    
        let inputVal = search.value.toLowerCase();
        // console.log('Input event fired!', inputVal);
        let noteCards = document.getElementsByClassName('noteCard');
        Array.from(noteCards).forEach(function(element){
            let cardText = element.getElementsByTagName("p")[0].innerText;
            if(cardText.includes(inputVal)){
                element.style.display = "block";
            }
            else{
                element.style.display = "none";
            }
           
        })
    })
  

