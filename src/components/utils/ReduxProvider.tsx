'use client';

import { FC } from "react";
import store from "@/store/store";
import { Provider } from "react-redux";

interface ReduxProviderProps {
	children: React.ReactNode
};

export const ReduxProvider: FC<ReduxProviderProps> = ({ children }) => {
	return ( <Provider store={ store }>{ children }</Provider> )
}