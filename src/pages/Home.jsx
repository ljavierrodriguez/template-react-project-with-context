import React, { useContext } from 'react'
import { Context } from '../store/AppContext'

const Home = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-primary text-center">
                        Home
                    </h1>
                    <h3 className='text-warning'>{store.name}</h3>
                    <button onClick={actions.greeting}>Test Function</button>
                </div>
            </div>
        </div>
    )
}

export default Home