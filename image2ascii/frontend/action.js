document.getElementById('uploadForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const fileInput = document.getElementById('file');
  const file = fileInput.files[0];

  const formData = new FormData();
  formData.append('file', file);

  fetch('http://127.0.0.1/upload', {
      method: 'POST',
      body: formData
  })
      .then(response => {
          if (response.ok) {
              return response.json();
          }
          throw new Error('Network response was not ok.');
      })
      .then(data => {
          console.log(data);
      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
});