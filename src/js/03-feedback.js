import throttle from 'lodash.throttle';
const storage_Key = 'feedback-form-state';

const formRef = document.querySelector('form');
const email = formRef.elements.email;
const message = formRef.elements.message;

const onInput = (e) => {
    const formData = {
        mail : email.value, message: message.value
    };
    localStorage.setItem(storage_Key,JSON.stringify(formData));
}
const getFromLS = () => {
    const parsedData = JSON.parse(localStorage.getItem(storage_Key));

    if (!parsedData) return

    email.value=parsedData.mail;
    message.value=parsedData .message;

}
getFromLS()

const onSubmit=(e) => {
    e.preventDefault()

    if (!email.value || !message.value) {
        return alert('All feels must be fell out!')
    }

    console.log({email : email.value, message : message.value})


    formRef.reset() 
    localStorage.removeItem(storage_Key);
    
}

formRef.addEventListener('input',throttle(onInput,500))

formRef.addEventListener('submit',onSubmit)






