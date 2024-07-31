const form = document.getElementById('form') 

form.addEventListener('submit', function(event) {
    event.preventDefault()
    const weight = document.getElementById('weight').value
    const height = document.getElementById('height').value

    const bmi = ( weight / (height * height)).toFixed(2)

    const value = document.getElementById('value')
    let description = ''

    value.classList.add('attention')

    document.getElementById('info').classList.remove('hidden')

    if (bmi < 18.5) {
        description = "Warning! You are underweight!"
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = "Good News! You are in perfect shape!"
    } else if (bmi > 25 && bmi <= 30) {
        description = "Warning! You are overweight!"
    } else if (bmi > 30 && bmi <= 35) {
        description = "Warning! You are moderate obesity!"
    } else if (bmi > 35 && bmi <= 40) {
        description = "Warning! You are severe obese!"
    } else {
        description = "Warning! You are morbidly obese!"
    }

    value.textContent = bmi.replace("." , ",")
    document.getElementById('description').textContent = description
})
    
       