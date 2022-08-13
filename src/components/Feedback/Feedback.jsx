import React from 'react';
import PropTypes from 'prop-types';
import {
  ContainerFeedback,
  Header,
  ButtonContainer,
  H2,
  ButtonTag,
} from '../Feedback/Feedback.styled';

const Feedback = ({ goodFeedback, neutralFeedback, badFeedback }) => (
  <ContainerFeedback>
    <Header>Expresso</Header>
    <H2>Please leave feedback</H2>
    <ButtonContainer>
      <ButtonTag type="button" onClick={goodFeedback}>
        Good
      </ButtonTag>
      <ButtonTag type="button" onClick={neutralFeedback}>
        Neutral
      </ButtonTag>
      <ButtonTag type="button" onClick={badFeedback}>
        Bad
      </ButtonTag>
    </ButtonContainer>
  </ContainerFeedback>
);

Feedback.propTypes = {
  goodFeedback: PropTypes.func,
  neutralFeedback: PropTypes.func,
  badFeedback: PropTypes.func,
};

export default Feedback;
