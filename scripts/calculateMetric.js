const result = document.querySelector('.box__result');

function describeBmiRange (bmi) {
    let result;

    if (bmi < 18.5)
        result = 'underweight';

    else if (18.5 >= bmi > 25)
        result = 'healthy weight';

    else if (25 >= bmi > 30)
        result = 'overweight';

    else if (bmi >= 30)
        result = 'obese';

    return result;
}

function calculateIdealWeight(height, weight) {
    const bmi = calculateBmi(height, weight);

    
}

function calculateBmi(height, weight) {
    const bmi = weight / (height ** 2);
    return bmi;
    // const bmiRange = describeBmiRange(bmi);
    // result.innerHTML = `
    // <div class="box__result__container">
    //     <p class="result-intro">Your BMI is...</p>
    //     <p class="result">${bmi.toFixed(2)}</p>
    // </div>

    // <div class="box__result__container">
    //     <p class="result-description">Your BMI suggests you're a ${bmiRange}. Your ideal weight is between <span>63.3kgs - 85.2kgs.</span></p>
    // </div>`;

    // result.style.flexDirection = 'row';
}







function displayBmi(height, weight) {
    const bmi = (height > 0 && weight > 0) ? (weight / (height ** 2)) : 0;
    result.innerHTML = `
    <div class="box__result__container">
        <p class="result-intro">Your BMI is...</p>
        <p class="result">${bmi.toFixed(2)}</p>
    </div>

    <div class="box__result__container">
        <p class="result-description">Your BMI suggests you're a ${bmiRange}. Your ideal weight is between <span>63.3kgs - 85.2kgs.</span></p>
    </div>`;
    result.style.flexDirection = 'row';
}

function showError(message) {
    result.innerHTML = `
    <div class="box__result__container">
        <p class="result-error">${message}</p>
    </div>`;
    result.style.flexDirection = 'column';
}

function handleInputMetric() {
    const heightMetricInput = parseFloat(document.querySelector('#height-cm').value) / 100 || 0;
    const weightMetricInput = parseFloat(document.querySelector('#weight-kg').value) || 0;

    displayBmi(heightMetricInput, weightMetricInput);
}

function handleBlurMetric() {
    const heightMetricInput = parseFloat(document.querySelector('#height-cm').value) / 100;
    const weightMetricInput = parseFloat(document.querySelector('#weight-kg').value);

    if (!isNaN(heightMetricInput) && heightMetricInput > 0 && !isNaN(weightMetricInput) && weightMetricInput > 0) {
        calculateBmi(heightMetricInput, weightMetricInput);
    } else {
        showError('Please enter valid height and weight values.');
    }
}

let heightCompleted = false;
let weightCompleted = false;

function handleHeightBlur() {
    heightCompleted = true;
    if (heightCompleted && weightCompleted) {
        handleBlurMetric();
    }
}

function handleWeightBlur() {
    weightCompleted = true;
    if (heightCompleted && weightCompleted) {
        handleBlurMetric();
    }
}

document.querySelector('#height-cm').addEventListener('input', handleInputMetric);
document.querySelector('#weight-kg').addEventListener('input', handleInputMetric);

document.querySelector('#height-cm').addEventListener('blur', handleHeightBlur);
document.querySelector('#weight-kg').addEventListener('blur', handleWeightBlur);
