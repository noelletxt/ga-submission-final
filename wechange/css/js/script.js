document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const closeButtons = document.querySelectorAll('.close');

    loginBtn.onclick = () => {
        loginModal.style.display = 'block';
    };

    signupBtn.onclick = () => {
        signupModal.style.display = 'block';
    };

    closeButtons.forEach(button => {
        button.onclick = () => {
            button.parentElement.parentElement.style.display = 'none';
        };
    });

    window.onclick = (event) => {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target == signupModal) {
            signupModal.style.display = 'none';
        }
    };

    // Currency exchange logic
    const currencySelect = document.getElementById('currency');
    const rateValue = document.getElementById('rateValue');
    const amountInput = document.getElementById('amountInput');
    const submitBtn = document.getElementById('submitBtn');
    const resultValue = document.getElementById('resultValue');

    const exchangeRates = {
        jpy: 81.32,
        krw: 875.30,
        sgd: 1.00,
        idr: 10571.57,
        rmb: 4.81
    };

    currencySelect.onchange = () => {
        rateValue.textContent = exchangeRates[currencySelect.value];
    };

    submitBtn.onclick = () => {
        const amount = parseFloat(amountInput.value);
        if (!isNaN(amount)) {
            const result = amount * exchangeRates[currencySelect.value];
            resultValue.textContent = result.toFixed(2);
        } else {
            alert('Please enter a valid amount');
        }
    };

    // Add card details
    const addCardForm = document.getElementById('addCardForm');
    addCardForm.onsubmit = (event) => {
        event.preventDefault();
        // Process the form data as needed
        alert('Card added successfully!');
    };

    // Balance display logic
    const sgdBalance = document.getElementById('sgdBalance');
    const jpyBalance = document.getElementById('jpyBalance');
    const krwBalance = document.getElementById('krwBalance');
    const idrBalance = document.getElementById('idrBalance');
    const rmbBalance = document.getElementById('rmbBalance');

    // Assuming you have some logic to retrieve these values
    const userBalances = {
        sgd: 1000,
        jpy: 5000,
        krw: 200000,
        idr: 15000000,
        rmb: 3000
    };

    sgdBalance.textContent = userBalances.sgd;
    jpyBalance.textContent = userBalances.jpy;
    krwBalance.textContent = userBalances.krw;
    idrBalance.textContent = userBalances.idr;
    rmbBalance.textContent = userBalances.rmb;

    // Function to check if the user is logged in
    function checkLogin() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            alert('You must be logged in to access this page.');
            window.location.href = 'login.html';
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('addCardForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
    
            // Here, you can handle the form data, send it to the server, etc.
            // For now, we’ll just redirect to exchange.html
    
            // Redirect to exchange.html after adding the card
            window.location.href = 'exchange.html';
        });
    });
    
    
});
