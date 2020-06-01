export const createTodo = (todo) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();　
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('todos').add({
            ...todo,
            content: "test content",
            projectId: "XXXXXXXXXX"
        }).then(() => {
            dispatch({ type: 'CREATE_TODO', todo})
        }).catch((err) => {
            dispatch({ type: 'CREATE_TODO_ERROR', err })
        })

    }
};