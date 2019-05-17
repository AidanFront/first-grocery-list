import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      editing: false, 
      comments: []
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

  // Javascrtipt here
  render() {
    return (
				<div>
          <button onClick={this.add.bind(null,'New Comment')} className="button-info create">Add New</button>
          <div>
            {/* {this.state.comments.map(this.eachComment)} */}
            dfjhs
          </div>
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

			// renderNormal: function () {
			// 	return (
			// 		<div className="commentContainer">
			// 			<div className="commentText">{this.props.children}</div>
			// 			<button onClick={this.edit} className="button-primary">Edit</button>
			// 			<button onClick={this.remove} className="button-danger">Remove</button>
			// 		</div>
			// 	);
			// },

			// renderForm: function () {
			// 	return (
			// 		<div className="commentContainer">
			// 			<textarea ref="newText" defaultValue={this.props.children}></textarea>
			// 			<button onClick={this.save} className="button-success">Save</button>
			// 		</div>
			// 	);
			// },
      render() {
          {
            if (this.state.editing) {
              // return this.renderForm();
              return (<div>RenderForm</div>);
            } else {
              // return this.renderNormal();
              return (<div>RenderNormal</div>);
            }
          }
  }
}

		// var Board = React.createClass({

		// 	getInitialState: function () {
		// 		return {
		// 			comments: []
		// 		}
		// 	},

		// 	add: function(text) {
		// 		console.log('add dsafjhgfd' + text);
		// 		var arr = this.state.comments;
		// 		arr.push(text);
		// 		this.setState({comments: arr});
		// 	},

		// 	removeComment: function (i) {
		// 		console.log('removing comments ' + i);
		// 		var arr = this.state.comments;
		// 		arr.splice(i, 1);
		// 		this.setState({comments: arr})
		// 	},

		// 	updateComment: function (newText, i) {
		// 		console.log('updating comment');
		// 		var arr = this.state.comments;
		// 		arr[i] = newText;
		// 		this.setState({comments: arr});
		// 	},

		// 	eachComment: function (text, i) {
		// 		return (
		// 			<Comment key={i} index={i} updateCommentText={this.updateComment} deleteFromBoard={this.removeComment}>
		// 				{text}
		// 			</Comment>
		// 			);	
		// 	},

		// 	render: function () {
		// 		return (

		// 		);
		// 	}
		// });


  export default Home;