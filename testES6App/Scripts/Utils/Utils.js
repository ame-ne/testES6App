'use strict';

export default class Base64Util {
    static DecodeText(text) {
        return decodeURIComponent(Array.prototype.map.call(atob(text), function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        }).join(''));
    };

    static DecodeArray(arrayText) {
        const arrayData = arrayText.split('#;');
        const convertedArray = [];
        for (let i = 0; i < arrayData.length; i++) {
            convertedArray.push(this.DecodeText(arrayData[i]));
        }
        return convertedArray;
    };

    static DecodeData(text) {
        if (text.indexOf('#;') > -1) {
            return Base64Util.DecodeArray(text);
        }
        else {
            return Base64Util.DecodeText(text);
        }
    };
}

export default class HtmlUtil {
    static PasteHtml(areaName, content) {
        const area = document.getElementById(areaName);
        if (area) {
            area.innerHTML = content;
        }
    }
};