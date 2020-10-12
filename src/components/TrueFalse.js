import React from 'react';
import { Card, Button } from 'antd';
import './TrueFalse.css';

const questions = [
    { question: "I have travelled to 5 continents (including North America)", answer: true, 
        caption: "I have gone to Europe, Asia, Africa, and North/South America! Some of my favourite trips were visiting India, Kenya, Italy, Greece, and Belize! " },
    { question: "My Smash Ultimate main is Cloud", answer: false,
        caption: "Despite the memes against it, I love playing with Piranha Plant!" },
    { question: "I am an only child :(", answer: false,
        caption: "I am a middle child! I have an older brother who just graduated from Queens and a younger sister who just started at Western" },
    { question: "Soccer is my favourite sport", answer: true,
        caption: "Soccer is very big in my family, starting with my dad! I have played competitively for many years, mainly for the North Toronto Nitros." },
    { question: "I always knew I wanted to be a software engineer", answer: false,
        caption: "Up until the end of high school, I had not narrowed what I wanted to do beyond either maths or engineering. I was actually leaning towards biomedical engineering until the end of high school!" },
    { question: "Dogs are my favourite animal", answer: true,
        caption: "Although my childhood favourite animal was tigers, having my dog Hailey as my best friend (find her in the pics above) changed my mind :)"},
    { question: "I don't have a favourite tv/movie genre", answer: false,
        caption: "My favourite genre is fantasy/superhero! Some of my favourite shows include Game of Thrones, the Flash and (recently binged) The Boys, and I am a big fan of the MCU!"},
    { question: "My favourite sport to watch is soccer", answer: false,
        caption: "Despite my favourite sport to play being soccer, I actually like watching NBA (Raptors) and NFL (Patriots) a bit more than it!" },
    { question: "WOW! Thank you for going through all my questions :D I hope you enjoyed it and click True/False then next question to restart!", answer: true, caption: ""}
  ]

const headerStyle = {
    backgroundColor: '#348AA7',
    color: 'white !important'
}

export class AboutMe extends React.Component {
    state = {
        questionIndex: 0,
        answeredQuestion: false,
        trueButtonStyle: {},
        falseButtonStyle: {},
        score: 0
    }

    checkAnswer = (answer) => {
        const { questionIndex, score } = this.state;
        if(questions[questionIndex].answer === answer) {
            if(answer){
                this.setState({
                    trueButtonStyle: {
                        background: '#3bab2c',
                        borderColor: 'green',
                        color: 'white'
                    },
                    score: score + 1
                });

            } else {
                this.setState({
                    falseButtonStyle: {
                        background: '#3bab2c',
                        borderColor: 'green',
                        color: 'white'
                    },
                    score: score + 1
                });
            }
        } else {
            if(answer){
                this.setState({
                    trueButtonStyle: {
                        background: '#d13b28',
                        borderColor: 'red',
                        color: 'white'
                }});
            } else {
                this.setState({
                    falseButtonStyle: {
                        background: '#d13b28',
                        borderColor: 'red',
                        color: 'white'
                }});
            }
        }
        this.setState({answeredQuestion: true});
    }

    nextQuestion = () => {
        const {questionIndex} = this.state;
        const newQuestionIndex = (questionIndex + 1) % questions.length;
        if(newQuestionIndex <= questionIndex) this.setState({score: 0});
        this.setState({
            answeredQuestion: false, 
            questionIndex: newQuestionIndex,
            trueButtonStyle: {},
            falseButtonStyle: {}
        });
    }

  render(){ 
    const { questionIndex, answeredQuestion, trueButtonStyle, falseButtonStyle, score } = this.state;
    return (
      <Card headStyle={headerStyle} type="inner" title="How well do you know me? Let's find out!" className="TrueFalse">
        <div className="TrueFalse-question">
            {questions[questionIndex].question}
        </div>
        { answeredQuestion && <div className="TrueFalse-answer">{questions[questionIndex].caption}</div>}
        Current Score: {score} / {questionIndex + answeredQuestion}
        <div className="TrueFalse-buttons"> 
            <Button className="true-btn" disabled={answeredQuestion} style={trueButtonStyle} onClick={() => this.checkAnswer(true)}>True</Button>
            <Button className="false-btn" disabled={answeredQuestion} style={falseButtonStyle} onClick={() => this.checkAnswer(false)} >False</Button>
            { answeredQuestion && <Button className="next-btn" onClick={() => this.nextQuestion() }>Next Question</Button> }
        </div>
      </Card>
    );
  }
}

export default AboutMe;
