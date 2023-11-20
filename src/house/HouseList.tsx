import useFetchHouses from "../hooks/HouseHooks";
import { currencyFormatter } from "../config";
import ApiStatus from "../ApiStatus";


const HouseList = () => {
    const { data, status, isSuccess }= useFetchHouses();

    if(!isSuccess)
        return <ApiStatus status = {status} />

    return(
        <div>
            <div className="row mb-2">
                <h5 className = "themeFontColor text-center">
                    Houses currently on the market
                </h5>
            </div>
            <table className = "table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((house) => (
                        <tr key = {house.id}>
                            <td>{house.address}</td>
                            <td>{currencyFormatter.format(house.price)}</td>
                            <td>{house.description}</td>
                        </tr>
                    ))}
                </tbody>
           </table>
        </div>
    )

}

export default HouseList;