// import React, { Children, createContext, useContext, useState } from 'react'


// const AuthContext = createContext();

// export const useAuth = () => {
//     return useContext(AuthContext);
// }

// export const AuthProvider = ({ Children }) => {
//     const [user, setUser] = useState(null);

//     const login = (userData) => {
//         setUser(userData);
//     }

//     const logout = () => {
//         setUser(null);
//     }
//     return (
//         <AuthContext.Provider value={{ user, login, logout }}>
//             {Children}
//         </AuthContext.Provider>
//     );
// }