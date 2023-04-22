import { Node } from './node';

export class Playlist {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  addSong(song) {
    const newNode = new Node(song);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;

    return this;
  }

  playSong() {
    if (!this.top) {
      throw new Error('No hay canciones en la playlist');
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;

    return holdingPointer.value;
  }

  getPlaylist() {
    const songsPlayList = [];
    let holdingPointer = this.top;
    for (let i = 0; i < this.length; i++) {
      songsPlayList.push(holdingPointer.value);
      holdingPointer = holdingPointer.next;
    }
    return songsPlayList;
  }
}
