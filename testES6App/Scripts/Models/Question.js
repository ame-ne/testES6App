'use strict';

const privateVariables = new WeakMap();
import Base64Util from '../Utils/Utils';

export default class Question {

    constructor(_text, _options, _answers) {
        privateVariables.set(this, {
            answers: Base64Util.DecodeData(_answers),
            score: 0,
            oneAnswerCount: (10 / (Array.isArray(_answers) ? _answers.length : 1))
        })

        this.options = Base64Util.DecodeData(_options);
        this.text = Base64Util.DecodeData(_text);
    }

    maxScore = (() => Array.isArray(_answers) ? _answers.length * oneAnswerCount : oneAnswerCount)();

    getScore() {
        return privateVariables.get(this).score;
    };

    handleNext(selectedAnswers, callback) {
        let answers = privateVariables.get(this).answers;
        let score = 0;
        if (selectedAnswers && selectedAnswers.length > 0) {
            if (Array.isArray(answers)) {
                for (var i = 0, N = selectedAnswers.length; i < N; i++) {
                    if (answers.indexOf(selectedAnswers[i]) > -1) {
                        score += oneAnswerCount;
                    }
                }
            }
            else {
                if (selectedAnswers.length == 1 && answers.indexOf(selectedAnswers[0]) > -1) {
                    score += oneAnswerCount;
                }
            }
        }
        privateVariables.get(this).score = score;
        callback(this);
    };
}