export const SESSION_KEY="mms_people_session";
export function hasSession(){return typeof window!=="undefined"&&localStorage.getItem(SESSION_KEY)==="admin"}
export function login(username:string,password:string){if(username==="admin"&&password==="admin123"){localStorage.setItem(SESSION_KEY,"admin");return true}return false}
export function logout(){localStorage.removeItem(SESSION_KEY)}
