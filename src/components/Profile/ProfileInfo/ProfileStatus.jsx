import React from "react";

class ProfileStatus extends React.Component {
    // Локальный state
    state = {
        editMode: false
    }

    // Контекст обычных функций зависит от места вызова, а стрелочных от места определения.
    // Обработчик вызывается асинхронно, поэтому метод нужно создавать при помощи стрелочной функции.
    // state изменяется не напрямую, а через функцию setState.
    activateEditMode = () => {
        this.setState({editMode: true});
    }

    deactivateEditMode = () => {
        this.setState({editMode: false});
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div><input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/></div>
                    : <div onDoubleClick={this.activateEditMode}><span>{this.props.status}</span></div>
                }
            </div>
        )
    }
}

export default ProfileStatus;