'use strict';

import Question from './Question';
import HtmlUtil from '../Utils/Utils';

class CheckboxQuestion extends Question {
    constructor() {
        super()
    }

    init(callbackController) {
        let questionTextArea = document.getElementById('questionText');
        if (questionTextArea) {
            questionTextArea.innerHTML = '<div>' + this.text + '</div>';
        }
        let questionAnswerVariantsArea = document.getElementById('questionAnswerVariants');
        if (questionAnswerVariantsArea) {
            questionAnswerVariantsArea.innerHTML = '';
            for (let i = 0, N = this.options.length; i < N; i++) {
                questionAnswerVariantsArea.innerHTML += '<div class="checkbox"><label><input type="checkbox" name="answer" value=\'' + this.options[i] + '\' /> ' + this.options[i] + '</label></div>';
            }
        }
        HtmlUtil.PasteHtml('questionNavigation', '<a class="btn btn-outline-danger" id="nextBtn">Следующий</a>');
        document.getElementById('nextBtn').addEventListener('click', function () { handleNext(callbackController) });
    };

    handleNext(callbackController) {
        let questionAnswerVariantsArea = document.getElementById('questionAnswerVariants');
        let selectedAnswers = [];
        if (questionAnswerVariantsArea) {
            let checkboxElements = document.getElementsByName('answer');
            for (let i = 0, N = checkboxElements.length; i < N; i++) {
                if (checkboxElements[i].checked) {
                    selectedAnswers.push(checkboxElements[i].value);
                }
            }
        }
        super.handleNext(selectedAnswers, callbackController);
    };
}