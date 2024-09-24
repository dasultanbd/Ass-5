const dataOne = document.getElementById('data-one');
const dataTwo = document.getElementById('data-two');
const dataButton = document.getElementById('data-Button');
const dataHistory = document.getElementById('data-History');
const footer = document.getElementById('footer');

function getInputElement(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}

function getInnerText(id) {
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}
let donateSectionOne = 0;
document.getElementById('donate-data-one').addEventListener('click', function () {
    const inputValueNumber = getInputElement('donate-text-one');
    const mainBalance = getInnerText('donate-amount');
    const donateMoneyOne = getInnerText('donate-Money-one');

    if (isNaN(inputValueNumber)) {
        alert("Invalid Donation Amount");
        document.getElementById('donate-text-one').value = '';
        return
    }
    else if (inputValueNumber < 0) {
        alert("Negative Amount never Donate");
        document.getElementById('donate-text-one').value = '';
        return
    }
    else if (mainBalance < inputValueNumber) {
        alert("Insufficient balance in your account");
        document.getElementById('donate-text-one').value = '';
        return
    }
    else {
        let firstDonate = mainBalance - inputValueNumber;
        donateSectionOne += inputValueNumber;
        document.getElementById('donate-amount').innerText = firstDonate;
        document.getElementById('donate-Money-one').innerText = donateSectionOne;
        document.getElementById('donate-text-one').value = '';

        const d = new Date();
        const div = document.createElement('div');
        div.classList.add('max-w-6xl', 'mx-auto',  'mt-10', 'border', 'p-5', 'sm:p-8', 'rounded-xl');
        div.innerHTML = `
            <h1 class="text-base font-bold">${inputValueNumber} Taka is Donated for Flood at Noakhali,Bangladesh</h1>
            <p>${d}</p>
        `;
        dataTwo.appendChild(div);

        const modal = document.getElementById('data-menu-1');
        modal.showModal()
    }
});

let donateSectionTwo = 0;
document.getElementById('donate-data-two').addEventListener('click', function () {
    const inputValueNumber = getInputElement('donate-text-two');
    const mainBalance = getInnerText('donate-amount');
    const donateMoneyTwo = getInnerText('donate-Money-two');

    if (isNaN(inputValueNumber)) {
        alert("Invalid Donation Amount");
        document.getElementById('donate-text-two').value = '';
        return
    }
    else if (inputValueNumber < 0) {
        alert("Negative Amount never Donate");
        document.getElementById('donate-text-two').value = '';
        return
    }
    else if (mainBalance < inputValueNumber) {
        alert("Insufficient balance in your account");
        document.getElementById('donate-text-two').value = '';
        return
    }
    else {
        let firstDonate = mainBalance - inputValueNumber;
        donateSectionTwo += inputValueNumber;
        document.getElementById('donate-amount').innerText = firstDonate;
        document.getElementById('donate-Money-two').innerText = donateSectionTwo;
        document.getElementById('donate-text-two').value = '';

        const d = new Date();
        const div = document.createElement('div');
        div.classList.add('max-w-6xl', 'mx-auto',  'mt-10', 'border', 'p-5', 'sm:p-8', 'rounded-xl');
        div.innerHTML = `
            <h1 class="text-base font-bold">${inputValueNumber} Taka is Donated for Flood at Feni,Bangladesh</h1>
            <p>${d}</p>
        `;
        dataTwo.appendChild(div);

        const modal = document.getElementById('data-menu-2');
        modal.showModal()
    }
});

let donateSectionThree = 0;
document.getElementById('donate-data-three').addEventListener('click', function () {
    const inputValueNumber = getInputElement('donate-text-three');
    const mainBalance = getInnerText('donate-amount');
    const donateMoneyThree = getInnerText('donate-Money-three');

    if (isNaN(inputValueNumber)) {
        alert("Invalid Donation Amount");
        document.getElementById('donate-text-three').value = '';
        return
    }
    else if (inputValueNumber < 0) {
        alert("Negative Amount never Donate");
        document.getElementById('donate-text-three').value = '';
        return
    }
    else if (mainBalance < inputValueNumber) {
        alert("Insufficient balance in your account");
        document.getElementById('donate-text-three').value = '';
        return
    }
    else {
        let firstDonate = mainBalance - inputValueNumber;
        donateSectionThree += inputValueNumber;
        document.getElementById('donate-amount').innerText = firstDonate;
        document.getElementById('donate-Money-three').innerText = donateSectionThree;
        document.getElementById('donate-text-three').value = '';

        const d = new Date();
        const div = document.createElement('div');
        div.classList.add('max-w-6xl', 'mx-auto',  'mt-10', 'border', 'p-5', 'sm:p-8', 'rounded-xl');
        div.innerHTML = `
            <h1 class="text-base font-bold">${inputValueNumber} Taka is Donated for Aid for Injured in the Quota Movement</h1>
            <p>${d}</p>
        `;
        dataTwo.appendChild(div);

        const modal = document.getElementById('data-menu-3');
        modal.showModal()
    }
});


document.getElementById('data-History').addEventListener('click', function(){
    dataHistory.classList.add('bg-buttonColor');
    dataHistory.classList.remove('bg-white');
    dataButton.classList.add('bg-white');
    dataButton.classList.remove('bg-buttonColor');

    dataTwo.classList.remove('hidden');
    dataOne.classList.add('hidden');
    footer.classList.add('hidden');
});

document.getElementById('data-Button').addEventListener('click', function(){
    dataButton.classList.remove('bg-white');
    dataButton.classList.add('bg-buttonColor');
    dataHistory.classList.remove('bg-buttonColor');
    dataHistory.classList.add('bg-white');

    dataTwo.classList.add('hidden');
    dataOne.classList.remove('hidden');
    footer.classList.remove('hidden');
});


document.getElementById("button-blog").addEventListener('click', function() {
    window.location.href = "./blog.html";
});

document.getElementById('button-home').addEventListener("click", function() {
    window.location.href = "./index.html";
});
