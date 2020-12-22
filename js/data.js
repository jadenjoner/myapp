var name = 'joe';
var errorStatus = 404;
var errorMessage = 'Unknown';

var pages = [
  {
    icon: 'home',
    name: 'Home',
    url: 'page/home.xml',
    active: true,
  },{
    icon: 'dashboard',
    name: 'Dashboard',
    url: 'page/dashboard.xml',
    button: 'close'
  },{
    icon: 'settings',
    name: 'Options',
    url: 'page/options.xml',
    button: 'close'
  },{
    icon: 'account_circle',
    name: 'Account',
    url: 'page/account.xml',
    button: 'close'
  },{
    icon: 'edit',
    name: 'Editor',
    url: 'page/editor.xml',
    button: 'close'
  },
]

var sidebarPages = ['page/home.xml', 'page/dashboard.xml'];
var sidebarItems = sidebarPages.map(a => pages.find(b => b.url == a))
