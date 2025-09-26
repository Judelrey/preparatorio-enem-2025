// Configuração do link de compra
document.addEventListener('DOMContentLoaded', function() {
    const buyButton = document.getElementById('buyButton');
    
    if (buyButton) {
        buyButton.addEventListener('click', function() {
            // Substitua esta URL pelo seu link da Kiwify
            const kiwifyLink = "https://pay.kiwify.com.br/xOsFm6U";
            window.open(kiwifyLink, '_blank');
        });
    }
    
    // FAQ interativo
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                // Fecha todos os itens
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Abre/fecha o item clicado
                item.classList.toggle('active');
            });
        }
    });
    
    // Contador de tempo limitado
    function updateCountdown() {
        const countdownElement = document.getElementById('countdown');
        if (!countdownElement) return;
        
        const now = new Date();
        const targetDate = new Date(now);
        targetDate.setDate(now.getDate() + 3); // Oferta expira em 3 dias
        
        const timeDiff = targetDate - now;
        
        if (timeDiff > 0) {
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            
            countdownElement.textContent = 
                `⏰ Oferta expira em: ${days}d ${hours}h ${minutes}m`;
            countdownElement.style.color = '#e74c3c';
            countdownElement.style.fontWeight = 'bold';
        } else {
            countdownElement.textContent = "⏰ Oferta expirada!";
            countdownElement.style.color = '#999';
        }
    }
    
    // Iniciar contador
    updateCountdown();
    setInterval(updateCountdown, 60000); // Atualizar a cada minuto
    
    // Efeito de scroll suave para links internos (caso adicione algum)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Animação de entrada para elementos
    function animateOnScroll() {
        const elements = document.querySelectorAll('.feature-item, .testimonial, .faq-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Configurar elementos para animação
    document.querySelectorAll('.feature-item, .testimonial, .faq-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Disparar animação no carregamento e no scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

});
