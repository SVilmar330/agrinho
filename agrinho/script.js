// Função para rolar suavemente para uma seção
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Função para abrir o modal com a imagem
function openModal(imgSrc) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const caption = document.getElementById('caption');

    modal.style.display = 'block';
    modalImg.src = imgSrc;
    caption.innerHTML = imgSrc;
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Função para enviar o formulário
function submitForm() {
    const form = document.getElementById('contact-form');
    const result = document.getElementById('form-result');

    result.innerHTML = "<p>Obrigado por entrar em contato! Sua mensagem foi recebida.</p>";
    form.reset();
}

// Adicionar um evento de clique para fechar o modal quando clicar fora da imagem
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}
