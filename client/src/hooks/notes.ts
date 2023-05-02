import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { INote, INotesResponse } from '../models';


export const useNotes = () => {

    const [notes, setNotes] = useState<INotesResponse>({
        count: 0,
        rows: []
    })
    
    const [loading, setLoading] = useState(false)

    const addNote = (note: INote) => {
        setNotes(prev => ({count: prev.count, rows: [...prev.rows, note]}))
    }
    
    async function fetchNotes() {
        setLoading(true)
        const res = await axios.get<INotesResponse>('http://localhost:5000/api/note/')
        setNotes(res.data)
        setLoading(false)
    }
    
    useEffect(() => {
        fetchNotes()
    }, [])

    return { notes, loading, addNote }

}