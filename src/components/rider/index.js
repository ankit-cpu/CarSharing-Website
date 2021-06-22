import React from 'react'
import { RideContainer, Form, FormButton, FormContent, FormInput, FormLabel, FormWrap, Text, FormH1, Icon} from './riderElement'

const Ride = () => {
    return (
        <>
            <RideContainer>
              <FormWrap>
                  <Icon to="/browseHome">Fast Rides</Icon>
                  <FormContent>
                      <Form action="#">
                            <FormH1>Take a Trip</FormH1>
                            <FormLabel htmlFor='for'>Starting Point</FormLabel>
                            <FormInput type='address' required/>
                            <FormLabel htmlFor='for'>Destination</FormLabel>
                            <FormInput type='address' required/>
                            <FormLabel htmlFor='for'>Number Of Seats</FormLabel>
                            <FormInput type='number' required/>
                            <FormLabel htmlFor='for'>Date(DD/MM/YYYY)</FormLabel>
                            <FormInput type='date' required/>
                            <FormButton type='submit'>Find Rides</FormButton>
                      </Form>
                  </FormContent>
              </FormWrap>
          </RideContainer>
        </>
    )
}

export default Ride
