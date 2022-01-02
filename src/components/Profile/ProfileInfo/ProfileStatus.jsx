import React from "react";

// На данный момент используется другая компонента.
// ProfileStatusWithHooks - все то же самое, но при помощи хуков.

class ProfileStatus extends React.Component {
    // Локальный state
    state = {
        editMode: false,
        status: this.props.status,
    }

    // Контекст обычных функций зависит от места вызова, а стрелочных от места определения.
    // Обработчик вызывается асинхронно, поэтому метод нужно создавать при помощи стрелочной функции.
    // state изменяется не напрямую, а через функцию setState.
    activateEditMode = () => {
        this.setState({editMode: true});
    }

    deactivateEditMode = () => {
        const {updateUserStatus} = this.props;
        this.setState({editMode: false});
        updateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }

    // Вызывается при изменении state или props
    componentDidUpdate(prevProps, prevState, nextProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                                  value={this.state.status}/></div>
                    : <div><span onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</span></div>
                }
            </div>
        )
    }
}

export default ProfileStatus;