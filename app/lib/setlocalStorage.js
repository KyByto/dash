"use client"

export default function setLocalStorage(name , id) {
    console.log("Setting local storage");
    localStorage.setItem(name , id);
}