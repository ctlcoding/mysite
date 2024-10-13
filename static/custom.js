window.onload = (e) => {
    if(document.URL.includes("salary")){
        const scroll_to_input_x = document.getElementById("salary_pred").getBoundingClientRect().left
        const scroll_to_input_y = document.getElementById("salary_pred").getBoundingClientRect().top
        window.scrollTo(x=scroll_to_input_x,y=scroll_to_input_y)
        // window.scrollTo(document.querySelector("input").clientTop)
    }
}

const pills = document.querySelectorAll('p');

setInterval(colorPills,5000);

// const colortx = [.9,.8,.7,.6,.5];

function colorPills(){
    pills.forEach((element) => {
        if(element.classList.contains("rounded-pill")){
            console.log(element)
            // element.classList.toggle("bg-pill")
            element.classList.toggle("bg-pill-2")
            // colortx.forEach(color => {
            //     element.style.color = "rgb(20, 100, 20, ${color})"
            // })

        }
    });
    console.log("next round");
}

// check if input is an integer less than 100

const myform = document.querySelector("form")

myform.addEventListener("submit",(e) => {
    e.preventDefault()
    const prediction = document.querySelector("input").value
    if(Number(prediction) >= 1 && Number(prediction) <= 30){
        myform.submit()
    } else {
        console.log("Enter another value")
        const error_message = document.getElementsByClassName("error");
        console.log(error_message);
        error_message[0].style.display = "block"
        error_message[0].textContent = "Enter value between 1 and 30"
        function clearError(){
            error_message[0].style.display = "none"
        }
        setTimeout(clearError,2000)        
        // error_message.textContent = "Hello"
    }
})