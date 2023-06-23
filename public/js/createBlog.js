// links to createBlog.handlebars


const createFormHandler = async (event) => {
    event.preventDefault();
    console.log('Login Javascript Triggered')
    const title = document.querySelector('#title-input').value.trim();
    const body = document.querySelector('#body-input').value.trim();

    if (title && body) {
        const response = await fetch('/api/blog', {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector("#create-form").addEventListener("submit", createFormHandler);