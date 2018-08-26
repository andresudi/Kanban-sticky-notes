<template>
  <div id="app">
    <!-- carousel -->
    <div class="container">
      <div id="demo" class="carousel slide" data-ride="carousel">
  
        <!-- Indicators -->
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
  
        <!-- The slideshow -->
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://i1.wp.com/www.cleverism.com/wp-content/uploads/2015/04/561-How-to-Use-Kanban-to-Improve-Business-Productivity.png?fit=740%2C482&ssl=1" alt="" width="500" height="250">
          </div>
          <div class="carousel-item">
            <img src="https://wac-cdn.atlassian.com/dam/jcr:1f2f6b07-02ae-41fe-b8aa-f9e680d1d7d0/KanbanBoard.png?cdnVersion=ji" alt="" width="500" height="250">
          </div>
          <div class="carousel-item">
            <img src="https://agilescrumgroup.nl/wp-content/uploads/wat-is-de-kanban-methode.jpg" alt="" width="500" height="250">
          </div>
        </div>
  
        <!-- Left and right controls -->
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
      <br>
  
      <!-- addtask -->
      <div>
        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#add-task">Add Task</button>
      </div>
      <br>
      <!-- cards -->
      <div class="container">
        <div class="row">
  
          <!-- BACK-LOG -->
          <div class="col-md-3">
            <div class="card text-white bg-primary col-md-12 items" style="max-width: 18rem;">
              <div class="card-header"><strong>Back-log</strong></div>
              <div class="card-body">
                <div class="card standard-card text-white bg-dark mb-3" style="max-width: 18rem;" v-for='kanban of kanban' v-bind:key="kanban['.key']" v-if="kanban.status === 'backlog'">
                  <div class="card-header"><strong>{{kanban.title}}</strong></div>
                  <div class="card-body">
                    <p class="card-title"><strong>Description: </strong>{{kanban.description}}</p>
                    <p class="card-title"><strong>Point: </strong>{{kanban.point}}</p>
                    <p class="card-text"><strong> To: </strong>{{kanban.assigned}}</p>
                    <div class="card-footer bg-transparent border-light" style="padding: 0px; padding-top: 17px">
                      <button type="button" class="btn btn-outline-light" @click="deleteData(kanban['.key'])">x</button>
                      <button type="button" class="btn btn-outline-light" @click="upStatus(kanban['.key'], kanban.status)">></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- TODO -->
          <div class="col-md-3">
            <div class="card standard-card text-white bg-warning col-md-12" style="max-width: 18rem;">
              <div class="card-header"><strong>To-Do</strong></div>
              <div class="card-body">
                <div class="card text-white bg-dark mb-3" style="max-width: 18rem;" v-for='kanban of kanban' v-bind:key="kanban['.key']" v-if="kanban.status === 'todo'">
                  <div class="card-header"><strong>{{kanban.title}}</strong></div>
                  <div class="card-body">
                    <p class="card-title"><strong>Description: </strong>{{kanban.description}}</p>
                    <p class="card-title"><strong>Point: </strong>{{kanban.point}}</p>
                    <p class="card-text"><strong> To: </strong>{{kanban.assigned}}</p>
                    <div class="card-footer bg-transparent border-light" style="padding: 0px; padding-top: 17px">
                      <button type="button" class="btn btn-outline-light" @click="downStatus(kanban['.key'], kanban.status)">&lt;</button>
                      <button type="button" class="btn btn-outline-light" @click="deleteData(kanban['.key'])">x</button>
                      <button type="button" class="btn btn-outline-light" @click="upStatus(kanban['.key'], kanban.status)">></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- DOING -->
          <div class="col-md-3">
            <div class="card standard-card text-white bg-info col-md-12 items" style="max-width: 18rem;">
              <div class="card-header"><strong>Doing</strong></div>
              <div class="card-body">
                <div class="card text-white bg-dark mb-3" style="max-width: 18rem;" v-for='kanban of kanban' v-bind:key="kanban['.key']" v-if="kanban.status === 'doing'">
                  <div class="card-header"><strong>{{kanban.title}}</strong></div>
                  <div class="card-body">
                    <p class="card-title"><strong>Description: </strong>{{kanban.description}}</p>
                    <p class="card-title"><strong>Point: </strong>{{kanban.point}}</p>
                    <p class="card-text"><strong> To: </strong>{{kanban.assigned}}</p>
                    <div class="card-footer bg-transparent border-light" style="padding: 0px; padding-top: 17px">
                      <button type="button" class="btn btn-outline-light" @click="downStatus(kanban['.key'], kanban.status)">&lt;</button>
                      <button type="button" class="btn btn-outline-light" @click="deleteData(kanban['.key'])">x</button>
                      <button type="button" class="btn btn-outline-light" @click="upStatus(kanban['.key'], kanban.status)">></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- APPROVED -->
          <div class="col-md-3">
            <div class="card standard-card text-white bg-success col-md-12" style="max-width: 18rem;">
              <div class="card-header"><strong>Approved</strong></div>
              <div class="card-body">
                <div class="card text-white bg-dark mb-3" style="max-width: 18rem;" v-for='kanban of kanban' v-bind:key="kanban['.key']" v-if="kanban.status === 'done'">
                  <div class="card-header"><strong>{{kanban.title}}</strong></div>
                  <div class="card-body">
                    <p class="card-title"><strong>Description: </strong>{{kanban.description}}</p>
                    <p class="card-title"><strong>Point: </strong>{{kanban.point}}</p>
                    <p class="card-text"><strong> To: </strong>{{kanban.assigned}}</p>
                    <div class="card-footer bg-transparent border-light" style="padding: 0px; padding-top: 17px">
                      <button type="button" class="btn btn-outline-light" @click="downStatus(kanban['.key'], kanban.status)">&lt;</button>
                      <button type="button" class="btn btn-outline-light" @click="deleteData(kanban['.key'])">x</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- modal -->
      <div class="modal fade" id="add-task" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Add New Task</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                  </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">Title:</label>
                  <input type="text" class="form-control" id="recipient-name" v-model='title'>
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">Description:</label>
                  <textarea class="form-control" id="message-text" v-model='description'></textarea>
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">Point:</label>
                  <input type="number" class="form-control" id="recipient-name" v-model='point'>
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">Assigned To:</label>
                  <input type="text" class="form-control" id="recipient-name" v-model='assigned'>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addTask">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    kanbanRef
  } from '../firebase'
  
  export default {
    name: 'Board',
    data() {
      return {
        title: '',
        description: '',
        point: '',
        assigned: '',
      }
    },
    firebase: {
      kanban: kanbanRef
    },
    methods: {
      addTask: function() {
        kanbanRef.push({
          title: this.title,
          description: this.description,
          point: this.point,
          assigned: this.assigned,
          status: 'backlog'
        })
      },
      showTask: function() {
        let app = this
        kanbanRef.on('value', function(snapshot) {
          app.tasks = snapshot.val()
        })
      },
      upStatus: function(id, status) {
        if (status === 'backlog') {
          kanbanRef.child(id).update({
            status: 'todo'
          })
        } else if (status === 'todo') {
          kanbanRef.child(id).update({
            status: 'doing'
          })
        } else if (status === 'doing') {
          kanbanRef.child(id).update({
            status: 'done'
          })
        }
      },
      downStatus: function(id, status) {
        if (status === 'done') {
          kanbanRef.child(id).update({
            status: 'doing'
          })
        } else if (status === 'doing') {
          kanbanRef.child(id).update({
            status: 'todo'
          })
        } else if (status === 'todo') {
          kanbanRef.child(id).update({
            status: 'backlog'
          })
        }
      },
      deleteData: function(id) {
        kanbanRef.child(id).remove()
      }
    }
  }
</script>

<style>
    .card {
    min-height: 280px;
}

.card .standard-card {
    min-height: 282px;
}
</style>
