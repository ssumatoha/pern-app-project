import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { INotesResponse } from '../models';


export const useNotes = () => {

    const [notes, setNotes] = useState<INotesResponse>({
        count: 0,
        rows: []
    })
    
    const [loading, setLoading] = useState(false)
    
    async function fetchNotes() {
        setLoading(true)
        const res = await axios.get<INotesResponse>('http://localhost:5000/api/note/')
        setNotes(res.data)
        setLoading(false)
    }
    
    useEffect(() => {
        fetchNotes()
    }, [])

    return { notes, loading }

}