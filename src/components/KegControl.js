import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import Keg from './Keg';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleEditClick = () => {
    this.setState({editing:true});
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, flavor, quantity } = newKeg;
    const action = {
      type: 'ADD_KEG',
      id,
      name,
      brand,
      price,
      flavor,
      quantity,
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const {  id, name, brand, price, flavor, quantity } = kegToEdit;
    const action = {
      type: 'ADD_KEG',
      id,
      name,
      brand,
      price,
      flavor,
      quantity,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id,
    }
    dispatch(action);
    this.setState({
      selectedKeg: null
    });
  }

  handleSellingPint = (sell) => {
    const selectedKeg = this.state.selectedKeg;
    let newQuantity;
    if (sell) {
      newQuantity = Object.assign({}, selectedKeg, { quantity: parseInt(selectedKeg.quantity) + 1});
    } else {
      newQuantity = Object.assign({}, selectedKeg, { quantity: parseInt(selectedKeg.quantity) - 1});
    }

    const newKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(newQuantity);
    this.setState({
      masterKegList: newKegList,
      selectedKeg: newQuantity
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList}/>
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg} onClickingEdit = {this.handleEditClick} onClickingSell={this.handleSellingPint}/>
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList = {this.state.masterKegList} onKegSelection = {this.handleChangingSelectedKeg}/>;
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

KegControl = connect()(KegControl);

export default KegControl;