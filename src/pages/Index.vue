<template lang="pug">
  q-page
    .row.flex.flex-center.q-mb-lg
      .col-4
        q-input(bottom-slots='' v-model='search' label='Find your Dream Team' counter='' maxlength='12')
          template(v-slot:append='')
            q-icon.cursor-pointer(v-if="search !== ''" name='close' @click="filter = ''")
    .row.q-col-gutter-lg
      .col-6.col-md-3(v-for="(job, i) in filteredJobs" :key="job.id")
        q-card(@click="openJobDetails(job)")
          q-card-section
            q-img(:src='job.cover' :ratio="16/9")
          q-card-section
            q-btn.absolute(fab='' style='top: 0; right: 12px; transform: translateY(-50%);')
              q-avatar(size='42px')
                img(:src='job.picture')

            .row.no-wrap.items-center
              .col.text-h6.ellipsis
                | {{ job.name }}
          q-card-section.q-pt-none
            .text-caption.text-grey
              | {{ job.title }}
          q-separator
          q-card-actions
            q-list
              q-item(v-for="(teamMember, j) in job.team" :key="teamMember.id"  clickable='' v-ripple='')
                q-item-section(avatar='')
                  q-avatar(v-if="teamMember.picture")
                    img(:src='teamMember.picture')
                  q-avatar(v-else color='teal' text-color='white' icon='person')
                q-item-section {{ teamMember.name }}
    q-dialog(v-model='showJobModal')
        q-card(v-for="(teamMember, j) in modalData.team" :key="teamMember.id")
          img(:src='teamMember.pictureThumbnail' v-if="teamMember.pictureThumbnail" :ratio="4/3")
          q-card-section.bg-primary.text-white(v-else)
            q-avatar(color='teal' text-color='white' icon='person')
          q-card-section
            .text-h6 {{ teamMember.name }}
            .text-subtitle2 {{ teamMember.professionalHeadline }}
          q-card-section.q-pt-none
            | {{ lorem }}
</template>

<script>
import { getJobsService } from '../services/jobsService'
export default {
  name: 'PageIndex',
  data () {
    return {
      jobs: [],
      showJobModal: false,
      modalData: {},
      search: ''
    }
  },
  computed: {
    filteredJobs () {
      return this.jobs.filter((job) => {
        return job.name.toLowerCase().match(this.search.toLowerCase())
      })
    }
  },
  methods: {
    async getJobs () {
      const { data } = await getJobsService()
      this.jobs = data.data
      this.$q.loading.hide()
    },
    openJobDetails (job) {
      this.modalData = job
      this.showJobModal = true
    }
  },
  mounted () {
    this.$q.loading.show()
    this.getJobs()
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
