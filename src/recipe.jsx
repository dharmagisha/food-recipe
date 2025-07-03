// recipe.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Recipe(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${props.first}`, {
      state: {
        image: props.image,
        title: props.first,
        description: props.para,
        ingredients: props.ingredients,
        video: props.video
      },
    });

  };

  return (
    <Card style={{ width: '18rem' }}>
      <img src={props.image} height={210} alt={props.first} />
      <Card.Body>
        <Card.Title>{props.first}</Card.Title>
        <Card.Text>{props.para.slice(0, 80)}...</Card.Text>
        <Button variant="warning" onClick={handleClick}>Recipe</Button>
      </Card.Body>
    </Card>
  );
}

export default Recipe;
