import Login from "./Login";

const LoginScreen = () => {
    return (
        <div className = "container">


            {/*<h1>This is Home</h1>*/}
            <div className="row mt-2">
                <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                    {/*<NavigationSidebar active="login"/>*/}
                </div>
                <div className="col-6 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
                    <Login/>
                </div>
                <div className="col-4 d-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
                    {/*<HomeComponent active ="for you"/>*/}
                    {/*<PostSummaryList title="Career Development Resources"/>*/}
                </div>

            </div>
        </div>
    );
};

export default LoginScreen;
