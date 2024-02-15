import AuthHook from "../../../Hooks/AuthHook";

const AdminHome = () => {
    const {user} = AuthHook()
    return (
        <div>
            <h2 className="text-3xl font-bold">Hi,welcome back {user.displayName}</h2>
        </div>
    );
};

export default AdminHome;