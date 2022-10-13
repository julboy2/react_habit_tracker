import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';


class App extends Component {
  state = {
        habits : [
            { id:1, name : 'Reading' , count: 0} ,
            { id:2, name : 'Running' , count: 0} ,
            { id:3, name : 'Coding' , count: 0} ,
        ],
    };

    handleIncrement = (habit) =>{
        // 이렇게 사용하면 리액트에서는 +1 했는지 모르기때문에 꼭 리액트 함수(setState) 를 사용해야함
        // 이렇게 사용해야 state 가 변경이되어서  render을 다시 호출함
        //this.state.count++;
        //this.setState({ count : this.state.count + 1})

        // const habits =[...this.state.habits];
        // const index = habits.indexOf(habit);
        // habits[index].count++;

        const habits = this.state.habits.map(item =>{
          // PureComponent 를 썻을때는 새로운 habit 를 만들어준다.
          // id가 다를경우 기존 object  를 return 해서 re render 를 막아준다.
          if(item.id === habit.id){
            return {...habit, count: habit.count +1}
          }

          return item;
        });

        this.setState({ habits });
    }

    handleDecrease = (habit) =>{
        // const count = this.state.count - 1;
        // this.setState({ count : count < 0 ? 0 : count});

        // const habits =[...this.state.habits];
        // const index = habits.indexOf(habit);
        // const count =habits[index].count-1;
        // habits[index].count = count < 0 ? 0 : count;

        const habits = this.state.habits.map(item =>{
          if(item.id === habit.id){
            const count = habit.count -1
            return {...habit , count : count < 0 ? 0 : count};
          }

          return item;
        })
        
        this.setState({ habits });
    }

    handleDelete = (habit) =>{
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({habits});
    }

    handleAdd = name =>{
      const habits = [...this.state.habits,{id: Date.now() , name, count: 0}];
      this.setState({habits});
    }

    handleReset =() =>{
      const habits = this.state.habits.map(habit =>{
        // 기존값이 0이 아닐때만 새로운 habit 을 return 해줌
        if(habit.count !==0){
          return {...habit, count:0}
        }

        return habit;
      });
      this.setState({habits});
    };

  render() {
    return (
      <><Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} /><Habits
        habits={this.state.habits}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrease}
        onDelete={this.handleDelete} 
        onAdd={this.handleAdd}
        onReset={this.handleReset}
        /></>
    )
  }
}

export default App;
