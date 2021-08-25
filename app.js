
function BMIcalc() {

    const height = document.getElementById('height').value
    const weight = document.getElementById('weight').value
    const advice = document.getElementById('advice')

    
    let BMI = (weight / (height * height)).toFixed(2)
    document.getElementById('BMIvalue').value = BMI;

    if(BMI > 25) {
        advice.innerHTML = `Your BMI is ${BMI}, indicating your weight is in the Overweight category for adults of your height.`
    } else if (BMI > 18 && BMI < 25) {
        advice.innerHTML = `Your BMI is ${BMI}, indicating your weight is in the Normal category for adults of your height.`
    } else {
        advice.innerHTML = `Your BMI is ${BMI}, indicating your weight is in the Underweight category for adults of your height.`
    }
}
