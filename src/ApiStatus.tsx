type Args = {
    status: "idle" | "loading" | "success" | "error";
};

const ApiStatus = ({status}: Args) => {
    switch(status) {
        case "idle":
            return <div> Error communicating with the data backend</div>
        case "loading":
            return <div>Loading...</div>
        case "success":
            return <div></div>
        case "error":
            return <div>Error</div>
        default:
            throw Error("Unknown API status");
    }
};

export default ApiStatus;