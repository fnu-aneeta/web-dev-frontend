import NavigationSidebar from "../NavigationSidebar/index.js";
import ContactUsComponent from "./ContactUsComponent";

const ContactUsScreen = () => {
    return (
        <div className = "container">
            {/*<WhatsHappening/>*/}

            {/*<h1>This is Home</h1>*/}
            <div className="row mt-2">
                <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                    <NavigationSidebar active="contact"/>
                </div>
                <div className="col-10 col-sm-10 col-md-10 col-lg-9 col-xl-9 col-xxl-9">
                    <ContactUsComponent/>
                    {/*<EditProfileItem/>*/}
                    {/*<ExploreComponent/>*/}

                </div>
                {/*<div className="col-4 d-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">*/}
                {/*    /!*<HomeComponent active ="for you"/>*!/*/}
                {/*    /!*<PostSummaryList title="Career Development Resources"/>*!/*/}
                {/*</div>*/}

            </div>
        </div>
    );
};

export default ContactUsScreen;
