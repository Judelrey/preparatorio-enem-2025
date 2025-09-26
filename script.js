document.addEventListener('DOMContentLoaded', function() {
    // Configuração dos botões de compra
    const buyButtons = document.querySelectorAll('#buyButton, #buyButtonBottom');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // SUBSTITUA PELO SEU LINK DA KIWIFY
            const kiwifyLink = "https://pay.kiwify.com.br/xOsFm6U";
            window.open(kiwifyLink, '_blank');
        });
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
            
            countdownElement.textContent = `⏰ Oferta expira em: ${days}d ${hours}h ${minutes}m`;
        } else {
            countdownElement.textContent = "⏰ Oferta expirada!";
        }
    }
    
    // Iniciar contador
    updateCountdown();
    setInterval(updateCountdown, 60000);
    
    // Animação de scroll suave
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    document.querySelectorAll('.banner-image, .content-grid, .benefits-grid, .purchase-box').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
