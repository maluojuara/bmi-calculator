function imperialLogic() {
    // Utils
    function calculateBmi(feet, inches, stones, lbs) {
        const height = (feet * 12) + inches;
        const weight = (stones * 14) + lbs;
        const bmi = (weight / (height ** 2)) * 703;
        return bmi;
    }

    function describeBmiRange(bmi) {
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

    function calculateIdealWeight(feet, inches) {
        const height = (feet * 12) + inches;
        const maxWeight = 24.9 * (height ** 2) / 703;
        const minWeight = 18.5 * (height ** 2) / 703;
        const minStones = Math.floor(minWeight / 14);
        const minPounds = Math.floor(minWeight % 14);
        const maxStones = Math.floor(maxWeight / 14);
        const maxPounds = Math.floor(maxWeight % 14);
        const idealWeight = `${minStones}st ${minPounds}lbs - ${maxStones}st ${maxPounds}lbs.`;
        return idealWeight;
    }

    // DOM manipulation
    function displayBmi(feet, inches, stones, lbs) {
        const result = document.querySelector('.box__result');
        const bmi = calculateBmi(feet, inches, stones, lbs);
        const bmiRange = describeBmiRange(bmi);
        const idealWeight = calculateIdealWeight(feet, inches);

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
    function isValidInput(value) {
        return !isNaN(value) && value >= 0;
    }

    function handleInput() {
        const feetInput = parseFloat(document.querySelector('#height-ft').value);
        const inchesInput = parseFloat(document.querySelector('#height-in').value);
        const stonesInput = parseFloat(document.querySelector('#weight-st').value);
        const lbsInput = parseFloat(document.querySelector('#weight-lbs').value);

        if (!isValidInput(feetInput) || !isValidInput(inchesInput) || !isValidInput(stonesInput) || !isValidInput(lbsInput)) {
            document.querySelector('.box__result').innerHTML = "<p>Please enter non-negative numbers for all fields.</p>";
            return;
        }

        displayBmi(feetInput, inchesInput, stonesInput, lbsInput);
    }

    document.querySelector('#height-ft').addEventListener('input', handleInput);
    document.querySelector('#height-in').addEventListener('input', handleInput);
    document.querySelector('#weight-st').addEventListener('input', handleInput);
    document.querySelector('#weight-lbs').addEventListener('input', handleInput);
}
