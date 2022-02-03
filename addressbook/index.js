fetch('https://randomuser.me/api/')
.then(response => response.json())
.then(data => {
    console.log(data.results[0])

const contact = document.getElementById('contact');
const infoBtn = document.getElementById('displayInfo');
const contactInfoDisplay = document.getElementById('contactInfo');
const nextBtn = document.getElementById('nextContact');

                
contact.innerHTML = 
`<img src="${data.results[0].picture.medium}" alt="" />
<h4>Contact: ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}</h4>`
                                    
                
infoBtn.addEventListener('click', () => {
contactInfoDisplay.innerHTML = `
<ul><li>DOB: ${data.results[0].dob.date}</li>
<li>Age: ${data.results[0].dob.age}</li>
<li>Phone Number: ${data.results[0].phone}</li>
<li>Email: ${data.results[0].email}</li>
</ul>`
    })
}) 