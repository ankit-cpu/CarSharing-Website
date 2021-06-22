import React from 'react'
import { Container, Form, FormButton, FormContent, FormInput, FormLabel, FormWrap, Text, FormH1, Icon} from './signupElement'
import {useHistory} from 'react-router-dom'



const SignUp = () => {
    const history = useHistory();
    return (
        <>
          <Container>
              <FormWrap>
                  <Icon to="/">Fast Rides</Icon>
                  <FormContent>
                      <Form action="#">
                            <FormH1>Create your account</FormH1>
                            <FormLabel htmlFor='for'>Username</FormLabel>
                            <FormInput type='username' required/>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required/>
                            <FormLabel htmlFor='for'>Phone No.</FormLabel>
                            <FormInput type='number' required/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required/>
                            <FormButton onClick={()=> history.push("./browseHome")} type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                      </Form>
                  </FormContent>
              </FormWrap>
          </Container>
        </>
    )
}

export default SignUp
