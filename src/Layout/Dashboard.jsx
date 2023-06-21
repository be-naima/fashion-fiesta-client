import { NavLink, Outlet } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";
import { GiWallet } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import { RiHomeWifiFill } from "react-icons/ri";
import useCart from "../hook/UseCart";
import useAdmin from "../hook/useAdmin";
import useInstructor from "../hook/useInstructor";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Dashboard = () => {
    const [cart] = useCart()
    //const isAdmin = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor()
    const { user } = useContext(AuthContext)
    console.log(user);

    const profilePhoto = [];
    const Name = []
    for (const i in user) {
        if (i == 'photoURL') { profilePhoto.push(user[i]) }
        if (i == 'displayName') { Name.push(user[i]) }
    }

    return (

        <div className="drawer lg:drawer-open ">
            <Helmet>
                <title>Fashion Fiesta | Dashboard</title>
            </Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden ">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                <ul className="menu p-4 w-80 h-full bg-blue-300 text-base-content">
                    {
                        isAdmin ? <> {/*Admin*/}


                            <li><NavLink to="/dashboard/manageclasses" className=" font-bold"><SiGoogleclassroom className="text-2xl"></SiGoogleclassroom> Manage Classes <span className=" ">

                            </span></NavLink></li>
                            <li><NavLink to="/dashboard/manageusers" className=" font-bold"><MdOutlineManageAccounts className="text-2xl"></MdOutlineManageAccounts> Manage Users</NavLink></li>

                        </> : isInstructor ? <> {/*instructor*/}

                            <li className=" font-bold"><NavLink to="/dashboard/addclass"><MdAddBox className="text-2xl"></MdAddBox> Add a Class</NavLink></li>
                            <li className=" font-bold"><NavLink to="/dashboard/myclasses"><SiGoogleclassroom className="text-2xl"></SiGoogleclassroom> My Classes <span className="  ">

                            </span></NavLink></li>


                        </> :

                            <>{/*student*/}

                                <div className="avatar mx-auto">
                                    <div className="w-20 rounded-full">
                                        <img src={profilePhoto[0]} />
                                        
                                    </div>
                                </div>
                                <h2 className="text-center my-4 font-bold text-blue-900 text-2xl">{Name[0]}</h2>
                                <li><NavLink to="/dashboard/studenthome"><RiHomeWifiFill className="text-2xl"></RiHomeWifiFill> Student Home  <span className=" font-bold text-sm border-0">

                                </span></NavLink></li>
                                <li><NavLink to="/dashboard/mycart"><SiGoogleclassroom className="text-2xl"></SiGoogleclassroom> My Selected Classes <span className=" font-bold text-sm border-0">

                                </span></NavLink></li>
                                <li><NavLink to="/dashboard/enrolled"><RiContactsBook2Fill className="text-2xl"></RiContactsBook2Fill> Enrolled Classes</NavLink></li>
                                <li><NavLink to="/dashboard/paymenthistory"><GiWallet className="text-2xl"></GiWallet> Payment History</NavLink></li>
                            </>
                    }

                    <div className="divider"></div>
                    <li className=" font-bold"><NavLink to="/"><IoHome className="text-2xl"></IoHome>  Home</NavLink></li>
                    <li className=" font-bold"><NavLink to="/classes"><SiGoogleclassroom className="text-2xl"></SiGoogleclassroom> Our All Classes</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;