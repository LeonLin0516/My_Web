import React from 'react'
import Sudoku from './Sudoku.png'
import Ants from './Ants.png'
import Lisp from './Lisp.png'
import Spam from './Spam.jpeg'

const Project = () => (
  <div className="Projects-Container">
    <h2>Projects</h2>
    <div className="Projects-Sections">
      <div className="row">

        <div className="image">
          <img className="image__image" src={Sudoku} alt="Sudoku Puzzle" height="250" width="250"></img>
          <div className="image__overlay">
            <div className="image__title">Sudoku Puzzle</div>
            <p className="image__description">Tags: Python, Tkinter, Backtracking Algorithm</p>
          </div>
        </div>

        <div className="image">
          <img className="image__image" src={Ants} alt="BeesVsAnts" height="250" width="250"></img>
          <div className="image__overlay">
            <div className="image__title">Ants Vs. Bees</div>
            <p className="image__description">Tags: Python, functional 
              and object-oriented programming paradigms
            </p>
          </div>
        </div>
      </div>
      
      <div className="row">

        <div className="image">
          <img className="image__image" src={Lisp} alt="Scheme Interpreter" height="250" width="250"></img>
          <div className="image__overlay">
            <div className="image__title">Scheme Intepreter</div>
            <p className="image__description">Tags: Python, Lexical Analysis, Syntactical Analysis,
              Recursive Evaluation
            </p>
          </div>
        </div>

        <div className="image">
          <img className="image__image" src={Spam} alt="Spam Classifier" height="250" width="250"></img>
          <div className="image__overlay">
            <div className="image__title">Spam Classifier</div>
            <p className="image__description">Tags: MATLAB, SVM, Text Analysis
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Project