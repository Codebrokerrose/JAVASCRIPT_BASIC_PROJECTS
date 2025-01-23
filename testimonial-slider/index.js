const testimonials = [
    {
        name: "Cheris G",
        photoUrl: "https://media.istockphoto.com/id/1434212178/photo/middle-eastern-lady-using-laptop-working-online-sitting-in-office.webp?b=1&s=612x612&w=0&k=20&c=-a7kN9ndCDdQEvklOFxJbmcvWOJ9sQQ8ZxvE64AsDEE=",
        text: "I have been a loyal customer of apple for many years now and I can confidently say that they have never failed to impress me."
    },
    {
        name: "Lili Jason",
        photoUrl:"https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww",
        text: " From their innovative products to their exceptional customer service, apple truly stands out in the tech industry. "
    },
    {
        name: "Lili Jason",
        photoUrl:"https://images.unsplash.com/photo-1521566652839-697aa473761a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        text: " The quality and reliability of their products are unmatched, and I have never encountered any major issues with any of my apple devices. The user-friendly interface and seamless integration between devices make my life so much easier.  "
    }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const {name, photoUrl ,text} =
    testimonials[idx];
    imgEl.src=photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if(idx === testimonials.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial()
    }, 2000);
}