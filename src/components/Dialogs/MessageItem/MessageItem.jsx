import css from "./Message.module.css";

const MessageItem = (props) => {
    const {message, id} = props;
    return <div className={css.message}>{message}</div>
};

export default MessageItem;