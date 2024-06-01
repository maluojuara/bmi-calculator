function metricLogic () {

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

        if (bmi.toFixed(1).length > 6) {
            result.style.flexDirection = 'column';
            result.style.gap = '2rem';
            }
            

    }

    // Input

    function isValidInput(value) {
        return !isNaN(value) && value >= 0;
    }

    function handleInput() {
        const heightMetricInput = parseFloat(document.querySelector('#height-cm').value) / 100;
        const weightMetricInput = parseFloat(document.querySelector('#weight-kg').value);

        if (!isValidInput(heightMetricInput) || !isValidInput(weightMetricInput)) {
            document.querySelector('.box__result').innerHTML = "<p>Please enter non-negative numbers for all fields.</p>";
            return;
        }
    
        displayBmi(heightMetricInput, weightMetricInput);
    }

    document.querySelector('#height-cm').addEventListener('input', handleInput);
    document.querySelector('#weight-kg').addEventListener('input', handleInput);

}
