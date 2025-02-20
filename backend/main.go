package main

import (
	"fmt"
	"net/http"
)

func homeHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Metsaspace Backend is running!"))
}

func main() {
	http.HandleFunc("/", homeHandler)
	fmt.Println("Backend running on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}