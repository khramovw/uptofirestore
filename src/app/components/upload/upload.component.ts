import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from "angularfire2/storage";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor( private afStorage: AngularFireStorage ) { }

  ref: any;
  task: any;
  uploadProgress: any;
  downloadURL: any;
  filename: any;

  ngOnInit() {
  }

  upload(event) {

    this.filename = event.target.files[0].name;

    console.log(event.target.files[0].name);

    //: if request.auth!=null

    // this.afStorage.upload('/upload/upload/', event.target.files[0]);

    // create a random id
    const randomId = Math.random().toString(36).substring(2);

    // create a reference to the storage bucket location
    this.ref = this.afStorage.ref(`/upload/${this.filename}`);

    // the put method creates an AngularFireUploadTask
    // and kicks off the upload
    this.task = this.ref.put(event.target.files[0]);
    // this.task = this.afStorage.upload(`/upload/${this.filename}`, event.target.files[0]);

    this.uploadProgress = this.task.percentageChanges();
    this.downloadURL = this.task.downloadURL();

    // // console.log('+++   ',this.task.getMetadata());
    // this.task.getMetadata().then(function(metadata) {
    //   console.log('+++   ',metadata)
    //   // Metadata now contains the metadata for 'images/forest.jpg'
    // }).catch(function(error) {
    //   console.log('+++   ', error)
    //   // Uh-oh, an error occurred!
    // });




  }

}
