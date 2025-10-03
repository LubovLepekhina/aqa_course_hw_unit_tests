// Task 2.
//   Xpath/CSS: элемент с id - ‘submit’

const idCss = '#submit';
const idXPath = "//*[@id='submit']";

//   Xpath/CSS: все элементы с классом ‘txt’ 

const classTxtCss = ".txt";
const classTxtXPath = "//*[@class = 'txt']";

//   Xpath: первый элемент с классом ‘txt’

const firstElWithClassXPath = "//*[@class = 'txt'][1]";

//   Xpath: кнопку которая содержит текст: ‘Remove comment’

const btnWithTextXPath = "//button[text() = 'Remove comment']";

//   Xpath: первый элемент с классом ‘one’ 

const firstElWithClassXPathh = "//*[contains(@class, 'one')][1]";

//   Xpath/CSS: элемент с атрибутом ‘multitag2’ и значением  ‘on’ 

const elWithAttXPath = "//*[@multitag2='on']";
const elWithAttCss = "[multitag2='on']";

//   Xpath/CSS: всех детей элемента ‘div’ с классом ‘content’ 

const allChildrenXPath = "//div[@class='content']/*";
const allChildrenCss = "div.content > *";

//   CSS: все элементы ‘span’ и  ‘button’ с классом ‘content’ 

const spanAndBtnWithClassCss = "span.content, button.content";

//   Xpath: используя за основу селектор //*[@id='submit'] найти элемент body 

const goToParentEl = "//*[@id='submit']/ancestor::body";