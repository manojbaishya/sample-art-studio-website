<script setup>
import { onBeforeMount } from "vue";
import Subpage from "../components/Subpage.vue";
import Person from "../components/Person.vue";


let members = [
    [
        {
            "personImage": "/src/assets/img/people/1030870.jpeg",
            "title": "John Doe",
            "caption": "Mage of Marketing"
        },
        {
            "personImage": "/src/assets/img/people/1520760.jpeg",
            "title": "John Doe",
            "caption": "Master Orchestrator"
        },
        {
            "personImage": "/src/assets/img/people/1076240.jpeg",
            "title": "John Doe",
            "caption": "Ink-fu Zenman"
        }
    ],
    [
        {
            "personImage": "/src/assets/img/people/1105353.jpeg",
            "title": "John Doe",
            "caption": "Team Builder"
        },
        {
            "personImage": "/src/assets/img/people/1220757.jpeg",
            "title": "John Doe",
            "caption": "Electric Wizard"
        },
        {
            "personImage": "/src/assets/img/people/1317712.jpeg",
            "title": "John Doe",
            "caption": "Paint Marshal"
        }
    ],
    [
        {
            "personImage": "/src/assets/img/people/698859.jpeg",
            "title": "John Doe",
            "caption": "Design Poet"
        },
        {
            "personImage": "/src/assets/img/people/789555.jpeg",
            "title": "John Doe",
            "caption": "Prop Scholar"
        },
        {
            "personImage": "/src/assets/img/people/57901.jpeg",
            "title": "John Doe",
            "caption": "Champion of Coin"
        }
    ],
    [
        {
            "personImage": "/src/assets/img/people/938580.jpeg",
            "title": "John Doe",
            "caption": "Social Scientist"
        },
        {
            "personImage": "/src/assets/img/people/268086.jpeg",
            "title": "John Doe",
            "caption": "Material Wishmaster"
        },
        {
            "personImage": "/src/assets/img/people/698848.jpeg",
            "title": "John Doe",
            "caption": "Captain of the Ship"
        }
    ]
]

</script>

<template>
    <Subpage title="About Page">
        <div id="team-grid">
            <div class="row" v-for="(row, rowkey, i) in members" :key="rowkey">
                <div class="col-4" v-for="(person, colkey, j) in row" :key="colkey">
                    <Person :imgsrc="person.personImage" :title="person.title" :caption="person.caption" />
                </div>
            </div>
        </div>

    </Subpage>
</template>
