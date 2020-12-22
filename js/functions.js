

function generateSidebar(items){
  let result = '';
  items.forEach((item, i) => {
    if(item.show != false);
    result += `
      <section page="${item.url}" draggable="true" ondragover="event.preventDefault()"
      ondragstart="dragItem(event)" ondrop="itemDrop(event)"
      ondragenter="itemDragEnter(event)"
      ondragleave="itemDragLeave(event)"
      ondragend="event.target.style.display=''"
      onclick="page('${item.url}', event)" ${item.active ? 'class="active"' : ''}>
        <i class="icon">${item.icon}</i>
        <span>${item.name}</span>
        ${item.button ? `<i class="button"
        ${item.button == 'close' ? 'onclick="closeItem(\''+item.url+'\')"' : ''}>
        ${item.button}</i>` : ''}
      </section>
    `
  });
  result += `<div class="bottom"><button>Save</button></div>`
  $('aside').innerHTML = result;
}


function page(url, e){

  // If the item close button was clicked dont change page
  if(e && e.target.classList.contains('button'))return;

  if(sidebarItems.find(a => a.url == url)) // If an item with url esists make it active
  sidebarItems.forEach(item => {
    item.active = url == item.url;
  });

  else { // Add item to sidebar with the url
    sidebarItems.forEach(a => a.active = false); // set all items to inactive
    var page = pages.find(a => a.url == url);
    if(page)sidebarItems.push({...page, active: true});
  }

  content.getTemplate(url, undefined, (status, msg)=>{
    errorStatus = status;
    errorMessage = msg;
    content.getTemplate('page/404.xml')
  });
  generateSidebar(sidebarItems);
}


function closeItem(url){
  sidebarItems.splice(sidebarItems.findIndex(a => a.url == url), 1);
  generateSidebar(sidebarItems);
}



function openOptions(){
  popup.show([{
    type: 'h1',
    value: 'options',
  }]);
}
