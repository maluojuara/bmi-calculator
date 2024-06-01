const metricRadio = document.getElementById('metric');
const imperialRadio = document.getElementById('imperial');
const boxMeasureInput = document.querySelector('.box__measure-input');

let selectedSystem = 'metric';

function createMetricInputs() {
    boxMeasureInput.innerHTML = `
    <div class="measure-input-height">
        <label for="height">Height</label>
        <div class="inputs-box">
            <div class="input-with-unit">
                <input type="text" id="height-cm" required maxlength="4" value="0">
                <span id="height-unit">cm</span>
            </div>
        </div>
    </div>

    <div class="measure-input-weight">
        <label for="weight">Weight</label>
        <div class="inputs-box">
            <div class="input-with-unit">
                <input type="text" id="weight-kg" required maxlength="4" value="0">
                <span id="weight-unit">kg</span>
            </div>
        </div>
    </div>
    `;

    boxMeasureInput.style.flexDirection = 'row';
    
}

function createImperialInputs() {
    boxMeasureInput.innerHTML = `
    <div class="measure-input-height">
        <label for="height">Height</label>
  
        <div class="inputs-box">
            <div class="input-with-unit">
                <input type="text" id="height-ft" required maxlength="3" value="0">
                <span id="height-unit">ft</span>
            </div>
  
            <div class="input-with-unit">
                <input type="text" id="height-in" required maxlength="3" value="0">
                <span id="height-unit">in</span>
            </div>
        </div>
    </div>
  
    <div class="measure-input-weight">
        <label for="weight">Weight</label>
    
        <div class="inputs-box">
            <div class="input-with-unit">
                <input type="text" id="weight-st" required maxlength="3" value="0">
                <span id="weight-unit">st</span>
            </div>
        
            <div class="input-with-unit">
                <input type="text" id="weight-lbs" required maxlength="3" value="0">
                <span id="weight-unit">lbs</span>
            </div>
        </div>
    </div>`

    boxMeasureInput.style.flexDirection = 'column';
}

function validateNumericInput(input) {
    return !isNaN(input) && input >= 0;
}

function updateMetricOrImperial() {
    const result = document.querySelector('.box__result');
    result.innerHTML = `
        <p class="result__welcome">Welcome!</p>
        <p class="result__instruction">Enter your height and weight and you'll see your BMI result here</p>`;

    result.style.flexDirection = 'column';
    if (imperialRadio.checked) {
        createImperialInputs();
        selectedSystem = 'imperial';
        imperialLogic();
    } else if (metricRadio.checked) {
        createMetricInputs();
        selectedSystem = 'metric';
        metricLogic();
    }
}


metricRadio.addEventListener('change', updateMetricOrImperial);
imperialRadio.addEventListener('change', updateMetricOrImperial);


updateMetricOrImperial();