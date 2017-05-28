<template>
  <div id="project-view">
    <Kanban :stages="statuses" :blocks="blocks" @update-block="updateBlock">
        <div v-for="item in blocks" :slot="item.id">
            <div>
                <strong>id:</strong> {{ item.id }}
            </div>
            <div>
                {{ item.title }}
            </div>
        </div>
    </Kanban>
  </div>
</template>

<script>
import faker from 'faker'
import Kanban from '../components/Kanban.vue'

export default {
  name: 'project-view',
  components: {
    Kanban
  },
  data () {
    return {
      statuses: ['in-progress', 'needs-review', 'on-hold', 'approved'],
      blocks: []
    }
  },
  mounted () {
    for (let i = 0; i <= 10; i += 1) {
      this.blocks.push({
        id: i,
        status: this.statuses[Math.floor(Math.random() * 4)],
        title: faker.company.bs()
      })
    }
  },

  methods: {
    updateBlock (id, status) {
      this.blocks.find(b => b.id === Number(id)).status = status
    }
  }
}
</script>

<style lang="scss">
    @import '../assets/css/kanban.scss';

    $on-hold: #FB7D44;
    $in-progress: #2A92BF;
    $needs-review: #F4CE46;
    $approved: #00B961;

    * {
    	box-sizing: border-box;
    }

    #project-view {
    	background: #ffffff;
    	color: white;
    	font-family: 'Lato';
    	font-weight: 300;
    	line-height: 1.5;
    	-webkit-font-smoothing: antialiased;
    }

    .drag-column,.drag-item,.drag-list{
        display:block!important;
    }

    .drag-column {
        &-on-hold {
            .drag-column-header,
            .is-moved,
            .drag-options {
                background: $on-hold;
            }
        }

        &-in-progress {
            .drag-column-header,
            .is-moved,
            .drag-options {
                background: $in-progress;
            }
        }

        &-needs-review {
            .drag-column-header,
            .is-moved,
            .drag-options{
                background: $needs-review;
            }
        }

        &-approved {
            .drag-column-header,
            .is-moved,
            .drag-options {
                background: $approved;
            }
        }
    }

    .section {
    	padding: 20px;
    	text-align: center;

    	a {
    		color: white;
    		text-decoration: none;
    		font-weight: 300;
    	}

    	h4 {
    		font-weight: 400;
    		a {
    			font-weight: 600;
    		}
    	}
    }
</style>
