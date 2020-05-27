<template>
    <div id='sequence'>
        <h1>Sequence</h1>
        <br>
        <b-container class="bv-example-row">
            <b-row>
                <b-col>X,</b-col>
                <b-col>Y,</b-col>
                <b-col>5,</b-col>
                <b-col>9,</b-col>
                <b-col>15,</b-col>
                <b-col>23,</b-col>
                <b-col>Z</b-col>
            </b-row>
            <br>
            <b-button @click="getResult" variant="primary">Solve!</b-button>
        </b-container>
        <br>
        <b-container class="bv-example-row">
            <b-row>
                <b-col>X = {{ x }}</b-col>
                <b-col>Y = {{ y }}</b-col>
                <b-col>Z = {{ z }}</b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import SequenceService from '../services/SequenceService';

export default {
    data() {
        return {
            'x': '',
            'y': '',
            'z': ''
        }
    },
    mounted() {
        if (localStorage.x) {
        this.x = localStorage.x;
        }
        if (localStorage.y) {
        this.y = localStorage.y;
        }
        if (localStorage.z) {
        this.z = localStorage.z;
        }
    },
    methods: {
        async getResult() {
            await SequenceService.solveSequence()
                .then( res => {
                    // console.log(res)
                    this.x = res.x
                    this.y = res.y
                    this.z = res.z
                })
            this.persist()
            
        },
        persist() {
            localStorage.x = this.x;
            localStorage.y = this.y;
            localStorage.z = this.z;
        }
    },
}
</script>

<style>

#sequence{
    text-align: center;
}

</style>