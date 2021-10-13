const Message = (props) => {
    let messageType = 'is-info';
    switch (props.type) {
        case 'is-warning':
        case 'is-danger':
        case 'is-success':
        case 'is-info':
        case 'is-link':
        case 'is-primary':
        case 'is-dark':
            messageType = props.type
    }

    return (
        <article className={'message ' + messageType} >
            <div className="message-header">
                <p>{props.header}</p>
            </div>
            <div className="message-body">
                {props.children}
            </div>
        </article>
    )
}

export default Message