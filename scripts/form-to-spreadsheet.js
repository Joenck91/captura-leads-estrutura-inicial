export default function submitForm() {
  const form = document.getElementById('formulario');
  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append('nome', form.nome.value);
    formData.append('email', form.email.value);
    formData.append('telefone', form.telefone.value);

    const response = await fetch('https://script.google.com/macros/s/AKfycbwtZ1P6c-owNIKoa2GT-c9IbScYzs5cfWIm66GQ6SmwXIR_dmOqqgWIiTeD2cuvOB_w/exec', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      alert('Enviado com sucesso!');
      form.reset();
    } else {
      alert('Erro ao enviar. Tente novamente.');
    }
  });
};