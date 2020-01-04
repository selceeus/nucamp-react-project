import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends React.Component {
    

    renderCampsite() {
        return (
            <div className='col-md-5 m-1'>
                <Card>
                    <CardImg top src={this.props.campsite.image} alt={this.props.campsite.name} />
                    <CardBody>
                        <CardTitle>{this.props.campsite.name}</CardTitle>
                        <CardText>{this.props.campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {

        if (this.props.campsite.comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {
                        this.props.campsite.comments.map( comment => {
                            return(
                                <div key={comment.id}>
                                    <p>
                                        {comment.text}<br />
                                        <i>
                                            -- {comment.author}, 
                                            {
                                                new Intl.DateTimeFormat('en-US', 
                                                { year: 'numeric', month: 'short', day: '2-digit'})
                                                .format(new Date(Date.parse(comment.date)))
                                            }
                                        </i>
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            );
        } else {
            return <div></div>;
        }
    }
    
    render() {

        const { campsite } = this.props;

        if (campsite) {
            return (
                <div className="row">
                    {this.renderCampsite()}
                    {this.renderComments()}
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}

export default CampsiteInfo;