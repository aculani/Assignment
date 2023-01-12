import Cassie from "./Cassie"
import SocialMedia from "./SocialMedia"

export default function MainPage() {
    return (
        <>
            <div className="row">
                <div className="col-3">

                </div>
                <div className="col-7">
                    <div className="d-flex justify-content-between align-items-center bg-light main-article">
                        <div className="profile d-flex ">
                            <Cassie />
                            <div className="title">
                                <p>Cassie Kozyrkov</p>
                                <p>Dec 27, 2022 · 9 min read</p>
                            </div>
                        </div>
                        <div className="logos">
                            <SocialMedia />
                        </div>
                    </div>
                </div>
                <div className="col-2">

                </div>
            </div>
        </>




    )
}