document.querySelector('.btn_box').addEventListener('click', function(){
  document.querySelector('.burger_menu').classList.toggle('open')
})

const add_button = document.querySelector('.add_list');
const input = document.querySelector('.input_text');
const items = document.getElementById('items');
const clear = document.querySelector('.clear');
const add_to_locker = document.querySelector('.add_to_locker')
const locker = document.querySelector('.locker');

const notes = []

function getNoteTemplate(obj, index){
  return`
    <li class="list_items">
      <span class="${obj.comleted? 'text-decoration-line-through' : ''}">${obj.title}</span>
      <div class="check_and_times">
        <span class="times" data-index="${index}" data-type="remove">&times;</span>
      </div>
    </li>
    `
}


function render(){
  items.innerHTML = '';
  if(notes.length === 0){
    items.innerHTML = `<p class="empty" style=
    "margin-left: 20px; 
    color:black; 
    background-color: #ffff;
     width: 200px;">
     the list is empty...
     </p>`
  }
  for(let i=0; i<notes.length; i++){
    items.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
  }
}
render()


function addButton(){
  if(input.value === ''){
    return
  }
  if(notes.length <= 6){
    const newNote = {
      title: input.value,
      comleted: false
    }
  
    notes.push(newNote)
    render()
    input.value = ''
  }else{
    return
  }
  
}

add_button.onclick = function(){
  addButton()
}


items.onclick = function(event){
  if(event.target.dataset.type){
    const type = event.target.dataset.type;
    const index = event.target.dataset.index;
    if(type === 'remove'){
      notes.splice(index, 1)
    }
  }

  render()
}




{/* <span class="check" data-index="${index}" data-type="togle">&check;</span>
 const index = Number(event.target.dataset.index);
    
 if(type === 'togle'){
   if(notes[index].comleted === true){
     notes[index].comleted = false;
   }
   else{
     notes[index].comleted = true;
   }
 } */}

document.addEventListener('keydown', event => {
  if(event.keyCode === 13){
    addButton()
  }
})

function clearP(){
  if (notes.length > 0) {
    notes.length = 0; // Clear the entire array
    render(); // Render the updated list
  }
}


clear.onclick = function(){
  clearP()
}

let new_notes;
const spisok = document.querySelector('.spisok');

// ==========================

function getNewElement(obj, index){
  return`
    <li class="list_items">
      <span class="${obj.comleted? 'text-decoration-line-through' : ''}">${obj.title}</span>
      <div class="check_and_times">
        <span class="times" data-index="${index}" data-type="remove">&times;</span>
        <span class="check" data-index="${index}" data-type="togle">&check;</span>
      </div>
    </li>
    `
}

add_to_locker.addEventListener('click', function(){
  if(notes.length !== 0){
    new_notes = [].concat(notes)
    notes.length = 0;
    render();
    for(let i=0; i<new_notes.length; i++){
      spisok.insertAdjacentHTML('beforeend', getNewElement(new_notes[i], i))
    }
  }
});






const root = document.querySelector('.root');



locker.onclick = function(){
  root.classList.remove('empty')
}

const root_remove = document.querySelector('.root_remove');
root_remove.onclick = function(){
  root.classList.add('empty')
}


root.onclick = function(event){
  if(event.target.dataset.type){
    const type = event.target.dataset.type;
    const index = event.target.dataset.index;
    if(type === 'remove'){
      new_notes.splice(index, 1)
    }
    if(type === 'togle'){
      if(new_notes[index].comleted === true){
        new_notes[index].comleted = false;
      }
      else{
        new_notes[index].comleted = true;
      }
    }
  }
  else{
    return
  }

  spisok.innerHTML = '';
  for(let i=0; i<new_notes.length; i++){
    spisok.insertAdjacentHTML('beforeend', getNewElement(new_notes[i], i))
  }
}






