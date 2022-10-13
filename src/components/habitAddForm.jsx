import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
    
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = event =>{
        // 브라우저 기본동작을 실행하지 않도록지정함
        event.preventDefault();
        const name = inputRef.current.value;
        // onAdd 는 habits.jsx 에서 선언되어있음
        name && props.onAdd(name);
        
        formRef.current.reset();
    }

    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className='add-input' placeholder='Habit' />
            <button className="add-button">Add</button>
        </form>
    );

});

export default HabitAddForm;
