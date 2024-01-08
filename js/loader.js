const loader = document.getElementById('loader');
const spinner = document.getElementById('loader_spinner')

setTimeout(() => {
    loader.style.width = 0;
    spinner.style.display = 'none'
}, 1000);