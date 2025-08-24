export default function submitForm() {
  const form = document.getElementById('formulario');
  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Cria os dados do formulário
    const formData = new URLSearchParams();
    formData.append('nome', form.nome.value);
    formData.append('email', form.email.value);
    formData.append('telefone', form.telefone.value);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwtZ1P6c-owNIKoa2GT-c9IbScYzs5cfWIm66GQ6SmwXIR_dmOqqgWIiTeD2cuvOB_w/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formData.toString()
      });

      // Checa se o Apps Script respondeu OK
      const text = await response.text();
      if (response.ok && text === "OK") {
        alert('Enviado com sucesso!');
        form.reset();
      } else {
        console.error('Resposta do Web App:', text);
        alert('Erro ao enviar. Verifique os logs do Apps Script.');
      }
    } catch (err) {
      console.error('Erro no fetch:', err);
      alert('Erro ao enviar. Verifique a conexão ou o Web App.');
    }
  });
}
