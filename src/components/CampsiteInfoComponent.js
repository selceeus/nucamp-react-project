import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCampsite({campsite}) {
    return (
        <div className='col-md-5 m-1'>
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
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
            </div>
        );
    } else {
        return <div></div>;
    }
}
    
function CampsiteInfo({campsite}) {

    if (campsite) {
        return (
            <div className="container-fluid">
                <div className="row">
                    <RenderCampsite campsite={campsite} />
                    <RenderComments comments={campsite.comments} />
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
}

export default CampsiteInfo;