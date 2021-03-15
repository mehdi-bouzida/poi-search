import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ComponentProps {
  id: number;
  name: string;
}

const Card: React.FC<ComponentProps> = ({ id, name }) => (
  <StyledCard data-testid="card">
    <h3>{name}</h3>
    <div>{id}</div>
    <Link to={{ pathname: `/details/${id}` }}>See more...</Link>
  </StyledCard>
);

export default Card;

const StyledCard = styled.div`
  display: flex;
  font-size: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 130px;
  width: 300px;
  border-radius: 15px;
  box-shadow: 4px 4px 4px 4px hsla(0, 0%, 50%, 0.5);
  margin-top: 20px;
  margin-bottom: 20px;
  outline: none;
`;
