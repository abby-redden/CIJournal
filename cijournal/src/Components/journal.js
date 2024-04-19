import React, { useState } from "react";



export default function Journal (){
    const[entries, setEntries] = useState("")
    const [postTitle, setPostsTitle] =useState('')
    const [journalEntry, setJournalEntry] = useState('')
    const[journal,setJournal] = useState('')
    const [updates, setUpdates] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        setPostsTitle(entries)
        setJournal(journalEntry)

        setEntries('')
        setJournalEntry('')
    }

    function handleUpdate(){
        setJournal(journalEntry)
        setJournalEntry('')
    }

    function handleDelete(){
        setPostsTitle(postTitle.delete)
        setJournal(journal.delete)
        
    }

    return(
        <div>
            <h1>Journal Entries</h1>
            <hr/>
            <p>Add, Update, and Delete, your journal entries here!</p>
            <form onSubmit={handleSubmit}>
                <label> Post Title: 
                
            <input type="text" required value={entries} onChange={(e)=> setEntries(e.target.value)} />
            </label>
            <br/>
            <label><br/>
                Create Journal Entry: 
                <br/>
                <textarea
                required 
                name="journal content"
                defaultValue= "Your Journal Entry"
                rows={4}
                cols={40}
                value={journalEntry}
                onChange={(e)=> setJournalEntry(e.target.value)}
                />
            </label><br/>
            <button>Submit</button>
            </form>
            <p>{postTitle}</p>
            <p>{journal}</p>
            <button onClick={handleUpdate}>Update Post</button>
            <button onClick={handleDelete}>Delete</button>
            {/* <p>{updates}</p> */}
            <hr/>

        </div>
    )
}


