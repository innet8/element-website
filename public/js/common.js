/* 设置默认语言 */
if(!localStorage.getItem('lang')){
    localStorage.setItem('lang','zh')
}
function menuHandle(){
  const arrowDom = document.getElementById("arrow")
  const languagDom = document.getElementById("languagMenu")
  if(languagDom.style.display=='none'){
      languagDom.style.display = 'block'
      arrowDom.style.transform = 'rotate(180deg)'
  }else{
      arrowDom.style.transform = ''
      languagDom.style.display = 'none'
  }
}
/* 语言切换函数 */
const langPopDom = document.querySelector('#languagMenu');
const changeLanguage = (type)=>{
    const str = window.location.pathname
    // 英文主页面
    const enIndexUrl = '/en/index.html'
    // 中文主页面
    const zhIndexUrl = '/zh/index.html'
    const index = str.lastIndexOf('/');
    const newIndex = str.lastIndexOf('/',index-1);
    const newStr = str.slice(newIndex+1,index);
    const lang = localStorage.getItem('lang')
    if(type != lang){
        if (str==enIndexUrl||str==zhIndexUrl){
          window.location.href = `/${type}/index.html`
        }else{
          window.location.href = `/${type}/${newStr}/index.html`
        }
      }else{
        if (str==enIndexUrl||str==zhIndexUrl){
            window.location.href = `/${lang}/index.html`
          }else{
            window.location.href = `/${lang}/${newStr}/index.html`
          }
      }
    langPopDom.style.display = 'none';
    localStorage.setItem('lang',type)
}