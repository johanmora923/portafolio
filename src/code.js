document.getElementById('logo__github').addEventListener('click',()=>{
    window.location.href = 'https://github.com/johanmora923'
})
document.getElementById('logo__linkedin').addEventListener('click',()=>{
    window.location.href = 'https://www.linkedin.com/in/johan-mora-3bb0082b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
})

document.getElementById("btn__contact").addEventListener('click',()=>{
    document.getElementById('form__container').style.display = "flex"
})
document.getElementById('btn__cv').addEventListener('click',()=>{
    const link = document.createElement('a');
    link.href = 'cvJohanMora.pdf';
    link.download = 'cvJohanMora.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link)
})

document.querySelector(".exit").addEventListener('click',(e)=>{
    document.getElementById('form__container').style.display = "none" 
});

document.querySelector('.btn__certificado1').addEventListener('click',()=>{
    window.location.href = 'https://freecodecamp.org/certification/johanmora923/responsive-web-design'
})
document.querySelector('.btn__certificado2').addEventListener('click',()=>{
    window.location.href = 'https://freecodecamp.org/certification/johanmora923/javascript-algorithms-and-data-structures-v8"'
})

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});




    



