import React from 'react'
import { DriveContainer, Form, FormButton, FormContent, FormInput, FormLabel, FormWrap, Text, FormH1, Icon} from './driverElement'


const Drive = () => {
    return (
        <>
            <DriveContainer>
                <FormWrap>
                    <Icon to="/browseHome">Fast Rides</Icon>
                    <FormContent>
                        <Form action="#">
                                <FormH1>Make your trip</FormH1>
                                <FormLabel htmlFor='for'>Starting Point</FormLabel>
                                <FormInput type='Address' required/>
                                <FormLabel htmlFor='for'>Destination</FormLabel>
                                <FormInput type='Address' required/>
                                <FormLabel htmlFor='for'>Number of Seats</FormLabel>
                                <FormInput type='Number' required/>
                                <FormLabel htmlFor='for'>Car`s Registration Number</FormLabel>
                                <FormInput type='alpha-numeric' required/>
                                <FormButton type='submit'>Book Trip</FormButton>
                                <Text >Want a ride</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
                </DriveContainer>
        </>
    )
}

export default Drive
