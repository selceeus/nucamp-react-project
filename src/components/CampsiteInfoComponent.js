import React from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import CommentForm from './CommentForm';
import { Link } from 'react-router-dom';

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