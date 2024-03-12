 
 export async function getActivities(){
    const res = await fetch('https://c8cf-102-217-67-155.ngrok-free.app/api/v1/events/')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
 }