import css from "./Messages.module.css";

const Messages = () => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                <div className={css.dialog + ' ' + css.active}>
                    Captain Cartman
                </div>
                <div className={css.dialog}>
                    Peter Blood
                </div>
                <div className={css.dialog}>
                    Fleet Master Seahorn
                </div>
                <div className={css.dialog}>
                    Red Beard
                </div>
                <div className={css.dialog}>
                    Rock’n’Rolf
                </div>
                <div className={css.dialog}>
                    Pirate burb
                </div>
            </div>
            <div className={css.messages}>
                <div className={css.message}>Who's there?!</div>
                <div className={css.message}>Yarrrrr!</div>
                <div className={css.message}>Fifteen men on the dead man's chest! Yo-ho-ho, and a bottle of rum!</div>
            </div>
        </div>
    );
};

export default Messages;