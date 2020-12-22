var saveLayoutTimeout;


function dragItem(e){
  var query = 'aside section[page="'+e.target.getAttribute('page')+'"]';
  e.dataTransfer.setData("text", query);

  var element = e.target;

  requestAnimationFrame(function () {
    element.style.display = 'none';
  });
}

function itemDrop(e){
  var target = e.target.tagName == 'SECTION' ? e.target : e.target.parentNode;
  e.preventDefault();
  var el = $(e.dataTransfer.getData('text'));
  dragReorder(target.getAttribute('page'), el.getAttribute('page'))
  el.style.display = '';
  target.style.margin = 0;
  target.outerHTML += el.outerHTML;
  el.outerHTML = '';
}

function itemDragEnter(e){
  if(e.target.style){
    e.target.style.marginBottom = '50px';
  }
}

function itemDragLeave(e){
  if(event.target.style){
    event.target.style.marginBottom = 0
  }
}


function dragReorder(h, k){
  var result = []
  sidebarItems.forEach(a => {
    if(a.url == k)return;
    if(a.url == h){
      result.push(a);
      result.push(sidebarItems.find(c => c.url == k))
      return;
    }
    result.push(a);
  })
  sidebarItems = result;

  $('aside .bottom').style.marginBottom = 0;
  clearTimeout(saveLayoutTimeout);
  saveLayoutTimeout = setTimeout(() => {
    $('aside .bottom').style.marginBottom = '-49px';
    console.log('hello');
  }, 8000)
}
