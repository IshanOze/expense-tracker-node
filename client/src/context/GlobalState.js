import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

// Initial State
const initialState = {
    transactions: [],
    error: null,
    loading: true
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //actions

    async function getTransactions(){
        try{
            const res = await axios.get('/transactions')
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            })
        }catch(err){
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function deleteTransaction(id){
        try{
            await axios.delete(`/transactions/${id}`)
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            })
        }catch(err){
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }


    async function addTransaction(transaction){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try{
            const res = await axios.post('transaction', transaction, config)
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            })
        }catch(err){
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        getTransactions,
        error: state.error,
        loading: state.loading
    }}>
        {children}
    </GlobalContext.Provider>)
}