import template from './avatar.html'
import './avatar.scss'

const name = 'avatar'

controller.$inject = ['$rootScope']
function controller($rootScope) {
    const self = this

    self.$onInit = function() {
        preProcess()
    }

    // self.genUniqueId = function() {
    //     const prefix = '__avatar__component__'

    //     //because username is unique => id is unique with prefix
    //     return prefix + self.userName
    // }

    function preProcess() {
        self.width = self.height = 39.23
        self.src = LetterAvatar(self.userName, self.width)
    }

    // function genAvatar() {
    //     const el = document.getElementById(self.genUniqueId())
    //     if(el) el.src = LetterAvatar(self.userName, self.width)
    //     console.log({LetterAvatar:LetterAvatar(self.userName, self.width)})
    // }

    //class
    function LetterAvatar (name, size) {

        name  = name || '';
        size  = size || 60;
        let w = window
        let d = document

        var colours = [
                "#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", 
                "#f1c40f", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"
            ],

            nameSplit = String(name).toUpperCase().split(' '),
            initials, charIndex, colourIndex, canvas, context, dataURI;


        if (nameSplit.length == 1) {
            initials = nameSplit[0] ? nameSplit[0].charAt(0):'?';
        } else {
            initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
        }

        if (w.devicePixelRatio) {
            size = (size * w.devicePixelRatio);
        }
            
        charIndex     = (initials == '?' ? 72 : initials.charCodeAt(0)) - 64;
        colourIndex   = charIndex % 20;
        canvas        = d.createElement('canvas');
        canvas.width  = size;
        canvas.height = size;
        context       = canvas.getContext("2d");
         
        context.fillStyle = colours[colourIndex - 1];
        context.fillRect (0, 0, canvas.width, canvas.height);
        context.font = Math.round(canvas.width/2)+"px Arial";
        context.textAlign = "center";
        context.fillStyle = "#FFF";
        context.fillText(initials, size / 2, size / 1.5);

        dataURI = canvas.toDataURL();
        canvas  = null;

        return dataURI;
    }
}

export default {
    name,
    options: {
        bindings: {
            imgSrc: '<',
            userName: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
}