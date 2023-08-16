
function Message() {
    // JSX: JavaScript XML
    const name = 'Ayodele';
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello The Man With No Name</h1>;
}

export default Message;