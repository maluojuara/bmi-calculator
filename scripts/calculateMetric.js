// Utils

function calculateBmi(height, weight) {
    const bmi = weight / (height ** 2);
    return bmi;
}

function describeBmiRange (bmi) {
    let result;

    if (bmi < 18.5)
        result = 'underweight';

    else if (bmi >= 18.5 && bmi < 25)
        result = 'healthy weight';

    else if (bmi >= 25 && bmi < 30)
        result = 'overweight';

    else if (bmi >= 30)
        result = 'obese';

    return result;
}

function calculateIdealWeight(height) {
    const maxWeight = 24.9 * (height ** 2);
    const minWeight = 18.5 * (height ** 2);

    const idealWeight = `${minWeight.toFixed(1)}kgs - ${maxWeight.toFixed(1)}kgs.`;

    return idealWeight;
}

// DOM manipulation

function displayBmi (height, weight) {
    const result = document.querySelector('.box__result');
    const bmi = calculateBmi(height, weight);
    const bmiRange = describeBmiRange(bmi);
    const idealWeight = calculateIdealWeight(height);

    result.innerHTML = `
        <div class="box__result__container">
            <p class="result-intro">Your BMI is...</p>
            <p class="result">${bmi.toFixed(1)}</p>
        </div>

        <div class="box__result__container">
            <p class="result-description">Your BMI suggests you're a ${bmiRange}. Your ideal weight is between <span>${idealWeight}</span></p>
        </div>`;

    result.style.flexDirection = 'row';
}

// Input

function handleInput() {
    const heightMetricInput = parseFloat(document.querySelector('#height-cm').value) / 100 || 0;
    const weightMetricInput = parseFloat(document.querySelector('#weight-kg').value) || 0;
   
    displayBmi(heightMetricInput, weightMetricInput);
}

document.querySelector('#height-cm').addEventListener('input', handleInput);
document.querySelector('#weight-kg').addEventListener('input', handleInput);

// function showError(message) {
//     result.innerHTML = `
//     <div class="box__result__container">
//         <p class="result-error">${message}</p>
//     </div>`;
//     result.style.flexDirection = 'column';
// }
x


// function handleBlurMetric() {
//     const heightMetricInput = parseFloat(document.querySelector('#height-cm').value) / 100;
//     const weightMetricInput = parseFloat(document.querySelector('#weight-kg').value);

//     if (!isNaN(heightMetricInput) && heightMetricInput > 0 && !isNaN(weightMetricInput) && weightMetricInput > 0) {
//         calculateBmi(heightMetricInput, weightMetricInput);
//     } else {
//         showError('Please enter valid height and weight values.');
//     }
// }

// let heightCompleted = false;
// let weightCompleted = false;

// function handleHeightBlur() {
//     heightCompleted = true;
//     if (heightCompleted && weightCompleted) {
//         handleBlurMetric();
//     }
// }

// function handleWeightBlur() {
//     weightCompleted = true;
//     if (heightCompleted && weightCompleted) {
//         handleBlurMetric();
//     }
// }

// document.querySelector('#height-cm').addEventListener('blur', handleHeightBlur);
// document.querySelector('#weight-kg').addEventListener('blur', handleWeightBlur);
