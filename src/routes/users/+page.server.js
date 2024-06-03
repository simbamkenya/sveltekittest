export const load = async ({fetch}) => {
  try {
    const res = await fetch('https://fakestoreapi.com/users');
     
    if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`)
      }
        const users = await res.json();  
        
        return {users}
    } catch (error) {
        return { error: 'Unable to fetch users' } 
    }
}