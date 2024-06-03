import {z} from 'zod';



const keys = ['city','email','firstname','lastname','lat','long','number','password','phone','street','username','zipcode']
function haveCommonItems(arr1, arr2) {
   return arr1.some(item => arr2.includes(item));
 }
const signupSchema = z.object({
             email: z
               .string({required_error: 'Name is required'})
               .email({message: 'Invalid email'})
               .trim(),
             password: z
                .string({required_error: 'Password is required'})
                .min(6, {message:  'password should have atleast 6 characters'}) 
                .max(32, {message: 'password should be less than 32 characters'})
                .trim(),
             username: z
                .string({required_error: 'Username is required'})
                .min(4, {message:  'username should have atleast 4 chars'}) 
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
             number:  z
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
        const formData = Object.fromEntries(await request.formData())
        try {
            const result = signupSchema.parse(formData);
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
   
               } = result
               
          const res = await fetch('https://fakestoreapi.com/users',{
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

            return { data: {type: 'success'}};

        } catch (error) {
         const hasZodError = haveCommonItems(keys, Object.keys(error))

         // if(!hasZodError){
         //    return {data: {type: 'error'}}
         // }

            const {fieldErrors: errors }  = error.flatten();
            const {  email,
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
                long,} = formData;

            return { data: { email,
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
                long,}, errors}
        }
	}
};