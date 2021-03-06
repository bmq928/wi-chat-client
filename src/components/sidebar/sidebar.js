import template from './sidebar.html'
import './sidebar.scss'

const name = 'sidebar'

controller.$inject = ['ui']
function controller(ui) {

    const self = this

    self.$onInit = function () {
        preProcess()

        ui.onFinishReceiveMessage(() => {
            sortPeopleByLatestMsg()
            preProcess()
        })
    }

    self.$onChanges = function({listPeople}) {
        if(listPeople) {
            self.listPeople = listPeople.currentValue
            preProcess()
        }
    }

    self._chooseConversation = function(people) {
        // api.seenMessage({}, auth.getToken(), ())
        self.chooseConversation(people)
        self.listPeople = self.listPeople.map(p => {
            if(p.name === people.name) p.isChosen = true
            else p.isChosen = false


            return p
        })
        
    }


    function preProcess() {

        //search
        self.filterPeople = {
            name: ''
        }

        self.listPeople = self.listPeople.map((people, i) => {
            // if (i) people.isChosen = true
            // else people.isChosen = false


            people.isChosen = false
            people.getLatestMsg = () => people.Messages[people.Messages.length - 1]

            return people
        })
        
    }

    function sortPeopleByLatestMsg() {
        self.listPeople.sort((a, b) => {
            const lastMsgSendAtA = a.Messages[a.Messages.length - 1]
            const lastMsgSendAtB = b.Messages[b.Messages.length - 1]
            // console.log({lastMsgSendAtA: lastMsgSendAtA.content})
            // console.log({lastMsgSendAtB:lastMsgSendAtB.content})
            return  new Date(lastMsgSendAtB.sendAt) - new Date(lastMsgSendAtA.sendAt) 
        })

        // console.log({'self.listPeople':self.listPeople})
    }   

}

export default {
    name,
    options: {
        bindings: {
            listPeople: '<',
            chooseConversation: '<',
            unseenMessNum: '<'
        },
        template,
        controller,
        controllerAs: 'self'
    }
}

