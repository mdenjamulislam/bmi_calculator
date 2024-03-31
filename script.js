// BMI Calculator

// BMI = weight / (height * height)

const bmiCalculate = document.getElementById('calculate').addEventListener("click", function (e) {
    e.preventDefault();
    let weight = parseInt(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value)/3.2808;
    const bmi_result = document.getElementById('bmi-result');

    let bmi = (weight / (height * height)).toFixed(1);

    let category;

    if (bmi < 18.5) {
        category = "Underweight 😒";
        console.log(category, bmi);
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal Weight 😍";
        console.log(category, bmi);
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight 😮";
        console.log(category, bmi);
    }
    else {
        category = "Obese 😱";
        console.log(category);
    }

    bmi_result.textContent = bmi+"BMI " + category;

});