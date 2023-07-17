```javascript
let forumData = [];

// Function to create a new thread
function createThread(author, title, content) {
    let newThread = {
        id: forumData.length + 1,
        author: author,
        title: title,
        content: content,
        comments: [],
        upvotes: 0,
        downvotes: 0
    };
    forumData.push(newThread);
    updateForum();
}

// Function to post a comment
function postComment(threadId, author, content) {
    let thread = forumData.find(thread => thread.id === threadId);
    if (thread) {
        let newComment = {
            id: thread.comments.length + 1,
            author: author,
            content: content,
            upvotes: 0,
            downvotes: 0
        };
        thread.comments.push(newComment);
        updateForum();
    }
}

// Function to upvote a thread or comment
function upvote(type, id, commentId) {
    let item = forumData.find(item => item.id === id);
    if (item) {
        if (type === 'thread') {
            item.upvotes++;
        } else if (type === 'comment' && commentId) {
            let comment = item.comments.find(comment => comment.id === commentId);
            if (comment) {
                comment.upvotes++;
            }
        }
        updateForum();
    }
}

// Function to downvote a thread or comment
function downvote(type, id, commentId) {
    let item = forumData.find(item => item.id === id);
    if (item) {
        if (type === 'thread') {
            item.downvotes++;
        } else if (type === 'comment' && commentId) {
            let comment = item.comments.find(comment => comment.id === commentId);
            if (comment) {
                comment.downvotes++;
            }
        }
        updateForum();
    }
}

// Function to update the forum
function updateForum() {
    let forumContainer = document.getElementById('forumContainer');
    forumContainer.innerHTML = '';
    forumData.forEach(thread => {
        let threadElement = document.createElement('div');
        threadElement.innerHTML = `
            <h2>${thread.title}</h2>
            <p>${thread.content}</p>
            <p>Author: ${thread.author}</p>
            <p>Upvotes: ${thread.upvotes}</p>
            <p>Downvotes: ${thread.downvotes}</p>
            <button onclick="upvote('thread', ${thread.id})">Upvote</button>
            <button onclick="downvote('thread', ${thread.id})">Downvote</button>
        `;
        thread.comments.forEach(comment => {
            let commentElement = document.createElement('div');
            commentElement.innerHTML = `
                <p>${comment.content}</p>
                <p>Author: ${comment.author}</p>
                <p>Upvotes: ${comment.upvotes}</p>
                <p>Downvotes: ${comment.downvotes}</p>
                <button onclick="upvote('comment', ${thread.id}, ${comment.id})">Upvote</button>
                <button onclick="downvote('comment', ${thread.id}, ${comment.id})">Downvote</button>
            `;
            threadElement.appendChild(commentElement);
        });
        forumContainer.appendChild(threadElement);
    });
}
```