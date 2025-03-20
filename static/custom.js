window.onload = (e) => {
    if(document.URL.includes("salary")){
        const scroll_to_input_x = document.getElementById("salary_pred").getBoundingClientRect().left
        const scroll_to_input_y = document.getElementById("salary_pred").getBoundingClientRect().top
        window.scrollTo(x=scroll_to_input_x,y=scroll_to_input_y)
    }
}

// const my_images = [
//     "{{ url_for('static',filename='red_img.jpg') }}",
//     "{{ url_for('static',filename='green_img.jpg') }}",
//     "{{ url_for('static',filename='blue_img.jpg') }}",
//     "{{ url_for('static',filename='merged_img.jpg') }}"
// ];

const my_images = [
    "/static/red_img.jpg",
    "/static/green_img.jpg"
];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

img_element = document.querySelector(".profile")

function imageSwitch(){

    console.log(img_element.src);
    new_image = my_images[getRandomNumber(0,my_images.length - 1)]
    img_element.setAttribute('src',new_image);
}

setInterval(imageSwitch,3000);

// const pills = document.querySelectorAll('p');

// setInterval(colorPills,5000);

// function colorPills(){
//     pills.forEach((element) => {
//         if(element.classList.contains("rounded-pill")){
//             console.log(element)
//             element.classList.toggle("bg-pill-2")
//             element.classList.toggle("bg-pill-1")
//         }
//     });
//     console.log("next round");
// }

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
    }
})