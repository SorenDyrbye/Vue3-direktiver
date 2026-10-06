const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            name: 'Søren',
            age: 36,
            liste: [1,2,3,4,5],
            nr: 0,
            skjul: false,
            listenavne: [
                {navn: 'Søren', alder: 36},
                {navn: 'Christian', alder: 23},
                {navn: 'Rasmus', alder: 26}
            ]
        }
    },
    methods: {
        TilføjPerson() {
            this.listenavne.push({navn: this.name, alder: this.age});
        },
        add() {
            this.liste.push(this.nr);
        },
        skjulliste(){
            this.skjul = !this.skjul;
        }
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
