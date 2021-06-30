import * as React from 'react';
import { useReducer } from "react";
import { createContext } from "react"
import { authReducer } from "./authReducer";

export interface AuthState{
	isLoggedIn:boolean;
	username?: string;
	password?: string;
}

export const authInitialState: AuthState = {
	isLoggedIn: false,
	username: undefined,
	password: undefined
}

export interface AuthContextProps{
	authState: AuthState;
	signIn: (username: string, password:string) => void;
	logout: () => void;
}

export const AuthContext = createContext( {} as AuthContextProps );

export const AuthProvider = ({children}: any) => {
	
	const [authState, dispatch] = useReducer(authReducer, authInitialState);

	const signIn = (username: string, password: string) => {
		dispatch({type:'signIn', payload:{username , password }})
	}

	const logout = () => {
		dispatch({type: 'logout'})
	}

	return(
	
		<AuthContext.Provider
			value={{
				authState,
				signIn,
				logout
			}}
		>
			{children}
		</AuthContext.Provider>
	);

}

