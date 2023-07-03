const commentFormHandler = async (event) => {
    event.preventDefault();
    
    console.log('Login Javascript Triggered')
    // getting info from html page
    const content = document.querySelector('#content').value.trim();
    const blog_id = document.querySelector('#title').name;


    if (content) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ content, blog_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

const showFormHandler = async (event) => {
    event.preventDefault();
document.querySelector("#comment-form").style.visibility="visible"
document.querySelector("#add-comment").style.visibility="hidden"

    document.querySelector("#comment-form").addEventListener("submit", commentFormHandler);
};

document.querySelector("#add-comment").addEventListener("click", showFormHandler);