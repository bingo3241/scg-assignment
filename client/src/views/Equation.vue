<template>
    <div id="equation">
        <br>
        <h1>Equation Solver</h1>
        <b-container>
            <b-input-group prepend=" A =  ">
            <b-form-input v-model="a" type="number"></b-form-input>
            </b-input-group>

            <b-input-group prepend="A + B = ">
            <b-form-input v-model="aplusb" type="number"></b-form-input>
            </b-input-group>

            <b-input-group prepend="A + C = ">
            <b-form-input v-model="aplusc" type="number"></b-form-input>
            </b-input-group>
            <br>
            <b-button @click="getResult" variant="primary">Solve!</b-button>
            <br>
        </b-container>
        <br>
        <div>B = {{ b }}</div>
        <div>C = {{ c }}</div>
    </div>

    
</template>

<script>
import EquationService from '../services/EquationService';

export default {
    data() {
        return {
            "a": "21",
            "aplusb": '23',
            "aplusc": '-21',
            "b" : '',
            "c" : ''
        }
    },
    mounted() {
        if (localStorage.a) {
        this.a = localStorage.a;
        }
        if (localStorage.aplusb) {
        this.aplusb = localStorage.aplusb;
        }
        if (localStorage.aplusc) {
        this.aplusc = localStorage.aplusc;
        }
        if (localStorage.b) {
        this.b = localStorage.b;
        }
        if (localStorage.c) {
        this.c = localStorage.c;
        }
    },
    methods: {
        async getResult() {
            await EquationService.solveEquation(this.a, this.aplusb, this.aplusc)
                .then( res => {
                    console.log(res)
                    this.b = res.b
                    this.c = res.c
                })
            this.persist()
        },
        persist() {
            localStorage.a = this.a;
            localStorage.aplusb = this.aplusb;
            localStorage.aplusc = this.aplusc;
            localStorage.b = this.b;
            localStorage.c = this.c;
        }
    }
}
</script>

<style>

#equation {
    text-align: center;
}

</style>