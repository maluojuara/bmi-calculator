const metricRadio = document.getElementById('metric');
const imperialRadio = document.getElementById('imperial');
const boxMeasureInput = document.querySelector('.box__measure-input');

function createMetricInputs() {
    boxMeasureInput.innerHTML = `
    <div class="measure-input-height">
        <label for="height">Height</label>
        <div class="inputs-box">
            <div class="input-with-unit">
                <input type="text" id="height-cm" required>
                <span id="height-unit">cm</span>
            </div>
        </div>
    </div>

    <div class="measure-input-weight">
        <label for="weight">Weight</label>
        <div class="inputs-box">
            <div class="input-with-unit">
                <input type="text" id="weight-kg" required>
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
                <input type="text" id="height-ft" required>
                <span id="height-unit">ft</span>
            </div>
  
            <div class="input-with-unit">
                <input type="text" id="height-in" required>
                <span id="height-unit">in</span>
            </div>
        </div>
    </div>
  
    <div class="measure-input-weight">
        <label for="weight">Weight</label>
    
        <div class="inputs-box">
            <div class="input-with-unit">
                <input type="text" id="weight-st" required>
                <span id="weight-unit">st</span>
            </div>
        
            <div class="input-with-unit">
                <input type="text" id="weight-lbs" required>
                <span id="weight-unit">lbs</span>
            </div>
        </div>
    </div>`

    boxMeasureInput.style.flexDirection = 'column';
}

function updateMetricOrImperial() {
    imperialRadio.checked ? createImperialInputs() : createMetricInputs();
}

metricRadio.addEventListener('change', updateMetricOrImperial);
imperialRadio.addEventListener('change', updateMetricOrImperial);