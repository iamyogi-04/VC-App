import React, { useState } from 'react'

const Join = ({ handleSubmit }) => {
    const [userName, setuserName] = useState("")
    return (
        <>
            
                <div class="container fluid">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit(userName);
                        }}>
                        <label for="usernname" class="form-label">Enter Username</label>
                        <input
                            value={userName}
                            onChange={(e) => setuserName(e.target.value)}
                            type="username"
                            name='username'
                            required
                            class="form-control"
                            placeholder='username' />
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>

            
        </>
    )
}

export default Join