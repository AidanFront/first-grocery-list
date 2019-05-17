import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      editing: false, 
      comments: [ "Lettuce" ]
    };
  }

  add(text) {
    console.log('add dsafjhgfd' + text);
    var arr = this.state.comments;
    arr.push(text);
    this.setState({comments: arr});
  }

  removeComment(i) {
    console.log('removing comments ' + i);
    var arr = this.state.comments;
    arr.splice(i, 1);
    this.setState({comments: arr})
  }

  updateComment(newText, i) {
    console.log('updating comment');
    var arr = this.state.comments;
    arr[i] = newText;
    this.setState({comments: arr});
  }

  render() {
    return (
				<div className="p-5">
          <h1>Grocery List</h1>
          <button onClick={this.add.bind(null,'New Comment')} className="button-info create mb-3 btn-success">Add New</button>
          <Board/>
        </div>
    );
  }
}




class Comment extends Component {

  constructor(props) {
    super(props);
    this.state = { editing: false }
  }
  edit() {
    this.setState({editing: true});
  }
  save() {
    console.log('got to saving comments');
    this.props.updateCommentText(this.refs.newText.value, this.props.index);
    this.setState({editing: false});
  }
  remove() {
    console.log("removing comment");
    this.props.deleteFromBoard(this.props.index)
  }

  render() {
      {
        if (this.state.editing) {
          // return this.renderForm();
          return (<RenderForm/>);
        } else {
          // return this.renderNormal();
          return (<RenderNormal/>);
        }
      }
  }
}



class RenderForm extends Component {
    render() {
      return (
        <div>
          <textarea ref="newText" defaultValue={this.props.children}></textarea>
          <button onClick={this.save} className="button-success">Save</button>
        </div>
    );
  }
}

class RenderNormal extends Component {
  render() {
    return (
					<div className="commentContainer">
						<div className="commentText">{this.props.children}</div>
						<button onClick={this.edit} className="btn-primary mr-2">Edit</button>
						<button onClick={this.remove} className="btn-danger">Remove</button>
					</div>
    );
  }
}

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      editing: false, 
      comments: [ "Apple" ]
    };
  }

    add(text) {
      console.log('add dsafjhgfd' + text);
      var arr = this.state.comments;
      arr.push(text);
      this.setState({comments: arr});
    }

    removeComment(i) {
      console.log('removing comments ' + i);
      var arr = this.state.comments;
      arr.splice(i, 1);
      this.setState({comments: arr})
    }

		updateComment(newText, i) {
      console.log('updating comment');
      var arr = this.state.comments;
      arr[i] = newText;
      this.setState({comments: arr});
		}

    eachComment(text, i) {
      return (
        <Comment key={i} index={i} updateCommentText={this.updateComment} deleteFromBoard={this.removeComment}>
          {text}
        </Comment>
        );	
    }
    
  render() {
      return (
        <div className="border px-5 py-2">
          <h3>The Board</h3>
          { this.state.comments.map((eachComment, index) => {
            return (
              <div className="d-flex">
                <div className="border d-block p-1">
                  <h4>{eachComment}</h4>
                  <Comment  key={index} updateCommentText={this.updateComment} deleteFromBoard={this.removeComment}/>
                </div>
              </div>
            )
          })}
        </div>
      );
    }
  }


  export default Home;