import {grpc, BrowserHeaders, Code} from "grpc-web-client";
import {NoteService} from "./_proto/notes_service_pb_service";
import {Note, GetNotesRequest, GetNotesResponse, AddNoteRequest, DeleteNoteRequest} from "./_proto/notes_service_pb";
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  template: '<ul id="notes"><li v-for="note in notes">{{note.getAuthor()}}: {{note.getBody()}}</li></ul>'
})
export default class Teammark extends Vue {
  notes: Array<Note> = [];
  host: string = 'http://localhost:8001'
  body: string = '';
  author: string = '';

  mounted (): void {
    this.getNotes();
  }

  getNotes (): void{
    const request = new GetNotesRequest();
    grpc.invoke(NoteService.GetNotes, {
      host: this.host,
      request: request,

      onMessage: (notes: GetNotesResponse) => {
        this.notes = notes.getNotesList();
        console.log("Successfully queried, ", notes)
      },

      onEnd(code: Code, message: string, trailers: BrowserHeaders){
        console.log(code, message)
      }
    })
  }
}

new Teammark().$mount('#teammark');