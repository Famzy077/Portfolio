let errorMsg = document.getElementById('errorMsg'),
    errorMsg1 = document.getElementById('errorMsg1'),
    errorEmail = document.getElementById('errorEmail'),
    type1 = document.getElementById('type1'),
    errorGeneral = document.getElementById('errorGeneral'),
    errorsupport = document.getElementById('errorsupport'),
    type2 = document.getElementById('type2'),
    errorMessage = document.getElementById('errorMessage')

const myForm = document.forms.formData

let Firstname = myForm.FirstName,
    Lastname = myForm.LastName,
    Email = myForm.email,
    General = myForm.General,
    Support = myForm.support, 
    Message = myForm.message,
    Check = myForm.check

    myForm.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(Firstname.value, Lastname.value, Email.value, General.value, Support.value, Message.value, Check.value)
        if(Firstname.value.trim() === '' || (Lastname.value.trim() === '') || (Email.value.trim() === '') || (Message.value.trim() <= 10)){
            errorMsg.innerHTML = 'Field required'
            errorMsg1.innerHTML = 'Field required'
            errorEmail.innerHTML = 'Please enter your email'
            errorGeneral.innerHTML = 'Required'
            errorsupport.innerHTML = 'Required'
            errorMessage.innerHTML = 'Message field required'

            errorMsg.style.color = 'red'
            errorMsg1.style.color = 'red'
            errorEmail.style.color = 'red'
            errorGeneral.style.color = 'red'
            errorsupport.style.color = 'red'
            errorMessage.style.color = 'red'

            Firstname.style.borderStyle = 'solid' 
            Lastname.style.borderStyle = 'solid'
            Email.style.borderStyle = 'solid'
            type1.style.borderStyle = 'solid'
            type2.style.borderStyle = 'solid'
            Message.style.borderStyle = 'solid'

            Firstname.style.borderColor = 'red'
            Lastname.style.borderColor = 'red'
            Email.style.borderColor = 'red'
            type1.style.borderColor = 'red'
            type2.style.borderColor = 'red'
            Message.style.borderColor = 'red'
            e.reSet()
            return

        }else{
            errorMsg.style.display = 'none'
            errorMsg1.style.display = 'none'
            errorEmail.style.display = 'none'
            errorGeneral.style.display = 'none'
            errorsupport.style.display = 'none'
            errorMessage.style.display = 'none'
            
            Firstname.style.borderColor = 'black'
            Lastname.style.borderColor = 'black'
            Email.style.borderColor = 'black'
            type1.style.borderColor = 'black'
            type2.style.borderColor = 'black'
            Message.style.borderColor = 'black'
            alert('Form Successfully Submited')
        }
    })
