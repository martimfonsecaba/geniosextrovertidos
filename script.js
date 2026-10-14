// Carrossel
const slides = document.querySelectorAll(".carrossel-slide");
if (slides.length > 0) {
    let atual = 0;
    function mostrarSlide(index) {
        slides.forEach((s) => s.classList.remove("ativo"));
        slides[index].classList.add("ativo");
    }
    function proximo() { atual = (atual + 1) % slides.length; mostrarSlide(atual); }
    function anterior() { atual = (atual - 1 + slides.length) % slides.length; mostrarSlide(atual); }
    setInterval(proximo, 4700);
}

// Contadores
const contadores = document.querySelectorAll('.stat-numero');
if (contadores.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = +el.getAttribute('data-target');
                let atual = 0;
                const incremento = Math.ceil(target / 60);
                const intervalo = setInterval(() => {
                    atual += incremento;
                    if (atual >= target) { el.textContent = target; clearInterval(intervalo); }
                    else { el.textContent = atual; }
                }, 20);
                observer.unobserve(el);
            }
        });
    });
    contadores.forEach(c => observer.observe(c));
}

// EmailJS
if (document.getElementById("formContacto")) {
    emailjs.init("wBgry6vdqAVz-ACm0");
    document.getElementById("formContacto").addEventListener("submit", function(e) {
        e.preventDefault();
        emailjs.sendForm("service_6d7g7dj", "template_yhrhib7", this)
            .then(function() {
                document.getElementById("estadoMensagem").innerText = "Mensagem enviada com sucesso!";
                document.getElementById("estadoMensagem").style.color = "white";
            }, function(error) {
                console.log("ERRO EmailJS:", error);
                document.getElementById("estadoMensagem").innerText = "Erro: " + JSON.stringify(error);
                document.getElementById("estadoMensagem").style.color = "red";
            });
    });
}

// FAQ
function toggleFaq(el) {
    const item = el.parentElement;
    item.classList.toggle('aberto');
}

// Redes sociais
function facebook() {
    window.open("https://www.facebook.com/?locale=pt_PT", "_blank"); // ← ponto, não vírgula
}
function instagram() {
    window.open("https://www.instagram.com/genios.extrovertidos/", "_blank");
}

// Hamburger
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navMenu.classList.toggle('open');
    });
    navMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navMenu.classList.remove('open');
        });
    });
}