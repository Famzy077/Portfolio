let username = 'Famzy'
let date = new Date().getFullYear()
let menuBar = document.querySelector('.menuBar')
let errorMsg = document.getElementById('errorMsg')
let errorEmail = document.getElementById('errorEmail')
let errorTextarea = document.getElementById('errorTextarea')

let nav2 = document.querySelector('.nav2')
clickMe.addEventListener('click', () => {
    menuBar.classList.toggle('nav2')
        
})

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { 
    header.style.backgroundColor = 'rgb(43, 41, 41)'; 
    header.style.boxShadow = 'box-shadow: 0 0 5px  black;'
  } else {
    header.style.backgroundColor = 'rgb(27, 27, 27)'; /* reset to initial background color */
  }
});

let divAnimation = document.querySelectorAll('div')
    window.onscroll = () => {
        divAnimation.forEach(animate => {
            let top = window.scrollY;
            let offset = animate.offsetTop -310;
            let height = animate.offsetHeight;
            
            if(top >= offset && top < offset + height){
                animate.classList.add('show-animation')
            }
            else(animate.classList.remove('show-animation'))
        })
    }
    const checkProject = document.querySelectorAll('.checkProject')
    const All = document.getElementById('All')
    All.addEventListener('click', () => {
        checkProject.forEach(index => {
            const checkAll = index.textContent.toLocaleLowerCase();
            if(checkAll.includes('project')){
                index.style.display = 'block'
            }else{
                index.style.display = 'none'
            }
        })
    })
    const javaScriptProject = document.getElementById('JavaScript')
    javaScriptProject.addEventListener('click', (e) => {
        e.preventDefault()
        checkProject.forEach(index => {
            const checkIndex = index.textContent;
            if(!checkIndex.includes('JavaScript')){
                index.style.display = 'none'
            }else{
                index.style.display = 'block'
            }
        })
    })
    const ReactProject = document.getElementById('React')
    React.addEventListener('click', (e) => {
        e.preventDefault()
        checkProject.forEach(index => {
            const checkIndex = index.textContent;
            if(!checkIndex.includes('React')){
                index.style.display = 'none'
            }else{
                index.style.display = 'block'
            }
        })
    })

    const NodeJsProject = document.getElementById('Node')
    NodeJsProject.addEventListener('click', (e) => {
        e.preventDefault()
        checkProject.forEach(index => {
            const checkIndex = index.textContent;
            if(!checkIndex.includes('Node.Js')){
                index.style.display = 'none'
            }
            else{
                index.style.display = 'block'
            }
        })
    })

let myFroms = document.forms.getForms
    let names = myFroms.name,
     email = myFroms.email,
     textArea = myFroms.textArea;
    
    myFroms.addEventListener('submit', (e) => {
        e.preventDefault()
        let nameValue = names.value,
        emailValue = email.value,
        textAreaValue = textArea.value
        // console.log(nameValue, emailValue, textAreaValue)

        if(nameValue.trim() === ''){
            errorMsg.innerHTML = 'Please this field is required'
            errorMsg.style.color = 'red'
            names.focus()
            return
        }else{
            errorMsg.style.display = 'none'
        }

        if(emailValue.trim() === ''){
            errorEmail.innerHTML = 'Please email field is required'
            errorEmail.style.color = 'red'
            email.focus()
            return
        }else{
            errorEmail.style.display = 'none'
        }

        if(textAreaValue.trim() === ''){
            errorTextarea.innerHTML = 'Please message field is required'
            errorTextarea.style.color = 'red'
            textArea.focus()
            return
        }
        else{
            errorTextarea.style.display = 'none'
        }
        e.target.reset()
    })

    let footerMsg = document.getElementById('footer')
    footerMsg.innerText = `${username}` + ' ' + date + ' ' + 'all right reserverd!'