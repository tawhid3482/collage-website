import AuthHook from "../../../Hooks/AuthHook";

const AdminHome = () => {
    const {user} = AuthHook()
    return (
        <div>
            <h2 className="text-3xl my-2 font-bold">Hi,welcome <span>
                {
                    user ? user.displayName : 'back'
                }
                </span> </h2>
        </div>
    );
};

export default AdminHome;