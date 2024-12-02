function copyToClipboard() {
    const codeContainer = document.querySelector('.code-container pre').innerText;
    navigator.clipboard.writeText(codeContainer).then(() => {
        alert('Código copiado al portapapeles');
        }, (err) => {
                alert('Error al copiar el código: ', err);
        });
}
