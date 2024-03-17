import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={}// for storing answer
    correctAnswers = 0 // to show result
    isSubmitted =  false //use to show result
    myQuestion = [
        {
            id: "Question 1",
            question: "Which one of the following is not a templatr loop",
            answers:{
                a: "for:each",
                b: "iteractor",
                c: "map loop",
            },
            correctAnswer:"c"
        },
        {
            id: "Question 2",
            question: "Which Of the following is invalid in LWC component folder",
            answers:{
                a: ".svg",
                b: ".apex",
                c: ".js",
            },
            correctAnswer:"b"
        },
        {
            id: "Question 3",
            question: "Which one of the following is not a directive",
            answers:{
                a: "for:each",
                b: "lwc.if",
                c: "@track",
            },
            correctAnswer:"c"
        }

    
    ]
    // used for disabling the submit button
    get isdisabled(){
        return this.isSubmitted
    }
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestion.length)
    }
    // for appling dynamic styling to our result
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestion.length === this.correctAnswers ? 'slds-text-color_success':'slds-text-color_error'}`
    }
    // changeHandler get;s called on every click on the options
    changeHandler(event){
        const{name, value} = event.target
        //const name = event.target.name
        //const value = event.target.value
        this.selected={...this.selected, [name]: value}
    }

// form submit handler
    submitHandler(event){
         event.preventDefault()
         let correct = this.myQuestion.filter(item=>this.selected[item.id] === item.correctAnswer)
         this.correctAnswers = correct.length
         this.isSubmitted = true
    }
    // form reset handler
    resetHandler(){
         this.selected = {}
         this.correctAnswers=0
         this.isSubmitted = false
    }
    
}