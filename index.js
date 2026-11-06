"use strict";
////1
class User {
    id;
    notebooks = [];
    name;
    email;
    password;
    phone;
    _age = 18;
    constructor(id, name, email, password, phone, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 18 || value > 60) {
            throw new Error("Age must be between 18 and 60");
        }
        this._age = value;
    }
    addNotebook(notebook) {
        this.notebooks.push(notebook);
    }
    displayInfo() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Email:", this.email);
        console.log("Phone:", this.phone);
        console.log("Age:", this.age);
    }
}
////2
class Admin extends User {
    manageNotes(notebook, note) {
        notebook.addNote(note);
        console.log("Admin managed notes successfully");
    }
}
////3
class Note {
    id;
    title;
    content;
    userId;
    constructor(id, title, content, userId) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
    preview() {
        return this.content.substring(0, 30) + "...";
    }
}
////4
class NoteBook {
    notes = [];
    addNote(note) {
        this.notes.push(note);
        console.log("Note added successfully");
    }
    removeNote(id) {
        this.notes = this.notes.filter((note) => note.id !== id);
    }
    getNotes() {
        return [...this.notes];
    }
}
////6
class DataStorage {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter((element) => element !== item);
    }
    getAllItems() {
        return [...this.items];
    }
}
