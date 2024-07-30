import { useSelector } from "react-redux";

function CarValue() {
    const totalCost = useSelector(({ cars: {data, searchTerm} }) => {
        const filteredCars = data.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        //Here is a normal function for output the price :
        // let cost = 0;
        // for (let car of filteredCars) {
        //     cost += car.cost;
        // }
        // return cost;

        //Here is use reduce() function to output price :
        return filteredCars.reduce((acc, car) => acc + car.cost, 0)
    });

    return (
        <div className="car-value">
            Totol Cost: ${totalCost}
        </div>
    );
}

export default CarValue;