import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Row, Button, Label, Modal, ModalHeader, ModalBody  } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            rating: '',
            author: '',
            text: '',
            touched: {
                author: false
            }
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
    }


    render() {
        return(
            <div className="comment-form">

                <Button outline onClick={this.toggleModal}>
                    <i className="fa fa-pencil fa-lg" /> Submit Comment
                </Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <LocalForm onSubmit={values => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="rating">Rating</Label>
                                    <Control.select 
                                        model=".rating"
                                        id="rating" 
                                        name="rating"
                                        className="form-control"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="author">Your Name</Label>
                                    <Control.text 
                                        model=".author" 
                                        id="author" 
                                        name="author"
                                        placeholder="Your Name" 
                                        className="form-control"
                                        validators={{
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Row>
                                <Row className="form-group">
                                <Label htmlFor="text">Comment</Label>
                                    <Control.textarea 
                                        model=".text" 
                                        id="text" 
                                        name="text"
                                        className="form-control"
                                        rows="6"
                                    />
                                </Row>
                                <Row className="form-group">
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Row>
                            </LocalForm>
                        </div>
                    </ModalBody>
                </Modal>

            </div>
        );
    }
}

function RenderCampsite({campsite}) {
    return (
        <div className='col-md-5 m-1'>
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {
                    comments.map( comment => {
                        return(
                            <div key={comment.id}>
                                <p>
                                    {comment.text}<br />
                                    <i>
                                        -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse( comment.date)))}
                                    </i>
                                </p>
                            </div>
                        )
                    })
                }
                <CommentForm />
            </div>
        );
    } else {
        return <div></div>;
    }
}
    
function CampsiteInfo({campsite, comments}) {

    if (campsite) {
        return (
            <div className="container">
                <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/directory">Directory</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {campsite.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <h2>{campsite.name}</h2>
                    <hr />
                </div>
            </div>
                <div className="row">
                    <RenderCampsite campsite={campsite} />
                    <RenderComments comments={comments} />
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
}

export default CampsiteInfo;