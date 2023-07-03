// links to editBlog.handlebars

const editFormHandler = async (event) => {
    event.preventDefault();
    console.log('Login Javascript Triggered')
    const title = document.querySelector('#title-input').value.trim();
    const body = document.querySelector('#body-input').value.trim();

    // const id stores the {{name}} id value from editBlog.handlebars. 
    // document refers to the html page.
    //querySelector finds a specific object and element on the page.
const id= document.querySelector('#title-input').name;

    if (title && body) {
        const response = await fetch(`/api/blog/${id}`, {
            method: 'PUT',
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

document.querySelector("#edit-form").addEventListener("submit", editFormHandler);