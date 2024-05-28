function calculateBmiMetric() {
    const height = parseFloat(document.querySelector('#height-cm').value) / 100;
    const weight = parseFloat(document.querySelector('#weight-kg').value);

    const bmi = weight / (height ** 2);
    document.querySelector('.result__welcome').innerHTML = bmi;
}

