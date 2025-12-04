

(function () {
    let form = document.querySelector('.form-container');
    let emailInput = document.querySelector('#email');

    function showErrorMessage(input, message) {
        let container = input.parentElement; // the .form-item_email

        //check and remove any existing errors
        let error = container.querySelector('.error-message');
        if (error) { container.removeChild(error) }

        //error if the message is not empty
        if (message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }



    //validate email function:
    function validateEmail() {
        let value = emailInput.value;

        if (!value) {
            showErrorMessage(emailInput, 'Email is a required field');
            return false;
        }
        if (value.indexOf('@') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid email address.');
            return false;
        }
        if (value.indexOf('.') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid email address.');
            return false;
        }
        showErrorMessage(emailInput, null);
        return true;
    }



    function validateForm() {
        return validateEmail();
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //do not submit to server
        if (validateForm()) {
            alert('Great success!');
        }

    })

    emailInput.addEventListener('input', validateEmail);


    //retrun statement here
})();