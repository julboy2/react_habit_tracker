import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    handleIncrement = () =>{
        // 이렇게 사용하면 리액트에서는 +1 했는지 모르기때문에 꼭 리액트 함수(setState) 를 사용해야함
        // 이렇게 사용해야 state 가 변경이되어서  render을 다시 호출함
        //this.state.count++;
        //this.setState({ count : this.state.count + 1})

        this.props.onIncrement(this.props.habit);
    }

    handleDecrease = () =>{
        this.props.onDecrement(this.props.habit);
    }

    handleDelete = () =>{
        this.props.onDelete(this.props.habit);
    }

    

    render() {
        const { name ,count } = this.props.habit;
        //const {count} = this.props;   // habits.jsx 에서 count 를 props 로 받는다.
        return (
            <>
                <li className='habit'>
                    <span className='habit-name'>{name}</span>
                    <span className='habit-count'>{count}</span>
                    <button className='habit-button habit-increase' onClick={this.handleIncrement}>
                        <i className="fa-solid fa-square-plus"></i>
                    </button>
                    <button className='habit-button habit-decrease' onClick={this.handleDecrease}>
                        <i className="fa-solid fa-square-minus"></i>
                    </button>
                    <button className='habit-button habit-delete' onClick={this.handleDelete}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </li>
                
            </>
        );
    }
}

export default Habit;