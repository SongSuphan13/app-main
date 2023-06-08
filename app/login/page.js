export const metadata = {
    title: process.env.APP_NAME+' :: Login'
}
export default function Home() {
    return (
        <>
            <section className="material-half-bg">
                <div className="cover"></div>
            </section>
            <section className="login-content">
                <div className="logo">
                    <h1>{process.env.APP_NAME}</h1>
                </div>
                <div className="login-box">
                    <form className="login-form" action="/setting/users">
                        <h3 className="login-head"><i className="fa fa-lg fa-fw fa-user"></i>SIGN IN</h3>
                        <div className="form-group">
                            <label className="control-label">USERNAME</label>
                            <input className="form-control" type="text" placeholder="Email" autofocus />
                        </div>
                        <div className="form-group">
                            <label className="control-label">PASSWORD</label>
                            <input className="form-control" type="password" placeholder="Password" />
                        </div>
                        <div className="form-group btn-container">
                            <button className="btn btn-primary btn-block"><i className="fa fa-sign-in fa-lg fa-fw"></i>SIGN IN</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
