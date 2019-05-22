import React, { Component } from 'react';

const textAreaNameStyle = { 
  height : '30px',
  width: '120px'
}
const textAreaPriceStyle = { 
  height : '30px', 
  width: '50px'
}
// const textAreaCategoryStyle = { height : '30px' }
const inputNameStyle = { width : '120px' }
const inputPriceStyle = { width : '50px' }


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      groceries: [
        {editing: true, name: "Potatoe", price: "1", "categories": []},
        {editing: false, name: "Apple", price: "1", "categories": ["Fruit", "Bio"]},
      ],
      filter: ""
    };
  }
  
  add(text) {
    const arr = this.state.groceries;
    const newlist = arr.concat(
      { editing: false, 
        name: this.refs.newName.value, 
        price: this.refs.newPrice.value, 
        "categories": [this.refs.newCategory.value]}
      );
    this.setState({groceries: newlist});
  }

  
  editingFalse(index, event) {
    this.setState({...this.state, groceries : this.state.groceries.map((itemEach,idx) => {
      return {...itemEach, editing: false} 
    })
  })}
  
  editingTrue(index, event) {
    this.setState({...this.state, groceries : this.state.groceries.map((itemEach,idx) => {
      if (index === idx) {
        return {...itemEach, editing: true} 
      } else {
        return itemEach
      }
    })
  })}
  
  upDateName(index, event) {
    this.setState({...this.state, groceries : this.state.groceries.map((itemEach,idx) => {
      if (index === idx) {
        return {...itemEach, name: event.currentTarget.value} 
      } else {
        return itemEach
      }
    })
  })}
  
  upDatePrice(index, event) {
    this.setState({...this.state, groceries : this.state.groceries.map((itemEach,idx) => {
      if (index === idx) {
        return {...itemEach, price: event.currentTarget.value} 
      } else {
        return itemEach
      }
    })
  })}

  upDateCategory(index, event) {
    this.setState({...this.state, groceries : this.state.groceries.map((itemEach,idx) => {
      if (index === idx) {
        return {...itemEach, categories: event.currentTarget.value.split(",")} 
      } else {
        return itemEach
      }
    })
  })}
  
  removeItem(index, event) {
    this.setState({...this.state, groceries : this.state.groceries.filter((itemEach,idx) => {
      return index !== idx
    })})
  }
  
  categoryFilter(category, event) {
    this.setState({...this.state, filter: category })
  }
    render() {
    
    return (
				<div className="p-5">
          <h1>Grocery List</h1>
          <div className="d-inline-flex justify-content-center mb-2 p-3">
            <div className="d-inline-flex">
              <span className="mr-1">Name:</span><textarea ref="newName" className="mr-2" style={textAreaNameStyle}></textarea>
              <span className="mr-1">Price:</span><textarea ref="newPrice" className="mr-2" style={textAreaPriceStyle}></textarea>
              <span className="mr-1">Category:</span><textarea ref="newCategory" className="mr-2" style={textAreaNameStyle}></textarea>
            </div>
            <p><button onClick={this.add.bind(this)} className="button-info btn-success">Add New</button></p>
          </div>
          <div className="border px-1 py-2">
            <h3>The Board</h3>
              { this.state.groceries.map((eachItem, index) => {
                return (
                  <div key={index}>
                    <div className="border d-flex justify-content-between p-1">
                      <div className="pl-2">
                        <strong><span>{eachItem.name}</span></strong>
                        <span className="pl-2">$ {eachItem.price}</span>
                        <span className="d-inline-flex pl-2">
                          {eachItem.categories.map((category, indexCategory) => 
                            (<button key={indexCategory} onClick={this.categoryFilter.bind(this, category)} className="text-warning">{category}&nbsp;</button>)
                          )}
                        </span>
                      </div>
                      <div className="pr-2">
                          { 
                            eachItem.editing
                            ?
                            <div className="">
                                <label className="mx-1">Name:</label>
                                <input value={eachItem.name} onChange={this.upDateName.bind(this,index)} style={inputNameStyle}/>
                                <label className="mx-1">Price:</label>
                                <input value={eachItem.price} onChange={this.upDatePrice.bind(this,index)} style={inputPriceStyle}/>
                                <label className="mx-1">Category:</label>
                                <input value={eachItem.categories.join(", ")} onChange={this.upDateCategory.bind(this,index)} style={inputNameStyle}/>
                                <button onClick={this.editingFalse.bind(this,index)} className="button-success"  className="ml-2 btn-success">Save</button>
                            </div>
                            :
                            <div className="">
                              <button onClick={this.editingTrue.bind(this,index)} className="btn-primary mr-2">Edit</button>
                              <button onClick={this.removeItem.bind(this,index)}className="btn-danger">Remove</button>
                            </div>
                          }
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
          <div className="border px-1 py-2 mt-5">
              <h3 className="">Filtered List</h3>
              { this.state.groceries.filter(groceryItem => groceryItem.categories.some(category => category === this.state.filter)).map((groceryItem , index) => {
                return (
                    
                      <div className="border d-flex justify-content-between p-1">
                          <div className="pl-2">
                            <strong><span>{groceryItem.name}</span></strong>
                            <span className="pl-2">$ {groceryItem.price}</span>
                            <span className="d-inline-flex pl-2">
                              {groceryItem.categories.map((category, indexCategory) => 
                                (<button key={indexCategory} onClick={this.categoryFilter.bind(this, category)} className="text-warning">{category}&nbsp;</button>)
                              )}
                            </span>
                          </div>
                        </div>
                    
                )
              })}
          </div>
          {JSON.stringify(this.state)}
        </div>
    );
  }
}



  export default Home;