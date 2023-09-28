import "./Welcome.css";

const Welcome = () => {
    return (
        <div className="page-container">
            <div className="outer-box">
                <div className="welcome-text">Welcome Back</div>
                <div className="sign-in-text">Sign in to continue</div>
                <div className="input-box">
                    <text className="inputLabel">EMAIL</text>
                    <input className="input" placeholder="thisisanemail@email.com"/>
                </div>
                <div className="input-box">
                    <text className="inputLabel">PASSWORD</text>
                    <input className="input" placeholder="Create Password"/>
                </div>
                <div className="account-text">Haven't activated your account yet? <a className="activate-link">Activate now</a></div>
            </div>
        </div>
    )
    
}

export default Welcome;