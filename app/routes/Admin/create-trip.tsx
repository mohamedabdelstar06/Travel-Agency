import Header from 'Components/Header';
import type { Route } from "./+types/all-users";
import { ComboBoxComponent } from "@syncfusion/ej2-react-dropdowns";
import { comboBoxItems, selectItems } from '~/constants';
import { formatKey } from '~/lib/utils';

export const loader = async () => {
    const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,latlng,flag,maps"
    );
    const data = await response.json();


    return data.map((country: any) => ({
        name: country.flag + " " + country.name.common,
        coordinates: country.latlng,
        value: country.name.common,
        openStreetMap: country.maps?.openStreetMaps,
    }))
};

const CreateTrip = ({ loaderData }: Route.ComponentProps) => {
    const handleSubmit = async () => { };
    const handleChange = (key: keyof TripFormData,
        value: string | number
    ) => { };
    const countries = loaderData as unknown as Country[];
    const countryData = countries.map((country) => ({

        text: country.name,
        value: country.value,
    }))


    return (
        <main className='flex flex-col gap-10 pb-20 wrapper'>
            <Header title='Add a new Trip' description="View and edit Ai Generated travel plans" />
            <section className='mt-2.5 wrapper-md' >
                <form className="trip-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='country'>Country</label>
                        <ComboBoxComponent
                            id="country"
                            dataSource={countryData}
                            fields={{ text: 'text', value: 'value' }}
                            placeholder='Select a country'
                            className='combo-box'
                            change={(e: { value: string | undefined }) => {
                                if (e.value) {
                                    handleChange('country', e.value)
                                }
                            }}
                            allowFiltering
                            filtering={(e) => {
                                const query = e.text.toLowerCase();
                                e.updateData(
                                    countries.filter((country) =>
                                        country.name.toLowerCase().includes(query)).map((country) => ({
                                            text: country.name,
                                            value: country.value,
                                        })
                                        )
                                )
                            }}
                        />
                    </div>

                    <div>
                        <label htmlFor="duration">Duration</label>
                        <input
                            id="duration"
                            name='duration'
                            type="number"
                            placeholder='Enter a number of days (5,12...)'
                            className='form-input placeholder:text-gray-100'
                            onChange={(e) => handleChange('duration', Number(e.target.value))}
                        />
                    </div>
                    {selectItems.map((key) => (
                        <div key={key}>
                            <label htmlFor={key}>{formatKey(key)}</label>
                            <ComboBoxComponent
                                id={key}
                                dataSource={comboBoxItems[key].map((item) => ({
                                    text: item,
                                    value: item
                                }))}
                                fields={{ text: 'text', value: 'value' }}
                                placeholder={`Select ${formatKey(key)}`}
                                                            change={(e: { value: string | undefined }) => {
                                if (e.value) {
                                    handleChange(key, e.value)
                                }
                            }}
                            allowFiltering
                            filtering={(e) => {
                                const query = e.text.toLowerCase();
                                e.updateData(
                                    comboBoxItems[key].filter((item) =>
                                        item.toLowerCase().includes(query)).map((item) => ({
                                            text: item,
                                            value: item,
                                        })
                                        )
                                )
                            }}

                            className='combo-box'
                            />
                        </div>

                    ))}
                </form>
            </section>
        </main>
    )
}

export default CreateTrip;
