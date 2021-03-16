<template>
    <div class="score-binet">
        
        <h2>Binet Staging System for Chronic Lymphocytic Leukemia (CLL)</h2>

        <div class="score-form">
            <div class="row">
                <div class="col1">
                    <div class="title">Areas of lymphadenopathy</div>
                    <div class="info">Cervical, axillary, inguinal, spleen, and liver</div>
                    
                    
                </div>
                <div class="col2">
                    <button @click="changeInput({ inputA: 'inf3' })">&le; 3</button>
                    <button @click="changeInput({ inputA: 'inf3' })">&#8804; 3</button>
                </div>
            </div>
            
            <div class="row">
                <div class="col1">
                    Anemia Hgb <10 g/dL
                </div>
                <div class="col2">
                    <button :class="changeClassIf('inputB', 'Yes')" @click="changeInput({ inputB: 'Yes'})">Yes</button>
                    <button :class="changeClassIf('inputB', 'No')" @click="changeInput({ inputB: 'No'})">No</button>
                </div>
            </div>
            
            <div class="row">
                <div class="col1">
                    ThrombocytopeniaPlatelets <100,000/mm
                </div>
                <div class="col2">
                    <button @click="changeInput({ inputC: 'Yes'})">Yes</button>
                    <button @click="changeInput({ inputC: 'No'})">No</button>
                </div>
            </div>

            <h3>Résultat</h3>
            <div class="score-result">
                <div class="r1">{{result.stage}}</div>
                <div class="r2">{{result.risk}}</div>
                <div class="r2">{{result.survival}}</div>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
    name: "BinetScore",
    components: {

    },
    data()
    {
        return {
            input: {
                inputA: "inf3",
                inputB: "No",
                inputC: "No",
            },
            result: {
                stage: "",
                risk: "",
                survival: "",
            }
        } as any
    },
    methods: {
        calculateResult() {
            // 
            this.result = {
                stage: "Stage C",
                risk: "HIGHT",
                survival: "Not likely"
            }
        },
        changeInput(value: any) {
            this.input = {...this.input, ...value}
        },
        changeClassIf(whichInput: string, value: string) {
            if (value === this.input[whichInput]) {
                return "on"
            } else {
                return "off"
            }
        }
    },
    mounted()
    {
        
    },
    //computed: {
    //    name2() {
    //        return "Test"
    //    }
    //},
})
</script>

<style lang="scss">
.score-binet {
    margin: 16px;
    padding: 16px;
    border: 1px solid gray;

    .score-form {
        display: flex;
        flex-direction: column;

        .row {
            display: flex;
            flex-direction: row;
        }

        .col1 {
            display: flex;
            flex-direction: column;
            width: 290px;
            .title {
                font-size: bold;
            }
            .info {
                color: gray;
            }
        }
        .col2 {
            width: 66px;
            display: flex;
            flex-direction: row;

            button {
                width: 50px;
                padding: 4px;
                flex-grow: 0;
                height: 24px;

                &.off {
                    // nothing
                    //background-color: red;
                }
                &.on {
                    background-color: green;
                }
            }
        }
    }
}
</style>