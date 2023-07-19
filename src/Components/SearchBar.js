import {React} from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import axios from "axios";


const SearchBar = ({cityName, setCityName, handleCityChange}) =>  {    
    const loadOptions = async (inputValue, loadedOptions) => {
        if(!inputValue){
            return {
                options: []
            }
        }
        const response = await axios.get(
            `http://localhost:4000/geo?city=${cityName}`
        );

        const options = response.data.map(city => ({
            value: city.name,
            label: `${city.name},${city.state},${city.country}`,
        }));

        return {
            options: options,
            hasMore: false, // Assuming we're not implementing pagination
            additional: {
                page: 1,
            },
        };
    };
    
      const handleInputChange = selectedOption => {
        setCityName(selectedOption)
      };

    return (
        <form>   
            <label class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <AsyncPaginate
                    debounceTimeout={300}
                    value={cityName}
                    loadOptions={loadOptions}
                    onInputChange={handleInputChange}
                    onChange={handleCityChange}
                    placeholder="Search for a city"
                />
            </div>
        </form>
    );
}

export default SearchBar
