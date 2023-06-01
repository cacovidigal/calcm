
function somar(){
    var tn1 = window.document.getElementById('weight')
    var tn2 = window.document.getElementById('height')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 / (n2**2)*10000
    
    res.innerHTML = ` <p>Your BMI is ${s} look the BMI ranges and their weight classifications. </p>
    <p>- Underweight: BMI less than 18.5<p>
    <p> - Healthy weight: BMI 18.5 to 24.9<p>
    <p>- Overweight: BMI 25 to 29.9<p>
    <P>- Obese: BMI 30 or greater<p> `
}

/*Below you will find the BMI ranges and their weight classifications. Based on the person's BMI results, add their weight classification onto sentence "Your BMI suggests you’re" within the results component.

- Underweight: BMI less than 18.5
- Healthy weight: BMI 18.5 to 24.9
- Overweight: BMI 25 to 29.9
- Obese: BMI 30 or greater

É calculado dividindo o peso (em kg) pela altura ao quadrado (em metros).

Add the individual's healthy weight range based on the lower and upper BMI categorisations and the person's height.*/