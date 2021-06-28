import React from 'react';
import './SectionQuestions.css';
import Title from '../../../title/Title';
import Accordion from './Accordion';
import { Question } from '../../../../constants';
 
const SectionQuestions = () => {
  return (
    <section className="section section__questions wrap">
      <div className="questions__inner">
        <Title titleSize="title-2" title="Ответы на часто задаваемые вопросы"/>
        <div className="accordion">
          {Question.map(link => (
            <Accordion title={link.title} content={link.content} key={link.id}/>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default SectionQuestions;