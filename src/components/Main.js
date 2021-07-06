import React,{Component} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './Menu';
import DishDetailed from './DishDetailed';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';

class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      comments:COMMENTS,
      selectedDish:null
        }
  }
  onDishSelect(dishId) {
    this.setState({
        selectedDish: dishId
    });
}
  render(){
  return (
    <div >
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">
            Ristorante Con Fusion
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
      <DishDetailed
      dish={this.state.dishes.filter((dishes) => dishes.id===this.state.selectedDish)[0]}
      comment={this.state.comments.filter((comments) => comments.dishId===this.state.selectedDish)}
      />
    </div>
  );
  }
}

export default Main;