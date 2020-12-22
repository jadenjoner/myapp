var popup = new prompter('popup');
var content = new Component('#content');


page('page/home.xml')

function format(command, value) {
    document.execCommand(command, false, value);
}
function textEditKey(e){
  if(e.key == "Tab"){
    e.preventDefault();
    format('insertHTML', '&nbsp;&nbsp;&nbsp;&nbsp;');
  }
}
