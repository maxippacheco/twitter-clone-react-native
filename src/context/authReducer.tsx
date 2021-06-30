import { AuthState } from "./AuthContext";

//lo mismo que types en redux
type AuthAction = 
	| { type: 'signIn', payload:{username:string, password: string} }
	| { type: 'logout' }


//GENERA UN NUEVO ESTADO
export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
	
	switch ( action.type ) {
		case 'signIn':
			return {
				...state,
				isLoggedIn: true,
				username: action.payload.username,
				password: action.payload.password
			}
	
		case 'logout':
			return {
				...state,
				isLoggedIn: false,
				username: undefined,
				password: undefined
			}

		default:
			return state;
	}
}