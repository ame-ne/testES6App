'use strict';

import Question from './Question';
import HtmlUtil from '../Utils/Utils';

class RadioQuestion extends Question {
    constructor() {
        super()
    };

    init(callbackController) {
        const questionTextArea = document.getElementById('questionText');
        if (questionTextArea) {
            questionTextArea.innerHTML = '<div>' + this.text + '</div>';
        }
        const questionAnswerVariantsArea = document.getElementById('questionAnswerVariants');
        if (questionAnswerVariantsArea) {
            questionAnswerVariantsArea.innerHTML = '';
            for (let i = 0; i < this.options.length; i++) {
                questionAnswerVariantsArea.innerHTML += '<div class="checkbox"><label><input type="radio" name="answer" id="answer" value="' + this.options[i] + '" /> ' + this.options[i] + '</label></div>';
            }
        }
        HtmlUtil.PasteHtml('questionNavigation', '<a class="btn btn-outline-danger" id="nextBtn">Следующий</a>');
        document.getElementById('nextBtn').addEventListener('click', function () { handleNext(callbackController) });
    };

    handleNext(callbackController) {
        const questionAnswerVariantsArea = document.getElementById('questionAnswerVariants');
        const selectedAnswers = [];
        if (questionAnswerVariantsArea) {
            const checkboxElements = document.getElementsByName('answer');
            for (let i = 0; i < checkboxElements.length; i++) {
                if (checkboxElements[i].checked) {
                    selectedAnswers.push(checkboxElements[i].value);
                }
            }
        }
        super.handleNext(selectedAnswers, callbackController);
    };



}