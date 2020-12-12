let editor = document.getElementById('editor');
editor.innerHTML = localStorage.getItem('Editor_' + ch);



function get_content () {
    let text = document.getElementById('editor');
    text = text.innerHTML;
    localStorage.setItem('Editor_' + ch, text);
}

document.addEventListener('keydown', get_content);

