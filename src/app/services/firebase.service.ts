import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Firebase
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public collection: Observable<any>;

  constructor(
    private db: AngularFireDatabase,
  ) {
    this.collection = db.list('list').valueChanges();
  }

  public getPosts() {

  }

}
