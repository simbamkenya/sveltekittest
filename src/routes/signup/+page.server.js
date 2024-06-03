import {z} from 'zod';

const signupSchema = z.object({
             email: z
               .string({required_error: 'Name is required'})
               .email({message: 'Invalid email'})
               .trim(),
             password: z
                .string({required_error: 'Password is required'})
                .min(6, {message:  'too short password'}) 
                .max(32, {message: 'password should be less than 32 characters'})
                .trim(),
             username: z
                .string({required_error: 'Username is required'})
                .min(2, {message:  'too short username'}) 
                .max(32, {message: 'username should be less than 32 characters'})
                .trim(),
             firstname: z
                .string({required_error: 'First Name is required'})
                .min(2, {message:  'too short name'}) 
                .max(32, {message: 'first name should be less than 32 characters'})
                .trim(),
             lastname: z
                .string({required_error: 'Last Name is required'})
                .min(2, {message:  'too short name'}) 
                .max(32, {message: 'first name should be less than 32 characters'})
                .trim(),
             phone:  z
                .string({required_error: 'Phone is required'})
                .trim(),
             city:  z
                .string({required_error: 'City is required'})
                .min(1, {message:  'city is required'}) 
                .max(32, {message: 'city should be less than 32 characters'})
                .trim(), 
             street:  z
                .string({required_error: 'Street is required'})
                .min(2, {message:  'too short street name'}) 
                .max(32, {message: 'street should be less than 32 characters'})
                .trim(),
             numberv:  z
                .string({required_error: 'Number is required'})
                .trim(), 
             zipcode:  z
                .string({required_error: 'Zip Code is required'})
                .min(2, {message:  'too short zipcode'}) 
                .max(32, {message: 'zipcode should be less than 32 characters'})
                .trim(),
             lat:  z
                .string({required_error: 'Latitude is required'})
                .trim(),
             long:  z
                .string({required_error: 'Longtitude Name is required'})
                .trim(),
})
export const actions = {
    signup: async ({ request, fetch }) => {
        const formData = await request.formData()
       
         const { 
             email,
             password,
             username,
             firstname,
             lastname,
             phone,
             city, 
             street,
             number, 
             zipcode,
             lat,
             long,

            } = Object.fromEntries(formData.entries());

        fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email,
                    username,
                    password,
                    name:{
                        firstname,
                        lastname
                    },
                    address:{
                        city,
                        street,
                        number,
                        zipcode,
                        geolocation:{
                            lat,
                            long
                        }
                    },
                    phone
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))


        return { data: {email,
             password,
             username,
             firstname,
             lastname,
             phone,
             city, 
             street,
             number, 
             zipcode,
             lat,
             long,}};
	}
};