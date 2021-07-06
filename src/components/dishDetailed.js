import React from 'react';
import { Card, CardBody, CardText, CardTitle, CardImg } from 'reactstrap';


  function RenderDish({dish}) {
    if (dish == null) {
      return (
        <div></div>
      )
    }
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle heading>
              {dish.name}
            </CardTitle>
            <CardText>
              {dish.description}
            </CardText>
          </CardBody>
        </Card>

      </div>
    )
  }
  function RenderComments({comments}) {
    if (comments == null) {
      return <div></div>;
    }
    const cmnts = comments.map((comment) => {
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author}, &nbsp;
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(comment.date))}
          </p>
        </li>
      );
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <h4> Comments </h4>
        <ul className="list-unstyled">{cmnts}</ul>
      </div>
    );
  }


  function DishDetailed(props){
    if(props.dish == null || props.comment==null){
      return(<div></div>)
    }
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish}/>
          <RenderComments comments= {props.comment}/>
        </div>
      </div>
    )
  }



export default DishDetailed;