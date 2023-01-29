import MainPage from "../components/article-components/MainPage";
import SideBar from "../components/article-components/SideBar";
import SlimNav from "../components/article-components/SlimNav"

export default function Article() {
    return (
        <>
            <SlimNav />
            <div className=" mt-4">
                <div className="row">
                    <div className="col-8 "><MainPage /></div>
                    <div className="col-4 "><SideBar /></div>
                </div>
            </div>

        </>
    );
}