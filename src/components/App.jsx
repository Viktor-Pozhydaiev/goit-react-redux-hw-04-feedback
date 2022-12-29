import React from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <Section title="Please leave feedback">
      <FeedbackOptions />
      <Statistics />
    </Section>
  );
};
