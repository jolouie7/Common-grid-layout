import React from 'react';
import styled from "styled-components";

const ContentStyles = styled.div`
  padding: 2rem;
  background-color: #bf616a;
  /* grid-column: 3 / 5;
  grid-row: 2 / 3; */
  grid-area: content;
`;

const Content = () => {
  return (
    <ContentStyles>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti mollitia modi error quibusdam labore delectus vitae exercitationem officia distinctio corporis impedit qui, sunt recusandae incidunt laboriosam harum esse voluptatum consequatur?
      Ipsum quo facilis voluptatem porro inventore? Iusto suscipit voluptas, illum necessitatibus ducimus error officiis minus a vitae tempore, voluptatum ipsum sequi accusantium asperiores! A iste repellat maiores blanditiis obcaecati atque?
      Quo, esse? Sint eaque blanditiis temporibus ab cupiditate nisi, eveniet, ratione vel, iusto dolorem iste maiores atque adipisci a labore quidem dolores. Commodi ducimus rerum voluptatum similique nisi nihil quas?
    </ContentStyles>
  )
}

export default Content
