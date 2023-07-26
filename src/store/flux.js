const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            name: 'Test Name'
        },
        actions: {
            greeting: () => {
                console.log("Test Function")
            }
        }
    }
}

export default getState;